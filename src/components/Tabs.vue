<script>
export default {
  name: "Tabs",
  emits: ['update:modelValue'],
  props: {
    tabsList: {type: Array, required: true},
    modelValue: {}
  },
  methods: {
    chooseTab(value) {
      this.$emit('update:modelValue', value)
    }
  }
}
</script>

<template>
  <div class="tabs">
    <ul class="tabs__list">
      <li v-for="tab in tabsList" class="tabs__list-item">
        <button @click="chooseTab(tab.value)" class="tabs__button" :class="{active: tab.value === modelValue}">
          {{ tab.label }}
        </button>
      </li>
    </ul>
  </div>
</template>
