<script>
import {mapActions, mapState} from "pinia";
import {useModalStore} from "../store/modal";
import {useGeneralStore} from "../store/general";

export default {
  name: "Header",
  computed: {
    ...mapState(useGeneralStore, ['headerRequestBtnTitle'])
  },
  methods: {
    ...mapActions(useModalStore, ['openModal']),
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

          <router-link :to="{name: 'quiz'}" class="header__btn-request btn btn_solid"
                       :class="{'header__btn-request_vehicle': headerRequestBtnTitle}">
            {{ headerRequestBtnTitle || 'Request a car' }}
          </router-link>

          <button @click.stop.prevent="openModal({component: 'MenuModal'})" class="menu-btn">
            <span class="menu-btn__line"></span>
            <span class="menu-btn__line"></span>
            <span class="menu-btn__line"></span>
          </button>
        </div>
      </div>
    </div>
  </header>
</template>
