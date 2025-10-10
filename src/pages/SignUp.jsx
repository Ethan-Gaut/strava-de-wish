import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { databases, databaseId, collectionUserId } from "../lib/appwrite";

export const SignUp = () => {
  const navigate = useNavigate();

  const [mail, setMail] = useState("");
  const [mot_de_passe, setMotDePasse] = useState("");
  const [nom, setNom] = useState("");
  const [prenom, setPrenom] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await databases.createDocument(
        databaseId,
        collectionUserId,
        "unique()", // génère un ID unique automatiquement
        {
          mail,
          mot_de_passe,
          nom,
          prenom,
        }
      );

      setSuccess("Compte créé avec succès !");
      setError("");
      setTimeout(() => navigate("/"), 1500); // redirection après succès
    } catch (err) {
      console.error(err);
      setError("Erreur lors de l'inscription. Veuillez réessayer.");
      setSuccess("");
    }
  };

  return (
    <div className="min-h-screen bg-[#202124] flex items-center justify-center px-4">
      <div className="bg-[#1b1c1f] p-8 rounded-2xl shadow-lg w-full max-w-md">
        <h1 className="text-3xl font-bold text-[#10B981] mb-6 text-center">
          Inscription
        </h1>

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
            <label className="block text-gray-300 mb-1" htmlFor="nom">
              Nom
            </label>
            <input
              id="nom"
              type="text"
              value={nom}
              onChange={(e) => setNom(e.target.value)}
              placeholder="Jean"
              className="w-full px-4 py-2 rounded-lg bg-[#202124] border border-gray-600 text-white focus:border-[#10B981] outline-none transition"
              required
            />
          </div>

          <div>
            <label className="block text-gray-300 mb-1" htmlFor="prenom">
              Prénom
            </label>
            <input
              id="prenom"
              type="text"
              value={prenom}
              onChange={(e) => setPrenom(e.target.value)}
              placeholder="Dupont"
              className="w-full px-4 py-2 rounded-lg bg-[#202124] border border-gray-600 text-white focus:border-[#10B981] outline-none transition"
              required
            />
          </div>

          <div>
            <label className="block text-gray-300 mb-1" htmlFor="email">
              Email
            </label>
            <input
              id="email"
              type="email"
              value={mail}
              onChange={(e) => setMail(e.target.value)}
              placeholder="exemple@mail.com"
              className="w-full px-4 py-2 rounded-lg bg-[#202124] border border-gray-600 text-white focus:border-[#10B981] outline-none transition"
              required
            />
          </div>

          <div>
            <label className="block text-gray-300 mb-1" htmlFor="password">
              Mot de passe
            </label>
            <input
              id="password"
              type="password"
              value={mot_de_passe}
              onChange={(e) => setMotDePasse(e.target.value)}
              placeholder="••••••••"
              className="w-full px-4 py-2 rounded-lg bg-[#202124] border border-gray-600 text-white focus:border-[#10B981] outline-none transition"
              required
            />
          </div>

          <button
            type="submit"
            className="bg-[#10B981] hover:bg-[#0ea572] text-white font-semibold py-2 rounded-lg mt-2 transition-all duration-300"
          >
            S'inscrire
          </button>
        </form>

        <p className="text-gray-400 text-sm mt-4 text-center">
          Déjà un compte ?{" "}
          <a href="/login" className="text-[#10B981] hover:underline">
            Se connecter
          </a>
        </p>
      </div>
    </div>
  );
};
