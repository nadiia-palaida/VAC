<script>
import Icon from "../Icon.vue";
import {PerfectScrollbar} from 'vue3-perfect-scrollbar'

export default {
  name: "SearchInput",
  components: {Icon, PerfectScrollbar},
  emits: ['update:value'],
  props: {
    placeholder: {type: String, default: 'Search'},
    name: {type: String, default: 'search'},
    autocompleteData: {type: Array, required: true},
    value: {},
    isFilter: {type: Boolean, default: false}
  },
  data() {
    return {
      activeList: false
    }
  },
  computed: {
    getAutocompleteData() {
      return this.autocompleteData.filter(item => item.toLowerCase().match(this.value.toLowerCase()))
    }
  },
  methods: {
    onInput(value) {
      this.$emit('update:value', value)
    }
  },
  mounted() {
    window.addEventListener('click', () => {
      this.activeList = false
    })
  }
}
</script>

<template>
  <div @click.stop class="search-input">
    <div class="search-input__wrap">
      <input @input="onInput($event.target.value)" @focus="activeList = true" :value="value"
            @keydown="activeList = true" type="text" :placeholder="placeholder"
             class="search-input__item">

      <Icon src="search" class="search-input__icon"/>
    </div>

    <div v-if="activeList && getAutocompleteData.length" class="search-input__list-wrap"
         :class="{'search-input__list-wrap_filter': isFilter}">
      <perfect-scrollbar>
        <ul class="search-input__list">
          <li v-for="item in getAutocompleteData" class="search-input__list-item">
            <button @click="onInput(item)" class="search-input__list-btn">{{ item }}</button>
          </li>
        </ul>
      </perfect-scrollbar>
    </div>
  </div>
</template>
