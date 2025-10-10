import React from "react";
import { Link } from "react-router-dom";
import { Activity, BarChart2, User } from "lucide-react";
import { Button } from "../components/ui/button";
import { useAuth } from "../context/authContext";

export const Accueil = () => {
  const { user } = useAuth(); // Récupère l'utilisateur connecté

  return (
    <div className="min-h-screen bg-[#202124] text-white">
      {/* HERO SECTION */}
      <section className="flex flex-col items-center justify-center text-center py-24 px-6">
        <h1 className="text-5xl font-extrabold mb-6">
          <span className="text-[#1E3A8A]">Strava</span>{" "}
          <span className="text-white">2</span>{" "}
          <span className="text-[#10B981]">Wish</span>
        </h1>

        <p className="text-lg text-gray-300 max-w-2xl mb-10">
          Suivez, analysez et améliorez vos performances sportives grâce à une
          application intuitive et moderne. Strava 2 Wish vous aide à garder la
          motivation et à progresser jour après jour.
        </p>

        {user && ( // Affiche uniquement si l'utilisateur est connecté
          <div className="flex gap-4">
            <Link to="/seances">
              <Button
                size="lg"
                className="bg-[#10B981] hover:bg-[#0ea572] text-white font-semibold px-6 py-3 rounded-xl shadow-lg transition-all duration-300"
              >
                Voir mes séances
              </Button>
            </Link>

            <Link to="/profil">
              <Button
                size="lg"
                variant="outline"
                className="border-[#10B981] text-[#10B981] hover:bg-[#10B981]/10 font-semibold px-6 py-3 rounded-xl transition-all duration-300"
              >
                Mon profil
              </Button>
            </Link>
          </div>
        )}
      </section>

      {/* FEATURES SECTION */}
      <section className="py-20 px-6 bg-[#1b1c1f]">
        <h2 className="text-3xl font-bold text-center mb-12">
          <span className="text-white">Les points forts de </span>
          <span className="text-[#1E3A8A]">Strava</span>{" "}
          <span className="text-white">2</span>{" "}
          <span className="text-[#10B981]">Wish</span>
        </h2>

        <div className="grid gap-8 md:grid-cols-3 max-w-6xl mx-auto">
          <div className="bg-[#2a2b2f] p-6 rounded-2xl shadow-md hover:shadow-lg transition-all duration-300">
            <div className="flex items-center gap-3 mb-4">
              <Activity className="h-6 w-6 text-[#10B981]" />
              <h3 className="text-xl font-semibold text-white">
                Suivi des séances
              </h3>
            </div>
            <p className="text-gray-400">
              Enregistrez vos séances de running, musculation ou cardio et
              visualisez vos progrès dans le temps.
            </p>
          </div>

          <div className="bg-[#2a2b2f] p-6 rounded-2xl shadow-md hover:shadow-lg transition-all duration-300">
            <div className="flex items-center gap-3 mb-4">
              <BarChart2 className="h-6 w-6 text-[#10B981]" />
              <h3 className="text-xl font-semibold text-white">Statistiques</h3>
            </div>
            <p className="text-gray-400">
              Analysez vos performances grâce à des graphiques clairs et suivez
              votre évolution semaine après semaine.
            </p>
          </div>

          <div className="bg-[#2a2b2f] p-6 rounded-2xl shadow-md hover:shadow-lg transition-all duration-300">
            <div className="flex items-center gap-3 mb-4">
              <User className="h-6 w-6 text-[#10B981]" />
              <h3 className="text-xl font-semibold text-white">
                Profil personnalisé
              </h3>
            </div>
            <p className="text-gray-400">
              Créez votre profil sportif, définissez vos objectifs et suivez vos
              accomplissements tout au long de l’année.
            </p>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="text-center py-8 text-gray-500 text-sm border-t border-gray-700">
        © {new Date().getFullYear()} Strava 2 Wish — Propulsé avec 💚 et passion
        du sport.
      </footer>
    </div>
  );
};
