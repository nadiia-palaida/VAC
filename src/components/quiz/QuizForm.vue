<script setup>
import RadioComponent from "../form/RadioComponent.vue";
import '@/plugins/vee-validate'
import {onMounted, onUpdated, reactive, ref} from "vue";
import {useIsFormValid, useValidateForm, Form} from "vee-validate";
import Icon from "../Icon.vue";
import InputComponent from "../form/InputComponent.vue";
import {computed} from "@vue/reactivity";

const emit = defineEmits(['changeValue', 'goBack'])

const FORM_TYPE_RADIO = 'radio'
const FORM_TYPE_INPUT = 'input'

const props = defineProps({
  quiz: {type: Object, required: true},
  previousQuiz: {},
  activeValueData: {}
})

const activeValue = ref(null)
const activeValueInput = reactive({})

function updateValue() {
    if (props.quiz.type === FORM_TYPE_RADIO) {
      emit('changeValue', activeValue.value)
    } else if (props.quiz.type === FORM_TYPE_INPUT) {
      emit('changeValue', activeValueInput)
    }
}

const validate = useValidateForm();

const isValidForm = useIsFormValid()

async function onSubmit() {
  const formValidate = await validate();

  if (formValidate.valid) {
    updateValue()
  }
}

onUpdated(() => {
  if (props.activeValueData) {
    if (typeof props.activeValueData === 'object') {
      let isValue = false

      for (let key in props.activeValueData) {
        if (props.activeValueData.key) {
          isValue = true
        }
      }
      if (isValue) {
        activeValue.value = props.activeValueData
      }
    } else {
      activeValue.value = props.activeValueData
    }
  }
})
</script>

<template>
  <div class="quiz">
    <div class="quiz__title subtitle-2">{{ quiz.title }}</div>

    <div class="quiz__subtitle text">{{ quiz.subtitle }}</div>

    <Form @submit="onSubmit()">
      <div v-if="quiz.type === FORM_TYPE_RADIO" class="quiz__form-wrapper">
        <RadioComponent :name="quiz.name" :options="quiz.values" v-model:model-value="activeValue"
                        :rules="{required: true}"/>
      </div>

      <div v-if="quiz.type === FORM_TYPE_INPUT" class="quiz__form-wrapper">
        <InputComponent v-for="(item, index) in quiz.values" :name="item.name" :placeholder="item.placeholder"
                        v-model:model-value="activeValueInput[item.name]" :rules="item.rules"
                        :type="item.type" autocomplete="off"
                        :validateOnValueUpdate="false" :key="`input-quiz-${index}`" class="quiz__input"/>
      </div>

      <div class="quiz__btns-wrap">
        <button type="submit" class="quiz__btn btn btn_solid">Сontinue</button>

        <button v-if="previousQuiz" @click="emit('goBack')" class="quiz__btn quiz__btn-back">
          <Icon src="arrow-back" class="quiz__arrow-back-icon"/>
          <span>Back</span>
        </button>
      </div>
    </Form>
  </div>
</template>
