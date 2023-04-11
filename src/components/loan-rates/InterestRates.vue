<script>
import Icon from "../Icon.vue";

export default {
  name: "InterestRates",
  components: {Icon}
}
</script>

<template>
  <section class="section section-interest-rates">
    <div class="container container-tablet">
      <h2 class="title-2 interest-rates__section-title">Interest rates and loan term</h2>

      <div class="interest-rates__content">
        <div class="interest-rates__item">
          <div class="interest-rates__item-title">
            <div>
              <Icon src="rates-1" class="interest-rates__item-icon"/>
            </div>

            <div class="interest-rates__title">
              What are my interest rate options?
            </div>
          </div>

          <div class="text">
            We work to secure customized auto loans from Canada’s largest lenders. Your interest rate is critical for
            determining the total cost of your auto financing. Interest rates are based on many factors including the
            loan amount, your credit score, and your budget. We help you find the lowest interest rates available for
            your auto loan.
          </div>
        </div>

        <div class="interest-rates__item">
          <div class="interest-rates__item-title">
            <div>
              <Icon src="rates-2" class="interest-rates__item-icon"/>
            </div>

            <div class="interest-rates__title">
              How long will my loan term be?
            </div>
          </div>

          <div class="text">
            Our goal is to find the right car and the right loan for you. Because we have relationships with so many
            different lenders, we can help you find the right term length for your budget. The longer the loan is,
            often the lower the monthly payments will be—but the more expensive the loan will be overall. Most of the
            loans we secure for our clients are between 36 and 72 months.
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
