<script>
import Icon from "../Icon.vue";

export default {
  name: "SearchInput",
  components: {Icon},
  emits: ['update:inputValue', 'update:chosenValue'],
  props: {
    placeholder: {type: String, default: 'Search'},
    name: {type: String, default: 'search'},
    inputValue: {},
    chosenValue: {},
    itemsList: {type: Array, required: true},
  },
  data() {
    return {
      activeList: false
    }
  },
  methods: {
    onChoose(value) {
      this.onInput(value)
      this.$emit('update:chosenValue', value)
    },
    onInput(value) {
      this.$emit('update:inputValue', value)
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
      <input @input="onInput($event.target.value)" @focus="activeList = true" :value="inputValue" type="text" :placeholder="placeholder" class="search-input__item">

      <Icon src="search" class="search-input__icon"/>
    </div>

    <div v-if="activeList && itemsList.length" class="search-input__list-wrap">
      <ul class="search-input__list">
        <li v-for="item in itemsList" class="search-input__list-item">
          <button @click="onChoose(item)" class="search-input__list-btn">{{ item }}</button>
        </li>
      </ul>
    </div>
  </div>
</template>
