// src/components/CheckoutProgressBar.jsx
import React from 'react';

const steps = [
  { label: 'CART' },
  { label: 'GIFT'},
  { label: 'REVIEW'},
  { label: 'ADDRESS'},
  { label: 'PAYMENT'}
];

const CheckoutProgressBar = () => {
  return (
    <div className="flex items-center justify-between w-full max-w-2xl mx-auto my-2">
      {steps.map((step, index) => (
        <React.Fragment key={step.label}>
          <div className="flex items-center">
            
            <span className=" text-xs font-medium">{step.label}</span>
          </div>
          {index < steps.length - 1 && (
            <div className="flex-1 border-t-2 mx-4"
                 style={{ borderColor: step.done ? '#22c55e' : '#d1d5db' }}>
            </div>
          )}
        </React.Fragment>
      ))}
      <button className="ml-5 px-2 py-1 bg-gray-700 text-white rounded">
        Continue Shopping
      </button>
    </div>
  );
};

export default CheckoutProgressBar;
