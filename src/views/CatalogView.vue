<script>
import {cars} from "../api/cars";
import CarCard from "../components/catalog/CarCard.vue";
export default {
  name: "CatalogView",
  components: {CarCard},
  data() {
    return {
      cars,
      activePage: 1
    }
  },
  computed: {
    activePageCars() {
      return this.cars.find(item => item.currentPage === this.activePage)
    }
  },
}
</script>

<template>
<section class="section-cars-catalog">
  <div class="container">
    <div class="cars-catalog__wrap">
      <div class="cars-catalog__filter"></div>

      <div class="cars-catalog__items">
        <CarCard v-for="(car, carIndex) in activePageCars.items" :car="car" :key="`catalog-car-${carIndex}`"/>
      </div>
    </div>
  </div>
</section>
</template>
