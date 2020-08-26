<template>
    <form class="search-box" @submit.prevent="search">
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
            <img src="../assets/icon/search.png" alt="botão buscar usuário" />
        </button>
    </form>
</template>

<script>
export default {
    name: "SearchInput",

    data() {
        return {
            user: null
        };
    },

    methods: {
        search() {
            this.$emit("searched", this.user);
        }
    }
};
</script>

<style scoped>
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
