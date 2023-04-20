<script>
import SwiperCar from "../SwiperCar.vue";

export default {
  name: "CarCard",
  components: {SwiperCar},
  props: {
    car: {type: Object, required: true}
  },
  data() {
    return {
      pagination: {
        type: 'progressbar',
      },
    }
  },
  computed: {
    allImages() {
      return [...this.car.images.exterior, ...this.car.images.interior]
    },
  },
  methods: {
    getImgFileUrl(imgUrl) {
      return new URL(`../../assets/imgs/${imgUrl}`, import.meta.url).href
    },
    formatPrice(price) {
      let parts = price.toString().split(".");
      parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, " ");
      return parts.join(".");
    }
  }
}
</script>

<template>
  <div class="car-card">
    <div class="car-card__carousel-wrap">
      <SwiperCar class="car-card__swiper">
        <swiper-slide v-for="(carImage, carImageIndex) in allImages" :key="`car-image-${carImageIndex}`"
                      class="car-card__swiper-slide">
          <img :src="getImgFileUrl(carImage)" :alt="car.name" class="car-card__img">
        </swiper-slide>
      </SwiperCar>
    </div>

    <div class="car-card__text-wrap">
      <router-link :to="{name: 'car', params: {id: car.id}}">
      <div class="car-card__text-column">
        <div class="car-card__title title-text">{{ car.name }}</div>

        <div class="car-card__price title-text">$ {{ formatPrice(car.price) }}</div>
      </div>

      <ul class="car-card__info-list">
        <li v-if="car.year" class="car-card__info-list-item text">{{ car.year }} year</li>
        <li v-if="car.bodyType" class="car-card__info-list-item text">{{ car.bodyType }}</li>
        <li v-if="car.transmission" class="car-card__info-list-item text"> {{ car.transmission }}</li>
        <li v-if="car.kilometres" class="car-card__info-list-item text"> {{ car.kilometres }} kilometres</li>
      </ul>
      </router-link>
    </div>
  </div>
</template>
