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
}

h1 {
    margin-bottom: 30px;
}
</style>
