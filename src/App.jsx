import "./App.css";
import { Route, Routes } from "react-router-dom";
import { Accueil } from "./pages/Accueil";
import { Seances } from "./pages/Seances";
import { Profil } from "./pages/Profil";
import MainLayout from "./components/MainLayout";

function App() {
  return (
    <>
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<Accueil />} />
          <Route path="/seances" element={<Seances />} />
          <Route path="/profil" element={<Profil />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
