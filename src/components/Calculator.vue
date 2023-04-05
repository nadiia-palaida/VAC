<script>
import Tabs from "./Tabs.vue";

export default {
  name: "Calculator",
  components: {Tabs},
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
      activeType: this.tabsTypesList ? this.tabsTypesList[0] : null
    }
  }
}
</script>

<template>
  <div class="calculator">
    <div class="calculator__block">
      <Tabs :tabs-list="tabsTypesList" v-model="activeType" class="calculator__type__tabs"/>
    </div>
  </div>
</template>
