<template>
    <h1>Página do usuário</h1>
</template>

<script>
export default {
    name: "UserPage",

    mounted() {
        console.log(this.$route.params);
    }
};
</script>

<style scoped></style>
