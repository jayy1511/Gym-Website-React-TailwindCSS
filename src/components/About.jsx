import React from "react";
import img from "../assets/images/about.png";

const About = () => {
  return (
    <div className="min-h-screen flex flex-col md:flex-row items-center md:mx-32 mx-5">
      {/* Text Section */}
      <div>
        <h1 className="text-5xl font-semibold text-center md:text-start mt-14 md:mt-0">
          About Us
        </h1>

        <div className="w-full md:w-3/4 space-y-5 mt-4">
          <p>
            Welcome to FitZone, where we believe fitness is not just about
            achieving your physical goals but also about fostering a lifestyle
            of balance, health, and happiness. At FitZone, we provide a wide
            range of fitness activities tailored to suit all skill levels,
            ensuring an inclusive environment for everyone.
          </p>

          <p>
            From yoga and Zumba to boxing and high-energy sports sessions, our
            expert trainers and state-of-the-art facilities are designed to
            help you unlock your full potential. We aim to inspire you to take
            charge of your health and well-being while offering you a supportive
            community that motivates and uplifts you every step of the way.
          </p>

          <p>
            Join us in this journey toward a healthier, stronger, and more
            vibrant version of yourself. Your fitness journey starts here, at
            FitZone!
          </p>
        </div>
      </div>

      {/* Image Section */}
      <div>
        <img src={img} alt="About Us" />
      </div>
    </div>
  );
};

export default About;
