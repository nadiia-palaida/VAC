<script>
import SlideUpDown from 'vue3-slide-up-down'

const SIZE_SMALL = 'small'

export default {
  name: "Collapse",
  components: {SlideUpDown},
  props: {
    title: {type: String, required: true},
    size: {type: String},
    filterList: {type: Array, default: []}
  },
  data() {
    return {
      active: false,
      SIZE_SMALL
    }
  },
  computed: {
    collapseClasses() {
      return {
        'collapse_active': this.active,
        'collapse_small': this.size === SIZE_SMALL
      }
    }
  },
  methods: {
    toggleActive() {
      this.active = !this.active
    }
  }
}
</script>

<template>
  <div class="collapse" :class="collapseClasses">
    <div class="collapse__title-wrap">
      <div @click="toggleActive"  class="collapse__title title-text"> {{ title }}</div>

      <slot v-if="!active" name="header"></slot>
    </div>

    <slide-up-down @click.stop v-model="active" :duration="1000" class="collapse__slide">
      <slot></slot>
    </slide-up-down>
  </div>
</template>
