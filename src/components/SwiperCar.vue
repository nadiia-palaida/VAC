<script>
export default {
  name: "SwiperCar",
  mounted() {
    this.$refs['car-swiper'].shadowRoot.querySelector('.swiper-pagination-progressbar')
        .setAttribute('style', 'top: 96%; width: 90%; left: 50%; transform: translateX(-50%);background: rgba(255, 255, 255, .2); border-radius: 28px;');
    this.$refs['car-swiper'].shadowRoot.querySelector('.swiper-pagination-progressbar-fill').style.borderRadius = '28px'
  }
}
</script>

<template>
  <swiper-container :loop="true" :pagination="true" pagination-type="progressbar" ref="car-swiper" class="swiper__car">
      <slot></slot>
  </swiper-container>
</template>
