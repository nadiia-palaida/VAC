<script setup>
import {useField} from 'vee-validate';

defineEmits(['update:modelValue'])

const props = defineProps({
  options: {type: Array, required: true},
  name: {type: String},
  modelValue: {},
  errors: {type: Array},
  rules: {}
})

const {errorMessage, value} = useField(() => props.name, props.rules, {validateOnValueUpdate: false});
</script>

<template>
  <div class="radio">
    <ul class="radio__options">
      <li v-for="(item, index) in options" class="radio__options-item" :key="`radio-label-${index}`"
          :class="{'radio__options-item_active': modelValue === item.value}">
        <label class="radio__options-btn">
          {{ item.label }}

          <input :name="name" @change="$emit('update:modelValue', item.value)" type="radio"
                 class="radio__options-btn-input">
        </label>
      </li>
    </ul>

    <span v-if="errorMessage" class="input__error">{{ errorMessage }}</span>
  </div>
</template>
