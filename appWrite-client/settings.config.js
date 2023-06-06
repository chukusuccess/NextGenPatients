import { Client, Databases } from "appwrite";

export const client = new Client()
  .setEndpoint(process.env.NEXT_PUBLIC_CLIENT_URL)
  .setProject(process.env.NEXT_PUBLIC_PROJECT_ID);

export const databaseClient = new Databases(client);
