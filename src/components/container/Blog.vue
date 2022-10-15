<script setup>
import router from '../../router/index.router';

import Button from '../base/Button/Button.vue';
let info = JSON.parse(localStorage.getItem("info-receta"));

function regresar() {
    localStorage.removeItem("info-receta")
    router.push('/')
}

</script>

<template>
    <div class="blog pt-9 grid gap-1.5 justify-items-center lg:gap-5 m-8">
    <img class="blog__img rounded-lg" :src="info.url" alt="receta">
    <p class="blog__title  text-xl font-bold sm:text-xl md:text-2xl lg:text-4xl  ">{{info.title}}</p>
    <p class ="blog__content text-sm sm:text-sm md:text-base lg:text-base">{{info.content}}  </p>
    <Button class="blog__btn w-1/4" :text="'Regresar'" v-on:change="regresar"/>

</div>
</template>

<style>

.blog__img{
    width: 500px;
    height: 300px;
    box-shadow: rgba(50, 50, 93, 0.25) 0px 13px 27px -5px, rgba(0, 0, 0, 0.3) 0px 8px 16px -8px;
}

</style>