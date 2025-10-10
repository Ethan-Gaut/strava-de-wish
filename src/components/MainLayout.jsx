import React from "react";
import { Outlet, Link, useLocation, useNavigate } from "react-router-dom";
import { Home, User, Activity } from "lucide-react";
import { Button } from "./ui/button";
import { useAuth } from "../context/authContext";

const MainLayout = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { user, logout } = useAuth();

  const handleLogout = () => {
    logout();
    navigate("/");
  };

  const navItems = user
    ? [
        { path: "/", label: "Accueil", icon: Home },
        { path: "/seances", label: "Séances", icon: Activity },
        { path: "/profil", label: "Profil", icon: User },
        {
          path: "/",
          label: "Se deconnecter",
          icon: User,
          action: handleLogout,
        },
      ]
    : [
        { path: "/", label: "Accueil", icon: Home },
        { path: "/login", label: "Se connecter", icon: User },
      ];

  return (
    <>
      <nav className="sticky top-0 z-50 border-b bg-background/95 backdrop-blur">
        <div className="container mx-auto flex h-20 items-center justify-between px-4">
          {/* Logo / Brand */}
          <div className="flex items-center space-x-2">
            <Link to="/" className="flex items-center space-x-2">
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
            </Link>
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
                <Button
                  key={item.label}
                  variant={isActive ? "default" : "ghost"}
                  size="sm"
                  className="h-9"
                  onClick={item.action ? item.action : undefined}
                  asChild={!item.action}
                >
                  {item.action ? (
                    <div className="flex items-center gap-2 cursor-pointer">
                      <Icon className="h-4 w-4" />
                      {item.label}
                    </div>
                  ) : (
                    <Link to={item.path} className="flex items-center gap-2">
                      <Icon className="h-4 w-4" />
                      {item.label}
                    </Link>
                  )}
                </Button>
              );
            })}
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
