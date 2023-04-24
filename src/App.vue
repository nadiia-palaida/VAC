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
      document.getElementById('preloader').classList.add('active')
    })
    window.addEventListener('finishLoading', () => {
      if(document.readyState === 'complete') {
        document.getElementById('preloader').classList.remove('active')
      }
    })
  },
  mounted() {
    window.addEventListener('load', () => {
      if(document.readyState === 'complete') {
        document.getElementById('preloader').classList.remove('active')
      }
    })
  },
  unmounted() {
    window.removeEventListener('load', () => {
      document.getElementById('preloader').classList.remove('active')
    })
    window.removeEventListener('startLoading', () => {
      document.getElementById('preloader').classList.add('active')
    })
    window.removeEventListener('finishLoading', () => {
      if(document.readyState === 'complete') {
        document.getElementById('preloader').classList.remove('active')
      }
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

<!--  <Preloader v-show="isLoading"/>-->

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