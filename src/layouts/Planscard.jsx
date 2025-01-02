import React from "react";
import { MdOutlineAttachMoney } from "react-icons/md";
import { AiFillCheckCircle } from "react-icons/ai";
import Button from "../layouts/Button";

const PlansCard = ({ title, price }) => {
  return (
    <div className="flex flex-col bg-[#222] w-full md:w-1/3 p-5 rounded-lg">
      <h2 className="font-semibold text-center">{title}</h2>

      <div className="flex flex-row justify-center items-center">
        <span className="inline-block">
          <MdOutlineAttachMoney size={22} />
        </span>
        <h3 className="font-semibold text-xl inline-block">{price}</h3>
      </div>

      <div className="flex flex-col items-center mt-5">
        <div className="flex flex-row items-center">
          <span className="inline-block mr-5">
            <AiFillCheckCircle size={22} />
          </span>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
        </div>
        <div className="flex flex-row items-center">
          <span className="inline-block mr-5">
            <AiFillCheckCircle size={22} />
          </span>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
        </div>
      </div>

      <div className="flex flex-row justify-center mt-4">
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
