import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const navLinks = [
  { name: "Accueil", href: "/" },
  { name: "Séance", href: "/" },
  { name: "Profil", href: "/" },
];

export function TopNavbar() {
  return (
    <motion.nav
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="w-full fixed top-0 left-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-200"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <div className="text-xl font-bold text-blue-600 tracking-tight">
            Application de test
          </div>

          {/* Menu */}
          <div className="hidden md:flex space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.href} 
                className="text-gray-700 hover:text-blue-600 transition font-medium"
              >
                {link.name}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </motion.nav>
  );
}
