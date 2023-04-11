<script>
import Icon from "../Icon.vue";

export default {
  name: "ContactsModal",
  components: {Icon},
  methods: {
    closeContactsModal() {
      this.$emit('closeContactsModal')
    }
  }
}
</script>

<template>
  <div class="modal">
    <div class="modal__wrap">
      <div class="modal__content">
        <div class="modal-contacts">
          <button @click="closeContactsModal" class="modal-contacts__cross">
            <Icon src="cross-btn" width="24" height="24" class="modal-contacts__cross-icon"/>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
