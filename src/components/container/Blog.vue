<script setup>
import axios from 'axios';
import Button from '../base/Button/Button.vue';
let info = JSON.parse(localStorage.getItem("info-receta"));

function regresar() {
    localStorage.removeItem("info-receta")
    router.push('/')
}

async function registerComents(credentials){
    try{
        let result = await axios.post('http://localhost:3000/comentarios?', credentials)
        if(result.status == 201){
          console.log('exito')
        }
    }
    
    catch{
        console.log('error')
    }
}

</script>

<template>
    <div class="blog pt-9 grid gap-1.5 justify-items-center lg:gap-5 m-8">
    <img class="blog__img rounded-lg" :src="info.url" alt="receta">
    <p class="blog__title  text-xl font-bold sm:text-xl md:text-2xl lg:text-4xl  ">{{info.title}}</p>
    <p class ="blog__content text-sm sm:text-sm md:text-base lg:text-base">{{info.content}}  </p>
    <Button class="blog__btn w-1/4" :text="'Regresar'" v-on:change="regresar"/>
   
    <FormKit
        type="form"
        submit-label="Enviar comentarios"
         @submit="registerComents"
        :incomplete-message="false"
    >
    <FormKit
        type="text"
        name="comentario"
        label="Comentarios"
        placeholder="Escribe un comentario"
        />
</FormKit>

</div>
</template>

<style>

.blog__img{
    width: 500px;
    height: 300px;
    box-shadow: rgba(50, 50, 93, 0.25) 0px 13px 27px -5px, rgba(0, 0, 0, 0.3) 0px 8px 16px -8px;
}
.blog{
    padding-bottom: 100px;
 
}
</style>