import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";

const BuyPlan = () => {
  const location = useLocation();
  const { planName, price } = location.state || {
    planName: "Default Plan",
    price: "0",
  };

  // Scroll to the top of the page when the component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <section className="bg-black min-h-screen px-4 md:px-16 lg:px-32 pt-32">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-10">
          <h1 className="text-4xl md:text-5xl font-extrabold text-white leading-tight">
            Buy {planName}
          </h1>
          <p className="text-xl font-semibold text-white mt-4">
            Plan Price: €{price}
          </p>
          <div className="h-1 w-20 bg-brightRed mx-auto mt-3"></div>
        </div>

        {/* Form Section */}
        <div className="bg-[#333] p-8 rounded-lg shadow-lg max-w-lg mx-auto">
          <h3 className="text-2xl font-semibold text-white mb-5">
            Complete Your Purchase
          </h3>
          <form>
            <div className="mb-4">
              <label
                className="block text-white text-sm font-bold mb-2"
                htmlFor="name"
              >
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
              <label
                className="block text-white text-sm font-bold mb-2"
                htmlFor="email"
              >
                Email
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-black leading-tight focus:outline-none focus:shadow-outline"
                id="email"
                type="email"
                placeholder="Your email"
              />
            </div>
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full"
              type="submit"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default BuyPlan;
