import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Button from "../layouts/Button"; // Assuming you have the Button component in layouts
import img1 from "../assets/images/Yoga/y.jpg"; 
import img2 from "../assets/images/Box/b.jpg";
import img3 from "../assets/images/Sports/s.jpg"; 
import img4 from "../assets/images/Danse/d.jpg";

const activities = [
  {
    name: "Yoga",
    description:
      "Discover how yoga can enhance your physical and mental well-being. Suitable for all levels, it helps reduce stress, improve flexibility, and strengthen the mind.",
    image: img1,
    price: 20, // Price for the activity
  },
  {
    name: "Boxing",
    description:
      "Boxing is perfect for building endurance, improving fitness, and learning self-defense techniques. An engaging experience for all levels.",
    image: img2,
    price: 20,
  },
  {
    name: "Sports",
    description:
      "Our sports sessions are designed to improve strength, endurance, and general skills. Ideal for those looking for an energetic and motivating workout.",
    image: img3,
    price: 20,
  },
  {
    name: "Zumba",
    description:
      "Dance and have fun while burning calories with our Zumba classes. Perfect for improving your fitness while enjoying yourself.",
    image: img4,
    price: 20,
  },
];

const ActivityLanding = () => {
  const navigate = useNavigate();

  // Ensure the page scrolls to the top when this component renders
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleEnroll = (activity) => {
    navigate("/landing/buy-plan", {
      state: { planName: activity.name, price: activity.price },
    });
  };

  return (
    <section className="bg-black min-h-screen px-4 md:px-16 lg:px-32 pt-32">
      <div className="max-w-7xl mx-auto">
        {/* Main Heading Section */}
        <div className="text-center mb-10">
          <h1 className="text-4xl md:text-5xl font-extrabold text-white leading-tight">
            FITNESS ACTIVITIES
          </h1>
          <p className="text-xl font-semibold text-white mt-4">
            DISCOVER OUR FITNESS ACTIVITIES
          </p>
          <div className="h-1 w-20 bg-brightRed mx-auto mt-3"></div>
        </div>

        {/* Individual Activity Sections */}
        {activities.map((activity, index) => (
          <div
            key={index}
            className={`grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16 ${
              index % 2 === 1 ? "lg:flex-row-reverse" : ""
            }`}
          >
            {/* Text Content */}
            <div className="text-white flex flex-col justify-center">
              <h2 className="text-3xl font-bold mb-4">
                ABOUT {activity.name.toUpperCase()}
              </h2>
              <p className="text-lg leading-relaxed mb-4">{activity.description}</p>
              <Button
                title="Enroll Now"
                link="landing/buy-plan"
                state={{ planName: activity.name, price: activity.price }}
              />
            </div>

            {/* Image Section */}
            <div className="flex justify-center">
              <img
                src={activity.image}
                alt={activity.name}
                className="w-full h-auto rounded-lg shadow-md"
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ActivityLanding;
