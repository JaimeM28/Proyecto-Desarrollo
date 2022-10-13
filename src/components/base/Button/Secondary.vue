<script setup>
defineProps({
    text: {
        type: String,
        default: 'Button'
    }
})


const button=`w-full h-full border-2 border-[transparent] 
                px-3 leading-8 hover:font-semibold rounded
                border-b-zinc-800 hover:border-b-zinc-700` 

</script>

<template>
    <button :class="button"> {{ text }}</button>
</template>
