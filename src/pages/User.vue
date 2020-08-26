<template>
    <div class="container">
        <alert-modal v-model="open_modal" :message="alert_message" />

        <div class="user-content-container">
            <header>
                <img src="../assets/logo.png" alt="bitwise logo" class="logo" />
                <search-input class="search-input" @searched="search_user" />
                <social-links class="social" />
            </header>

            <div class="user-container">
                <img
                    :src="user.icon"
                    alt=""
                    width="120"
                    height="120"
                    class="user-icon"
                />

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
            open_modal: false,
            alert_message: ""
        };
    },

    beforeMount() {
        this.user = this.$route.params.user || this.user;
    },

    methods: {
        async search_user(user) {
            try {
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
                    }
                }
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
    background-color: var(--dark);
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
</style>
