<script setup>
import Recipies from './data.js'
import Card from '../Card.vue';

let userState = false
const userInfo = JSON.parse(localStorage.getItem('user-info'))
try {
  if(userInfo.name && userInfo.email){
    userState = true
  }
} catch{
  console.log("Usuario no encontrado")
  
}
</script>

<template>
    <div class="recipies pt-8">
        <div class="recipies__card" v-for="(item) in Recipies"> 
            <Card 
            :title="item.title" 
            :url="item.url"
              :item="item"
              :disabled="!userState"/>
        </div>
    </div>
</template>

<style>
.recipies {
    width: 100%;
    min-height: 100vh;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 15px;
    padding-bottom: 100px;
}



@media screen and (max-width: 900px) {
  .recipies {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media screen and (max-width: 600px) {
  .recipies {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media screen and (max-width: 540px) {
  .recipies {
    grid-template-columns: repeat(1, 1fr);
    min-width: 325px;
  }
}


</style>