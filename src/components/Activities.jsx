// src/components/Activities.jsx
import React from "react";
import ActivitiesCard from "../layouts/ActivitiesCard";
import img1 from "../assets/images/Yoga/y.jpg"; 
import img2 from "../assets/images/Box/b.jpg";
import img3 from "../assets/images/Sports/s.jpg"; 
import img4 from "../assets/images/Danse/d.jpg"; 

const activitiesData = [
  {
    name: "Yoga",
    description: "Relax and rejuvenate with our expert-led yoga classes.",
    image: img1,
  },
  {
    name: "Boxing",
    description: "High-energy boxing classes to boost your fitness.",
    image: img2,
  },
  {
    name: "Sports",
    description: "Intense Sports sessions to build strength and endurance.",
    image: img3,
  },
  {
    name: "Zumba",
    description: "Fun and energetic Zumba classes to your way to fitness.",
    image: img4,
  },
];

const Activities = () => {
  return (
    <div id="activities" className="min-h-screen flex flex-col justify-center items-center md:px-32 px-5">
      <h1 className="text-5xl font-semibold text-center mt-10">Our Activities</h1>
      <p className="text-center text-lg mt-5 md:w-2/3">
        Explore a wide range of activities designed to suit all fitness levels and interests.
        Whether you're looking to relax, dance, or push your limits, we have something for everyone.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-10">
        {activitiesData.map((activity, index) => (
          <ActivitiesCard
            key={index}
            name={activity.name}
            description={activity.description}
            image={activity.image}
          />
        ))}
      </div>
    </div>
  );
};

export default Activities;
