<script>
export default {
  name: "SelectComponent",
  props: {
    options: {type: Array, required: true},
    modelValue: {}
  },
  computed: {
    activeOption() {
      return this.options.find(item => item.value === this.modelValue)
    },
    getOptions() {
      return this.options.filter(item => item.value !== this.modelValue)
    }
  },
  data() {
    return {
      activeList: false
    }
  },
  methods: {
    select(value) {
      this.$emit('update:modelValue', value)
      this.activeList = false
    }
  }
}
</script>

<template>
  <div class="select" :class="{'select_active': activeList}">
      <div @click="activeList = !activeList" class="select__value">
        {{ activeOption.label }}
      </div>

      <ul v-show="activeList" class="select__list">
        <li v-for="item in getOptions" class="select__list-item">
          <button @click="select(item.value)" class="select__list-item-btn">
            {{ item.label }}
          </button>
        </li>
      </ul>
  </div>
</template>
