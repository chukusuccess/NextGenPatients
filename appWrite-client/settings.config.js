import { Client, Databases } from "appwrite";

export const client = new Client()
  .setEndpoint(process.env.CLIENT_URL)
  .setProject(process.env.PROJECT_ID);

export const databaseClient = new Databases(client);
