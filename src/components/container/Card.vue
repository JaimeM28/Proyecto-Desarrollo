<script setup>
import Secondary from '../base/Button/Secondary.vue'

import router from '../../router/index.router'
defineProps({
    url:{
        type: String,
        default: Image
    },

    title:{
        type: String,
        default:'Receta'
    },

    item: {
        type: Object,
    }
    

})

function blog(item) {
    localStorage.setItem("info-receta",JSON.stringify(item))
    router.push('/blog-page')
}
</script>



<template>
    <div class="card border-zinc-800  rounded-lg border">
        <img class="card__img" :src="url" alt="comida">
        <p class="card__title">{{title}}</p>
        <Secondary class="card__secondary" :text="'Ver receta'" v-on:change="blog(item)"/>
    </div>
</template>

<style>

.card{
    width: 95%;
    height: 340px;
    padding: 15px;
    margin: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
}

.card:hover{
    box-shadow: rgba(0, 0, 0, 0.25) 0px 14px 28px, rgba(0, 0, 0, 0.22) 0px 10px 10px;
}

    .card__title{
        width:100%;
        text-align: center;
        font-size: 1.125rem;
        line-height: 1.75rem;
        font-weight: 600;
    }

.card__img{
    width: 100%;
    height: 200px;
}

.card__secondary{
    position: relative;
    top: 10px;
    width: 50%;
    height: 30px;
}
</style>