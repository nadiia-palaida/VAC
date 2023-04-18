<script>
import Icon from "../Icon.vue";
import {PerfectScrollbar} from 'vue3-perfect-scrollbar'

export default {
  name: "AutocompleteInput",
  components: {Icon, PerfectScrollbar},
  emits: ['update:value'],
  props: {
    placeholder: {type: String, default: 'Search'},
    name: {type: String, default: 'search'},
    autocompleteData: {type: Array, required: true},
    value: {},
    absolute: {type: Boolean, default: true},
    multiple: {type: Boolean, default: false}
  },
  data() {
    return {
      localValue: '',
      activeList: false
    }
  },
  computed: {
    getAutocompleteData() {
      if(!this.multiple) {
        return this.autocompleteData.filter(item => item.toLowerCase().match(this.localValue.toLowerCase()))
      } else {
        return this.autocompleteData.filter(item => !this.value.includes(item) && item.toLowerCase().match(this.localValue.toLowerCase()))
      }
    }
  },
  methods: {
    onInput(value) {
      if (!this.multiple) {
        this.$emit('update:value', value)
      }
      this.localValue = value
    },
    onEnter(value) {
      if (this.multiple) {
        if (this.autocompleteData.includes(value)) {
          if (!this.value.includes(value)) {
            this.$emit('update:value', [...this.value, value])
          }
        }
      }
    },
    select(value) {
      if (!this.multiple) {
        this.$emit('update:value', value)
        this.localValue = value
      } else {
        if (!this.value.includes(value)) {
          this.$emit('update:value', [...this.value, value])
        }
        this.localValue = ''
      }
      this.activeList = false
    }
  },
  mounted() {
    if (!this.multiple) {
      this.localValue = this.value
    }

    window.addEventListener('click', () => {
      this.activeList = false
    })
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
  </div>
</template>
