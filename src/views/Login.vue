<script setup>
import Navbar from '../components/container/Navbar.vue';


</script>

<template>
    <Navbar/>
    <div class="form">
    <div class="form__content">
    <FormKit
    type="form"
    submit-label="Iniciar Sesión"
    :incomplete-message="false"
    @submit="ola"
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