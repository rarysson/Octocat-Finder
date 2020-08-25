<template>
    <transition name="modal">
        <div v-if="open">
            <div class="overlay" @click.self="open = false">
                <div class="modal">
                    <button @click="open = false">
                        <img
                            src="../assets/icon/close.svg"
                            alt=""
                            width="13"
                            height="auto"
                        />
                    </button>

                    <h1>Nenhum usuário encontrado!</h1>

                    <p>Enquanto isso, acompanhe a Bitwise nas redes sociais:</p>
                    <social-links class="social" />
                </div>
            </div>
        </div>
    </transition>
</template>

<script>
import SocialLinks from "../components/SocialLinks";

export default {
    props: ["value"],

    components: {
        SocialLinks
    },

    data() {
        return {
            open: this.value ?? false
        };
    },

    watch: {
        value() {
            this.open = this.value;
        },

        open() {
            this.$emit("input", this.open);
        }
    }
};
</script>

<style scoped>
.modal {
    width: 600px;
    margin: 0px auto;
    padding: 15px 15px 20px 30px;
    color: var(--light);
    background: var(--purple-gradient);
    border-radius: 10px;
    transition: all 0.2s ease-in;
    display: grid;
    grid-template-areas:
        "button button"
        "h1 h1"
        "p social";
    align-items: center;
}

.fadeIn-enter {
    opacity: 0;
}

.fadeIn-leave-active {
    opacity: 0;
    transition: all 0.2s step-end;
}

.fadeIn-enter .modal,
.fadeIn-leave-active.modal {
    transform: scale(1.1);
}

.overlay {
    position: fixed;
    top: 0;
    left: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
    background: #00000094;
    z-index: 999;
    transition: opacity 0.2s ease;
}

button {
    grid-area: button;
    border: none;
    background-color: transparent;
    justify-self: end;
}

button:hover {
    filter: brightness(1) invert(1);
}

h1 {
    grid-area: h1;
    margin: 5px 0 25px;
}

p {
    grid-area: p;
    font-size: 14px;
}

.social {
    grid-area: social;
    filter: brightness(0) invert(1);
}
</style>
