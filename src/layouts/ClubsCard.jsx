import React from "react";
import { FaMapMarkerAlt } from "react-icons/fa";
import { AiFillCheckCircle } from "react-icons/ai";
import Button from "../layouts/Button"; // Ensure the correct path

const ClubsCard = (props) => {
  return (
    <div className="flex flex-col bg-[#333] w-full p-5 rounded-lg box-border">
      <img
        src={props.image}
        alt={props.name}
        className="w-full h-48 object-cover rounded-lg"
      />

      <h2 className="font-semibold text-center text-white mt-3">{props.name}</h2>

      <div className="flex flex-col items-center mt-3">
        <p className="text-center text-white">{props.description}</p>
      </div>

      <div className="flex flex-row justify-center items-center mt-3">
        <span className="inline-block">
          <FaMapMarkerAlt size={20} className="text-white" />
        </span>
        <h3 className="font-semibold text-lg inline-block text-white ml-2">
          {props.location}
        </h3>
      </div>

      <div className="flex flex-col mt-5">
        {props.features.map((feature, index) => (
          <div key={index} className="flex flex-row items-center mt-2">
            <span className="inline-block mr-3">
              <AiFillCheckCircle size={22} className="text-white" />
            </span>
            <p className="text-white">{feature}</p>
          </div>
        ))}
      </div>

      <div className="flex flex-row justify-center mt-4">
        <Button title="View Details" link="/club-details"/>
      </div>
    </div>
  );
};

export default ClubsCard;
