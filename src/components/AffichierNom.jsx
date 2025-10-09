// AfficherNom.jsx
import React, { useEffect, useState } from "react";
import { databases, databaseId, collectionId } from "../lib/appwrite";

const AfficherNom = () => {
  const [nom, setNom] = useState("");

  useEffect(() => {
    const getUser = async () => {
      try {
        // Remplace l'ID ci-dessous par le $id de ton utilisateur Appwrite
        const userId = "68e78da200069026574e";
        const response = await databases.getDocument(
          databaseId,
          collectionId,
          userId
        );
        setNom(response.nom); // champ "nom" dans ta base
      } catch (error) {
        console.error(
          "Erreur lors de la récupération de l'utilisateur :",
          error
        );
      }
    };

    getUser();
  }, []);

  return (
    <div
      style={{
        fontFamily: "sans-serif",
        textAlign: "center",
        marginTop: "50px",
      }}
    >
      <h1>Nom de l’utilisateur :</h1>
      <p>{nom ? nom : "Chargement..."}</p>
    </div>
  );
};

export default AfficherNom;
