<script>
export default {
  name: "HappyCustomers",
  data() {
    return {
      numbers: [
        {
          number: '7,988+',
          text: 'Sold Cars'
        },
        {
          number: '16,974+',
          text: 'Vehicles To Choose From'
        },
        {
          number: '123',
          text: 'Experts Across Canada'
        },
      ]
    }
  }
}
</script>

<template>
  <section class="section section-happy-customers">
    <div class="container">
      <div class="happy-customers__container">
        <div class="happy-customers__content">
          <h2 class="happy-customers__title title-2">Happy customers</h2>

          <div class="happy-customers__text text">Since 2017, we have helped thousands of Canadians get their dream
            vehicles from the comfort of their homes.
          </div>

          <div class="happy-customers__subtitle">What are you waiting? Get started right now!</div>

          <router-link :to="{name: 'quiz'}" class="btn btn_solid btn_width">Request a Car</router-link>

          <ul class="happy-customers__list">
            <li v-for="(number) in numbers" class="happy-customers__list-item">
              <div class="happy-customers__list-item-number title-2">{{ number.number }}</div>
              <div class="happy-customers__list-item-text text">{{ number.text }}</div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </section>
</template>
