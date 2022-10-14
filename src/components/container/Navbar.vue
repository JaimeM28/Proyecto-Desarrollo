<script>
import Secondary from '../base/Button/Secondary.vue';
import Button from '../base/Button/Button.vue';
export default {
    data() {
        return {
            showMobileMenu: false,
        };
    },
    methods: {
        showMenu() {
            this.showMobileMenu = !this.showMobileMenu;
        },
    },
    components: { Button, Secondary }
};
</script>

<template>
    <div class="navbar fixed top-0 bg-yellow-300 w-full">
    <img src="../../assets/images/Hamburger.png" alt="menu" id="menu" @click="showMenu()">
    <div class="navbar__content bg-yellow-300" :class="this.showMobileMenu ? 'open-menu' : 'closed-menu'">
    <div class="navbar__img">
        <img src="../../assets/images/logo.png" alt="logo olla creativa">
        
    </div>
    <div class="navbar__href">
        <a href="#">Inicio</a>
        <a href="#">Sobre nosotros</a>
        <a href="#">Contactanos</a>
    </div>
    <div class="navbar__btn">
        <Secondary :text="'Registro'"/>
        <Button :text="'Iniciar Sesion'"/>
    </div>
    </div>
    </div>
</template>

<style>



@media screen and (max-width: 900px) {
 

  
a{
  width: 100%;  
  display: flex;
  justify-content: center;
}
    #menu:hover{
        background-color:rgb(254 240 138);
    }

  

    

    .navbar__btn{
        flex-direction: column;
    }
   
}

</style>





