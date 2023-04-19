<script>
import CheckboxComponent from "./CheckboxComponent.vue";
import Icon from "../Icon.vue";
export default {
  name: "CheckboxMultiple",
  components: {Icon, CheckboxComponent},
  props: {
    value: {},
    options: {type: Array, required: true}
  },
  methods: {
    change(value) {
      if (this.value.includes(value)) {
        this.$emit('update:value', [...this.value.filter(item => item !== value)])
      } else {
        this.$emit('update:value', [...this.value, value])
      }
    },
    deleteValue(value) {
      this.$emit('update:value', [...this.value.filter(item => item !== value)])
    },
    isValueActive(value) {
      return this.value.includes(value)
    }
  }
}
</script>

<template>
<div class="checkbox-multiple">
  <div v-for="(item, index) in options" class="filter__checkbox" :key="`checkbox-multiple-${index}-${item}`">
    <button @click="change(item.value)" class="checkbox__label">
      <div class="checkbox__text-wrap">
        <div class="checkbox__tick">
          <Icon v-show="isValueActive(item.value)" src="checkbox-tick" class="checkbox__tick-icon"/>
        </div>

        <Icon v-if="item.icon" :src="item.icon" class="checkbox__icon"/>

        <div class="checkbox__text">{{ item.label }}</div>
      </div>
    </button>
  </div>
</div>
</template>
