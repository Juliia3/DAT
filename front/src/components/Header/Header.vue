<script setup>
import './header.scss'

</script>

<template>
    <header class="menu">
        <div class="menu__container container">
            <nav class="menu__nav">
                <ul class="menu__list">
                    <li class="menu__item header">
                        <RouterLink to="/about" target="_blank">Про нас</RouterLink>
                    </li>
                    <li class="menu__item header">
                        <RouterLink to="/catalog" target="_blank">Каталог продукції</RouterLink>
                    </li>
                    <li class="menu__item header">
                        <RouterLink to="/pay" target="_blank">Оплата і доставка</RouterLink>
                    </li>
                    <li class="menu__item header">
                        <a class="menu__link" href="">Партнери</a>
                    </li>
                    <li class="menu__item header">
                        <a class="menu__link" href="">Новини</a>
                    </li>
                    <li class="menu__item header">
                        <a class="menu__link" href="">Контакти</a>
                    </li>
                </ul>
            </nav>
            <img class="menu__line line" src="@/assets/img/line.svg" alt="line">
            <p class="menu__reg header"><a class="menu__log-link" href="">
                    <img class="menu__login-img" src="@/assets/img/login.svg" alt="login"> <span
                        class="menu__login">Вхід |</span>
                    <span class="menu__login">Реєстрація</span></a></p>
        </div>
    </header>
</template>
