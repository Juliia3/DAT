<script setup>

import './title.scss'

defineProps({
    title: {
        type: String,
        required: true
    },
})
</script>

<template>
    <h2 class="title h2">
        <img src="@/assets/img/leaf.svg" alt="">
        {{ title }}
        <img src="@/assets/img/leaf2.svg" alt="">
    </h2>
</template>
