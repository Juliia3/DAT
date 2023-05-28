<script setup>
import './footer.scss'

</script>

<template>
    <footer class="footer">
        <div class="footer__container container">
            <div class="footer__menu">
                <div class="footer__logo-box">
                    <a href="#"><img class="footer__logo logo" src="@/assets/img/logo.png" alt="logo"></a>
                    <p class="footer__text text">
                        Пропонуємо покупцям широкий вибір насіння овочів
                    </p>
                </div>
                <nav class="footer__nav">
                    <ul class="footer__list p">
                        <li class="footer__item">
                            <p class="footer__item-name">
                                <a class="footer__link" href="">Інформація</a> 
                            </p>
                            <div class="footer__item-info-block">
                                <p class="footer__item-info">
                                    <a class="footer__link" href="">Про компанію</a>    
                                </p>
                                <p class="footer__item-info">
                                    <a class="footer__link" href="">Оплата і доставка</a>    
                                </p>
                                <p class="footer__item-info">
                                    <a class="footer__link" href="">Партнери</a>    
                                </p>
                            </div>
                        </li>
                        <li class="footer__item">
                            <p class="footer__item-name">
                                <a class="footer__link" href="">Товари</a>    
                            </p>
                            <div class="footer__item-info-block">
                                <p class="footer__item-info">
                                    <a class="footer__link" href="">Каталог продукції</a>    
                                </p>
                                <p class="footer__item-info">
                                    <a class="footer__link" href="">Засоби захисту рослин</a>    
                                </p>
                                <p class="footer__item-info">
                                    <a class="footer__link" href="">Насіння</a>    
                                </p>
                                <p class="footer__item-info">
                                    <a class="footer__link" href="">Добрива</a>    
                                </p>
                                <p class="footer__item-info">
                                    <a class="footer__link" href="">Агроному в поміч</a>    
                                </p>
                            </div>
                        </li>
                        <li class="footer__item">
                            <p class="footer__item-name">
                                <a class="footer__link" href="">Контакти</a>    
                            </p>
                            <div class="footer__item-info-block">
                                <div class="search__contact footer__item-info">
                                    <div class="search__phone-box">
                                        <div class="search__phone-icon-box">
                                            <a class="search__phone-link" href=""><img class="search__phone-icon icon"
                                                    src="@/assets/img/phone.svg" alt=""></a>
                                        </div>
                                        <div class="search__phone-contacts">
                                            <p class="search__number number text">+38 (067) 115 00 58</p>
                                            <p class="search__text call"><a class="search__call" href="">Замовити
                                                    зворотній
                                                    зв’язок</a>
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div class="search__contact footer__item-info">
                                    <div class="search__phone-box">
                                        <div class="search__phone-icon-box">
                                            <a class="search__phone-link" href=""><img class="search__phone-icon icon"
                                                    src="@/assets/img/email.svg" alt=""></a>
                                        </div>
                                        <div class="search__phone-contacts">
                                            <p class="search__number email text">DAT@gmail.com</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </li>
                    </ul>
                </nav>
            </div>

            <div class="footer__end">
                <img class="footer__line" src="@/assets/img/footer-line.svg" alt="line">
                <p class="footer__date name">© 2022 DAT</p>
            </div>
        </div>

    </footer>
</template>