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
            repositories {
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

export default API;
