<script>
import Collapse from "./Collapse.vue";
import SearchInput from "./form/SearchInput.vue";
import {FILTER_TYPE_SEARCH, FILTER_TYPE_CHECKBOX, FILTER_TYPE_RANGE} from '@/helpers/filterTypes'
import FilterList from "./FilterList.vue";

export default {
  name: "Filter",
  components: {FilterList, SearchInput, Collapse},
  emits: ['filter'],
  props: {
    rule: {type: Object, required: true},
    chosenList: {type: Array},
    deleteHandler: {}
  },
  data() {
    return {
      FILTER_TYPE_SEARCH, FILTER_TYPE_CHECKBOX, FILTER_TYPE_RANGE,

      filterValue: null,
      inputSearchValue: ''
    }
  },
  computed: {
    getActiveSearchList() {
      return this.rule.searchList.filter(item => item.toLowerCase().match(this.inputSearchValue.toLowerCase()))
    }
  },
  methods: {},
  watch: {
    filterValue() {
      this.inputSearchValue = ''
      this.$emit('filter', {name: this.rule.name, value: this.filterValue})
    }
  }
}
</script>

<template>
  <div class="filter__rule">
    <div v-if="rule.type === FILTER_TYPE_SEARCH" class="filter__search-input-wrap">
      <div class="filter__search-input-label">{{ rule.label }}</div>

      <SearchInput v-model:inputValue="inputSearchValue" v-model:chosenValue="filterValue"
                   :is-filter="true" :name="rule.name" :items-list="getActiveSearchList"
                   :placeholder="rule.placeholder" class="filter__search-input"/>
    </div>

    <FilterList :list="chosenList"/>
  </div>
</template>