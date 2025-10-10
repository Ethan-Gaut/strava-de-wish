import React, { createContext, useContext, useState, useEffect } from "react";
import { databases, databaseId, collectionUserId } from "../lib/appwrite";
import { Query } from "appwrite";

const Auth = createContext();

export const AuthContext = ({ children }) => {
  // Récupération initiale depuis localStorage si présent
  const [user, setUser] = useState(() => {
    const savedUser = localStorage.getItem("user");
    return savedUser ? JSON.parse(savedUser) : null;
  });

  const login = async (mail, mot_de_passe) => {
    try {
      const response = await databases.listDocuments(
        databaseId,
        collectionUserId,
        [Query.equal("mail", mail), Query.equal("mot_de_passe", mot_de_passe)]
      );

      if (response.documents.length > 0) {
        const userDoc = response.documents[0];
        setUser(userDoc);
        localStorage.setItem("user", JSON.stringify(userDoc)); // Stockage dans localStorage
        console.log("Connexion réussie :", userDoc);
        return { success: true, user: userDoc };
      } else {
        return { success: false, message: "Mail ou mot de passe incorrect" };
      }
    } catch (err) {
      console.error("Erreur de connexion :", err);
      return { success: false, message: "Erreur serveur" };
    }
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem("user"); // Supprime l'utilisateur du localStorage
  };

  // Optionnel : synchronisation avec localStorage si l'état change
  useEffect(() => {
    if (user) {
      localStorage.setItem("user", JSON.stringify(user));
    }
  }, [user]);

  const contextValues = { login, logout, user };

  return <Auth.Provider value={contextValues}>{children}</Auth.Provider>;
};

export const useAuth = () => useContext(Auth);
