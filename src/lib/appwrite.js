import { Client, Account } from "appwrite";

export const client = new Client();

client
  .setEndpoint("https://<REGION>.cloud.appwrite.io/v1")
  .setProject("68e76453003a650a6865"); // Replace with your project ID

export const account = new Account(client);
export { ID } from "appwrite";
