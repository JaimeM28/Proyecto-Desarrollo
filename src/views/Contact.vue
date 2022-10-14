<script setup>
import Welcome from '../components/container/Welcome.vue';
import Navbar from '../components/container/Navbar.vue';
</script>

<template>
   <Navbar/>
   <Welcome :text="'Para más información, visitar el siguiente link: https://youtu.be/dQw4w9WgXcQ'"/>
</template>