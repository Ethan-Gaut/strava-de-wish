import React from "react";
import { Outlet, Link, useLocation } from "react-router-dom";
import { Home, User, Activity } from "lucide-react";
import { Button } from "./ui/button";

const MainLayout = () => {
  const location = useLocation();

  const navItems = [
    { path: "/", label: "Accueil", icon: Home },
    { path: "/seances", label: "Séances", icon: Activity },
    { path: "/profil", label: "Profil", icon: User },
  ];

  return (
    <>
      <nav className="sticky top-0 z-50 border-b bg-background/95 backdrop-blur">
        <div className="container mx-auto flex h-20 items-center justify-between px-4">
          {/* Logo / Brand */}
          <div className="flex items-center space-x-2">
            <img
              src="/Logo-strava-2-wish.png"
              alt="Logo Strava 2 Wish"
              className="h-16 w-16 object-contain"
            />
            <h1 className="flex items-center space-x-1 text-2xl font-bold tracking-tight">
              <span className="text-[#1E3A8A]">Strava</span>
              <span className="text-[#202124]">2</span>
              <span className="text-[#10B981]">Wish</span>
            </h1>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-2">
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive =
                location.pathname === item.path ||
                (item.path === "/seances" &&
                  location.pathname.startsWith("/seances"));

              return (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200
                    ${
                      isActive
                        ? "bg-[#10B981]/20 text-[#10B981]"
                        : "text-gray-700 hover:text-[#10B981] hover:bg-[#10B981]/10"
                    }`}
                >
                  <Icon
                    className={`h-4 w-4 transition-colors duration-200 ${
                      isActive ? "text-[#10B981]" : "text-gray-700"
                    }`}
                  />
                  {item.label}
                </Link>
              );
            })}
          </div>

          {/* Mobile Navigation */}
          <div className="flex md:hidden">
            <Button
              variant="ghost"
              size="icon"
              className="h-9 w-9 text-gray-700"
            >
              <svg
                className="h-5 w-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </Button>
          </div>
        </div>
      </nav>

      <main className="container mx-auto px-4 py-6">
        <Outlet />
      </main>
    </>
  );
};

export default MainLayout;
