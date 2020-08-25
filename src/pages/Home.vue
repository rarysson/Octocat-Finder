<template>
    <div class="container">
        <div class="bg-pattern"></div>

        <modal v-model="open_modal" />

        <div class="content-container">
            <img src="../assets/logo.png" alt="bitwise logo" class="logo" />

            <div class="search-container">
                <p>
                    Buscar um usuário no <strong>GitHub</strong>
                    <br />
                    ficou muito <strong>fácil!</strong>
                </p>

                <form class="search-box" @submit.prevent="search_user">
                    <div class="icon-input-box github">
                        <img src="../assets/icon/github.png" alt="" />
                    </div>

                    <input
                        required
                        type="text"
                        placeholder="Buscar usuário"
                        v-model="user"
                    />

                    <button class="icon-input-box search" type="submit">
                        <img
                            src="../assets/icon/search.png"
                            alt="botão buscar usuário"
                        />
                    </button>
                </form>
            </div>

            <img src="../assets/background_home.png" alt="" class="bg-home" />

            <footer>
                <social-links />
            </footer>
        </div>
    </div>
</template>

<script>
import SocialLinks from "../components/SocialLinks";
import Modal from "../components/Modal";
import API from "../util/api";

export default {
    name: "Home",

    components: {
        SocialLinks,
        Modal
    },

    data() {
        return {
            user: null,
            open_modal: false
        };
    },

    methods: {
        async search_user() {
            const query = `query {
                user(login: "${this.user}") {
                    name,
                    avatarUrl,
                    repositories {
                        totalCount
                    }
                }
            }`;
            const data = await API.get(query);

            const user_info = {
                icon: data.user.avatarUrl,
                name: data.user.name,
                username: this.user,
                total_repo: data.user.repositories.totalCount
            };

            if (data.user === null) {
                this.open_modal = true;
            } else {
                this.$router.push({
                    name: "User",
                    params: { user: user_info }
                });
            }
        }
    }
};
</script>

<style scoped>
.container {
    height: 100vh;
    background-color: var(--light);
}

.bg-pattern {
    position: absolute;
    right: 0;
    width: 65%;
    height: 80%;
    background: linear-gradient(to top right, var(--light) 50%, transparent 50%),
        url("../assets/pattern_big.png");
    background-repeat: round;
}

.content-container {
    position: relative;
    z-index: 1;
    padding: 4vw 10vw 1vw;
    height: 100vh;
    display: grid;
    grid-template-areas:
        "header header"
        "input img"
        "footer footer";
}

.logo {
    width: 130px;
    grid-area: header;
    margin-bottom: 50px;
}

p {
    font-weight: 300;
    font-size: 2.5rem;
    color: var(--secondary);
}

strong {
    font-weight: bold;
}

.search-container {
    grid-area: input;
    align-self: center;
    width: 90%;
}

.search-box {
    height: 56px;
    display: flex;
    margin-top: 6vw;
    border-radius: 5px;
    box-shadow: 0 4px 4px rgba(0, 0, 0, 0.25);
}

.search-box input {
    border: none;
    font-family: inherit;
    font-size: 1rem;
    flex: 1;
    padding-left: 20px;
}

.icon-input-box {
    width: 64px;
    display: grid;
    place-items: center;
    border-radius: 5px;
}

.icon-input-box.search {
    background-color: #fff;
    border: none;
    border-top-left-radius: 0px;
    border-bottom-left-radius: 0px;
}

.icon-input-box.search:hover {
    background-color: var(--light);
}

.icon-input-box.github {
    background-color: var(--secondary);
    border-top-right-radius: 0px;
    border-bottom-right-radius: 0px;
}

.search-box:focus-within .icon-input-box.github {
    background: var(--purple-gradient);
}

.bg-home {
    grid-area: img;
    place-self: center;
}

footer {
    text-align: center;
    grid-area: footer;
    margin-top: 150px;
}
</style>
