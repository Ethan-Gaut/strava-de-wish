import { useEffect, useState } from "react";
import { useAuth } from "../context/authContext";

export const Login = () => {
  const [mail, setMail] = useState("");
  const [motDePasse, setMotDePasse] = useState("");
  const { login } = useAuth();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    login(formData.get("email"), formData.get("password"));
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col gap-3 max-w-sm mx-auto mt-10"
    >
      <input type="email" placeholder="Adresse mail" name="email" required />
      <input
        type="password"
        placeholder="Mot de passe"
        name="password"
        required
      />
      <button type="submit">Se connecter</button>
    </form>
  );
};
