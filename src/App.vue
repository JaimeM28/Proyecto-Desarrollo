<script setup>
import Navbar from './components/container/Navbar.vue';
import Welcome from './components/container/Welcome.vue';
import Card from './components/container/Card.vue';
import Recipies from './components/container/Recipies/Recipies.vue';
import Footer from './components/container/Footer.vue';

</script>

<template>
<div class="w-full min-h-screen relative"> 
	<router-view/>
	<Footer class="absolute w-full bottom-0"/>
</div>
</template>

