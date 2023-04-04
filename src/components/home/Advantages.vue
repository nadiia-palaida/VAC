<script>
import Icon from "../Icon.vue";

export default {
  name: "Advantages",
  components: {Icon},
  data() {
    return {
      advantages: [
        {
          title: 'Vehicle Delivery',
          text: 'We deliver your vehicle directly to your door. You don’t sign anything until you test drive the vehicle. There is never any obligation to buy beforehand.',
          icon: 'vehicle-delivery'
        },
        {
          title: 'Auto Financing',
          text: 'We partner with the largest lenders in Canada to offer the strongest financing options in the industry—including rates as low as 4%',
          icon: 'auto-financing'
        },
        {
          title: 'Huge Inventory',
          text: 'We have access to thousands of high-quality vehicles and offer them to you at wholesale prices. Your dream car is waiting for you',
          icon: 'huge-inventory'
        },
      ]
    }
  }
}
</script>

<template>
  <section class="section-advantages">
    <div class="container">
      <div class="advantages__content">
        <h2 class="advantages__title title-2">Advantages of working with us</h2>

        <ul class="advantages__list">
          <li v-for="(advantage) in advantages" class="advantages__list-item">
            <div class="advantages__list-item-bg"></div>

            <!--            <img src="@/assets/imgs/home/advantages/bg1.png" alt="background triangle" class="advantages__list-item-bg-img">-->

            <div class="advantages__list-item-info">
              <div class="advantages__list-item-info-text">
                <Icon :src="advantage.icon" class="advantages__list-item-icon"/>

                <div class="advantages__list-item-title title-text">{{ advantage.title }}</div>

                <div class="advantages__list-item-text text">{{ advantage.text }}</div>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </section>
</template>
