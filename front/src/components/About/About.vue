<script setup>
import './about.scss'
import './about.js'
import Button from '../Button/Button.vue';

</script>

<template>
    <section class="about">
        <div class="about__container container">
            <img class="about__orange circle" src="@/assets/img/orange-circle.png" alt="orange">
            <div class="about__img-block">
                <img class="about__img play-left play" src="@/assets/img/about-us.png" alt="about">
            </div>
            <div class="about__article">
                <h2 class="about__title h2 play-right play"><img class="about__leaf leaf" src="@/assets/img/leaf.svg"
                        alt="about-leaf">Про нас</h2>
                <div class="about__text-block">
                    <p class="about__text text play-right play">
                        <span class="text-green">«Компанія ТОВ “ДАМАР АГРОТРЕЙД”</span>— молода команда, яка з’явилась
                        на аграрному ринку у 2020 році. Ми не боїмось труднощів і викликів. Тому навіть складний
                        ковідний період, світова пандемія не стали на заваді успішному старту.
                    </p>
                    <p class="about__text text play-right play">
                        Отже, <span class="text-green">ми — сміливі, ми — драйвові</span>, ми — ті, що розвивають
                        рослинництво та допомагають ставати успішними тисячам вітчизняних аграріїв.
                    </p>
                    <p class="about__text text play-right play">
                        <span class="text-green">Бачення:</span> компанія ТОВ “ДАМАР АГРОТРЕЙД” тримає курс на
                        підвищення престижності, довіри до засобів захисту рослин made in UA. Прагнемо, аби в кожному
                        регіоні України наш споживач мав доступ до якісної продукції та консалтингу від фахівців
                        команди.
                    </p>
                    <p class="about__text text play-right play">
                        <span class="text-green">Місія:</span> усе продуктове портфоліо, консультативні послуги ТОВ
                        “ДАМАР АГРОТРЕЙД” направлені на підвищення рентабельності рослинництва в мінливих кліматичних
                        умовах України. Також ставимо собі завдання підвищувати обізнаність клієнтів щодо сучасних
                        методів ведення рослинництва...
                    </p>
                </div>
                <div class="about__button play-right play">
                    <Button btnText="Докладніше" />
                </div>
            </div>
        </div>
    </section>
</template>
