import { Client, Account, Databases, Storage } from "appwrite";

export const client = new Client()
  .setEndpoint("https://cloud.appwrite.io/v1")
  .setProject("647e5f3a54caf6c3a4f7");

export const databaseClient = new Databases(client);

export const accountClient = new Account(client);

export const storageClient = new Storage(client);
