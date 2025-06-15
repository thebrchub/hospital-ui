import React, { useState, useEffect, useRef } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { toast } from 'react-toastify';
import StripeCheckoutButton from './StripeCheckoutButton';

function formatTimeToSlot(timeStr) {
  const [h, m] = timeStr.split(':').map(Number);
  const suffix = h >= 12 ? 'PM' : 'AM';
  const hour = h % 12 === 0 ? 12 : h % 12;
  return `${hour.toString().padStart(2, '0')}:${m.toString().padStart(2, '0')} ${suffix}`;
}

const AppointmentForm = ({ doctor, onClose }) => {
  const [date, setDate] = useState('');
  const [slot, setSlot] = useState('');
  const [consultType, setConsultType] = useState('');
  const [mobile, setMobile] = useState('');
  const [otpSent, setOtpSent] = useState(false);
  const [otp, setOtp] = useState('');
  const [disabledSlots, setDisabledSlots] = useState([]);
  const [availableSlots, setAvailableSlots] = useState([]);
  const [loadingSlots, setLoadingSlots] = useState(false);
  const [dateWarning, setDateWarning] = useState('');
  const dateInputRef = useRef(null);

  const navigate = useNavigate();
  const location = useLocation();

  const unavailableDates = [];

  useEffect(() => {
    const saved = location.state || JSON.parse(localStorage.getItem('pendingAppointment'));
    if (saved) {
      setDate(saved.date || '');
      setSlot(saved.slot || '');
      setConsultType(saved.consultType || '');
      setMobile(saved.mobile || '');
      localStorage.removeItem('pendingAppointment');
    }
  }, [location.state]);

  useEffect(() => {
    if (!date) return;

    const selectedDate = new Date(date);
    const today = new Date();
    const isToday = selectedDate.toDateString() === today.toDateString();

    if (isToday) {
      const now = today.getHours() * 60 + today.getMinutes();
      const disabled = availableSlots
        .map(s => s.formattedTime)
        .filter((slot) => {
          const [time, modifier] = slot.split(' ');
          let [hours, minutes] = time.split(':').map(Number);
          if (modifier === 'PM' && hours !== 12) hours += 12;
          const totalMinutes = hours * 60 + minutes;
          return totalMinutes <= now;
        });
      setDisabledSlots(disabled);
    } else {
      setDisabledSlots([]);
    }
  }, [date, availableSlots]);

  useEffect(() => {
    if (!date || !doctor?.id) return;

    const fetchSlots = async () => {
      try {
        setLoadingSlots(true);
        const response = await fetch(`https://hospital-app-deploy.onrender.com/v1/public/slots/${doctor.id}?date=${date}&available=false`);
        const data = await response.json();

        const formatted = data
          .map(slot => ({
            id: slot.id,
            formattedTime: formatTimeToSlot(slot.startTime),
            startTime: slot.startTime,
            status: slot.status
          }))
          .sort((a, b) => new Date(`1970-01-01T${a.startTime}`) - new Date(`1970-01-01T${b.startTime}`));

        setAvailableSlots(formatted);
        if (formatted.length === 0) {
          toast.info("No slots available for this date.");
        }
      } catch (error) {
        toast.error("Failed to fetch slots. Please try again.");
      } finally {
        setLoadingSlots(false);
      }
    };

    fetchSlots();
  }, [date, doctor]);

  const handleDateChange = (e) => {
    const selectedDate = e.target.value;
    const day = new Date(selectedDate).getDay();

    if (day === 0 || unavailableDates.includes(selectedDate)) {
      setDateWarning("Doctor is not available for the selected date. Please select another date or call 0123456789 for help.");
      setDate('');
    } else {
      setDateWarning('');
      setDate(selectedDate);
    }
  };

  const handleSendOtp = () => {
    if (mobile.length === 10) {
      setOtpSent(true);
    } else {
      alert('Enter valid 10-digit mobile number');
    }
  };

  const handleVerifyOtp = () => {
    if (!date || !slot || !consultType || !mobile || !otp) {
      alert('Please fill all the fields and OTP before proceeding');
      return;
    }

    const isLoggedIn = !!localStorage.getItem("authToken");

    if (!isLoggedIn) {
      const formState = { doctor, date, slot, consultType, mobile };
      localStorage.setItem("pendingAppointment", JSON.stringify(formState));
      navigate('/login');
      return;
    }

    const isRegistered = Math.random() > 0.5;
    if (isRegistered) {
      alert('OTP Verified! Appointment booked.');
      onClose();
    } else {
      alert('Mobile not registered. Redirecting to register...');
      navigate('/register');
    }
  };

  const selectedSlotId = availableSlots.find(s => s.formattedTime === slot)?.id;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center">
      <div className="bg-white dark:bg-gray-800 rounded-xl p-8 max-w-lg w-full shadow-lg relative">
        <button
          onClick={onClose}
          className="absolute top-2 right-3 text-gray-500 hover:text-gray-700 dark:text-gray-300"
        >
          ✕
        </button>

        <h2 className="text-xl font-bold mb-6 text-gray-800 dark:text-white">
          Book Appointment with {doctor?.name || 'Doctor'}
        </h2>

        <div className="space-y-4">
          {/* Date Picker */}
          <div>
            <label className="block mb-1 font-medium text-gray-700 dark:text-gray-300">Select Date</label>
            <input
              type="date"
              value={date}
              onChange={handleDateChange}
              onClick={() => dateInputRef.current?.showPicker?.()}
              ref={dateInputRef}
              min={new Date().toISOString().split("T")[0]}
              className="w-full px-4 py-2 border rounded-md dark:bg-gray-700 dark:border-gray-600 dark:text-white text-gray-900"
            />
            {dateWarning && (
              <p className="text-red-600 mt-2 text-sm font-medium">{dateWarning}</p>
            )}
          </div>

          {/* Time Slots */}
          <div>
            <label className="block mb-1 font-medium text-gray-700 dark:text-gray-300">Select Time</label>
            {loadingSlots ? (
              <div className="flex justify-center py-4">
                <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-red-500"></div>
              </div>
            ) : (
              <div className="grid grid-cols-5 gap-2 max-h-[200px] overflow-y-auto">
                {availableSlots.map((s, i) => {
                  const isDisabled = disabledSlots.includes(s.formattedTime) || s.status === "BOOKED";
                  const isSelected = slot === s.formattedTime;

                  return (
                    <button
                      key={i}
                      disabled={isDisabled}
                      onClick={() => setSlot(s.formattedTime)}
                      className={`text-xs px-2.5 py-1 rounded-full border font-regular tracking-wide
                        ${isSelected ? 'bg-red-500 text-white' : 'bg-white text-gray-800 dark:bg-gray-700 dark:text-white border-gray-500'}
                        ${isDisabled ? 'opacity-40 cursor-not-allowed' : 'hover:bg-gray-100 dark:hover:bg-gray-600'}
                        transition-all duration-150 ease-in-out text-center whitespace-nowrap`}
                    >
                      {s.formattedTime}
                    </button>
                  );
                })}
              </div>
            )}
          </div>

          {/* Consult Type */}
          <div>
            <label className="block mb-1 font-regular text-gray-700 dark:text-gray-300">Consult Type</label>
            <select
              value={consultType}
              onChange={(e) => setConsultType(e.target.value)}
              className="w-full px-4 py-2 border rounded-md dark:bg-gray-700 dark:border-gray-600 dark:text-white"
            >
              <option value="">-- Select Type --</option>
              <option>At Hospital</option>
              <option>Online</option>
            </select>
          </div>

          {/* Mobile Number */}
          <div>
            <label className="block mb-1 font-medium text-gray-700 dark:text-gray-300">Mobile Number</label>
            <input
              type="tel"
              value={mobile}
              onChange={(e) => setMobile(e.target.value)}
              placeholder="Enter 10-digit mobile"
              className="w-full px-4 py-2 border rounded-md dark:bg-gray-700 dark:border-gray-600 dark:text-white"
            />
          </div>

          {/* Stripe Payment Button */}
          {date && slot && consultType && mobile && selectedSlotId ? (
            <StripeCheckoutButton
              slotId={selectedSlotId}
              token={localStorage.getItem('authToken')}
            />
          ) : (
            <button
              disabled
              className="w-full bg-gray-400 text-white font-medium py-2 rounded-md cursor-not-allowed"
            >
              Fill all fields to proceed
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default AppointmentForm;
