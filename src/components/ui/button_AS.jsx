import React, { useState } from "react";

export const A_Seance = () => {
  const [nomSeance, setNomSeance] = useState("");
  const [distance, setDistance] = useState("");
  const [temps, setTemps] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({ nomSeance, distance, temps });
    alert("Séance ajoutée !");
    setNomSeance("");
    setDistance("");
    setTemps("");
  };

  return (
    <div className="min-h-screen bg-[#202124] text-white flex items-center justify-center px-4 py-12">
      <div className="bg-[#1b1c1f] rounded-2xl shadow-lg p-8 w-full max-w-md">
        <h2 className="text-2xl font-bold text-[#10B981] mb-6 text-center">
          Ajouter une Séance
        </h2>

        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <div>
            <label className="block text-gray-300 mb-1">Nom de la séance</label>
            <input
              type="text"
              value={nomSeance}
              onChange={(e) => setNomSeance(e.target.value)}
              placeholder="Ex: Footing matinal"
              className="w-full px-4 py-2 rounded-lg bg-[#202124] border border-gray-600 text-white focus:border-[#10B981] outline-none transition"
              required
            />
          </div>

          <div>
            <label className="block text-gray-300 mb-1">
              Distance parcourue (km)
            </label>
            <input
              type="number"
              value={distance}
              onChange={(e) => setDistance(e.target.value)}
              placeholder="Ex: 5"
              className="w-full px-4 py-2 rounded-lg bg-[#202124] border border-gray-600 text-white focus:border-[#10B981] outline-none transition"
              required
            />
          </div>

          <div>
            <label className="block text-gray-300 mb-1">
              Temps réalisé (hh:mm)
            </label>
            <input
              type="text"
              value={temps}
              onChange={(e) => setTemps(e.target.value)}
              placeholder="Ex: 00:25"
              className="w-full px-4 py-2 rounded-lg bg-[#202124] border border-gray-600 text-white focus:border-[#10B981] outline-none transition"
              required
            />
          </div>

          <button
            type="submit"
            className="bg-[#10B981] hover:bg-[#0ea572] text-white font-semibold mt-4 py-2 rounded-lg transition-all duration-300"
          >
            Ajouter
          </button>
        </form>
      </div>
    </div>
  );
};
