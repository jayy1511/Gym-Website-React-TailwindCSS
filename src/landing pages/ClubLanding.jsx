import React, { useEffect } from "react";
import img1 from "../assets/images/Clubs/club-7.jpg"; 
import img2 from "../assets/images/Clubs/la defense.jpg";
import img3 from "../assets/images/Clubs/Paris sud.jpg"; 
import img4 from "../assets/images/Clubs/Aquaboulevard.jpg";

const clubs = [
  {
    name: "Club Voltaire",
    description:
      "Le Club Montparnasse offre une variété d'activités pour tous les niveaux, incluant des équipements modernes et des cours collectifs dans un environnement convivial.",
    image: img1,
  },
  {
    name: "Club La-Defense",
    description:
      "Situé au cœur de Paris, le Club Champs-Élysées est équipé des dernières technologies et propose des sessions personnalisées pour répondre à vos besoins.",
    image: img2,
  },
  {
    name: "Club Villejuif",
    description:
      "Découvrez le Club Bastille, un espace dédié à la musculation, au cardio-training, et aux cours collectifs pour atteindre vos objectifs de fitness.",
    image: img3,
  },
  {
    name: "Club Bastille",
    description:
      "Le Club La Défense combine modernité et efficacité avec une grande variété d'équipements et de programmes adaptés à tous les âges.",
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
            SALLES DE SPORT À PARIS
          </h1>
          <p className="text-xl font-semibold text-white mt-4">
            LA MEILLEURE EXPÉRIENCE FITNESS DE PARIS
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
           
            <div className="text-white flex flex-col justify-center">
              <h2 className="text-3xl font-bold mb-4">
                À PROPOS DE {club.name.toUpperCase()}
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
