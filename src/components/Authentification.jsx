import React, { useEffect } from "react";
import { useAuth } from "../context/authContext";

const Authentification = ({ mail, mot_de_passe }) => {
  const { login } = useAuth();

  useEffect(() => {
    const tryLogin = async () => {
      const result = await login(mail, mot_de_passe);

      if (result.success) {
        console.log("Utilisateur connecté :", result.user);
      } else {
        console.error("Erreur :", result.message);
      }
    };

    if (mail && mot_de_passe) {
      tryLogin();
    }
  }, [mail, mot_de_passe, login]);

  return (
    <div
      style={{
        fontFamily: "sans-serif",
        textAlign: "center",
        marginTop: "50px",
      }}
    >
      <h1>Authentification</h1>
      <p>{}</p>
    </div>
  );
};

export default Authentification;
