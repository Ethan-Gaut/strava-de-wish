import { useEffect, useState } from "react";
import { useAuth } from "../context/authContext";
import Authentification from "../components/Authentification";

export const Login = () => {
  const [mail, setMail] = useState("");
  const [motDePasse, setMotDePasse] = useState("");
  const { login } = useAuth();
  console.log("mail", mail);
  console.log("mot de passe", motDePasse);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    login(formData.get("mail"), formData.get("mot_de_passe"));
  };

  return (
    <>
      <form
        onSubmit={handleSubmit}
        className="flex flex-col gap-3 max-w-sm mx-auto mt-10"
      >
        <input
          type="email"
          placeholder="Adresse mail"
          name="mail"
          required
          onChange={(e) => setMail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Mot de passe"
          name="mot_de_passe"
          required
          onChange={(e) => setMotDePasse(e.target.value)}
        />
        <button type="submit">Se connecter</button>
      </form>
      <Authentification />
    </>
  );
};
