<template>
    <form class="search-box" @submit.prevent="search">
        <div class="icon-input-box github">
            <img src="../assets/icon/github.png" alt="" />
        </div>

        <input
            required
            type="text"
            placeholder="Buscar usuário"
            list="users-list"
            v-model="user"
            @input="search_users"
        />
        <datalist id="users-list">
            <option
                v-for="(option, index) in options"
                :key="index"
                :value="option.login"
            >
                {{ option.login }}
            </option>
        </datalist>

        <button class="icon-input-box search" type="submit">
            <img src="../assets/icon/search.png" alt="botão buscar usuário" />
        </button>
    </form>
</template>

<script>
import API from "../util/api";

export default {
    name: "SearchInput",

    data() {
        return {
            user: null,
            options: [],
            timeout: null
        };
    },

    methods: {
        search() {
            this.$emit("searched", this.user);
        },

        async search_users() {
            try {
                const get_user = async () => {
                    const query = `{
                        search(query: "${this.user}", type: USER, last: 50) {
                            nodes {
                                ... on User {
                                    login
                                }
                            }
                        }
                    }`;
                    const users = await API.get(query);

                    this.options = users.search.nodes;
                };

                this.debounce(get_user, 350);
            } catch (error) {
                console.log(error);
            }
        },

        debounce(callback, delay) {
            clearTimeout(this.timeout);
            this.timeout = setTimeout(callback, delay);
        }
    }
};
</script>

<style>
.search-box {
    height: 56px;
    display: flex;
    margin-top: 6vw;
    border-radius: 5px;
    box-shadow: 0 4px 4px rgba(0, 0, 0, 0.25);
    background-color: white;
}

.search-box input {
    border: none;
    font-family: inherit;
    font-size: 1rem;
    flex: 1;
    padding-left: 20px;
    outline: none;
}

.icon-input-box {
    width: 64px;
    display: grid;
    place-items: center;
    border-radius: 5px;
}

.icon-input-box.search {
    border: none;
    background-color: #fff;
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
</style>
