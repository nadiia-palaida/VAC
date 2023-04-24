<script>
import {carItems} from "../api/carsList";
import Icon from "../components/Icon.vue";
import ShareButton from "../components/form/ShareButton.vue";
import {mapActions, mapWritableState} from "pinia";
import {useModalStore} from "../store/modal";
import Calculator from '../components/Calculator.vue';
import {useGeneralStore} from "../store/general";

export default {
  name: "CarView",
  components: {Calculator, ShareButton, Icon},
  data() {
    return {
      showImagesInterior: false
    }
  },
  computed: {
    ...mapWritableState(useGeneralStore, ['headerRequestBtnTitle', 'headerRequestCarId']),
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
    ...mapActions(useModalStore, ['openModal']),
    getImgFileUrl(imgUrl) {
      return new URL(`../assets/imgs/${imgUrl}`, import.meta.url).href
    },
    formatPrice(price) {
      let parts = price.toString().split(".");
      parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, " ");
      return parts.join(".");
    },
    openContactsForm() {
      this.openModal({component: 'ContactsModal', data: {name: this.car.name}})
    }
  },
  mounted() {
    this.headerRequestBtnTitle = 'apply for this vehicle'
    this.headerRequestCarId = this.$route.params.id
  },
  unmounted() {
    this.headerRequestBtnTitle = ''
  }
}
</script>

<template>
  <div class="car-page">
    <section class="car-page-info section">
      <div class="container">
        <div class="car-page-info__container">
          <h1 class="car-page-info__title title-2">{{ car.name }}</h1>

          <div class="car-page-info__subtitle">Watching now 8 people</div>

          <div class="car-page-info__content">
            <div class="car-page-info__carousel-swiper-wrap">
              <div class="car-page-info__carousel-swiper-main-wrap">
                <swiper-container :loop="true" thumbs-swiper=".mySwiper2"
                                  :navigation="{nextEl: '.car-info__carousel-btn-next', prevEl: '.car-info__carousel-btn-prev'}"
                                  class="car-page-info__carousel-swiper">
                  <swiper-slide v-for="img in sliderImages" class="car-page-info__carousel-swiper-slide">
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
                  <swiper-slide v-for="img in sliderImages" class="car-page-info__carousel2-swiper-slide">
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

              <router-link :to="{name: 'quiz'}" class="car-page__btn-request btn btn_solid">
                apply for this vehicle
              </router-link>
            </div>

            <div class="car-page-info__detail">
              <div>
                <div class="car-page-info__detail-parameters">
                  <div class="car-page-info__detail-list-item">
                    <div class="car-page-info__detail-list-item-label car-page-info__detail-list-item-label_price">Price</div>
                    <div class="car-page-info__detail-list-item-number car-page-info__detail-list-item-number_color">
                      ${{ formatPrice(car.price) }}
                    </div>
                  </div>
                  <ul class="car-page-info__detail-list">
                    <li class="car-page-info__detail-list-item">
                      <div class="car-page-info__detail-list-item-label">Body</div>
                      <div class="car-page-info__detail-list-item-number">{{ car.bodyType }}</div>
                    </li>
                    <li class="car-page-info__detail-list-item">
                      <div class="car-page-info__detail-list-item-label">Year</div>
                      <div class="car-page-info__detail-list-item-number">{{ car.year }}</div>
                    </li>
                    <li class="car-page-info__detail-list-item">
                      <div class="car-page-info__detail-list-item-label">Transmission</div>
                      <div class="car-page-info__detail-list-item-number">{{ car.transmission }}</div>
                    </li>
                    <li class="car-page-info__detail-list-item">
                      <div class="car-page-info__detail-list-item-label">Kilometres</div>
                      <div class="car-page-info__detail-list-item-number">{{ formatPrice(car.kilometres) }}</div>
                    </li>
                  </ul>
                </div>

                <div v-if="car.details.length" class="car-page-info__detail-parameters">
                  <div class="car-page-info__detail-description-title">Detail</div>

                  <ul class="car-page-info__detail-additional-list">
                    <li v-for="item in car.details" class="car-page-info__detail-additional-list-item title-text">
                      {{ item }}
                    </li>
                  </ul>
                </div>

                <div v-if="car.description.paragraphs.length" class="car-page-info__detail-parameters">
                  <div class="car-page-info__detail-description-title">Description</div>

                  <p v-for="item in car.description.paragraphs" class="text">{{ item }}</p>
                </div>
              </div>

              <button @click="openContactsForm" class="car-page-info__detail-btn-more btn btn_solid">Request more information</button>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="car-page-calculator section">
      <div class="container">
        <div class="car-page__calculator-title title-2">Calculate the installment plan for this car.</div>

        <Calculator :new-price="this.car.price" size="small" buttonTitle="apply for this vehicle"/>
      </div>
    </section>
  </div>
</template>
