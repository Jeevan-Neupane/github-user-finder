
export const config = {
    appWriteUrl: String(import.meta.env.VITE_APPWRITE_ENDPOINT),
    appwriteProjectId: String(import.meta.env.VITE_APPWRITE_PROJECT_ID),
    githubClientID: String(import.meta.env.VITE_GITHUB_CLIENT_ID),
    githubClientSecrets: String(import.meta.env.VITE_GITHUB_CLIENT_SECRETS)

}