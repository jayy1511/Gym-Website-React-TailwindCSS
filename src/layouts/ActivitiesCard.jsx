import React from 'react';
import Button from '../layouts/Button'; // Use your Button component

const ActivitiesCard = ({ name, description, image }) => {
  return (
    <div className="flex flex-col bg-[#333] w-full p-5 rounded-lg box-border">
      <img
        src={image}
        alt={name}
        className="w-full h-48 object-cover rounded-lg"
      />
      <h2 className="font-semibold text-center text-white mt-3">{name}</h2>
      <div className="flex flex-col items-center mt-3">
        <p className="text-center text-white">{description}</p>
      </div>
      <div className="flex flex-row justify-center mt-4">
        <Button title="Learn More" link="landing/activity" />
      </div>
    </div>
  );
};

export default ActivitiesCard;
