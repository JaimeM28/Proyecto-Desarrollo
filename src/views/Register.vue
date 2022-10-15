<script setup>
import Navbar from '../components/container/Navbar.vue';
import axios from 'axios'
import router from '../router/index.router';

   
async function registerHandler(credentials){
    try{
        let result = await axios.post('http://localhost:3000/users?', credentials)
        if(result.status == 201){
            localStorage.setItem('user-info',JSON.stringify(result.data))
            return router.push("/")
        }
    }
    
    catch{
        console.log('error')
    }
}
</script>

<template>
    <Navbar/>
    <div class="form">
        <div class="form__content">
            <FormKit
            type="form"
            submit-label="Registrar"
            @submit="registerHandler"
            :incomplete-message="false"
            >

            <FormKit
                    type="text"
                    name="name"
                    label="Nombre"
                    placeholder="Jaime"
                    validation="required"
                    :validation-messages="{
                        required: 'El nombre es requerido'
                    }"
                />

                <FormKit
                    type="email"
                    name="email"
                    label="Correo electronico"
                    placeholder="ejemplo@dominio.com"
                    validation="required|email"
                    :validation-messages="{
                        required: 'El correo es requerido',
                        email: 'El correo electronico no es valido'
                    }"
                />


                <FormKit
                    type="password"
                    name="password"
                    label="Contraseña"
                    placeholder="*********"
                    validation="required"
                    :validation-messages="{
                        required: 'La contraseña es requerida'
                    }"
                />
            </FormKit>
        </div>
    </div>
</template>