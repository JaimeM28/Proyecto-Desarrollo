<script setup>
import Navbar from './components/container/Navbar.vue';
import Welcome from './components/container/Welcome.vue';
import Card from './components/container/Card.vue';

</script>

<template>
<Navbar/>
<Welcome/>
<Card 
        :title="'Chilquiles'"  
        :url="'https://upload.wikimedia.org/wikipedia/commons/thumb/9/92/01_Chilaquiles_verdes_con_frijoles_chinos.jpg/1200px-01_Chilaquiles_verdes_con_frijoles_chinos.jpg'"
        />
</template>

