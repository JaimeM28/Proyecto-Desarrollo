<script setup>
defineProps({
    text: {
        type: String,
        default: 'Button'
    }
})

const button = `w-full h-full bg-zinc-800 hover:bg-zinc-700
                px-3 text-white rounded leading-8` 

</script>

<template>
    <button :class="button"> {{ text }}</button>
</template>


<style>

</style>