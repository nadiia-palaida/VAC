<script>
export default {
  name: "Benefits"
}
</script>

<template>
  <section class="section section-benefits">
    <div class="container container-tablet">
      <div class="benefits__content">
        <div class="benefits__column">
          <h2 class="title-2 about-title benefits__title">Benefits of getting an auto loan with VAC</h2>

          <div class="text about-text benefits__text">For many people getting a reasonable auto loan is the best way for them to get a
            new car. However, the benefits of getting the right loan go beyond just being able to drive a nice vehicle.
          </div>

          <div class="title-text about-title-text benefits__title-text">When you work with VAC, there are never any hidden costs or fees! We
            lay out all the terms and conditions so that you know exactly what details of the loan are before you sign
            anything.
          </div>

          <router-link :to="{name: 'quiz'}" class="btn btn_solid btn_width">
            Request a Car
          </router-link>
        </div>

        <div class="benefits__column">
          <div class="benefits__img-wrap">
            <img src="@/assets/imgs/loan-rates/Ford.jpg" alt="car">
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
