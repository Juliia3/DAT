<script setup>
import Title from '../Title/Title.vue';
import './swiper.scss'
</script> 

<template>
  <section class="swiper">
    <div class="swiper__container container">
      <Title title="Новинки" />
      <div id="app" class="swiper__block">
        <div v-if="error">
          {{ error }}
        </div>
        <swiper v-else 
        :cssMode="true" 
        :loop="true" 
        :spaceBetween="30" 
        :navigation="true" 
        :pagination="true"
        :mousewheel="true" 
        :keyboard="true" 
        :slidesPerView="4" 
        :modules="modules" 
        class="mySwiper">
          <swiper-slide v-for="(index, pic) in cart">
            <div class="swiper__cart cart">
              <img class="swiper__cart-img" :src="'http://localhost:1337' + img[pic].url" alt="">
              <div class="swiper__cart-box">
                <p class="swiper__cart-title text">
                  {{ index.attributes.title }}
                </p>
                <p class="swiper__cart-availability">
                  {{ index.attributes.availability }}
                </p>
                <p class="swiper__cart-price">
                  {{ index.attributes.price }}
                </p>
                <img class="swiper__cart-bag bag-icon" src="@/assets/img/bag.svg" alt="">
              </div>
            </div> 
          </swiper-slide>
        </swiper>
      </div>
    </div>
  </section>
</template> 
<script>

// import { Cart } from 'path/to/config/folder/vue-editor.js';
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/scss";
import "swiper/css/pagination";
import { Navigation, Pagination, Mousewheel, Keyboard } from "swiper";

export default {
  data() {
    return {
      cart: [],
      img: [],
      error: null,
      headers: { 'Content-Type': 'application/json' }
    }
  },
  methods: {
    parseJSON: function (resp) {
      return (resp.json ? resp.json() : resp);
    },
    checkStatus: function (resp) {
      if (resp.status >= 200 && resp.status < 300) {
        return resp;
      }
      return this.parseJSON(resp).then((resp) => {
        throw resp;
      });
    },
  },
  async mounted() {
    try {
      const response = await fetch("http://localhost:1337/api/render-carts", {
        method: 'GET',
        headers: this.headers,
      }).then(this.checkStatus)
        .then(this.parseJSON);
      console.log(response);
      this.cart = response.data

      const picture = await fetch("http://localhost:1337/api/upload/files", {
        method: 'GET',
        headers: this.headers,
      }).then(this.checkStatus)
        .then(this.parseJSON);
      console.log(picture);
      this.img = picture
    } catch (error) {
      this.error = error
    }
  },
  components: {
    Swiper,
    SwiperSlide,
  },
  setup() {
    return {
      modules: [Navigation, Pagination, Mousewheel, Keyboard],
    };
  },
}
</script>
