import React, { createContext, useContext, useState } from "react";
import { databases, databaseId, collectionId } from "../lib/appwrite";
import { Query } from "appwrite";

const Auth = createContext();

export const AuthContext = ({ children }) => {
  const [user, setUser] = useState(null);

  const login = async (mail, mot_de_passe) => {
    try {
      const response = await databases.listDocuments(databaseId, collectionId, [
        Query.equal("mail", mail),
        Query.equal("mot_de_passe", mot_de_passe),
      ]);

      if (response.documents.length > 0) {
        const userDoc = response.documents[0];
        setUser(userDoc);
        console.log("Connexion réussie :", userDoc);
        return { success: true, user: userDoc };
      } else {
        console.log("test error ");
        return { success: false, message: "mail ou mot de passe incorrect" };
      }
    } catch (err) {
      console.error("Erreur de connexion :", err);
      return { success: false, message: "Erreur serveur" };
    }
  };

  const logout = () => {
    setUser(null);
  };

  const contextValues = { login, logout, user };

  return <Auth.Provider value={contextValues}>{children}</Auth.Provider>;
};

export const useAuth = () => useContext(Auth);
