<script>
import Icon from '../Icon.vue';
export default {
  name: "QuizSuccess",
  components: {Icon},
  computed: {
    confirmationCode() {
      return `${Math.floor(Math.random() * 10000000)}-${Math.random().toString(36).slice(2, 7)}${Math.floor(Math.random() * 10)}`;
    }
  }
}
</script>

<template>
<div class="quiz__success">
  <div class="quiz__success-icon-wrap">
    <Icon src="success-tick" class="quiz__success-icon"/>
  </div>

  <h2 class="quiz__success-title subtitle-2">Application successful!</h2>

  <div class="quiz__success-subtitle text">Your response was successfully submitted. Thank you!
    Our team will reach out to you shortly.</div>

  <div class="quiz__success-confirmation">
    <div class="quiz__success-confirmation-title">Confirmation number:</div>

    <div class="quiz__success-confirmation-number">{{confirmationCode}}</div>
  </div>

  <router-link :to="{name: 'home'}" class="quiz__success-link btn btn_solid">Go to main page</router-link>
</div>
</template>