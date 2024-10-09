import React from 'react';
import arrow from '../../image/Vector.png'; // Assuming you have the arrow image in your assets folder
import { Link } from 'react-router-dom';

const steps = [
  { label: 'CART' },
  { label: 'GIFT' },
  { label: 'REVIEW' },
  { label: 'ADDRESS' },
  { label: 'PAYMENT' }
];

const CheckoutProgressBar = () => {
  return (
    <div className="flex items-center justify-between w-full max-w-2xl mx-auto my-2">
      {steps.map((step, index) => (
        <React.Fragment key={step.label}>
          <div className="flex items-center">
            <span className="text-xs font-medium">{step.label}</span>
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

const App = () => {
  return (
    <div className="min-h-screen bg-gray-100 py-10 px-6">
      <div className="max-w-4xl mx-auto bg-white p-6 shadow-md rounded-md">
        <div className="flex justify-between">
          <h1 className="text-xl mt-4 font-semibold pb-4">
            My <span className="text-blue-500">Orders</span><span className='text-xs'> (1 Items)</span>
          </h1>
          <CheckoutProgressBar />
        </div>

        {/* Order Card */}
        <div className="flex flex-col ml-20 md:flex-row items-start gap-6 border-t-2 border-gray-200">
          <img
            src="https://s3-alpha-sig.figma.com/img/ab8d/0d94/ae8c0b45f6ba56ecbd728c1311442153?Expires=1728864000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=e0WHxps4RWAq~IaJoZvpkr3tOsNpUB0xYAVUZ1a3m0vHhs3tACBpwGOgeyyEiUqeT84wbQ-CUBCHOwQ05MLqY5FMk8jPuCVDyvU1CDPzsNQ191L9b6OhzPoJ9Z0aFkwd7Dmc2ZXP5j6Q5O8HnmJ1pXPhCxKEWmclpnk5Pzr94tEcvhjqHVsSWf4d5-qgfVReSwHI9icSr32LH0kDo3hHMV4Kjrhtcsd9q2XUWlPILD41XZekG7FRn9Dl70YR~yCUv6gKVF7Iki4XQzRTUqnMb3YAagfjeuVwIy7hQj8YpB-sRFZ5KpC9ZxTWLNJaabVydLQT-3vp7qd77aHxeaWj3w__"
            alt="Product Image"
            className="w-40 h-40 object-cover rounded-md mt-3"
          />
          <div className="flex-1 mt-3">
            <h2 className="text-lg font-bold">Womens Black T-Shirt</h2>
            <p className="text-gray-600">Brand Name</p>
            <p className="text-lg text-gray-800 font-semibold">Rs 699</p>
            <p className="text-gray-600">Order Placed on: 3 October 2020</p>
            <p className="text-gray-600">Ship To: Anna Kathy</p>
          </div>
        </div>

        {/* Price Details and Button */}
        <div className="mt-10 flex flex-col lg:flex-row justify-between items-start gap-2">
          {/* Left section */}
          <div className="relative bg-pink-300 p-6 rounded-full w-full lg:w-1/2 text-black text-center mt-28">
            <p className="font-medium">
              We are excited to have you as a customer, As a token of our appreciation, we would like to offer you gifts.
              Kindly click here to choose your gift on the next page.
            </p>

            {/* Arrow image */}
            <img src={arrow} alt="Arrow" className="absolute -bottom-20 left-32 w-36 h-10 " />
          </div>

          {/* Right section - Price details */}
          <div className="bg-gray-100 p-6 rounded-md w-full lg:w-1/2">
            <h2 className="text-xl font-semibold mb-4">PRICE DETAILS (2 Items)</h2>
            <div className="space-y-2">
              <div className="flex justify-between">
                <p>Total MRP</p>
                <p>₹ 999</p>
              </div>
              <div className="flex justify-between">
                <p>Discount on MRP</p>
                <p className="text-green-500">- ₹ 1,890</p>
              </div>
              <div className="flex justify-between">
                <p>Coupon Discount</p>
                <p className="text-red-500">Apply Coupon</p>
              </div>
              <div className="flex justify-between">
                <p>Platform Fee <span className='text-rose-500'>Know more</span></p>
                <p className="text-green-500">FREE</p>
              </div>
              <div className="flex justify-between">
                <p>Shipping Fee <span className='text-rose-500'>Know more</span></p>
                <p className="text-green-500">FREE</p>
              </div>
              <div>
                <p className='text-gray-400'>Free shipping for you</p>
              </div>
            </div>
            <div className="mt-6 flex justify-between font-semibold border-t-2 border-gray-400">
              <p>Total Amount</p>
              <p>₹ 999</p>
            </div>

            <div className="mt-4">
              <button className="bg-rose-500 hover:bg-rose-600 text-white py-3 px-8 rounded-full w-full">
               <Link to={'/gift'}> Select Your Free Gift</Link>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;