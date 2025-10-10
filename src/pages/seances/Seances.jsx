import React from "react";

const seances = [
  { nom: "Footing matinal", distance: 5, temps: 25 },
  { nom: "Séance vélo", distance: 20, temps: 70 },
  { nom: "Natation", distance: 2, temps: 40 },
  { nom: "Course fractionnée", distance: 8, temps: 50 },
];

export const Seances = () => {
  const totalSeances = seances.length;
  const totalDistance = seances.reduce((acc, s) => acc + s.distance, 0);
  const totalTemps = seances.reduce((acc, s) => acc + s.temps, 0);
  const avgDistance = (totalDistance / totalSeances).toFixed(2);
  const avgTemps = (totalTemps / totalSeances).toFixed(2);

  return (
    <div className="min-h-screen bg-[#202124] text-white px-4 py-8">
      <h1 className="text-3xl font-bold text-[#10B981] mb-6 text-center">
        Statistiques des Séances
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
        <div className="bg-[#1b1c1f] p-6 rounded-2xl shadow-lg text-center">
          <h2 className="text-xl font-semibold text-[#1E3A8A]">
            Total Séances
          </h2>
          <p className="text-2xl font-bold mt-2">{totalSeances}</p>
        </div>

        <div className="bg-[#1b1c1f] p-6 rounded-2xl shadow-lg text-center">
          <h2 className="text-xl font-semibold text-[#1E3A8A]">
            Distance Totale
          </h2>
          <p className="text-2xl font-bold mt-2">{totalDistance} km</p>
        </div>

        <div className="bg-[#1b1c1f] p-6 rounded-2xl shadow-lg text-center">
          <h2 className="text-xl font-semibold text-[#1E3A8A]">Temps Total</h2>
          <p className="text-2xl font-bold mt-2">{totalTemps} min</p>
        </div>

        <div className="bg-[#1b1c1f] p-6 rounded-2xl shadow-lg text-center">
          <h2 className="text-xl font-semibold text-[#1E3A8A]">
            Distance Moyenne
          </h2>
          <p className="text-2xl font-bold mt-2">{avgDistance} km</p>
        </div>

        <div className="bg-[#1b1c1f] p-6 rounded-2xl shadow-lg text-center">
          <h2 className="text-xl font-semibold text-[#1E3A8A]">Temps Moyen</h2>
          <p className="text-2xl font-bold mt-2">{avgTemps} min</p>
        </div>
      </div>

      {/* Graphiques simples */}
      <div className="bg-[#1b1c1f] p-6 rounded-2xl shadow-lg">
        <h2 className="text-xl font-semibold text-[#1E3A8A] mb-4">
          Distance par Séance
        </h2>
        <div className="flex items-end gap-4 h-40">
          {seances.map((s, i) => {
            const height = `${(s.distance / totalDistance) * 100}%`;
            return (
              <div
                key={i}
                className="flex-1 flex flex-col justify-end items-center"
              >
                <div
                  className="bg-[#10B981] w-full rounded-t-lg transition-all duration-300"
                  style={{ height }}
                ></div>
                <span className="text-sm mt-1">{s.nom}</span>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
