<script>
import Icon from "../Icon.vue";
export default {
  name: "FilterNotFound",
  components: {Icon}
}
</script>

<template>
  <div class="not-found">
    <div class="not-found__icon-wrap">
      <Icon src="sedan" class="not-found__icon"/>

      <div class="not-found__title title-text">Unfortunately there are no matches for your query.</div>

      <div class="not-found__text">Try using other filter settings or request a car of your choice.</div>

      <router-link :to="{name: 'quiz'}" class="link">Request a car</router-link>
    </div>
  </div>
</template>