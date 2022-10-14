<script setup>
import Secondary from '../base/Button/Secondary.vue'

defineProps({
    url:{
        type: String,
        default: Image
    },

    title:{
        type: String,
        default:'Receta'
    },

})
</script>

<template>
      <div class="card border-zinc-800 pt-50 rounded-lg border-2 ">
        <img class="card__img" :src="url" alt="comida">
        <p class="card__title">{{title}}</p>
        <Secondary class="card__secondary" :text="'Ver receta'"/>
    </div>
</template>

<style>

.card{
    width: 220px;
    height: 320px;
    padding: 15px;
    margin: 10px;
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

.card .card__secondary{
    height: 30px;
}
</style>