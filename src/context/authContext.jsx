// authContext.jsx
import React, { createContext, useContext } from "react";
import { databases, databaseId, collectionId } from "../lib/appwrite";
import { Query } from "appwrite";

// Création du contexte
const Auth = createContext();

// Provider
export const AuthContext = ({ children }) => {
  const login = async (mail, mot_de_passe) => {
    try {
      const response = await databases.listDocuments(databaseId, collectionId, [
        Query.equal("mail", mail),
        Query.equal("mot_de_passe", mot_de_passe), // ⚠️ Assure-toi que ce champ existe et est filterable
      ]);

      if (response.documents.length > 0) {
        // Connexion réussie
        console.log("Connexion réussie :", response.documents[0]);
        return { success: true, user: response.documents[0] };
      } else {
        // Aucune correspondance
        console.log("mail ou mot de passe incorrect");
        return { success: false, message: "mail ou mot de passe incorrect" };
      }
    } catch (err) {
      console.error("Erreur de connexion :", err);
      return { success: false, message: "Erreur serveur" };
    }
  };

  const contextValues = { login };

  return <Auth.Provider value={contextValues}>{children}</Auth.Provider>;
};

// Hook pour accéder au contexte
export const useAuth = () => useContext(Auth);
