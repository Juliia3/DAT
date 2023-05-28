<script setup>
import './info.scss';
import Search from '../Search/Search.vue';
import Button from '../Button/Button.vue';
</script>

<template>
    <main class="main">
        <img class="main__bg" src="@/assets/img/bg-info.png" alt="bg-info">
        <Search />
        <section class="info">
            <div class="info__container container">
                <div class="info__name">
                    <h1 class="info__title h1"><img class="info__leaf leaf" src="@/assets/img/leaf.svg" alt="leaf">Аграрний <span class="info__h1-thin h1">інтернет-магазин</span></h1>
                    <p class="info__text p">Основна сфера діяльності – дистрибуція насіння, засобів захисту рослин,
                        мінеральних макро - та мікродобрив</p>
                    <Button btnText="Про компанію" />
                </div>
            </div>
            <img class="info__pic" src="@/assets/img/info-pic.png" alt="info-pic">
        </section>
    </main>
</template>
