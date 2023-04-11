<script>
import PageTitle from "../components/PageTitle.vue";
import AboutInfo from "../components/about/AboutInfo.vue";

export default {
  name: "AboutView",
  components: {AboutInfo, PageTitle}
}
</script>

<template>
  <PageTitle title="About VAC"/>

  <AboutInfo/>
</template>