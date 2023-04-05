<script>
import Calculator from "./Calculator.vue";
export default {
  name: "CalculatorSection",
  components: {Calculator}
}
</script>

<template>
  <section class="section">
    <div class="container">
      <div class="calculator-section">
        <div class="calculator-section__description">
          <h2 class="calculator-section__title title-2">Let’s figure out how much you can afford</h2>

          <div class="calculator-section__text text">Before you start shopping, let’s figure out how much you can afford.
            Move the sliders to see how the loan duration and the total loan amount affect your monthly payments.
          </div>
        </div>

        <div class="calculator-section__item">
          <Calculator/>
        </div>
      </div>
    </div>
  </section>
</template>
