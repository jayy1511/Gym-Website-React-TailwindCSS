import React from "react";
import Slider from "react-slick";
import ClubsCard from "../layouts/ClubsCard"; // Ensure the correct path
import img1 from "../assets/images/Clubs/club-7.jpg"; 
import img2 from "../assets/images/Clubs/la defense.jpg";
import img3 from "../assets/images/Clubs/Paris sud.jpg"; 
import img4 from "../assets/images/Clubs/Aquaboulevard.jpg";

const clubsData = [
  {
    name: "FitZone Voltaire",
    description: "A premium club located in the heart of the city.",
    location: "13 Rue Voltaire, Paris",
    image: img1,
    features: ["Modern Equipment", "Personal Training", "Sauna & Spa"],
  },
  {
    name: "FitZone La-defense",
    description: "A family-friendly gym with modern amenities.",
    location: "456 Elm St, La-defense, Paris",
    image: img2,
    features: ["Group Classes", "Swimming Pool", "Kids Zone"],
  },
  {
    name: "FitZone Villejuif",
    description: "A premium club located in the south of the city.",
    location: "123 Rue Baptiste, Villejuif",
    image: img3,
    features: ["Modern Equipment", "Personal Training", "Sauna & Spa"],
  },
  {
    name: "FitZone Aquaboulevard",
    description: "A premium club with aqua park",
    location: "11 Rue Saint Jean, Boulogne billancourt",
    image: img4,
    features: ["Modern Equipment", "Personal Training", "Sauna & Spa"],
  },
];

const ClubsSection = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 2,
    arrows: true,
    adaptiveHeight: true,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="container mx-auto py-8 px-4">
      <Slider {...settings}>
        {clubsData.map((club, index) => (
          <div key={index} className="px-2">
            <ClubsCard
              name={club.name}
              description={club.description}
              location={club.location}
              image={club.image}
              features={club.features}
            />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default ClubsSection;
