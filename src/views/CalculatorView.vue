<script>
import Calculator from "../components/Calculator.vue";
export default {
  name: "CalculatorView",
  components: {Calculator}
}
</script>

<template>
  <section class="page-title first-section">
    <div class="container">
      <div class="page-title__content">
        <h1 class="page-title__title title">Use our free calculator!</h1>
      </div>
    </div>
  </section>

  <section class="page-description">
    <div class="container">
      <div class="page-description__content">
        <div class="page-description__title title-2">Let’s figure out how
          much you can afford
        </div>

        <div class="page-description__text text">Before you start shopping, let’s figure out how much you can afford. Move
          the sliders to see how the loan duration and the total loan amount affect your monthly payments.
        </div>
      </div>
    </div>
  </section>

  <section class="calculator-item">
    <div class="container">
      <div class="calculator-item__content">
        <Calculator/>
      </div>
    </div>
  </section>
</template>

<style scoped>

</style>