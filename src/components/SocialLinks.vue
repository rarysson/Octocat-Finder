<template>
    <div>
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
    </div>
</template>

<script>
export default {
    name: "SocialLinks"
};
</script>

<style scoped>
.social-icon {
    width: 25px;
    height: 25px;
    margin: 0 7px;
    filter: invert(68%) sepia(20%) saturate(5972%) hue-rotate(280deg)
        brightness(105%) contrast(98%);
}

.social-icon:hover {
    cursor: pointer;
    filter: invert(25%) sepia(16%) saturate(1330%) hue-rotate(248deg)
        brightness(87%) contrast(83%);
}
</style>
