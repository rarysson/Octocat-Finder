/* eslint-disable no-useless-catch */
import axios from "axios";

const API = axios.create({
    baseURL: "https://api.github.com/graphql",
    headers: { Authorization: "bearer " + process.env.VUE_APP_TOKEN }
});

// Um GET de uma API GraphQl na verdade é feita através do método POST
// Mas resolvi fazer dessa maneira para deixar mais intuitívo o uso
// Vale ressaltar que também existe o método GET numa API GraphQl, mas não farei uso aqui
API.get = async query => {
    try {
        const response = await API.post("", { query });

        return response.data.data;
    } catch (error) {
        throw error;
    }
};

API.get_user_data = async user => {
    const query = `query {
        user(login: "${user}") {
            name,
            avatarUrl,
            repositories(privacy: PUBLIC) {
                totalCount
            }
        }
    }`;

    try {
        const data = await API.get(query);

        if (data.user === null) {
            return null;
        } else {
            const user_info = {
                icon: data.user.avatarUrl,
                name: data.user.name,
                username: user,
                total_repo: data.user.repositories.totalCount
            };

            return user_info;
        }
    } catch (error) {
        throw error;
    }
};

API.get_repositories_data = async user => {
    const query = `query {
        user(login: "${user.username}") {
          repositories(last: ${
              user.total_repo <= 100 ? user.total_repo : 100
          }) {
            nodes {
              name
              defaultBranchRef {
                target {
                  ... on Commit {
                    history {
                      totalCount
                    }
                    message
                    oid
                  }
                }
              }
            }
          }
        }
      }`;

    try {
        const data = await API.get(query);

        if (data.user === null) {
            return null;
        } else {
            const repositories_info = [];

            data.user.repositories.nodes.forEach(repository => {
                if (repository.defaultBranchRef !== null) {
                    repositories_info.push({
                        name: repository.name,
                        commits_qnt:
                            repository.defaultBranchRef.target.history
                                .totalCount,
                        last_commit_message:
                            repository.defaultBranchRef.target.message,
                        last_commit_hash: repository.defaultBranchRef.target.oid
                    });
                }
            });

            return repositories_info;
        }
    } catch (error) {
        throw error;
    }
};

export default API;
