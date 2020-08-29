<template>
    <footer>
        <div class="bar-effect"></div>

        <div class="content-container">
            <div class="top">
                <img src="../assets/logo.png" alt="bitwise logo" class="logo" />

                <p class="about-us">
                    Acreditamos no valor da tecnologia e no impacto positivo que
                    a transformação digital exerce sobre a sociedade, mudando o
                    nosso dia a dia, facilitando atividades comuns e acelerando
                    os negócios.
                </p>

                <p class="location">
                    <strong>BRASIL</strong> <br />
                    R. Raphael Dias da Silva, 75 3º andar • Sala 306 e 308
                    Campolim • Sorocaba/SP
                </p>

                <p class="location">
                    <strong>CANADÁ</strong> <br />
                    830, Av. Ernest-Gagnon, Bureau 315, Sala 609 Quebec
                </p>
            </div>

            <div class="bottom">
                <p>Todos os direitos reservados - 2020</p>

                <social-links class="social" />

                <a @click="scroll_to_top">VOLTAR AO TOPO</a>
            </div>
        </div>
    </footer>
</template>

<script>
import SocialLinks from "../components/SocialLinks";

export default {
    name: "FooterInfo",

    components: {
        SocialLinks
    },

    methods: {
        scroll_to_top() {
            window.scrollTo(0, 0);
        }
    }
};
</script>

<style scoped>
footer {
    width: 100%;
    color: var(--purple-light);
    background-color: var(--primary);
    font-size: 0.85rem;
    font-weight: 300;
    letter-spacing: 1px;
    line-height: 20px;
}

.bar-effect {
    width: 100%;
    height: 100px;
    background-image: url("../assets/pattern.png");
    background-repeat: round;
}

.content-container {
    padding: 4vw 15vw 8vw;
}

.logo {
    width: 130px;
    height: 50px;
    filter: brightness(0) saturate(100%) invert(26%) sepia(25%) saturate(5617%)
        hue-rotate(285deg) brightness(83%) contrast(108%);
}

.content-container .top {
    padding-bottom: 4vw;
    border-bottom: 3px solid var(--purple);
    display: flex;
    justify-content: space-between;
}

strong {
    color: var(--light);
}

.about-us {
    width: 27%;
}

.location {
    width: 15%;
}

.content-container .bottom {
    padding-top: 4vw;
    display: flex;
    justify-content: space-between;
    align-items: center;
}

a {
    font-weight: bold;
    cursor: pointer;
}

a:hover {
    color: var(--purple);
}

@media (max-width: 900px) {
    .content-container .top {
        flex-wrap: wrap;
    }

    .about-us,
    .location {
        width: 50%;
        padding-right: 20px;
    }

    .about-us {
        margin-bottom: 50px;
    }

    .content-container .bottom {
        flex-wrap: wrap;
    }

    a {
        width: 100%;
        text-align: center;
    }

    .social {
        margin: 20px 0;
    }
}

@media (max-width: 550px) {
    .content-container .top {
        justify-content: center;
    }

    .content-container .top > *:not(:first-child) {
        width: 100%;
        margin-top: 20px;
    }

    .about-us {
        margin-bottom: 0;
    }

    .content-container .bottom > * {
        width: 100%;
        text-align: center;
    }
}
</style>
