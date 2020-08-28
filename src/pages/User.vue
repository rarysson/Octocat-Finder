<template>
    <div class="container">
        <alert-modal v-model="open_modal" :message="alert_message" />

        <div class="user-content-container">
            <header>
                <router-link to="/">
                    <img
                        src="../assets/logo.png"
                        alt="bitwise logo"
                        class="logo"
                    />
                </router-link>
                <search-input class="search-input" @searched="search_user" />
                <social-links class="social" />
            </header>

            <div class="user-container">
                <img
                    v-if="default_user"
                    :src="user.icon"
                    alt=""
                    class="user-icon"
                    style="background-color: var(--dark)"
                />
                <img v-else :src="user.icon" alt="" class="user-icon" />

                <div class="user-info">
                    <p class="user-name">{{ user.name || user.username }}</p>

                    <div class="repositories">
                        <span class="side-effect"></span>

                        <p>
                            <strong>{{ user.total_repo }}</strong> <br />
                            Repositórios
                        </p>
                    </div>
                </div>
            </div>

            <div class="table-container">
                <table>
                    <caption>
                        Atividades de
                        {{
                            user.name
                        }}
                    </caption>

                    <thead>
                        <tr>
                            <th>Nome do repositório</th>
                            <th>Quantidade de commit</th>
                            <th>Mensagem do último commit</th>
                            <th>Hash do útilmo commit</th>
                        </tr>
                    </thead>

                    <tbody>
                        <tr v-if="repositories.length === 0 && !default_user">
                            <td class="loading"></td>
                            <td class="loading"></td>
                            <td class="loading"></td>
                            <td class="loading"></td>
                        </tr>

                        <tr
                            v-for="(repository, index) in repositories"
                            :key="index"
                        >
                            <td>{{ repository.name }}</td>
                            <td>{{ repository.commits_qnt }}</td>
                            <td>{{ repository.last_commit_message }}</td>
                            <td>{{ repository.last_commit_hash }}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>

        <footer></footer>
    </div>
</template>

<script>
import SearchInput from "../components/SearchInput";
import AlertModal from "../components/AlertModal";
import SocialLinks from "../components/SocialLinks";
import API from "../util/api";

export default {
    name: "UserPage",

    components: {
        SearchInput,
        AlertModal,
        SocialLinks
    },

    data() {
        return {
            user: {
                icon: require("../assets/icon/github.svg"),
                name: "Octocat",
                username: "octocat",
                total_repo: 0
            },
            repositories: [],
            default_user: true,
            open_modal: false,
            alert_message: ""
        };
    },

    beforeMount() {
        this.user = this.$route.params.user || this.user;
        this.default_user = this.user.total_repo === 0;

        if (!this.default_user) {
            this.search_repositories();
        }
        console.log(this.default_user);
    },

    methods: {
        async search_user(user) {
            try {
                this.default_user = false;
                const user_info = await API.get_user_data(user);

                if (user_info === null) {
                    this.open_modal = true;
                    this.alert_message = "Nenhum usuário encontrado!";
                } else {
                    if (user_info.total_repo === 0) {
                        this.open_modal = true;
                        this.alert_message = `O usuário ${user} não possui nenhum repositório!`;
                    } else {
                        this.user = user_info;
                        this.repositories = [];
                        this.search_repositories();
                    }
                }
            } catch (error) {
                console.log(error);
            }
        },

        async search_repositories() {
            try {
                const repositories_info = await API.get_repositories_data(
                    this.user
                );

                this.repositories = repositories_info;
            } catch (error) {
                console.log(error);
            }
        }
    }
};
</script>

<style scoped>
.container {
    background: var(--light-gradient);
}

.user-content-container {
    height: 100vh;
    padding: 4vw 10vw 8vw;
    display: flex;
    flex-direction: column;
}

header {
    display: flex;
    justify-content: space-between;
    margin-bottom: 4vw;
}

.logo {
    width: 130px;
    height: 50px;
}

.search-input {
    margin-top: 0;
    width: 500px;
}

.social {
    align-self: center;
}

.user-container {
    display: flex;
    margin-bottom: 2vw;
}

.user-info {
    padding-left: 30px;
    align-self: flex-end;
}

.user-icon {
    width: 120px;
    height: 120px;
    border-radius: 5px;
    box-shadow: 0 2px 4px rgba(84, 84, 89, 0.2);
}

.user-name {
    font-weight: bold;
    font-size: 1.4rem;
    color: var(--blue);
    margin-bottom: 10px;
}

.repositories {
    width: 90px;
    height: 60px;
    background-color: #fff;
    box-shadow: 0px 2px 38px rgba(84, 84, 89, 0.14);
    border-radius: 5px;
    position: relative;
    display: grid;
    place-items: center;
    text-align: center;
}

.repositories p {
    font-size: 10px;
    color: #878790;
}

.repositories strong {
    font-size: 18px;
    color: var(--dark);
}

.side-effect {
    width: 3px;
    height: 16px;
    position: absolute;
    left: 0;
    top: 35%;
    background-color: var(--secondary);
    border-radius: 0px 100px 100px 0px;
}

.table-container {
    background-color: #fff;
    border-radius: 5px;
    width: 100%;
    flex: 1;
    display: flex;
    overflow: auto;
    color: var(--blue);
}

caption {
    text-align: left;
    font-weight: bold;
    font-size: 1.25rem;
    margin-bottom: 15px;
    padding: 30px 30px 0;
}

table {
    width: 100%;
    border-collapse: collapse;
}

th {
    text-align: left;
    width: 25%;
}

th,
td {
    border-bottom: 1px solid #d4dae4;
    padding: 30px;
    font-size: 0.95rem;
}

tr:nth-of-type(even) {
    background-color: #fafafc;
}

.loading {
    position: relative;
}

.loading::after {
    display: block;
    content: "";
    position: absolute;
    top: 0;
    width: 100px;
    height: 100%;
    transform: translateX(-100%);
    background: linear-gradient(
        90deg,
        transparent,
        rgba(125, 125, 125, 0.2),
        transparent
    );
    animation: loading 1s infinite;
}

@keyframes loading {
    100% {
        transform: translateX(100%);
    }
}
</style>
