import React, { useState } from 'react';

// AddressForm Component
const AddressForm = () => {
  const [form, setForm] = useState({
    name: '',
    mobile: '',
    pincode: '',
    address: '',
    location: '',
    city: '',
    state: '',
    addressType: 'Home',
    defaultAddress: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setForm({
      ...form,
      [name]: type === 'checkbox' ? checked : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(form); // Here you would handle form submission logic
  };

  return (
    <form onSubmit={handleSubmit} className="p-3 border-2 border-gray-900 rounded-lg shadow-lg max-w-md">
      <h2 className="text-lg font-semibold ">Contact Details</h2>
      
      {/* Name Input */}
      <div className="mb-3">
        {/* <label className="block text-sm font-medium">Name*</label> */}
        <input
          type="text"
          name="name"
          placeholder='Name*'
          value={form.name}
          onChange={handleChange}
          className="w-full border-1 border-black rounded p-2 mt-1"
          required
        />
      </div>
      
      {/* Mobile Input */}
      <div className="mb-3">
        {/* <label className="block text-sm font-medium">Mobile No*</label> */}
        <input
          type="text"
          name="mobile"
          placeholder='Mobile No*'
          value={form.mobile}
          onChange={handleChange}
          className="w-full border-1 border-black  rounded p-2 mt-1"
          required
        />
      </div>
      
      {/* Address Inputs */}
      <h2 className="text-lg font-semibold mb-3">Address</h2>

      <div className="mb-3">
        {/* <label className="block text-sm font-medium">Pin Code*</label> */}
        <input
          type="text"
          name="pincode"
          placeholder='Pin Code*'
          value={form.pincode}
          onChange={handleChange}
          className="w-full border-1 border-black  rounded p-2 mt-1"
          required
        />
      </div>

      <div className="mb-3">
        {/* <label className="block text-sm font-medium">Address*</label> */}
        <input
          type="text"
          name="address"
          placeholder='Address*'
          value={form.address}
          onChange={handleChange}
          className="w-full border-1 border-black  rounded p-2 mt-1"
          required
        />
      </div>

      <div className="mb-3">
        {/* <label className="block text-sm font-medium">Location / Town</label> */}
        <input
          type="text"
          name="location"
          placeholder='Location / Town'
          value={form.location}
          onChange={handleChange}
          className="w-full border-1 border-black  rounded p-2 mt-1"
        />
      </div>

      <div className="flex space-x-2">
        <div className="mb-3 flex-1">
          {/* <label className="block text-sm font-medium">City / District*</label> */}
          <input
            type="text"
            name="city"
            placeholder='City / District*'
            value={form.city}
            onChange={handleChange}
            className="w-full border-1 border-black  rounded p-2 mt-1"
            required
          />
        </div>

        <div className="mb-3 flex-1">
          {/* <label className="block text-sm font-medium">State*</label> */}
          <input
            type="text"
            name="state"
            placeholder='State*'
            value={form.state}
            onChange={handleChange}
            className="w-full border-1 border-black  rounded p-2 mt-1"
            required
          />
        </div>
      </div>

      {/* Save Address As */}
      <h2 className="text-lg font-semibold mb-3">Save Address As</h2>
      <div className="flex items-center space-x-4 mb-3">
        <button
          type="button"
          onClick={() => setForm({ ...form, addressType: 'Home' })}
          className={`px-4 py-2 rounded-full ${form.addressType === 'Home' ? 'border-2 border-red-500 text-red-500' : 'border'} `}
        >
          Home
        </button>
        <button
          type="button"
          onClick={() => setForm({ ...form, addressType: 'Work' })}
          className={`px-4 py-2 rounded-full ${form.addressType === 'Work' ? 'border-2 border-red-500 text-red-500' : 'border'} `}
        >
          Work
        </button>
      </div>

      <div className="flex items-center mb-3">
        <input
          type="checkbox"
          name="defaultAddress"
          checked={form.defaultAddress}
          onChange={handleChange}
          className="mr-2"
        />
        <label className="text-sm">Make this my default address</label>
      </div>

      <button type="submit" className="w-full bg-red-500 text-white py-2 rounded">
        Add Address
      </button>
    </form>
  );
};

// PriceDetails Component
const PriceDetails = () => {
  return (
    <div className="p-8 rounded-lg shadow-lg lg:w-1/2 h-96 mt-40 border-2 border-gray-900">
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

    
  </div>
  );
};

// App Component
function App() {
  return (
    <div className="flex justify-center space-x-10 p-8">
      <AddressForm />
      <PriceDetails />
    </div>
  );
}

export default App;