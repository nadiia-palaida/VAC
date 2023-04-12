<script>
import SlideUpDown from 'vue3-slide-up-down'

export default {
  name: "Collapse",
  components: {SlideUpDown},
  props: {
    collapse: {type: Object, required: true}
  },
  data() {
    return {
      active: false
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
  <div @click="toggleActive" class="collapse" :class="{collapse_active: active}">
    <div class="collapse__title-wrap">
      <div class="collapse__title title-text"> {{ collapse.title }}</div>
    </div>

    <slide-up-down @click.stop v-model="active" :duration="1000">
      <div class="collapse__text text">{{ collapse.text }}</div>
    </slide-up-down>
  </div>
</template>
