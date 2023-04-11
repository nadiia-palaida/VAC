<script>
import PageTitle from "../components/PageTitle.vue";
import CreditPolicy from "../components/loan-rates/CreditPolicy.vue";
import InterestRates from "../components/loan-rates/InterestRates.vue";
import Benefits from "../components/loan-rates/Benefits.vue";
import CalculatorSection from "../components/CalculatorSection.vue";
export default {
  name: "LoanRates",
  components: {CalculatorSection, Benefits, InterestRates, CreditPolicy, PageTitle}
}
</script>

<template>
  <PageTitle title="Loan rates"/>

  <CreditPolicy/>

  <InterestRates/>

  <Benefits/>

  <CalculatorSection class="benefits__calculator-section"/>
</template>