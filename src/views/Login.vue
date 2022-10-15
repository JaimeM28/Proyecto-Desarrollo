<script setup>
import Navbar from '../components/container/Navbar.vue';
import router from '../router/index.router';
import axios from 'axios'

async function loginHandler(credentials){
    try{
        const result = await axios.get('http://localhost:3000/users?email='+ credentials.email+'&password='+credentials.password)
        if(result.status == 200 && result.data.length > 0){
           router.push('/')
           localStorage.setItem("user-info",JSON.stringify(result.data[0]))
            console.log('exito')
        }
        else{
            console.log('error data')
            window.alert("Error al iniciar sesión");
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
    submit-label="Iniciar Sesión"
    :incomplete-message="false"
    @submit="loginHandler"
    >
        <FormKit
			type="email"
            name="email"
            placeholder="ejemplo@dominio.com"
            label="Correo Electronico"
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