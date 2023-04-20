<script>
import {carItems} from "../api/carsList";
import Icon from "../components/Icon.vue";
import ShareButton from "../components/form/ShareButton.vue";

export default {
  name: "CarView",
  components: {ShareButton, Icon},
  data() {
    return {
      showImagesInterior: false
    }
  },
  computed: {
    car() {
      return carItems.find(item => item.id === +this.$route.params.id)
    },
    sliderImages() {
      return this.showImagesInterior ? this.car.images.interior : this.car.images.exterior
    },
    routeFullPath() {
      return window.location.href
    }
  },
  methods: {
    getImgFileUrl(imgUrl) {
      return new URL(`../assets/imgs/${imgUrl}`, import.meta.url).href
    },
    formatPrice(price) {
      let parts = price.toString().split(".");
      parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, " ");
      return parts.join(".");
    }
  },
  mounted() {
  }
}
</script>

<template>
  <div class="car-page">
    <section class="car-page-info">
      <div class="container">
        <h1 class="car-page-info__title title-2">{{ car.name }}</h1>

        <div class="car-page-info__subtitle">Watching now 8 people</div>

        <div class="car-page-info__content">
          <div class="car-page-info__carousel-swiper-wrap">
            <div class="car-page-info__carousel-swiper-main-wrap">
              <swiper-container :loop="true" thumbs-swiper=".mySwiper2"
                                :navigation="{nextEl: '.car-info__carousel-btn-next', prevEl: '.car-info__carousel-btn-prev'}"
                                class="car-page-info__carousel-swiper">
                <swiper-slide v-for="img in sliderImages" class="reviews__carousel-swiper-slide">
                  <div class="car-page-info__main-carousel-img-wrap">
                    <img :src="getImgFileUrl(img)" alt="Car" class="car-page-info__main-carousel-img">
                  </div>
                </swiper-slide>
              </swiper-container>


              <div class="car-page-info__btns-wrap">
                <div class="car-page-info__type-img-btn-wrap">
                  <button @click="showImagesInterior = false" class="car-page-info__type-img-btn"
                          :class="{'car-page-info__type-img-btn_dark': showImagesInterior}">
                    Exterior
                  </button>
                  <button @click="showImagesInterior = true" class="car-page-info__type-img-btn"
                          :class="{'car-page-info__type-img-btn_dark': !showImagesInterior}">
                    Interior
                  </button>
                </div>

                <ShareButton tooltip="Share search result" :tooltip-width="161" :link="routeFullPath"
                             class="car-page-info__share-search"/>
              </div>
            </div>

            <div class="car-page-info__carousel-swiper2-wrap">
              <swiper-container class="mySwiper2" space-between="10" slides-per-view="4" free-mode="true"
                                centeredSlides="true" watch-slides-progress="true">
                <swiper-slide v-for="img in sliderImages" class="reviews__carousel-swiper-slide">
                  <div class="car-page-info__main-carousel2-img-wrap">
                    <img :src="getImgFileUrl(img)" alt="Car" class="car-page-info__main-carousel-img">
                  </div>
                </swiper-slide>
              </swiper-container>

              <div class="swiper__custom-carousel-navigation car-info__custom-carousel-navigation">
                <button
                    class="swiper__custom-carousel-navigation-btn swiper__custom-carousel-navigation-btn-prev car-info__carousel-btn-prev">
                  <Icon src="carousel-arrow-left" width="13" height="24"
                        class="swiper__custom-carousel-arrow swiper__custom-carousel-btn-prev-img"/>
                </button>
                <button
                    class="swiper__custom-carousel-navigation-btn swiper__custom-carousel-navigation-btn-next car-info__carousel-btn-next">
                  <Icon src="carousel-arrow-right" width="13" height="24"
                        class="swiper__custom-carousel-arrow swiper__custom-carousel-btn-next-img"/>
                </button>
              </div>
            </div>
          </div>

          <div class="car-page-info__detail">
            <div class="car-page-info__detail-price">
              <div class="car-page-info__detail-price-label">Price</div>
              <div class="car-page-info__detail-price-number">${{ formatPrice(item.price) }}</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
