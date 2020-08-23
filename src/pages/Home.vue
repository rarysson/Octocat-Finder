<template>
    <div class="container">
        <div class="bg-pattern"></div>

        <div class="content-container">
            <img src="../assets/logo.png" alt="bitwise logo" class="logo" />

            <div class="search-container">
                <p>
                    Buscar um usuário no <strong>GitHub</strong>
                    <br />
                    ficou muito <strong>fácil!</strong>
                </p>

                <form class="search-box">
                    <div class="icon-input-box search">
                        <img src="../assets/icon/search.png" alt="" />
                    </div>

                    <input
                        type="text"
                        placeholder="Buscar usuário"
                        :value="user"
                    />

                    <div class="icon-input-box github">
                        <img src="../assets/icon/github.png" alt="" />
                    </div>
                </form>
            </div>

            <img src="../assets/background_home.png" alt="" class="bg-home" />

            <footer>
                <img
                    src="../assets/icon/medium.png"
                    alt="medium logo"
                    class="social-icon"
                />
                <img
                    src="../assets/icon/linkedin.png"
                    alt="linkedin logo"
                    class="social-icon"
                />
                <img
                    src="../assets/icon/instagram.png"
                    alt="instagram logo"
                    class="social-icon"
                />
            </footer>
        </div>
    </div>
</template>

<script>
export default {
    name: "Home",

    data() {
        return {
            user: null
        };
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
    box-shadow: 0 4px 4px rgba(0, 0, 0, 0.25);
}

.search-box input {
    border: none;
    font-family: inherit;
    font-size: 1rem;
    flex: 1;
}

.icon-input-box {
    width: 64px;
    display: grid;
    place-items: center;
    border-radius: 5px;
}

.icon-input-box.search {
    background-color: #fff;
}

.icon-input-box.github {
    background-color: var(--secondary);
    border-top-left-radius: 0px;
    border-bottom-left-radius: 0px;
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

.social-icon {
    width: 25px;
    height: 25px;
    margin: 0 10px;
    filter: invert(68%) sepia(20%) saturate(5972%) hue-rotate(280deg)
        brightness(105%) contrast(98%);
}

.social-icon:hover {
    cursor: pointer;
    filter: invert(25%) sepia(16%) saturate(1330%) hue-rotate(248deg)
        brightness(87%) contrast(83%);
}
</style>
