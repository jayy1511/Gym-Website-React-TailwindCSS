// src/landing pages/BuyPlan.jsx
import React from 'react';

const BuyPlan = () => {
  return (
    <div className="flex flex-col items-center bg-[#222] text-white p-10 rounded-lg">
      <h1 className="text-3xl font-bold mb-5">Buy Plan</h1>
      <p className="text-lg mb-5">
        Thank you for choosing to buy our plan. Please provide your details to proceed.
      </p>
      <form className="w-full max-w-lg">
        <div className="mb-4">
          <label className="block text-white text-sm font-bold mb-2" htmlFor="name">
            Name
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-black leading-tight focus:outline-none focus:shadow-outline"
            id="name"
            type="text"
            placeholder="Your name"
          />
        </div>
        <div className="mb-4">
          <label className="block text-white text-sm font-bold mb-2" htmlFor="email">
            Email
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-black leading-tight focus:outline-none focus:shadow-outline"
            id="email"
            type="email"
            placeholder="Your email"
          />
        </div>
        <div className="flex items-center justify-between">
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="button"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default BuyPlan;
