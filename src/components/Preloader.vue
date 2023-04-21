<script>
import {mapActions, mapWritableState} from "pinia";
import {useGeneralStore} from "../store/general";

export default {
  name: "Preloader",
  data() {
    return {
      // isLoadingLocal: false
    }
  },
  computed: {
    ...mapWritableState(useGeneralStore, ['isLoading']),
  },
  methods: {
    ...mapActions(useGeneralStore, ['showPreloader', 'hidePreloader'])
  },
  beforeCreate() {
    // this.isLoadingLocal = true
    // this.showPreloader()
  },
  mounted() {
/*
    if (document.readyState === 'complete') {
      // ещё загружается, ждём события
      document.addEventListener('DOMContentLoaded', () => {
        this.isLoadingLocal = false
      });
    }
*/

/*    window.addEventListener("load", () => {
      this.isLoadingLocal = false
    });*/
    // document.addEventListener("DOMContentLoaded", this.hidePreloader);
  },
  unmounted() {
    // document.removeEventListener("DOMContentLoaded", this.hidePreloader);
    // document.removeEventListener("DOMContentLoaded", this.hidePreloader);
  }
}
</script>

<template>
  <div class="preloader">
    <div class="preloader__content">
      <div class="preloader__logo-wrap">
        <img src="@/assets/imgs/preloader.svg" alt="logo" class="preloader__logo">
      </div>

      <div class="preloader__text">
        Loading ...
      </div>
    </div>
  </div>
</template>
