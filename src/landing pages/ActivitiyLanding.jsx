import React, { useEffect } from "react";

const activities = [
  {
    name: "Yoga",
    description:
      "Découvrez comment le yoga peut améliorer votre bien-être physique et mental. Adapté à tous les niveaux, il aide à réduire le stress, à améliorer la flexibilité et à renforcer l'esprit.",
    image: "/path-to-yoga-image.jpg", // Replace with your Yoga image path
  },
  {
    name: "Boxing",
    description:
      "Le boxing est parfait pour renforcer votre endurance, améliorer votre condition physique et apprendre des techniques de défense. Une expérience engageante pour tous les niveaux.",
    image: "/path-to-boxing-image.jpg", // Replace with your Boxing image path
  },
  {
    name: "Sports",
    description:
      "Nos sessions sportives sont conçues pour améliorer la force, l'endurance et les compétences générales. Idéal pour ceux qui recherchent un entraînement énergique et motivant.",
    image: "/path-to-sports-image.jpg", // Replace with your Sports image path
  },
  {
    name: "Zumba",
    description:
      "Dansez et amusez-vous tout en brûlant des calories avec nos cours de Zumba. Parfait pour améliorer votre condition physique tout en vous divertissant.",
    image: "/path-to-zumba-image.jpg", // Replace with your Zumba image path
  },
];

const ActivityLanding = () => {
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
            ACTIVITÉ SPORTIVE
          </h1>
          <p className="text-xl font-semibold text-white mt-4">
            DÉCOUVREZ NOS ACTIVITÉS SPORTIVES
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
                À PROPOS DE {activity.name.toUpperCase()}
              </h2>
              <p className="text-lg leading-relaxed">{activity.description}</p>
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
