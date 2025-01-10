import React from "react";
import PlansCard from "../layouts/Planscard";

const Plans = () => {
  const plans = [
    {
      title: "CLASSIC MONTHLY",
      price: "30",
      features: [
        "Access to gym equipment",
        "Group classes included",
        "Locker room access",
      ],
    },
    {
      title: "ACCESS MONTHLY",
      price: "45",
      features: [
        "Classic plan benefits",
        "Access to swimming pool",
        "Free personal trainer session",
      ],
    },
    {
      title: "ULTIMATE MONTHLY",
      price: "50",
      features: [
        "Access & Classic plan benefits",
        "Unlimited personal training sessions",
        "Priority class booking",
      ],
    },
  ];

  return (
    <div id="Plans" className="min-h-screen flex flex-col justify-center items-center md:px-32 px-5">
      <h1 className="text-3xl font-semibold text-center text-white">Gym Membership</h1>

      <div className="flex flex-col md:flex-row justify-center mt-10 gap-8">
        {plans.map((plan, index) => (
          <PlansCard
            key={index}
            title={plan.title}
            price={plan.price}
            features={plan.features}
          />
        ))}
      </div>
    </div>
  );
};

export default Plans;
