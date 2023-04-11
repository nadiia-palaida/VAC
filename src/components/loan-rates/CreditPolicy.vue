<script>
export default {
  name: "CreditPolicy"
}
</script>

<template>
  <section class="section section-credit-policy">
    <div class="container container-tablet">
      <div class="credit-policy__content">
        <div class="credit-policy__column">
          <div class="credit-policy__block">
            <h2 class="title-2 about-title credit-policy__title">Our credit policy</h2>

            <div class="text about-text credit-policy__text">You want to secure a loan that works for your budget. Here at VAC we work with
              Canada’s largest lenders to help you find the best interest rates and terms for your auto loan.
            </div>

            <router-link :to="{name: 'quiz'}" class="our-mission__btn btn btn_solid btn_width">
              Request a Car
            </router-link>
          </div>
        </div>

        <div class="credit-policy__column">
          <div class="credit-policy__img-wrap">
            <img src="@/assets/imgs/loan-rates/Chevrolet.jpg" alt="car">
          </div>
        </div>
      </div>
    </div>
  </section>
</template>