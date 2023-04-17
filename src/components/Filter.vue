<script>
import Collapse from "./Collapse.vue";
import SearchInput from "./form/SearchInput.vue";
import {FILTER_TYPE_SEARCH, FILTER_TYPE_CHECKBOX, FILTER_TYPE_RANGE} from '@/helpers/filterTypes'

export default {
  name: "Filter",
  components: {SearchInput, Collapse},
  props: {
    rules: {type: Object, required: true},
    title: {type: String}
  },
  data() {
    return {
      FILTER_TYPE_SEARCH, FILTER_TYPE_CHECKBOX, FILTER_TYPE_RANGE,

      filterValue: {},
      inputSearchValue: {}
    }
  },
  methods: {
    doFilter(value) {
      this.$emit()
    }
  },
  watch: {
    filterValue() {
      this.$emit()
    }
  }
}
</script>

<template>
  <div class="filter">
    <Collapse :title="title" size="small">
      <div v-for="item in rules" class="filter__rule">
        <div v-if="item.type === FILTER_TYPE_SEARCH" class="filter__search-input-wrap">
          <div class="filter__search-input-label">{{ item.label }}</div>
          <SearchInput v-model:inputValue="inputSearchValue[item.name]" v-model:chosenValue="filterValue[item.name]" :is-filter="true"
                       :name="item.name" :items-list="item.searchList" :placeholder="item.placeholder"/>
        </div>
      </div>
    </Collapse>
  </div>
</template>