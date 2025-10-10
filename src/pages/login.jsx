import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/authContext";

export const Login = () => {
  const { login } = useAuth();
  const navigate = useNavigate();

  const [mail, setMail] = useState("");
  const [mot_de_passe, setMotDePasse] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const result = await login(mail, mot_de_passe);

    if (result.success) {
      navigate("/");
    } else {
      setError(result.message);
    }
  };

  return (
    <div className="min-h-screen bg-[#202124] flex items-center justify-center px-4">
      <div className="bg-[#1b1c1f] p-8 rounded-2xl shadow-lg w-full max-w-md">
        <h1 className="text-3xl font-bold text-[#10B981] mb-6 text-center">
          Connexion
        </h1>

        {error && (
          <div className="mb-4 text-red-500 border border-red-400 p-2 rounded bg-red-50 text-center">
            {error}
          </div>
        )}

        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
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
            Se connecter
          </button>
        </form>

        <p className="text-gray-400 text-sm mt-4 text-center">
          Pas de compte ?{" "}
          <a href="/signup" className="text-[#10B981] hover:underline">
            S'inscrire
          </a>
        </p>
      </div>
    </div>
  );
};
