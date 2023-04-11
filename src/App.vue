<script>
import Header from "./components/Header.vue";
import Footer from "./components/Footer.vue";
import {mapState} from "pinia";
import {defineAsyncComponent} from "@vue/runtime-core";
import {useModalStore} from "./store/modal";

export default {
  components: {Footer, Header},
  computed: {
    ...mapState(useModalStore, ['modal']),
    modalComponent() {
      if(this.modal) {
        return defineAsyncComponent(() => import(`./components/modals/${this.modal}.vue`))
      } else {
        return ''
      }
    }
  }
}
</script>

<template>
  <Header/>

  <router-view></router-view>

  <component :is="modalComponent" class="modal-component"/>

  <Footer/>
</template>

