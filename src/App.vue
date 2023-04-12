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
  }
}
</script>

<template>
  <Header/>

  <router-view></router-view>

  <component v-if="this.modalComponent" :is="modalComponent" class="modal-component"/>

  <Footer/>
</template>

