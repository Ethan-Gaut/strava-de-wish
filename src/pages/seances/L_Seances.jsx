import React, { useEffect, useState } from "react";
import { databases, databaseId, collectionSeancesId } from "../../lib/appwrite";
import { useAuth } from "../../context/authContext";
import { Query } from "appwrite";

export const L_Seances = () => {
  const [seances, setSeances] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const { user } = useAuth();

  useEffect(() => {
    const fetchSeances = async () => {
      if (!user) {
        setError("Utilisateur non connecté.");
        setLoading(false);
        return;
      }

      try {
        const response = await databases.listDocuments(
          databaseId,
          collectionSeancesId,
          [
            Query.equal("utilisateur_id", user.$id), // Filtre par utilisateur connecté
          ]
        );

        setSeances(response.documents);
      } catch (err) {
        console.error("Erreur lors de la récupération :", err);
        setError("Erreur lors du chargement des séances.");
      } finally {
        setLoading(false);
      }
    };

    fetchSeances();
  }, [user]);

  return (
    <div className="min-h-screen bg-[#202124] text-white px-4 py-8">
      <h2 className="text-2xl font-bold text-[#10B981] mb-6 text-center">
        Mes Séances
      </h2>

      {loading && <p className="text-center text-gray-400">Chargement...</p>}

      {error && (
        <div className="mb-4 text-red-500 border border-red-400 p-2 rounded bg-red-50 text-center">
          {error}
        </div>
      )}

      {!loading && seances.length === 0 && (
        <p className="text-center text-gray-400">Aucune séance enregistrée.</p>
      )}

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {seances.map((seance) => (
          <div
            key={seance.$id}
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
