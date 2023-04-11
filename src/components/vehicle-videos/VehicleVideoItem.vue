<script>
import Icon from "../Icon.vue";
import VehiclePopup from "./VehiclePopup.vue";
import {hideBodyScrollbar} from "../../helpers";

export default {
  name: "VehicleVideoItem",
  components: {VehiclePopup, Icon},
  props: {
    vehicleVideo: {type: Object, required: true}
  },
  data() {
    return {
      openedModal: false
    }
  },
  methods: {
    getImgFileUrl(imgUrl) {
      return new URL(`../../assets/imgs/${imgUrl}`, import.meta.url).href
    },
    openModal() {
      this.openedModal = true
      hideBodyScrollbar()
    },
    closeModal() {
      this.openedModal = false
    }
  }
}
</script>

<template>
  <div class="vehicle-video">
    <div class="vehicle-video__img-wrap">
      <img :src="getImgFileUrl(vehicleVideo.poster)" :alt="`${vehicleVideo.title} poster`" class="vehicle-video__img">

      <button @click="openModal" class="vehicle-video__play-btn">
        <span class="vehicle-video__play-btn-icon">
            <Icon src="play-btn" class="vehicle-video__play-btn-icon-play"/>
        </span>
      </button>
    </div>

    <div @click="openModal" class="vehicle-video__title">
      {{ vehicleVideo.title }}
    </div>
  </div>

  <Teleport to="body">
    <VehiclePopup v-if="openedModal" @close-modal="closeModal" :video-url="vehicleVideo.videoUrl"/>
  </Teleport>
</template>