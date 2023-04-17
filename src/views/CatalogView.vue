<script>
import {cars} from '../api/cars';
import CarCard from '../components/catalog/CarCard.vue';
import Pagination from '../components/Pagination.vue';
import SearchInput from '../components/form/SearchInput.vue';
import {doPaginationStructure} from '../helpers';
import ShareButton from '../components/form/ShareButton.vue';
import FilterNotFound from '../components/catalog/FilterNotFound.vue';
import Filter from '../components/Filter.vue';
import {FILTER_TYPE_SEARCH, FILTER_TYPE_CHECKBOX, FILTER_TYPE_RANGE} from '@/helpers/filterTypes'

const TYPE_SEARCH_MAKE = 'search'
const TYPE_FILTER_MAKE = 'filter'

export default {
  name: "CatalogView",
  components: {Filter, FilterNotFound, ShareButton, SearchInput, Pagination, CarCard},
  data() {
    return {
      cars,
      activePage: 1,
      inputSearchValue: '',

      filters: {
        search: '',
        make: [],
        model: [],
      },
      filterRules: null,

      TYPE_SEARCH_MAKE, TYPE_FILTER_MAKE,
    }
  },
  computed: {
    activePageCars() {
      if (!this.filters.search) {
        return this.cars.find(item => item.currentPage === this.activePage)
      } else {
        return this.filter('name', this.filters.search).find(item => item.currentPage === this.activePage)
      }
    },
    allCars() {
      const allCars = []

      this.cars.forEach(item => {
        allCars.push(...item.items)
      })

      return allCars
    },

    carModels() {
      let carModels = []

      this.allCars.filter(item => {
        if (item.make === this.filters.make) {
          carModels.push(item.model)
        }
      })

      return carModels
    },
    routeFullPath() {
      return window.location.href
    }
  },
  methods: {
    onChangePage(page) {
      this.$router.push({name: 'catalog', query: {page: page}})
      this.activePage = page
    },
    filter(field, value) {
      this.activePage = 1

      let filterArr = this.allCars.filter(item => {
            return item[field].toString().toLowerCase().match(value.toLowerCase())
          }
      )

      return doPaginationStructure(filterArr)
    },
    carsMakes(type) {
      let carsMakes = []

      this.allCars.forEach(item => {
        carsMakes.push(item.make)
      })

      carsMakes = [...new Set(carsMakes)]

      if (type === TYPE_SEARCH_MAKE) {
        return carsMakes.filter(item => item.toLowerCase().match(this.inputSearchValue.toLowerCase()))
      } else {
        return carsMakes.filter(item => {
          if (this.filters.make.length) {
            return item.toLowerCase().match(this.filters.make[this.filters.make.lastIndex - 1].toLowerCase())
          } else {
            return carsMakes.filter(item => item.toLowerCase().match(this.inputSearchValue.toLowerCase()))
          }
        })
      }
    },
  },
  beforeMount() {
    this.filterRules = {
      make: {
        title: 'Make, Model',
        rules: [
          {
            name: 'make',
            label: 'Make',
            type: FILTER_TYPE_SEARCH,
            placeholder: 'Search Make...',
            multiple: true,
            searchList: this.carsMakes('filter')
          },
          {
            name: 'model',
            label: 'Model',
            type: FILTER_TYPE_SEARCH,
            placeholder: 'Search Model...',
            multiple: true,
            searchList: this.carModels
          }
        ]
      }
    }
  },
  mounted() {
    this.$router.push({name: 'catalog', query: {page: this.activePage}})
  },
  watch: {
    filters() {
      return this.activePage = 1
    }
  }
}
</script>

<template>
  <section class="section-cars-catalog">
    <div class="container">
      <div class="cars-catalog__wrap">
        <div class="cars-catalog__filter">
          <Filter :title="filterRules.make.title" :rules="filterRules.make.rules"/>
        </div>

        <div class="cars-catalog__items-wrap">
          <div class="cars-catalog__header">
            <div class="cars-catalog__search-wrap">
              <SearchInput v-model:inputValue="inputSearchValue" v-model:chosenValue="filters.search"
                           :items-list="carsMakes('search')" placeholder="Find a dream car..."
                           class="cars-catalog__search"/>

              <ShareButton tooltip="Share search result" :tooltip-width="161" :link="routeFullPath"
                           class="cars-catalog__share-search"/>
            </div>
          </div>

          <template v-if="activePageCars">
            <div class="cars-catalog__items">
              <CarCard v-for="(car, carIndex) in activePageCars.items" :car="car" :key="`catalog-car-${carIndex}`"/>
            </div>

            <div v-if="activePage" class="cars-catalog__pagination">
              <Pagination :modelValue="activePage" @update:modelValue="onChangePage"
                          :total-items="activePageCars.totalItems"
                          :current-page="activePageCars.currentPage" :last-page="activePageCars.lastPage"/>
            </div>
          </template>

          <FilterNotFound v-else/>
        </div>
      </div>
    </div>
  </section>
</template>
