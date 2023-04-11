<script>
import {showBodyScrollbar} from "../../helpers";
import Icon from "../Icon.vue";

export default {
  components: {Icon},
  emits: ['closeModal'],
  name: "VehiclePopup",
  props: {
    videoUrl: {type: String, required: true}
  },
  methods: {
    closeModalAction() {
      this.$emit('closeModal')
      showBodyScrollbar()
    }
  }
}
</script>

<template>
  <div class="vehicle-popup">
    <div @click="closeModalAction" class="vehicle-popup__wrap">
      <div class="vehicle-popup__content">
        <div class="vehicle-popup__video">
          <iframe :src="videoUrl" title="YouTube video player"
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowfullscreen class="vehicle-popup__video-iframe"></iframe>

          <button @click="closeModalAction" class="vehicle-popup__cross">
            <Icon src="cross-btn" width="24" height="24" class="vehicle-popup__cross-icon"/>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>