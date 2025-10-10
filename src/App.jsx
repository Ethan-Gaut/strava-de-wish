import "./App.css";
import { Route, Routes } from "react-router-dom";
import { Accueil } from "./pages/Accueil";
import { Profil } from "./pages/Profil";
import MainLayout from "./components/MainLayout";
import { SeancesLayout } from "./components/SeancesLayout";
import { A_Seance } from "./pages/seances/A_Seance";
import { L_Seances } from "./pages/seances/L_Seances";
import { Seances } from "./pages/seances/Seances";

function App() {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route path="/" element={<Accueil />} />
        <Route path="/profil" element={<Profil />} />

        {/* Séances avec sidebar */}
        <Route path="/seances" element={<SeancesLayout />}>
          {/* Route par défaut → Résumé */}
          <Route index element={<Seances />} />

          {/* Sous-pages */}
          <Route path="Ajouter" element={<A_Seance/>} />
          <Route path="Liste_des_Séances" element={<L_Seances />} />
        </Route>
      </Route>
    </Routes>
  );
}

export default App;
