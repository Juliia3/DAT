<script setup>
import './article.scss'

defineProps({
    articleName: {
        type: String,
        required: true
    },
    articleText1: {
        type: String,
        required: true
    },
    articleText2: {
        type: String,
        required: true
    },
    articleText3: {
        type: String,
        required: true
    },
    articleText4: {
        type: String,
        required: true
    },
})
</script>

<template>
    <section class="article">
        <img class="article__bg" src="@/assets/img/article-bg.png" alt="article-bg">
        <div class="article__container container">
            <div class="article__text-box">
                <h2 class="article__name h2"><img class="about__leaf leaf" src="@/assets/img/leaf.svg"
                        alt="about-leaf">{{
                        articleName }}</h2>
                <p class="article__text text">{{ articleText1 }}</p>
                <p class="article__text text">{{ articleText2 }}</p>
                <p class="article__text text">{{ articleText3 }}</p>
                <p class="article__text text">{{ articleText4 }}</p>
            </div>

        </div>
    </section>

</template>