<script setup>
import Icon from "../Icon.vue";
import {useField} from 'vee-validate';

defineEmits(['update:modelValue'])

const props = defineProps({
  type: {type: String, default: 'text'},
  placeholder: {type: String},
  errors: {type: Array},
  name: {type: String, required: true},
  icon: {type: String},
  modelValue: {required: true},
  rules: {},
  validateOnValueUpdate: {type: Boolean, default: true},
  autocomplete: {type: String, default: 'on'}
})

const { errorMessage, value } = useField(() => props.name, props.rules, {validateOnValueUpdate: props.validateOnValueUpdate});
</script>

<template>
  <div class="input" :class="{input_error: errorMessage, input_icon: icon}">
    <div class="input__wrap">
      <input :value="modelValue" :name="name" :type="type" :placeholder="placeholder" :autocomplete="autocomplete"
             @input="$emit('update:modelValue', $event.target.value)" class="input__item">
      <Icon v-if="icon" :src="icon" class="input__icon"/>
    </div>

    <span v-if="errorMessage" class="input__error">{{ errorMessage }}</span>
  </div>
</template>
