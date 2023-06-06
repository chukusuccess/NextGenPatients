import { Client, Databases } from "appwrite";

const id = process.env.NEXT_PUBLIC_PROJECT_ID;

export const client = new Client()
  .setEndpoint("https://cloud.appwrite.io/v1")
  .setProject(id);

export const databaseClient = new Databases(client);
