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
          <div className="flex items-center space-x-4">
            <div className="flex items-center justify-center">
              <img
                src="/Logo-strava-2-wish.png"
                alt="Logo Strava 2 wish"
                className="h-16 w-16 object-contain"
              />
            </div>
            <span className="text-2xl font-bold tracking-tight text-gray-700">
              Strava 2 wish
            </span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            {navItems.map((item) => {
              const Icon = item.icon;

              const isActive =
                location.pathname === item.path ||
                (item.path === "/seances" &&
                  location.pathname.startsWith("/seances"));

              return (
                <Button
                  key={item.path}
                  variant={isActive ? "default" : "ghost"}
                  size="sm"
                  asChild
                  className="h-9"
                >
                  <Link
                    to={item.path}
                    className="flex items-center gap-2 text-gray-700"
                  >
                    <Icon className="h-4 w-4" />
                    {item.label}
                  </Link>
                </Button>
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
