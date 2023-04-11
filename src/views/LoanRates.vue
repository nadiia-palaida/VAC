<script>
import PageTitle from "../components/PageTitle.vue";
import CreditPolicy from "../components/loan-rates/CreditPolicy.vue";
export default {
  name: "LoanRates",
  components: {CreditPolicy, PageTitle}
}
</script>

<template>
  <PageTitle title="Loan rates"/>

  <CreditPolicy/>
</template>