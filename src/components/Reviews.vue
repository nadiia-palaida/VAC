<script>
import Icon from "./Icon.vue";

export default {
  name: "Reviews",
  components: {Icon},
  props: {
    reviews: {type: Array, required: true}
  },
  methods: {
    getImgFileUrl(imgUrl) {
      return new URL(`../assets/imgs/${imgUrl}`, import.meta.url).href
    },
  }
}
</script>

<template>
  <section class="section">
    <div class="container">
      <div class="reviews__content">
        <h2 class="reviews__title title-2">What our client say about us!</h2>

        <div class="reviews__carousel">
          <swiper-container :loop="true"
                            :navigation="{nextEl: '.reviews__carousel-btn-next', prevEl: '.reviews__carousel-btn-prev'}"
                            class="reviews__carousel-swiper">
            <swiper-slide v-for="review in reviews" class="reviews__carousel-swiper-slide">
              <div class="reviews__carousel-slide-content">

<!--                <div class="reviews__carousel-img-wrapper">-->
<!--                  <div class="reviews__carousel-img-wrap">-->
                    <img :src="getImgFileUrl(review.photo)" alt="reviews image" class="reviews__carousel-img">
<!--                  </div>-->
<!--                </div>-->

                <div class="reviews__description">
                  <div class="reviews__name text">{{ review.name }}</div>

                  <div class="reviews__text title-text">{{ review.text }}</div>
                </div>
              </div>
            </swiper-slide>
          </swiper-container>

          <div class="swiper__custom-carousel-navigation">
            <button
                class="swiper__custom-carousel-navigation-btn swiper__custom-carousel-navigation-btn-prev reviews__carousel-btn-prev">
              <Icon src="carousel-arrow-left" width="13" height="24"
                    class="swiper__custom-carousel-arrow swiper__custom-carousel-btn-prev-img"/>
            </button>
            <button
                class="swiper__custom-carousel-navigation-btn swiper__custom-carousel-navigation-btn-next reviews__carousel-btn-next">
              <Icon src="carousel-arrow-right" width="13" height="24"
                    class="swiper__custom-carousel-arrow swiper__custom-carousel-btn-next-img"/>
            </button>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
