<script setup>
import Welcome from '../components/container/Welcome.vue';
import Navbar from '../components/container/Navbar.vue';
</script>

<template>
    <Navbar/>
    <Welcome :text="'Proyecto escolar'"/>
</template>