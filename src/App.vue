<script>
import Header from "./components/Header.vue";
import Footer from "./components/Footer.vue";

export default {
  components: {Footer, Header}
}
</script>

<template>
  <Header/>

  <router-view></router-view>

  <Footer/>
</template>

