import "./App.css";
import { Route, Routes } from "react-router-dom";
import { Accueil } from "./pages/Accueil";
import { Profil } from "./pages/Profil";
import MainLayout from "./components/MainLayout";
import { SeancesLayout } from "./components/SeancesLayout";
import { A_Seance } from "./pages/seances/A_Seance";
import { L_Seances } from "./pages/seances/L_Seances";
import { Seances } from "./pages/seances/Seances";
import { Login } from "./pages/Login";

function App() {
  return (
    <Routes>
      {/* Layout principal */}
      <Route element={<MainLayout />}>
        <Route path="/" element={<Accueil />} />
        <Route path="/profil" element={<Profil />} />
        <Route path="/login" element={<Login />} />

        {/* Séances avec layout spécifique */}
        <Route path="/seances" element={<SeancesLayout />}>
          <Route index element={<Seances />} /> {/* Route par défaut */}
          <Route path="Ajouter" element={<A_Seance />} />
          <Route path="Liste_des_Séances" element={<L_Seances />} />
        </Route>
      </Route>
    </Routes>
  );
}

export default App;
