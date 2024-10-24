// src/components/ActivityLanding.jsx
import React from 'react';

const ActivityLanding = () => {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center md:px-32 px-5">
      <h1 className="text-5xl font-semibold text-center mt-10">Activity Details</h1>
      <p className="text-center text-lg mt-5 md:w-2/3">
        Here you can find the detailed information about our gym activities.
      </p>
      {/* Add more detailed information about the activities here */}
    </div>
  );
};

export default ActivityLanding;
