<script>
import SlideUpDown from 'vue3-slide-up-down'
import FilterList from "./FilterList.vue";

const SIZE_SMALL = 'small'

export default {
  name: "Collapse",
  components: {FilterList, SlideUpDown},
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
  <div @click="toggleActive" class="collapse" :class="collapseClasses">
    <div class="collapse__title-wrap">
      <div class="collapse__title title-text"> {{ title }}</div>

      <FilterList v-if="filterList.length && !this.active" :list="filterList" class="collapse__list"
                  :class="{'collapse__list_active': filterList.length}"/>
    </div>

    <slide-up-down @click.stop v-model="active" :duration="1000">
      <slot></slot>
    </slide-up-down>
  </div>
</template>
