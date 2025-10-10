import React from "react";
import { Outlet, Link, useLocation } from "react-router-dom";

export const SeancesLayout = () => {
  const location = useLocation();

  const navItems = [
    { path: "/seances", label: "Résumé" },
    { path: "/seances/Ajouter", label: "Ajouter" },
    { path: "/seances/Liste_des_Séances", label: "Liste des Séances" },
  ];

  return (
    <div className="bg-[#202124] text-[#E8EAED] min-h-screen">
      {/* Sidebar fixe juste en dessous de la navbar */}
      <aside className="fixed top-20 left-0 w-48 h-[calc(100vh-4rem)] border-r border-white bg-[#202124] p-4">
        <h2 className="mb-4 text-lg font-bold">Séances</h2>
        <nav className="flex flex-col space-y-2">
          {navItems.map((item) => {
            const isActive = location.pathname === item.path;
            return (
              <Link
                key={item.path}
                to={item.path}
                className={`px-3 py-2 rounded transition-colors ${
                  isActive
                    ? "bg-gray-800 text-white"
                    : "hover:bg-gray-700 text-[#E8EAED]"
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>
      </aside>

      {/* Contenu principal */}
      <main className="ml-48 p-6 pt-16 overflow-auto min-h-screen">
        <Outlet />
      </main>
    </div>
  );
};
