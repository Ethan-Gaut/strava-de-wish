import React, { useState } from "react";

// Exemple de données utilisateur
const userData = {
  nom: "Jean",
  prenom: "Dupont",
  email: "jean.dupont@example.com",
  avatar: "/avatar-placeholder.png", // remplace par ton image
  stats: {
    seances: 12,
    distance: 75, // km
    temps: 450, // min
  },
};

export const Profil = () => {
  const [nom, setNom] = useState(userData.nom);
  const [prenom, setPrenom] = useState(userData.prenom);
  const [email, setEmail] = useState(userData.email);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Ici, tu pourrais envoyer les nouvelles données au backend
    console.log({ nom, prenom, email });
    alert("Profil mis à jour !");
  };

  return (
    <div className="min-h-screen bg-[#202124] text-white px-4 py-8">
      <div className="max-w-4xl mx-auto bg-[#1b1c1f] rounded-2xl shadow-lg p-8 flex flex-col md:flex-row items-center gap-8">
        {/* Avatar */}
        <div className="flex-shrink-0">
          <img
            src={userData.avatar}
            alt="Avatar"
            className="h-32 w-32 rounded-full border-4 border-[#10B981] object-cover"
          />
        </div>

        {/* Infos utilisateur */}
        <div className="flex-1 text-center md:text-left">
          <h2 className="text-3xl font-bold text-[#1E3A8A] mb-2">
            Profil Utilisateur
          </h2>

          {/* Formulaire éditable */}
          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            <div className="flex flex-col sm:flex-row gap-4">
              <div className="flex-1">
                <label className="block text-gray-300 mb-1">Prénom</label>
                <input
                  type="text"
                  value={prenom}
                  onChange={(e) => setPrenom(e.target.value)}
                  className="w-full px-4 py-2 rounded-lg bg-[#202124] border border-gray-600 text-white focus:border-[#10B981] outline-none transition"
                  required
                />
              </div>
              <div className="flex-1">
                <label className="block text-gray-300 mb-1">Nom</label>
                <input
                  type="text"
                  value={nom}
                  onChange={(e) => setNom(e.target.value)}
                  className="w-full px-4 py-2 rounded-lg bg-[#202124] border border-gray-600 text-white focus:border-[#10B981] outline-none transition"
                  required
                />
              </div>
            </div>

            <div>
              <label className="block text-gray-300 mb-1">Email</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-4 py-2 rounded-lg bg-[#202124] border border-gray-600 text-white focus:border-[#10B981] outline-none transition"
                required
              />
            </div>

            <button
              type="submit"
              className="bg-[#10B981] hover:bg-[#0ea572] text-white font-semibold py-2 rounded-lg mt-4 transition-all duration-300"
            >
              Valider les modifications
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};
