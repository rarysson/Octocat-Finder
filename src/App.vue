<template>
    <div id="app">
        <router-view />
    </div>
</template>

<style>
@import url("https://fonts.googleapis.com/css2?family=Roboto:wght@100;300;400;700;900&display=swap");

#app {
    font-family: "Roboto", sans-serif;
}

/* Configurações de Reset */
*,
*::before,
*::after {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
}

a {
    text-decoration: none;
    color: inherit;
}

ul,
ol {
    list-style: none;
}

button {
    cursor: pointer;
    font-family: inherit;
}
</style>
