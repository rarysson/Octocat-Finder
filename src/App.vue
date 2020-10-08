<template>
    <div id="app">
        <router-view />
    </div>
</template>

<style>
@import url("https://fonts.googleapis.com/css2?family=Roboto:wght@100;300;400;700;900&display=swap");

html {
    background-color: var(--light);
    scroll-behavior: smooth;
}

#app {
    font-family: "Roboto", sans-serif;
}

:root {
    --primary: #382039;
    --secondary: #5a3d5c;
    --purple: #a51c92;
    --purple-light: #fd71ea;
    --dark: #200f21;
    --light: #f0f0f0;
    --blue: #657fa0;
    --purple-gradient: linear-gradient(90deg, #a51c92 0%, #f638dc 100%);
    --light-gradient: linear-gradient(359.39deg, #efeeee 0.46%, #ffffff 99.42%);
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

button {
    cursor: pointer;
    font-family: inherit;
}
</style>
