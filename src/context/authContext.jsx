import React, { createContext, useContext } from "react";

const Auth = createContext();

export const AuthContext = ({ children }) => {
  const login = (email, password) => {
    //connexion appwrite
    console.log(email, password);
  };

  const contextValues = { login };
  return <Auth value={contextValues}>{children}</Auth>;
};

export const useAuth = () => useContext(Auth);



// import React, { createContext, useContext, useState } from "react";
// import { account } from "../lib/appwrite.js"; // ton fichier de config Appwrite

// // Création du contexte
// const Auth = createContext();

// // Provider
// export const AuthProvider = ({ children }) => {
//   const [user, setUser] = useState(null);

//   const login = async (email, password) => {
//     try {
//       const response = await account.createSession(email, password);
//       console.log("Connecté avec succès :", response);
//       // Récupérer l'utilisateur connecté
//       const currentUser = await account.get();
//       setUser(currentUser);
//     } catch (error) {
//       console.error("Erreur de connexion :", error);
//     }
//   };

//   const logout = async () => {
//     try {
//       await account.deleteSession("current");
//       setUser(null);
//       console.log("Déconnecté !");
//     } catch (error) {
//       console.error("Erreur lors de la déconnexion :", error);
//     }
//   };

//   const contextValues = { user, login, logout };
//   return <Auth.Provider value={contextValues}>{children}</Auth.Provider>;
// };

// // Hook pour utiliser le contexte
// export const useAuth = () => useContext(Auth);
