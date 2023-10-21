import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"
import { config } from "../../config/config"
const client_id_secret = `client_id=${config.githubClientID}&client_secret=${config.githubClientSecrets}`;

const githubApi = createApi({
    reducerPath: "githubUsers",
    baseQuery: fetchBaseQuery({
        baseUrl: "https://api.github.com"
    }), endpoints(builder) {
        return {
            fetchAllUsers: builder.query({
                query: () => {
                    return {
                        url: `/users?${client_id_secret}`,
                        method: 'GET'

                    }
                }
            }),
            fetchSingleUser: builder.query({
                query: (username) => {
                    return {
                        url: `/users/${username}?${client_id_secret}`,
                        method: 'GET'
                    }
                }

            }),
            fetchSearchedUser: builder.query({
                query: (query) => {
                    return {
                        url: `search/users?q=${query}`,
                        method: 'GET'
                    }
                }
            }),
            fetchUserRepos: builder.query(
                {
                    query: (username) => {

                        return {
                            url: `users/${username}/repos?${client_id_secret}`,
                            method: 'GET'
                        }
                    }
                }),
            fetchUsersRepoLanguages: builder.query({
                query: ({ username, reponame }) => {
                    return {

                        url: `/repos/${username}/${reponame}/languages`,
                        method: 'GET'
                    }
                }
            })
        }
    }

})

export default githubApi;
export const { useFetchAllUsersQuery, useFetchSearchedUserQuery, useFetchSingleUserQuery, useFetchUserReposQuery, useFetchUsersRepoLanguagesQuery } = githubApi;