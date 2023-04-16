<script>
import Icon from "../Icon.vue";

export default {
  name: "ShareButton",
  components: {Icon},
  props: {
    tooltip: {type: String, default: 'Share'},
    tooltipWidth: {type: Number, default: 200},
    link: {type: String}
  },
  data() {
    return {
      isCopy: false
    }
  },
  computed: {
    tooltipText() {
      if(this.isCopy) {
        return 'Link copied'
      } else {
        return this.tooltip
      }
    }
  },
  methods: {
    share() {
      this.isCopy = true
      navigator.clipboard.writeText(this.link);

      setTimeout(() => {
        this.isCopy = false
      }, 3000)
    }
  }
}
</script>

<template>
  <div class="share-btn__wrap">
    <button @click="share" class="share-btn">
      <Icon src="share" class="share-btn__icon"/>
    </button>

    <div class="share-btn__tooltip" :class="{active: isCopy}" :style="`width: ${tooltipWidth}px;`">
      {{ tooltipText }}
    </div>
  </div>
</template>