<script>
import Icon from "../components/Icon.vue";
export default {
name: "NotFoundView",
  components: {Icon}
}
</script>

<template>
<div class="not-found-page">
  <div class="not-found-page__content">
    <Icon src="sedan" class="not-found-page__icon"/>

    <h2 class="not-found-page__title title-2">404 page</h2>

    <div class="not-found-page__text text">Page not found or such pages do not exist.</div>

    <router-link :to="{name: 'home'}" class="not-found-page__btn btn btn_solid">Go home</router-link>
  </div>
</div>
</template>
