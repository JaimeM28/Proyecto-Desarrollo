<script setup>
import Secondary from '../base/Button/Secondary.vue';
import Button from '../base/Button/Button.vue';

</script>

<template>
    <div class="navbar fixed top-0 bg-yellow-300">
    <div class="navbar__img">
        <img src="../../assets/images/logo.png" alt="logo olla creativa">
    </div>
    <div class="navbar__href">
        <a href="#">Inicio</a>
        <a href="#">Sobre nosotros</a>
        <a href="#">Contactanos</a>
    </div>
    <div class="navbar__btn">
        <Secondary :text="'Registro'"/>
        <Button :text="'Iniciar Sesion'"/>
    </div>
    </div>
</template>

<style>

</style>





