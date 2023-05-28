<script setup>
import { RouterLink, RouterView } from 'vue-router';
import './components/Header/header.scss';
import './assets/styles/index.scss'
import Header from './components/Header/Header.vue';
import Footer from './components/Footer/Footer.vue';

</script>

<template>
  <div class="page-wrapper">
    <Header />
    <RouterLink to="/home">Home</RouterLink>
    <RouterView />
    <Footer />
  </div>
</template>
