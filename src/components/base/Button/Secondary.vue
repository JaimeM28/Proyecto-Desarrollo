<script setup>
defineProps({
    text: {
        type: String,
        default: 'Button'
    },

    disabled:{
            type: Boolean,
            default: false 
        }

    
})


const button=`w-full h-full border-2 border-[transparent] 
                px-3 leading-8 hover:font-semibold rounded
                border-b-zinc-800 hover:border-b-zinc-700
                disabled:opacity-50 disabled:cursor-not-allowed` 

</script>

<template>
    <button @click="$emit('change')" 
    :class="button" :disabled="disabled"> {{ text }}</button>
</template>
