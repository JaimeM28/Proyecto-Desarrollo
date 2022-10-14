<script setup>
defineProps({
    text:{
        type: String,
        default:'Las mejores recetas a tu alcance'
    }
})
</script>

<template>
    <div class="w-full h-120 grid justify-items-center pt-6" >
        <img class="w-1/2 mt-10" src="../../assets/images/logo.png" alt="imagen"> 
        <p class="text-xl font-bold sm:text-xl md:text-2xl lg:text-4xl ">{{text}}</p>
    </div>
</template>

<style>


</style>