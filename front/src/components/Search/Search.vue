<script setup>
import './search.scss'
</script>

<template>
    <section class="search">
        <div class="search__container container">
            <div class="search__first-line">
                <router-link to="/" target= '_blank'><img class="search__logo logo" src="@/assets/img/logo.png" alt="logo"></router-link>
                <input class="search__input" type="text" placeholder="Пошук">
                <div class="search__contact">
                    <div class="search__phone-box">
                        <div class="search__phone-icon-box">
                            <a class="search__phone-link" href=""><img class="search__phone-icon icon"
                                    src="@/assets/img/phone.svg" alt=""></a>
                        </div>
                        <div class="search__phone-contacts">
                            <p class="search__number number text">+38 (067) 115 00 58</p>
                            <p class="search__text call"><a class="search__call" href="">Замовити зворотній зв’язок</a>
                            </p>
                        </div>
                    </div>
                </div>
                <div class="search__bag-block">
                    <a class="search__bag-link" href=""><img class="search__icon bag-icon" src="@/assets/img/bag.svg"
                            alt="bag"></a>
                    <p class="search__out sum">0,00 грн</p>
                </div>
            </div>
            <div class="search__link-box">
                <a class="search__link" href=""><img class="search__link-img" src="@/assets/img/seeds.svg" alt="seeds">
                    <p class="search__link-name name">Насіння</p>
                </a>
                <a class="search__link" href=""><img class="search__link-img" src="@/assets/img/hands.svg" alt="seeds">
                    <p class="search__link-name name">Засоби захисту рослин</p>
                </a>
                <a class="search__link" href=""><img class="search__link-img" src="@/assets/img/fertilizer.svg"
                        alt="seeds">
                    <p class="search__link-name name">Добрива</p>
                </a>
                <a class="search__link" href=""><img class="search__link-img" src="@/assets/img/trees.svg" alt="seeds">
                    <p class="search__link-name name">кормова група</p>
                </a>
                <a class="search__link" href=""><img class="search__link-img" src="@/assets/img/farmer.svg" alt="seeds">
                    <p class="search__link-name name">Агроному в поміч</p>
                </a>
            </div>
        </div>
    </section>
</template>