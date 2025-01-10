import React, { useEffect } from "react";
import img1 from "../assets/images/Clubs/club-7.jpg";
import img2 from "../assets/images/Clubs/la defense.jpg";
import img3 from "../assets/images/Clubs/Paris sud.jpg";
import img4 from "../assets/images/Clubs/Aquaboulevard.jpg";

const clubs = [
  {
    name: "Club Voltaire",
    description:
      "Club Voltaire provides a comprehensive fitness experience with state-of-the-art equipment, group classes, and a welcoming environment tailored for all fitness levels.",
    image: img1,
  },
  {
    name: "Club La-Defense",
    description:
      "Located in the bustling La Défense area, this club offers premium facilities, cutting-edge equipment, and personalized sessions to help you achieve your fitness goals.",
    image: img2,
  },
  {
    name: "Club Villejuif",
    description:
      "Club Villejuif is your go-to destination for strength training, cardio, and group sessions, featuring modern amenities in a spacious and motivating setting.",
    image: img3,
  },
  {
    name: "Club Bastille",
    description:
      "Club Bastille combines innovation and comfort with a wide range of fitness equipment and programs, catering to individuals of all fitness levels and ages.",
    image: img4,
  },
];

const ClubLanding = () => {
  // Ensure the page scrolls to the top when this component renders
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <section className="bg-black min-h-screen px-4 md:px-16 lg:px-32 pt-32">
      <div className="max-w-7xl mx-auto">
        {/* Main Heading Section */}
        <div className="text-center mb-10">
          <h1 className="text-4xl md:text-5xl font-extrabold text-white leading-tight">
            GYMS IN PARIS
          </h1>
          <p className="text-xl font-semibold text-white mt-4">
            THE BEST FITNESS EXPERIENCE IN PARIS
          </p>
          <div className="h-1 w-20 bg-brightRed mx-auto mt-3"></div>
        </div>

        {/* Individual Club Sections */}
        {clubs.map((club, index) => (
          <div
            key={index}
            className={`grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16 ${
              index % 2 === 1 ? "lg:flex-row-reverse" : ""
            }`}
          >
            {/* Text Content */}
            <div className="text-white flex flex-col justify-center">
              <h2 className="text-3xl font-bold mb-4">
                ABOUT {club.name.toUpperCase()}
              </h2>
              <p className="text-lg leading-relaxed">{club.description}</p>
            </div>

            {/* Image Section */}
            <div className="flex justify-center">
              <img
                src={club.image}
                alt={club.name}
                className="w-full h-auto rounded-lg shadow-md"
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ClubLanding;
