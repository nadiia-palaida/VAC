<script>
import Icon from "../Icon.vue";
import {PerfectScrollbar} from 'vue3-perfect-scrollbar'

export default {
  name: "AutocompleteInputMultiple",
  components: {Icon, PerfectScrollbar},
  emits: ['update:value'],
  props: {
    placeholder: {type: String, default: 'Search'},
    name: {type: String, default: 'search'},
    autocompleteData: {type: Array, required: true},
    value: {},
    absolute: {type: Boolean, default: true},
  },
  data() {
    return {
      localValue: '',
      activeList: false
    }
  },
  computed: {
    getAutocompleteData() {
      return this.autocompleteData.filter(item => !this.value.includes(item) && item.toLowerCase().match(this.localValue.toLowerCase()))
    }
  },
  methods: {
    onInput(value) {
      this.localValue = value
    },
    onEnter(value) {
      if (this.autocompleteData.includes(value)) {
        if (!this.value.includes(value)) {
          this.$emit('update:value', [...this.value, value])
        }
      }
    },
    select(value) {
      if (!this.value.includes(value)) {
        this.$emit('update:value', [...this.value, value])
      }
      this.localValue = ''
      this.activeList = false
    },
    deleteValue(value) {
      this.$emit('update:value', [...this.value.filter(item => item !== value)])
    }
  },
  mounted() {
    window.addEventListener('click', () => {
      this.activeList = false
    })
  },
  watch: {
    autocompleteData() {
      this.$emit('update:value', [...this.value.filter(item => this.autocompleteData.includes(item))])
    }
  }
}
</script>

<template>
  <div @click.stop class="search-input">
    <div class="search-input__wrap">
      <input @input="onInput($event.target.value)" @focus="activeList = true" :value="localValue"
             @keyup.enter="onEnter($event.target.value)"
             @keydown="activeList = true" type="text" :placeholder="placeholder"
             class="search-input__item">

      <Icon src="search" class="search-input__icon"/>
    </div>

    <div v-if="activeList && getAutocompleteData.length" class="search-input__list-wrap"
         :class="{'search-input__list-wrap_filter': absolute}">
      <perfect-scrollbar>
        <ul class="search-input__list">
          <li v-for="item in getAutocompleteData" class="search-input__list-item">
            <button @click="select(item)" class="search-input__list-btn">{{ item }}</button>
          </li>
        </ul>
      </perfect-scrollbar>
    </div>

    <ul v-if="value.length" class="filter__rule-chosen-list">
        <li v-for="itemFilter in value" class="filter__rule-chosen-list-item">
          <button @click="deleteValue(itemFilter)" class="filter__rule-chosen-list-item-btn">
            <Icon src="filter-cross" class="filter__rule-chosen-list-item-icon"/>
            <span class="filter__rule-chosen-list-item-name">{{ itemFilter }}</span>
          </button>
        </li>
    </ul>
  </div>
</template>
