import React from "react";

// Exemple de données
const seances = [
  { nom: "Footing matinal", distance: 5, temps: "00:25" },
  { nom: "Séance vélo", distance: 20, temps: "01:10" },
  { nom: "Natation", distance: 2, temps: "00:40" },
  { nom: "Course fractionnée", distance: 8, temps: "00:50" },
  { nom: "Yoga", distance: 0, temps: "01:00" },
  { nom: "Randonnée", distance: 10, temps: "02:00" },
];

export const L_Seances = () => {
  return (
    <div className="min-h-screen bg-[#202124] text-white px-4 py-8">
      <h2 className="text-2xl font-bold text-[#10B981] mb-6 text-center">
        Mes Séances
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {seances.map((seance, index) => (
          <div
            key={index}
            className="bg-[#1b1c1f] rounded-2xl shadow-lg p-6 flex flex-col gap-3 hover:scale-105 transition-transform duration-300"
          >
            <h3 className="text-lg font-bold text-[#1E3A8A]">{seance.nom}</h3>
            <p>
              <span className="font-semibold">Distance :</span>{" "}
              <span className="text-[#10B981]">{seance.distance} km</span>
            </p>
            <p>
              <span className="font-semibold">Temps :</span>{" "}
              <span className="text-[#10B981]">{seance.temps}</span>
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};
