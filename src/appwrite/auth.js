import { account } from "./appwrite";
import { ID } from "appwrite";

class AuthService {

    async createAccount({ email, password, username }) {
        try {
            const userAccount = await account.create(ID.unique(), email, password, username);

            if (userAccount) {
                return this.login({ email, password });
            } else {
                return userAccount;
            }

        } catch (error) {
           
            throw error;
        }
    }

    async login({ email, password }) {
        try {
            return await account.createEmailSession(email, password);
        } catch (error) {
            
            throw error;
        }

    }

    async logout() {
        try {
            return await account.deleteSession("current");
        } catch (error) {
           throw error;
        }
    }

    async getCurrentUser() {
        try {
            const loggedIn = await account.get();
            return loggedIn;
        } catch (error) {
            throw error;

        }
    }

}

const authService = new AuthService();

export default authService;