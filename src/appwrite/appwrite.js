import { Client, Account } from "appwrite";
import { config } from "../config/config";


const client = new Client();

client
    .setEndpoint(config.appWriteUrl)
    .setProject(config.appwriteProjectId);

export const account = new Account(client);   
