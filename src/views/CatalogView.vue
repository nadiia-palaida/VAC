<script>
import {cars} from "../api/cars";
import CarCard from "../components/catalog/CarCard.vue";
import Pagination from "../components/Pagination.vue";
import SearchInput from "../components/form/SearchInput.vue";
import {doPaginationStructure} from "../helpers";

export default {
  name: "CatalogView",
  components: {SearchInput, Pagination, CarCard},
  data() {
    return {
      cars,
      activePage: 1,
      inputSearchValue: '',
      filters: {
        search: ''
      }
    }
  },
  computed: {
    activePageCars() {
      if(!this.filters.search) {
        return this.cars.find(item => item.currentPage === this.activePage)
      } else {
        return this.filter('name', this.filters.search)
      }
    },
    allCars() {
      const allCars = []

      this.cars.forEach(item => {
        allCars.push(...item.items)
      })

      return allCars
    },
    carsMakes() {
      let carsMakes = []

      this.allCars.forEach(item => {
        carsMakes.push(item.make)
      })

      carsMakes = [...new Set(carsMakes)]

      return carsMakes.filter(item => item.toLowerCase().match(this.inputSearchValue.toLowerCase()))
    },
  },
  methods: {
    onChangePage(page) {
      this.$router.push({name: 'catalog', query: {page: page}})
      this.activePage = page
    },
    filter(field, value) {
      let filterArr = this.allCars.filter(item => {
           return item[field].toString().toLowerCase().match(value.toLowerCase())
          }
      )

      console.log('filterArr', filterArr)

      return doPaginationStructure(filterArr)
    },
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
              <SearchInput v-model:inputValue="inputSearchValue" v-model:chosenValue="filters.search"
                           :items-list="carsMakes" placeholder="Find a dream car..." class="cars-catalog__search"/>
            </div>
          </div>

          <div class="cars-catalog__items">
            <CarCard v-for="(car, carIndex) in activePageCars.items" :car="car" :key="`catalog-car-${carIndex}`"/>
          </div>

          <div v-if="activePage" class="cars-catalog__pagination">
            <Pagination :modelValue="activePage" @update:modelValue="onChangePage"
                        :total-items="activePageCars.totalItems"
                        :current-page="activePageCars.currentPage" :last-page="activePageCars.lastPage"/>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
