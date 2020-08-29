<template>
    <div class="container">
        <div class="bg-pattern"></div>

        <alert-modal v-model="open_modal" :message="alert_message" />

        <div class="content-container">
            <img src="../assets/logo.png" alt="bitwise logo" class="logo" />

            <div class="search-container">
                <p>
                    Buscar um usuário no <strong>GitHub</strong>
                    <br />
                    ficou muito <strong>fácil!</strong>
                </p>

                <search-input class="search-input" @searched="search_user" />
            </div>

            <img src="../assets/background_home.png" alt="" class="bg-home" />

            <social-links class="social" />
        </div>
    </div>
</template>

<script>
import SearchInput from "../components/SearchInput";
import SocialLinks from "../components/SocialLinks";
import AlertModal from "../components/AlertModal";
import API from "../util/api";

export default {
    name: "Home",

    components: {
        SearchInput,
        SocialLinks,
        AlertModal
    },

    data() {
        return {
            open_modal: false,
            alert_message: ""
        };
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
                        this.$router.push({
                            name: "User",
                            params: { user: user_info }
                        });
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
    height: 50px;
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

.bg-home {
    grid-area: img;
    place-self: center;
}

.social {
    text-align: center;
    grid-area: footer;
    padding: 10vw 0 1vw;
}

@media (max-width: 900px) {
    .logo {
        filter: brightness(0) saturate(100%) invert(26%) sepia(25%)
            saturate(5617%) hue-rotate(285deg) brightness(83%) contrast(108%);
    }

    .bg-pattern {
        width: 100%;
        height: 100%;
    }

    .content-container {
        padding: 4vw 5vw 1vw;
        grid-template-areas:
            "header"
            "input"
            "footer";
    }

    .bg-home {
        display: none;
    }

    p {
        color: var(--purple);
    }

    .search-container {
        width: 100%;
    }
}
</style>
