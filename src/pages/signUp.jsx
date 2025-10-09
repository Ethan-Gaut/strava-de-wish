import { useState } from "react";
import { registerUser } from "../services/userService";

export default function Signup() {
  const [form, setForm] = useState({
    nom: "",
    prenom: "",
    mail: "",
    mot_de_passe: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await registerUser(form.nom, form.prenom, form.mail, form.mot_de_passe);
      alert("Compte créé avec succès 🎉");
      window.location.href = "/login";
    } catch (err) {
      alert(err.message);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col gap-3 max-w-sm mx-auto mt-10"
    >
      <input name="nom" placeholder="Nom" onChange={handleChange} required />
      <input
        name="prenom"
        placeholder="Prénom"
        onChange={handleChange}
        required
      />
      <input
        type="email"
        name="mail"
        placeholder="Email"
        onChange={handleChange}
        required
      />
      <input
        type="password"
        name="mot_de_passe"
        placeholder="Mot de passe"
        onChange={handleChange}
        required
      />
      <button type="submit">Créer un compte</button>
    </form>
  );
}
