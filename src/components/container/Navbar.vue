<script>
import Secondary from '../base/Button/Secondary.vue';
import Button from '../base/Button/Button.vue';

export default {
    data() {
        return {
            showMobileMenu: false,
        };
    },
    methods: {
        showMenu() {
            this.showMobileMenu = !this.showMobileMenu;
        },
    },
    components: { Button, Secondary }
};


</script>


<script setup>

import router from '../../router/index.router';
const loginRouter= () => {
    router.push('/login')
}

const registerRouter = () => {
    router.push("/register")
}
</script>

<template>
    <div class="navbar fixed top-0 bg-yellow-300 w-full z-10">
    <img src="../../assets/images/Hamburger.png" alt="menu" id="menu" @click="showMenu()">
    <div class="navbar__content bg-yellow-300 fixed" :class="this.showMobileMenu ? 'open-menu' : 'closed-menu'">
    <div class="navbar__img">
        <img src="../../assets/images/logo.png" alt="logo olla creativa">
        
    </div>
    <div class="navbar__href">
        <a href="/">Inicio</a>
        <a href="/about">Sobre nosotros</a>
        <a href="/contact">Contactanos</a>
    </div>
    <div class="navbar__btn">
        <Secondary :text="'Registro'" v-on:change="registerRouter"/>
        <Button :text="'Iniciar Sesion'" v-on:change="loginRouter"/>
    </div>
    </div>
    </div>
</template>







