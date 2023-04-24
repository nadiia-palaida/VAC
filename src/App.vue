<script>
import Header from "./components/Header.vue";
import Footer from "./components/Footer.vue";
import {defineAsyncComponent} from "@vue/runtime-core";
import Preloader from "./components/Preloader.vue";
import {mapActions, mapState, mapWritableState} from "pinia";
import {useModalStore} from "./store/modal";
import {useGeneralStore} from "./store/general";

export default {
  components: {Preloader, Footer, Header},
  computed: {
    ...mapState(useModalStore, ['component']),
    ...mapWritableState(useGeneralStore, ['isLoading']),
    modalComponent() {
      if(this.component) {
        return defineAsyncComponent(() => import(`./components/modals/${this.component}.vue`))
      } else {
        return ''
      }
    },
  },
  methods: {
    ...mapActions(useGeneralStore, ['showPreloader', 'hidePreloader'])
  },
  created() {
    window.addEventListener('startLoading', () => {
      console.log('startLoading')
      this.showPreloader()
    })
    window.addEventListener('finishLoading', () => {
      console.log('finishLoading')
      this.hidePreloader()
    })
  },
  unmounted() {
    window.removeEventListener('startLoading', () => {
      this.showPreloader()
    })
    window.removeEventListener('finishLoading', () => {
      this.hidePreloader()
    })
  }
}
</script>

<template>
  <Header v-if="$route.name !== 'not-found'"/>

  <main id="main">
    <router-view></router-view>
  </main>

  <component v-if="modalComponent" :is="modalComponent" class="modal-component"/>

  <Preloader v-show="isLoading"/>

  <Footer v-if="$route.name !== 'not-found' && $route.name !== 'quiz'"/>
</template>

<style>
#app {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

#main {
  min-height: 100%;
}
</style>