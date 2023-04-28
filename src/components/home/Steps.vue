<script>
import Icon from "../Icon.vue";
export default {
  name: "Steps",
  components: {Icon},
  data() {
    return {
      steps: [
        {
          title: 'First Contact',
          text: 'Tell us what your dream vehicle is.'
        },
        {
          title: 'Vehicle Selection',
          text: 'One of our Qualified Agents sends you custom pictures and videos of the car you are interested in.'
        },
        {
          title: 'Secure Financing',
          text: 'You work with a dedicated Qualified Agent to secure financing on your terms.'
        },
        {
          title: 'Vehicle Delivery',
          text: 'We deliver your car to your home or office for you to test drive.'
        },
        {
          title: 'Getting Vehicle',
          text: 'If you love the vehicle, you sign the paperwork and keep the car.'
        },
      ]
    }
  }
}
</script>

<template>
  <section class="section-steps">
    <div class="container">
      <div class="steps__content">
        <h2 class="steps__title title-2">Your perfect car in 5 easy steps</h2>

        <div class="steps__info">
          <div class="steps__column">
            <ul class="steps__list">
              <li v-for="(step, index) in steps" class="steps__list-item">
                <div class="steps__list-item-number">
                  <Icon src="step-triangle" class="steps__list-item-number-icon"/>
                  <span class="steps__list-item-number-text">{{ index + 1 }}</span>
                </div>

                <div class="steps__list-item-text">
                  <div class="steps__list-item__title title-text">{{ step.title }}</div>
                  <div class="text steps__list-item-description">{{ step.text }}</div>
                </div>
              </li>
            </ul>
          </div>

          <div class="steps__column">
            <div class="steps__imgs">
              <div class="steps__img-phone steps__img-phone-left">
                <picture>
                  <source media="(max-width:767px)" srcset="@/assets/imgs/home/steps/X1-mobile.png">
                  <img src="@/assets/imgs/home/steps/X1.png" alt="Flowers" style="width:auto;">
                </picture>
              </div>
              <div class="steps__img-phone steps__img-phone-right">
                <picture>
                  <source media="(max-width:767px)" srcset="@/assets/imgs/home/steps/X2-mobile.png">
                  <img src="@/assets/imgs/home/steps/X2.png" alt="Flowers" style="width:auto;">
                </picture>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
