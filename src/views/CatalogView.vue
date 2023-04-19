<script>
import {
  getAutocompleteDataMake,
  getAutocompleteDataModel,
  bodyTypes,
  transmissionTypes,
  sortItems,
  getAutocompleteDataModelByMakes, getRangeStartValue, getKilometresStartValue, doFilter
} from "../api/carsList";
import AutocompleteInput from "../components/form/AutocompleteInput.vue";
import Collapse from "../components/Collapse.vue";
import AutocompleteInputMultiple from "../components/form/AutocompleteInputMultiple.vue";
import CheckboxMultiple from "../components/form/CheckboxMultiple.vue";
import Slider from '@vueform/slider'
import Icon from "../components/Icon.vue";
import CarCard from "../components/catalog/CarCard.vue";
import {cars} from "../api/cars";
import Pagination from "../components/Pagination.vue";
import FilterNotFound from "../components/catalog/FilterNotFound.vue";
import ShareButton from "../components/form/ShareButton.vue";
import SelectComponent from "../components/form/SelectComponent.vue";
import {hideBodyScrollbar, showBodyScrollbar} from "../helpers";

export default {
  name: "CatalogView",
  components: {
    SelectComponent,
    ShareButton,
    FilterNotFound,
    Pagination,
    CarCard, Icon, CheckboxMultiple, AutocompleteInputMultiple, Collapse, AutocompleteInput, Slider
  },
  data: function () {
    return {
      filters: {
        name: {
          value: '',
          data: getAutocompleteDataMake()
        },
        make: {
          value: [],
          data: getAutocompleteDataMake()
        },
        model: {
          value: [],
        },
        bodyType: {
          value: [],
          data: bodyTypes
        },
        transmission: {
          value: [],
          data: transmissionTypes
        },
        price: {
          value: getRangeStartValue('price')
        },
        year: {
          value: getRangeStartValue('year')
        },
        kilometres: {
          value: getKilometresStartValue()
        },
        sort: {
          value: sortItems[0].value,
          data: sortItems
        }
      },
      activeCars: [],
      activePage: 1,
      activeFilter: false,
      isMobile: false,
    }
  },
  computed: {
    getFilterModelData() {
      if (this.filters.make.value.length) {
        return getAutocompleteDataModelByMakes(this.filters.make.value)
      } else {
        return getAutocompleteDataModel()
      }
    },
    startValuePrice() {
      return getRangeStartValue('price')
    },
    startValueYear() {
      return getRangeStartValue('year')
    },
    startValueKilometres() {
      return getKilometresStartValue()
    },
    routeFullPath() {
      return window.location.href
    },
    activePageCars() {
      return this.activeCars.find(item => item.currentPage === this.activePage)
    }
  },
  methods: {
    formatPrice(price) {
      let parts = price.toString().split(".");
      parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, " ");
      return parts.join(".");
    },
    deleteValue(name, value) {
      this.filters[name].value = this.filters[name].value.filter(item => item !== value)
    },
    deleteMakeModelValue(value) {
      this.filters.make.value = this.filters.make.value.filter(item => item !== value)
      this.filters.model.value = this.filters.model.value.filter(item => item !== value)
    },
    deleteRangeValue(name, startValue) {
      this.filters[name].value = startValue
    },
    compareActiveAndStartValues(arr1, arr2) {
      return JSON.stringify(arr1) === JSON.stringify(arr2)
    },
    onChangePage(page) {
      this.$router.push({name: 'catalog', query: {page: page}})
      this.activePage = page
    },
    openMobileFilter() {
      this.activeFilter = true
      hideBodyScrollbar()
    },
    closeMobileFilter() {
      this.activeFilter = false
      showBodyScrollbar()
    },
    checkWindowMobile() {
      if (window.innerWidth < 992) {
        this.activeFilter = false
        this.isMobile = true
      } else {
        this.activeFilter = true
        this.isMobile = false
      }
    },
    applyFilters() {
      this.activePage = 1
      this.activeCars = doFilter(this.filters)
      this.closeMobileFilter()
    }
  },
  mounted() {
    this.activeCars = doFilter(this.filters)

    this.checkWindowMobile()

    window.addEventListener('resize', this.checkWindowMobile)
  },
  unmounted() {
    window.removeEventListener('resize', this.checkWindowMobile)
  },
  watch: {
    filters: {
      handler() {
        if (!this.isMobile) {
          this.activePage = 1
          this.activeCars = doFilter(this.filters)
        }
      },
      deep: true
    },
    'filters.sort.value': function (newVal, oldVal) {
      if (this.isMobile) {
        this.activePage = 1
        this.activeCars = doFilter(this.filters)
      }
    },
    'filters.name.value': function (newVal, oldVal) {
      if (this.isMobile) {
        this.activePage = 1
        this.activeCars = doFilter(this.filters)
      }
    },
  }
}
</script>

<template>
  <section class="section-cars-catalog">
    <div v-if="activeFilter" class="cars-catalog__filter-modal-wrap">
    </div>

    <div class="container">
      <div class="cars-catalog__wrap">
        <div v-show="activeFilter" class="cars-catalog__filter" >
          <button @click="closeMobileFilter" class="modal-filters__cross modal-filters__cross-first">
            <Icon src="cross-btn" width="24" height="24" class="modal-filters__cross-icon"/>
          </button>

          <div class="cars-catalog__filter-wrap">
            <div class="cars-catalog__filter-wrap-container" :class="{container: isMobile}">
              <button @click="closeMobileFilter" class="modal-filters__cross modal-filters__cross-second">
                <Icon src="cross-btn" width="24" height="24" class="modal-filters__cross-icon"/>
              </button>

              <div class="cars-catalog__filter-title title-text">Detailed search</div>

              <div class="filter">
                <Collapse size="small" title="Make, Model">
                  <template #header>
                    <ul v-if="filters.make.value.length || filters.model.value.length" class="filter__rule-chosen-list">
                      <li v-for="item in [...filters.make.value, ...filters.model.value]"
                          class="filter__rule-chosen-list-item">
                        <button @click="deleteMakeModelValue(item)" class="filter__rule-chosen-list-item-btn">
                          <Icon src="filter-cross" class="filter__rule-chosen-list-item-icon"/>
                          <span class="filter__rule-chosen-list-item-name">{{ item }}</span>
                        </button>
                      </li>
                    </ul>
                  </template>

                  <template #default>
                    <div class="filter__rule">
                      <div class="filter__search-input-wrap">
                        <div class="filter__search-input-label">Make</div>

                        <AutocompleteInputMultiple v-model:value="filters.make.value"
                                                   :autocomplete-data="filters.make.data"
                                                   placeholder="Search Make..." class="cars-catalog__search"/>
                      </div>
                    </div>

                    <div class="filter__rule">
                      <div class="filter__search-input-wrap">
                        <div class="filter__search-input-label">Model</div>

                        <AutocompleteInputMultiple v-model:value="filters.model.value"
                                                   :autocomplete-data="getFilterModelData"
                                                   placeholder="Search Model..." class="cars-catalog__search"/>
                      </div>
                    </div>
                  </template>
                </Collapse>
              </div>

              <div class="filter">
                <Collapse size="small" title="Body type">
                  <template #header>
                    <ul v-if="filters.bodyType.value.length" class="filter__rule-chosen-list">
                      <li v-for="item in filters.bodyType.value" class="filter__rule-chosen-list-item">
                        <button @click="deleteValue('bodyType', item)" class="filter__rule-chosen-list-item-btn">
                          <Icon src="filter-cross" class="filter__rule-chosen-list-item-icon"/>
                          <span class="filter__rule-chosen-list-item-name">{{ item }}</span>
                        </button>
                      </li>
                    </ul>
                  </template>

                  <template #default>
                    <div class="filter__rule filter__rule_checkbox">
                      <div class="filter__checkbox-wrap">
                        <CheckboxMultiple v-model:value="filters.bodyType.value" :options="filters.bodyType.data"/>
                      </div>
                    </div>
                  </template>
                </Collapse>
              </div>

              <div class="filter">
                <Collapse size="small" title="Transmission">
                  <template #header>
                    <ul v-if="filters.transmission.value.length" class="filter__rule-chosen-list">
                      <li v-for="item in filters.transmission.value" class="filter__rule-chosen-list-item">
                        <button @click="deleteValue('transmission', item)" class="filter__rule-chosen-list-item-btn">
                          <Icon src="filter-cross" class="filter__rule-chosen-list-item-icon"/>
                          <span class="filter__rule-chosen-list-item-name">{{ item }}</span>
                        </button>
                      </li>
                    </ul>
                  </template>

                  <template #default>
                    <div class="filter__rule filter__rule_checkbox">
                      <div class="filter__checkbox-wrap">
                        <CheckboxMultiple v-model:value="filters.transmission.value"
                                          :options="filters.transmission.data"/>
                      </div>
                    </div>
                  </template>
                </Collapse>
              </div>

              <div class="filter">
                <Collapse size="small" title="Price">
                  <template #header>
                    <ul v-if="!compareActiveAndStartValues(filters.price.value, startValuePrice)"
                        class="filter__rule-chosen-list">
                      <li class="filter__rule-chosen-list-item">
                        <button @click="deleteRangeValue('price', startValuePrice)"
                                class="filter__rule-chosen-list-item-btn">
                          <Icon src="filter-cross" class="filter__rule-chosen-list-item-icon"/>
                          <span class="filter__rule-chosen-list-item-name">$ {{ formatPrice(filters.price.value[0]) }} - $ {{
                              formatPrice(filters.price.value[1])
                            }}</span>
                        </button>
                      </li>
                    </ul>
                  </template>

                  <template #default>
                    <div class="filter__rule filter__rule_checkbox">
                      <div class="filter__range-wrap">
                        <div class="filter__range-values">
                          <div class="filter__range-values-item">$ {{ formatPrice(filters.price.value[0]) }}</div>
                          <div class="filter__range-values-item">$ {{ formatPrice(filters.price.value[1]) }}</div>
                        </div>

                        <Slider v-model="filters.price.value" :min="startValuePrice[0]" :max="startValuePrice[1]"
                                :tooltips="false"
                                class="slider-range filter__slider-range"/>
                      </div>
                    </div>
                  </template>
                </Collapse>
              </div>

              <div class="filter">
                <Collapse size="small" title="Year">
                  <template #header>
                    <ul v-if="!compareActiveAndStartValues(filters.year.value, startValueYear)"
                        class="filter__rule-chosen-list">
                      <li class="filter__rule-chosen-list-item">
                        <button @click="deleteRangeValue('year', startValueYear)"
                                class="filter__rule-chosen-list-item-btn">
                          <Icon src="filter-cross" class="filter__rule-chosen-list-item-icon"/>
                          <span class="filter__rule-chosen-list-item-name">{{
                              filters.year.value[0]
                            }} - {{ filters.year.value[1] }}</span>
                        </button>
                      </li>
                    </ul>
                  </template>

                  <template #default>
                    <div class="filter__rule filter__rule_checkbox">
                      <div class="filter__range-wrap">
                        <div class="filter__range-values">
                          <div class="filter__range-values-item">{{ filters.year.value[0] }}</div>
                          <div class="filter__range-values-item">{{ filters.year.value[1] }}</div>
                        </div>

                        <Slider v-model="filters.year.value" :min="startValueYear[0]" :max="startValueYear[1]"
                                :tooltips="false"
                                class="slider-range filter__slider-range"/>
                      </div>
                    </div>
                  </template>
                </Collapse>
              </div>

              <div class="filter">
                <Collapse size="small" title="Kilometres">
                  <template #header>
                    <ul v-if="!compareActiveAndStartValues(filters.kilometres.value, startValueKilometres)"
                        class="filter__rule-chosen-list">
                      <li class="filter__rule-chosen-list-item">
                        <button @click="deleteRangeValue('kilometres', startValueKilometres)"
                                class="filter__rule-chosen-list-item-btn">
                          <Icon src="filter-cross" class="filter__rule-chosen-list-item-icon"/>
                          <span class="filter__rule-chosen-list-item-name">{{
                              formatPrice(filters.kilometres.value)
                            }} or less</span>
                        </button>
                      </li>
                    </ul>
                  </template>

                  <template #default>
                    <div class="filter__rule filter__rule_checkbox">
                      <div class="filter__range-wrap">
                        <div class="filter__range-values">
                          <div class="filter__range-values-item">{{ formatPrice(filters.kilometres.value) }} or less
                          </div>
                        </div>

                        <Slider v-model="filters.kilometres.value" :max="startValueKilometres"
                                :tooltips="false" class="slider-range filter__slider-range"/>
                      </div>
                    </div>
                  </template>
                </Collapse>
              </div>

              <button @click="applyFilters" class="cars-catalog__filter-apply-btn btn btn_solid">Apply</button>
            </div>
          </div>
        </div>

        <div class="cars-catalog__items-wrap">
          <div class="cars-catalog__header">
            <div class="cars-catalog__header-filter-wrap">
              <button @click="openMobileFilter" class="cars-catalog__filter-mobile-btn">
                <Icon src="filter-btn" class="cars-catalog__filter-mobile-btn-icon"/>
                <div class="cars-catalog__search-title text">Search Filter</div>
              </button>

              <div class="cars-catalog__search-wrap">
                <AutocompleteInput v-model:value="filters.name.value" :autocomplete-data="filters.name.data"
                                   :absolute="true"
                                   placeholder="Find a dream car..." class="cars-catalog__search"/>

                <ShareButton tooltip="Share search result" :tooltip-width="161" :link="routeFullPath"
                             class="cars-catalog__share-search"/>
              </div>
            </div>

            <div class="cars-catalog__sort">
              <div class="cars-catalog__sort-label">Sorted by</div>

              <div class="cars-catalog__sort-select">
                <SelectComponent v-model:model-value="filters.sort.value" :options="filters.sort.data"/>
              </div>
            </div>
          </div>

          <template v-if="activePageCars">
            <div v-if="activePageCars.items" class="cars-catalog__items">
              <CarCard v-for="(car, carIndex) in activePageCars.items" :car="car" :key="`catalog-car-${carIndex}`"/>
            </div>

            <div v-if="activePage && activePageCars.lastPage > 1" class="cars-catalog__pagination">
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

<style src="@vueform/slider/themes/default.css">

</style>
