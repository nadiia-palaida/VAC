<script>
import MenuModal from "./modals/MenuModal.vue";

export default {
  name: "Header",
  components: {MenuModal},
  data() {
    return {
      openedModal: false
    }
  },
  methods: {
    openModal() {
      this.openedModal = true
    },
    onCloseModal() {
      this.openedModal = false
    }
  }
}
</script>

<template>
  <header class="header">
    <div class="container">
      <div class="header__content">
        <div class="header__logo">
          <router-link :to="{name: 'home'}">
            <picture>
              <source media="(max-width:767px)" srcset="@/assets/imgs/mobile/logo.svg">
              <img src="@/assets/imgs/logo.svg" alt="logo">
            </picture>
          </router-link>
        </div>


        <div class="header__buttons">
          <router-link :to="{name: 'catalog'}" class="header__btn-inventory btn btn_liner btn_bordered">Inventory
          </router-link>

          <router-link :to="{name: 'quiz'}" class="header__btn-request btn btn_solid">Request a car</router-link>

          <button @click="openModal" class="menu-btn">
            <span class="menu-btn__line"></span>
            <span class="menu-btn__line"></span>
            <span class="menu-btn__line"></span>
          </button>
        </div>
      </div>
    </div>
  </header>

  <Teleport to="body">
    <MenuModal @close-modal="onCloseModal" v-if="openedModal"/>
  </Teleport>
</template>
