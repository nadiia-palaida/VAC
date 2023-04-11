<script>
import PageTitle from "../components/PageTitle.vue";
import VehicleVideosAll from "../components/vehicle-videos/VehicleVideosAll.vue";
export default {
  name: "VehicleVideosView",
  components: {VehicleVideosAll, PageTitle},
}
</script>

<template>
  <PageTitle title="Vehicle videos"/>

  <VehicleVideosAll/>


</template>

<style scoped>

</style>