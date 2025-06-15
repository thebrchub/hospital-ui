import React from 'react';
import { loadStripe } from '@stripe/stripe-js';

const stripePromise = loadStripe('pk_test_51RYL9g2McuOU4O1mg1fA1svGDsq8dq9L4fawSEyYmtyjAplapEszEUog4EIqKrMN1NtTzsjyVbxlgZ4GYHfmufU700hmaILrWt');

const StripeCheckoutButton = ({ slotId, token }) => {
  const handlePayment = async (e) => {
    e.preventDefault();

    const stripe = await stripePromise;

    try {
      const res = await fetch('https://hospital-app-deploy.onrender.com/v1/pay/checkout', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify({
          productId: slotId,       // ✅ Automatically passed
          paymentMode: 'ONLINE'    // ✅ Fixed for now
        })
      });

      if (!res.ok) throw new Error('Checkout failed');

      const data = await res.json();
      stripe.redirectToCheckout({ sessionId: data.id });
    } catch (err) {
      console.error('Payment error:', err);
      alert('Something went wrong. Please try again.');
    }
  };

  return (
    <form onSubmit={handlePayment} className="mt-4">
      <button
        type="submit"
        className="bg-green-600 hover:bg-green-700 text-white font-semibold px-4 py-2 rounded"
      >
        Pay Now
      </button>
    </form>
  );
};

export default StripeCheckoutButton;

