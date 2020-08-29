<template>
    <div class="container">
        <div>
            <h1>A URL que você digitou não existe</h1>
            <button>
                <router-link to="/">
                    Voltar para a página inicial
                </router-link>
            </button>
        </div>
    </div>
</template>

<script>
export default {
    name: "Error404Page"
};
</script>

<style scoped>
.container {
    height: 100vh;
    display: grid;
    place-items: center;
    text-align: center;
    background: var(--light);
}

h1 {
    margin-bottom: 30px;
}

button {
    padding: 15px;
    border: none;
    border-radius: 10px;
    color: var(--light);
    background-color: var(--purple);
    font-size: 1.1rem;
}

button:hover {
    background: var(--purple-gradient);
    transform: scale(1.05);
}
</style>
