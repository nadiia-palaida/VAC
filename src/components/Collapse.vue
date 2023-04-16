<script>
import SlideUpDown from 'vue3-slide-up-down'

const SIZE_SMALL = 'small'

export default {
  name: "Collapse",
  components: {SlideUpDown},
  props: {
    title: {type: String, required: true},
    size: {type: String}
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
  <div @click="toggleActive" class="collapse" :class="collapseClasses">
    <div class="collapse__title-wrap">
      <div class="collapse__title title-text"> {{ title }}</div>
    </div>

    <slide-up-down @click.stop v-model="active" :duration="1000">
      <slot></slot>
    </slide-up-down>
  </div>
</template>
