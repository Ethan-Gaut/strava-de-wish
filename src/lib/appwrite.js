// import { Client, Account } from "appwrite";

// export const client = new Client();

// client
//   .setEndpoint("https://<REGION>.cloud.appwrite.io/v1")
//   .setProject("68e772bc000eb302c746"); // Replace with your project ID

// // export const account = new Account(client);
// // export { ID } from "appwrite";

// export const databases = new Databases(client);
// export const DATABASE_ID = "68e772bc000eb302c746";
// export const USERS_COLLECTION_ID = "utilisateurs";

import { Client, Databases, Account, ID, Query } from "appwrite";

const client = new Client();

client
  .setEndpoint(import.meta.env.VITE_APPWRITE_ENDPOINT) // ou http://localhost/v1
  .setProject(import.meta.env.VITE_APPWRITE_PROJECT_ID); // remplace par ton ID Appwrite

export const account = new Account(client);
export const databases = new Databases(client);

export default client;
