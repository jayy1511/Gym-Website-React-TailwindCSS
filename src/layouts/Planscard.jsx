import React from "react";
import { MdOutlineAttachMoney } from "react-icons/md";
import { AiFillCheckCircle } from "react-icons/ai";
import Button from "../layouts/Button";

const PlansCard = ({ title, price, features }) => {
  return (
    <div className="flex flex-col bg-[#222] w-full md:w-1/3 p-6 rounded-lg shadow-lg">
      <h2 className="font-semibold text-center text-white text-lg">{title}</h2>

      <div className="flex flex-row justify-center items-center mt-4 text-white">
        <span className="inline-block">
          <MdOutlineAttachMoney size={22} />
        </span>
        <h3 className="font-bold text-xl inline-block">${price}</h3>
      </div>

      <div className="mt-6 space-y-3">
        {features.map((feature, index) => (
          <div key={index} className="flex flex-row items-center">
            <span className="inline-block mr-3 text-brightRed">
              <AiFillCheckCircle size={18} />
            </span>
            <p className="text-sm text-white">{feature}</p>
          </div>
        ))}
      </div>

      <div className="flex justify-center mt-8">
        <Button
          title="Buy Plan"
          link="landing/buy-plan"
          state={{ planName: title, price }}
        />
      </div>
    </div>
  );
};

export default PlansCard;
