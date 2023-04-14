<script>
export default {
  name: "CarCard",
  props: {
    car: {type: Object, required: true}
  },
  data() {
    return {}
  },
  computed: {
    allImages() {
      return [...this.car.images.interior, ...this.car.images.exterior]
    }
  },
  methods: {
    getImgFileUrl(imgUrl) {
      return new URL(`../../assets/imgs/${imgUrl}`, import.meta.url).href
    },
  }
}
</script>

<template>
  <div class="car-card">
    <div class="car-card__carousel-wrap">
      <swiper-container :loop="true" class="car-card__swiper">
        <swiper-slide v-for="(carImage, carImageIndex) in allImages" :key="`car-image-${carImageIndex}`"
                      class="car-card__swiper-slide">
            <img :src="getImgFileUrl(carImage)" :alt="car.name" class="car-card__img">
        </swiper-slide>
      </swiper-container>
    </div>

    <div class="car-card__title">{{ car.name }}</div>
  </div>
</template>