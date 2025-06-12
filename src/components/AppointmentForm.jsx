import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';

const timeSlots = [
  '09:00 AM', '09:10 AM', '09:20 AM', '09:30 AM', '09:40 AM', '09:50 AM',
  '10:00 AM', '10:10 AM', '10:20 AM', '10:30 AM', '10:40 AM', '10:50 AM',
  '11:00 AM', '11:10 AM', '11:20 AM', '11:30 AM', '11:40 AM', '11:50 AM',
  '12:00 PM', '12:10 PM', '12:20 PM', '12:30 PM', '12:40 PM', '12:50 PM',
  '02:00 PM', '02:10 PM', '02:20 PM', '02:30 PM', '02:40 PM', '02:50 PM',
  '03:00 PM', '03:10 PM', '03:20 PM', '03:30 PM', '03:40 PM', '03:50 PM'
];

const AppointmentForm = ({ doctor, onClose }) => {
  const [date, setDate] = useState('');
  const [slot, setSlot] = useState('');
  const [consultType, setConsultType] = useState('');
  const [mobile, setMobile] = useState('');
  const [otpSent, setOtpSent] = useState(false);
  const [otp, setOtp] = useState('');
  const [disabledSlots, setDisabledSlots] = useState([]);
  const [dateWarning, setDateWarning] = useState('');
  const dateInputRef = useRef(null);
  const navigate = useNavigate();

  const unavailableDates = ['2025-06-15', '2025-06-20'];

  useEffect(() => {
    if (!date) return;

    const selectedDate = new Date(date);
    const today = new Date();
    const isToday = selectedDate.toDateString() === today.toDateString();

    if (isToday) {
      const now = today.getHours() * 60 + today.getMinutes();
      const disabled = timeSlots.filter((slot) => {
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
  }, [date]);

  const handleDateChange = (e) => {
    const selectedDate = e.target.value;
    const day = new Date(selectedDate).getDay();

    if (day === 0 || unavailableDates.includes(selectedDate)) {
      setDateWarning("Doctor is not available for the selected date. Please select any other date & proceed or call 0123456789 for assistance.");
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

    const isRegistered = Math.random() > 0.5;
    if (isRegistered) {
      alert('OTP Verified! Appointment booked.');
      onClose();
    } else {
      alert('Mobile not registered. Redirecting to register...');
      navigate('/register');
    }
  };

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
          Book Appointment with {doctor}
        </h2>

        <div className="space-y-4">
          {/* Date */}
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
              <p className="text-red-600 mt-2 text-sm font-medium">
                {dateWarning}
              </p>
            )}
          </div>

          {/* Time Slots */}
          <div>
            <label className="block mb-1 font-medium text-gray-700 dark:text-gray-300">Select Time</label>
            <div className="grid grid-cols-5 gap-2 max-h-[200px] overflow-y-auto">
              {timeSlots.map((t, i) => {
                const isDisabled = disabledSlots.includes(t);
                const isSelected = slot === t;

                return (
                  <button
                    key={i}
                    disabled={isDisabled}
                    onClick={() => setSlot(t)}
                    className={`text-xs px-2.5 py-1 rounded-full border font-regular tracking-wide
                        ${isSelected ? 'bg-red-500 text-white' : 'bg-white text-gray-800 dark:bg-gray-700 dark:text-white border-gray-500'}
                        ${isDisabled ? 'opacity-40 cursor-not-allowed' : 'hover:bg-gray-100 dark:hover:bg-gray-600'}
                        transition-all duration-150 ease-in-out text-center whitespace-nowrap`}
                  >
                    {t}
                  </button>
                );
              })}
            </div>
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

          {/* Mobile */}
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

          {/* OTP */}
          {!otpSent ? (
            <button
              onClick={handleSendOtp}
              className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 rounded-md"
            >
              Send OTP
            </button>
          ) : (
            <>
              <input
                type="text"
                value={otp}
                onChange={(e) => setOtp(e.target.value)}
                placeholder="Enter OTP"
                className="w-full px-4 py-2 border rounded-md dark:bg-gray-700 dark:border-gray-600 dark:text-white"
              />
              <button
                onClick={handleVerifyOtp}
                className="w-full mt-2 bg-green-600 hover:bg-green-700 text-white font-medium py-2 rounded-md"
              >
                Verify & Book
              </button>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default AppointmentForm;
