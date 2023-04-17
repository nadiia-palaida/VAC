<script>
import CarCard from '../components/catalog/CarCard.vue';
import Pagination from '../components/Pagination.vue';
import SearchInput from '../components/form/SearchInput.vue';
import ShareButton from '../components/form/ShareButton.vue';
import FilterNotFound from '../components/catalog/FilterNotFound.vue';
import Filter from '../components/Filter.vue';
import {FILTER_TYPE_SEARCH, FILTER_TYPE_CHECKBOX, FILTER_TYPE_RANGE} from '@/helpers/filterTypes'
import {
  FILTER_NAME_MAKE, FILTER_NAME_MODEL, FILTER_NAME_BODY_TYPE, FILTER_NAME_TRANSMISSION,
  FILTER_NAME_PRICE, FILTER_NAME_YEAR, FILTER_NAME_KILOMETRES
} from '@/helpers/filterNames'

import Collapse from "../components/Collapse.vue";


import { mapWritableState, mapState, mapActions } from 'pinia'
import { useCarsStore } from '@/store/cars'

export default {
  name: "CatalogView",
  components: {Collapse, Filter, FilterNotFound, ShareButton, SearchInput, Pagination, CarCard},
  provide() {
    return {
      deleteFilterHandler: this.deleteFilter
    }
  },
  data() {
    return {
      activePage: 1,
    }
  },
  computed: {
    ...mapWritableState(useCarsStore, ['inputSearchValue', 'filters', 'filterRules']),
    ...mapState(useCarsStore, ['allCars', 'carModels', 'activePageCars']),

    routeFullPath() {
      return window.location.href
    }
  },
  methods: {
    ...mapActions(useCarsStore, ['doFilter', 'carsMakes', 'addFilter', 'allRulesChosenValues', 'deleteFilter']),

    onChangePage(page) {
      this.$router.push({name: 'catalog', query: {page: page}})
      this.activePage = page
    },

    filterProxy(field, value) {
      this.activePage = 1
      this.doFilter(field, value)
    },
  },
  beforeMount() {
    this.filterRules = {
      make: {
        title: 'Make, Model',
        rules: [
          {
            name: FILTER_NAME_MAKE,
            label: 'Make',
            type: FILTER_TYPE_SEARCH,
            placeholder: 'Search Make...',
            multiple: true,
            searchList: this.carsMakes('filter')
          },
          {
            name: FILTER_NAME_MODEL,
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
      this.activePage = 1
    }
  }
}
</script>

<template>
  <section class="section-cars-catalog">
    <div class="container">
      <div class="cars-catalog__wrap">
        <div class="cars-catalog__filter">
          <div v-for="(item, itemIndex) in filterRules" class="filter">
            <Collapse :title="item.title" :filter-list="allRulesChosenValues(item.rules)" size="small">
              <Filter v-for="rule in item.rules" :rule="rule" @filter="addFilter" :chosen-list="allRulesChosenValues([rule])"/>
            </Collapse>
          </div>
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

          <template v-if="activePageCars(activePage)">
            <div class="cars-catalog__items">
              <CarCard v-for="(car, carIndex) in activePageCars(activePage).items" :car="car" :key="`catalog-car-${carIndex}`"/>
            </div>

            <div v-if="activePage" class="cars-catalog__pagination">
              <Pagination :modelValue="activePage" @update:modelValue="onChangePage"
                          :total-items="activePageCars(activePage).totalItems"
                          :current-page="activePageCars(activePage).currentPage" :last-page="activePageCars(activePage).lastPage"/>
            </div>
          </template>

          <FilterNotFound v-else/>
        </div>
      </div>
    </div>
  </section>
</template>
