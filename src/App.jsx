import "./App.css";
import { Route, Routes, Navigate } from "react-router-dom";
import { Accueil } from "./pages/Accueil";
import { Profil } from "./pages/Profil";
import MainLayout from "./components/MainLayout";
import { SeancesLayout } from "./components/SeancesLayout";
import { A_Seance } from "./pages/seances/A_Seance";
import { L_Seances } from "./pages/seances/L_Seances";
import { Seances } from "./pages/seances/Seances";
import { Login } from "./pages/Login";
import { useAuth } from "./context/authContext";
import { SignUp } from "./pages/SignUp";

// Composant pour protéger les routes
const PrivateRoute = ({ children }) => {
  const { user } = useAuth();
  return user ? children : <Navigate to="/login" replace />;
};

function App() {
  return (
    <Routes>
      {/* Layout principal */}
      <Route element={<MainLayout />}>
        {/* Routes publiques */}
        <Route path="/" element={<Accueil />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />

        {/* Routes protégées */}
        <Route
          path="/profil"
          element={
            <PrivateRoute>
              <Profil />
            </PrivateRoute>
          }
        />

        <Route
          path="/seances"
          element={
            <PrivateRoute>
              <SeancesLayout />
            </PrivateRoute>
          }
        >
          <Route index element={<Seances />} />
          <Route path="Ajouter" element={<A_Seance />} />
          <Route path="Liste_des_Séances" element={<L_Seances />} />
        </Route>
      </Route>
    </Routes>
  );
}

export default App;
