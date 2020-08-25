import axios from "axios";

const API = axios.create({
    baseURL: "https://api.github.com/graphql",
    headers: { Authorization: "bearer " + process.env.VUE_APP_TOKEN }
});

// Um GET de uma API GraphQl na verdade é feita através do método POST
// Mas resolvi fazer dessa maneira para deixar mais intuitívo o uso
// Vale ressaltar que também existe o método GET numa API GraphQl, mas não farei uso aqui
API.get = async query => {
    // eslint-disable-next-line no-useless-catch
    try {
        const response = await API.post("", { query });

        return response.data.data;
    } catch (error) {
        throw error;
    }
};

export default API;
