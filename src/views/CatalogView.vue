<script>
import {cars} from "../api/cars";
import CarCard from "../components/catalog/CarCard.vue";
import Pagination from "../components/Pagination.vue";
import SearchInput from "../components/form/SearchInput.vue";

export default {
  name: "CatalogView",
  components: {SearchInput, Pagination, CarCard},
  data() {
    return {
      cars,
      activePage: 1,
      inputSearchValue: '',
      chosenSearchValue: ''
    }
  },
  computed: {
    activePageCars() {
      return this.cars.find(item => item.currentPage === this.activePage)
    },
    carsMakes() {
      const allCars = []
      let carsMakes = []

      this.cars.forEach(item => {
        allCars.push(...item.items)
      })

      allCars.forEach(item => {
        carsMakes.push(item.make)
      })

      carsMakes = [...new Set(carsMakes)]

      return carsMakes.filter(item => item.toLowerCase().match(this.inputSearchValue.toLowerCase()))
    }
  },
  methods: {
    onChangePage(page) {
      this.$router.push({name: 'catalog', query: {page: page}})
      this.activePage = page
    }
  },
  mounted() {
    this.$router.push({name: 'catalog', query: {page: this.activePage}})
  }
}
</script>

<template>
  <section class="section-cars-catalog">
    <div class="container">
      <div class="cars-catalog__wrap">
        <div class="cars-catalog__filter"></div>

        <div class="cars-catalog__items-wrap">
          <div class="cars-catalog__header">
            <div class="cars-catalog__search-wrap">
              <SearchInput v-model:inputValue="inputSearchValue" v-model:chosenValue="chosenSearchValue"
                           :items-list="carsMakes" placeholder="Find a dream car..." class="cars-catalog__search"/>
            </div>
          </div>

          <div class="cars-catalog__items">
            <CarCard v-for="(car, carIndex) in activePageCars.items" :car="car" :key="`catalog-car-${carIndex}`"/>
          </div>

          <div class="cars-catalog__pagination">
            <Pagination :modelValue="activePage" @update:modelValue="onChangePage"
                        :total-items="activePageCars.totalItems"
                        :current-page="activePageCars.currentPage" :last-page="activePageCars.lastPage"/>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
