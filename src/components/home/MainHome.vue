<script>

import Icon from "../Icon.vue";
export default {
  name: "MainHome",
  components: {Icon},
  data() {
    return {
      slides: [
        {
          id: 1,
          img: 'home/main-carousel/Nissan.png',
          type: 'suv'
        },
        {
          id: 2,
          img: 'home/main-carousel/CAR.png',
          type: 'car'
        },
        {
          id: 3,
          img: 'home/main-carousel/TRUCK.png',
          type: 'truck'
        },
        {
          id: 4,
          img: 'home/main-carousel/VAN.png',
          type: 'van'
        },
      ]
    }
  },
  methods: {
    getImgFileUrl(imgUrl) {
      return new URL(`../../assets/imgs/${imgUrl}`, import.meta.url).href
    }
  }
}
</script>

<template>
  <section class="section-main">
    <div class="container">
      <div class="main__content">
        <div class="main__title-wrap main__column">
          <h1 class="main__title title">The easiest way to buy a car in Canada</h1>

          <router-link :to="{name: 'quiz'}" class="btn btn_liner btn_width">Request a car</router-link>
        </div>

        <div class="main__carousel main__column">
          <swiper-container :loop="true"
              :navigation="{nextEl: '.main__carousel-btn-next', prevEl: '.main__carousel-btn-prev'}">
            <swiper-slide v-for="item in slides">
              <div class="main__carousel-slide-content">
                <img :src="getImgFileUrl(item.img)" alt="car image" class="main__carousel-img">
              </div>
            </swiper-slide>
          </swiper-container>

          <div class="main__carousel-navigation">
            <button class="main__carousel-navigation-btn main__carousel-btn-prev">
              <Icon src="carousel-arrow-left" width="13" height="24" class="main__carousel-arrow main__carousel-btn-prev-img"/>
            </button>
            <button class="main__carousel-navigation-btn main__carousel-btn-next">
              <Icon src="carousel-arrow-right" width="13" height="24" class="main__carousel-arrow main__carousel-btn-next-img"/>
            </button>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
