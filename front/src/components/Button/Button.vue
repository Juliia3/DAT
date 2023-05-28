<script setup>
import './button.scss'

defineProps({
    btnText: {
        type: String,
        required: true
    },
})
</script>

<template>
    <a class="info__link text orange-button" href="">{{ btnText }}</a>
</template>
