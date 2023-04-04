<script>
import MainHome from "../components/home/MainHome.vue";
import HowWork from "../components/home/HowWork.vue";
import Steps from "../components/home/Steps.vue";
import Advantages from "../components/home/Advantages.vue";
export default {
  components: {Advantages, Steps, HowWork, MainHome}
}
</script>

<template>
  <main>
    <MainHome/>

    <HowWork/>

    <Steps/>

    <Advantages/>
  </main>
</template>
