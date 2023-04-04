<script>
import Icon from "../Icon.vue";

export default {
  name: "MainHome",
  components: {Icon},
  data() {
    return {
      activeSlideIndex: 0,

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
  computed: {
    requestBtnTitle() {
      return this.slides[this.activeSlideIndex].type
    }
  },
  methods: {
    getImgFileUrl(imgUrl) {
      return new URL(`../../assets/imgs/${imgUrl}`, import.meta.url).href
    },
    onSlideChange(e) {
      this.activeSlideIndex = e.detail[0].realIndex
    }
  }
}
</script>

<template>
  <section class="section-main">
    <div class="container">
      <div class="main__wrapper">
        <div class="main__content">
          <h1 class="main__title title">The easiest way to buy a car in Canada</h1>

          <div class="main__carousel main__column">
            <swiper-container :loop="true" @activeindexchange="onSlideChange" ref="main-swiper"
                              :navigation="{nextEl: '.main__carousel-btn-next', prevEl: '.main__carousel-btn-prev'}"
                              class="main__carousel-swiper">
              <swiper-slide v-for="item in slides">
                <div class="main__carousel-slide-content">
                  <img :src="getImgFileUrl(item.img)" alt="car image" class="main__carousel-img">
                </div>
              </swiper-slide>
            </swiper-container>

            <div class="main__carousel-navigation">
              <button class="main__carousel-navigation-btn main__carousel-btn-prev">
                <Icon src="carousel-arrow-left" width="13" height="24"
                      class="main__carousel-arrow main__carousel-btn-prev-img"/>
              </button>
              <button class="main__carousel-navigation-btn main__carousel-btn-next">
                <Icon src="carousel-arrow-right" width="13" height="24"
                      class="main__carousel-arrow main__carousel-btn-next-img"/>
              </button>
            </div>
          </div>

          <div class="main__carousel-btn">
            <router-link :to="{name: 'quiz'}" class="btn btn_liner btn_width">Request a {{ requestBtnTitle }}</router-link>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
