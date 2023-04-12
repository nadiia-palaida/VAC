<script setup>
import {reactive, computed} from 'vue'
import InputComponent from "../form/InputComponent.vue"
import '../../plugins/vee-validate'
import {useModalStore} from "../../store/modal";
import { useValidateForm, useIsFormValid, Form} from 'vee-validate';

const emit = defineEmits(['onSubmitEvent'])

const userData = reactive({
  name: '',
  phone: '',
  email: '',
  vehicle: 'Name of selected vehicle'
})

const modalStore = useModalStore()

const modalData = computed(() => {
  return modalStore.data
})

const validate = useValidateForm();

const isValidForm = useIsFormValid()

async function onSubmit() {
  const contactsFormValidate = await validate();

  console.log('onSubmit', await validate())

  if(contactsFormValidate.valid) {
    console.log('form is valid')
    emit('onSubmitEvent')
  }
}
</script>

<template>
  <Form @submit="onSubmit()" class="modal-contacts__form">

    <InputComponent v-if="modalData" v-model="userData.vehicle" name="vehicle" :rules="{required: true}"
                    class="modal-contacts__input"/>

    <InputComponent v-model="userData.name" name="name" :rules="{required: true}" placeholder="Your Name" icon="user" class="modal-contacts__input"/>

    <InputComponent v-model="userData.phone" name="phone" :rules="{required: true, digits: 10}" placeholder="Phone Number" icon="phone" class="modal-contacts__input"/>


    <InputComponent v-model="userData.email" name="email" :rules="{required: true, email: true}" placeholder="Email Address" icon="letter" class="modal-contacts__input"/>

    <button class="modal-contacts__btn-submit btn btn_solid">Contact me</button>
  </Form>
</template>
