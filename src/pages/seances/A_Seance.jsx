import React, { useState } from "react";
import { databases, databaseId, collectionSeancesId } from "../../lib/appwrite";
import { useAuth } from "../../context/authContext";

export const A_Seance = () => {
  const [nomSeance, setNomSeance] = useState("");
  const [distance, setDistance] = useState("");
  const [temps, setTemps] = useState("");
  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");

  const { user } = useAuth();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!user) {
      setError("Vous devez être connecté pour ajouter une séance.");
      return;
    }

    try {
      const response = await databases.createDocument(
        databaseId,
        collectionSeancesId,
        "unique()",
        {
          nom: nomSeance,
          distance: parseFloat(distance),
          temps: temps,
          utilisateur_id: user.$id, // si tu stockes l'utilisateur avec l'id
        }
      );

      console.log("Séance enregistrée :", response);
      setSuccess("Séance ajoutée avec succès !");
      setError("");
      setNomSeance("");
      setDistance("");
      setTemps("");
    } catch (err) {
      console.error("Erreur lors de l'ajout :", err);
      setError("Erreur lors de l'ajout de la séance.");
      setSuccess("");
    }
  };

  return (
    <div className="min-h-screen bg-[#202124] text-white flex flex-col items-center justify-start px-4 pt-12">
      <div className="bg-[#1b1c1f] rounded-2xl shadow-lg p-8 w-full max-w-md">
        <h2 className="text-2xl font-bold text-[#10B981] mb-6 text-center">
          Ajouter une Séance
        </h2>

        {error && (
          <div className="mb-4 text-red-500 border border-red-400 p-2 rounded bg-red-50 text-center">
            {error}
          </div>
        )}

        {success && (
          <div className="mb-4 text-green-500 border border-green-400 p-2 rounded bg-green-50 text-center">
            {success}
          </div>
        )}

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
              step="0.1"
              value={distance}
              onChange={(e) => setDistance(e.target.value)}
              placeholder="Ex: 5.2"
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
