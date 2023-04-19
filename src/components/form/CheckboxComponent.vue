<script>
import Icon from "../Icon.vue";

export default {
  name: "CheckboxComponent",
  components: {Icon},
  props: {
    item: {type: Object, required: true},
  },
  data() {
    return {
      checked: false
    }
  }
}
</script>

<template>
  <div class="checkbox">
    <label class="checkbox__label">
      <div class="checkbox__text-wrap">
        <div class="checkbox__tick">
          <Icon v-show="checked" src="checkbox-tick" class="checkbox__tick-icon"/>
        </div>

        <Icon v-if="item.icon" :src="item.icon" class="checkbox__icon"/>

        <div class="checkbox__text">{{ item.label }}</div>
      </div>

      <input v-model="checked" @change="$emit('update:modelValue', checked)" type="checkbox" class="checkbox__input">
    </label>
  </div>
</template>
