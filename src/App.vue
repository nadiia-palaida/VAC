<script>
import Header from "./components/Header.vue";
import Footer from "./components/Footer.vue";
import {mapState} from "pinia";
import {defineAsyncComponent} from "@vue/runtime-core";
import {useModalStore} from "./store/modal";

export default {
  components: {Footer, Header},
  computed: {
    ...mapState(useModalStore, ['component']),
    modalComponent() {
      if(this.component) {
        return defineAsyncComponent(() => import(`./components/modals/${this.component}.vue`))
      } else {
        return ''
      }
    }
  },
}
</script>

<template>
  <Header/>

  <main id="main">
    <router-view></router-view>
  </main>

  <component v-if="this.modalComponent" :is="modalComponent" class="modal-component"/>

  <Footer/>
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