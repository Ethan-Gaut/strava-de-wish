import { Client, Databases, Account, ID, Query } from "appwrite";

const client = new Client();

client
  .setEndpoint(import.meta.env.VITE_APPWRITE_ENDPOINT) // ou http://localhost/v1
  .setProject(import.meta.env.VITE_APPWRITE_PROJECT_ID); // remplace par ton ID Appwrite

export const account = new Account(client);
export const databases = new Databases(client);

export const databaseId = "68e772bc000eb302c746"; // remplace par l’ID de ta base
export const collectionId = "utilisateurs"; // ex: "utilisateurs"

export default client;
