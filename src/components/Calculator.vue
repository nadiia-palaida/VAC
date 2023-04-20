<script>
import Tabs from "./Tabs.vue";
import Slider from '@vueform/slider'

const MIN_PRICE = 50000
const MAX_PRICE = 850000

const MIN_DURATION = 12
const MAX_DURATION = 60

const TYPE_POOR = 'poor'
const TYPE_AVERAGE = 'average'
const TYPE_GOOD = 'good'

export default {
  name: "Calculator",
  components: {Tabs, Slider},
  props: {
    newPrice: {type: Number},
    buttonTitle: {type: String}
  },
  data() {
    return {
      tabsTypesList: [
        {
          label: 'Poor',
          value: 'poor'
        },
        {
          label: 'Average',
          value: 'average'
        },
        {
          label: 'Good',
          value: 'good'
        },
      ],

      MIN_PRICE, MAX_PRICE, MIN_DURATION, MAX_DURATION,
      TYPE_POOR, TYPE_AVERAGE, TYPE_GOOD,

      activeType: TYPE_POOR,
      price: this.newPrice || MIN_PRICE,
      duration: 18
    }
  },
  computed: {
    monthlyPayment() {
      return (+this.price / +this.duration).toFixed(0)
    },
    weeklyPayment() {
      return (this.monthlyPayment / 4).toFixed(0)
    },
    biWeeklyPayment() {
      return (this.weeklyPayment * 2).toFixed(0)
    }
  },
  mounted() {
    this.activeType = this.tabsTypesList ? this.tabsTypesList[0].value : null
  },
  watch: {
    activeType(newActiveType) {
      if (newActiveType === TYPE_POOR) {
        this.price = this.newPrice || 150000
        this.duration = 18
      } else if (newActiveType === TYPE_AVERAGE) {
        this.price = this.newPrice || 400000
        this.duration = 30
      } else if (newActiveType === TYPE_GOOD) {
        this.price = this.newPrice || 550000
        this.duration = 48
      }
    }
  }
}
</script>

<template>
  <div class="calculator">
    <div class="calculator__block">
      <div class="calculator__type__tabs">
        <Tabs :tabs-list="tabsTypesList" v-model="activeType"/>
      </div>

      <div class="calculator__ranges">
        <div class="calculator__ranges-item">
          <div class="calculator__ranges-item-info">
            <div class="calculator__ranges-item-title title-text">Loan Amount</div>
            <div class="calculator__ranges-item-value title-text">$ {{ price }}</div>
          </div>

          <div v-if="newPrice" class="calculator__slider-custom"></div>

          <Slider v-else v-model="price" :min="MIN_PRICE" :max="MAX_PRICE" :tooltips="false" :lazy="false"
                  class="slider-range"/>
        </div>

        <div class="calculator__ranges-item">
          <div class="calculator__ranges-item-info">
            <div class="calculator__ranges-item-title title-text">Loan Duration</div>
            <div class="calculator__ranges-item-value title-text">
              {{ duration }}
              <span class="calculator__ranges-item-value-text">month</span>
            </div>
          </div>

          <Slider v-model="duration" :min="MIN_DURATION" :max="MAX_DURATION" :tooltips="false" :lazy="false"
                  class="slider-range"/>
        </div>
      </div>
    </div>

    <div class="calculator__block calculator__block_total">
      <div class="calculator__payments">
        <div class="calculator__payment-item">
          <div class="calculator__payment-label text">Bi-Weekly Payment</div>
          <div class="calculator__payment-price calculator__payment-price_big">$ {{ biWeeklyPayment }}</div>
        </div>
        <div class="calculator__payment-item">
          <div>
            <div class="calculator__payment-label text">Monthly Payment</div>
            <div class="calculator__payment-price">$ {{ monthlyPayment }}</div>
          </div>
        </div>
        <div class="calculator__payment-item">
          <div>
            <div class="calculator__payment-label text">Weekly Payment</div>
            <div class="calculator__payment-price">$ {{ weeklyPayment }}</div>
          </div>
        </div>
      </div>

      <router-link :to="{name: 'quiz'}" class="calculator__btn-request btn btn_solid">{{ buttonTitle || 'Request a car' }}</router-link>
    </div>
  </div>
</template>

<style src="@vueform/slider/themes/default.css">

</style>

<style lang="scss">

</style>
