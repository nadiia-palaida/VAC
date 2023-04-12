<script>
import Icon from "../Icon.vue";
import {mapActions} from "pinia";
import {useModalStore} from "../../store/modal";

export default {
  name: "MenuModal",
  components: {Icon},
  data() {
    return {
      menuList: [
        {
          title: 'Inventory',
          linkName: 'catalog',
        },
        {
          title: 'Contact us',
          linkName: '',
          handler: this.openModal,
          handlerData: {component: 'ContactsModal'}
        },
        {
          title: 'About VAC',
          linkName: 'about',
        },
        {
          title: 'Loan Rates',
          linkName: 'loan-rates',
        },
        {
          title: 'Video',
          linkName: 'vehicle-videos',
        },
        {
          title: 'Blog',
          linkName: 'blog',
        },
        {
          title: 'Calculate',
          linkName: 'calculator',
        },
      ],
      socialList: [
        {
          title: 'instagram',
          icon: 'instagram-small',
          link: '#'
        },
        {
          title: 'facebook',
          icon: 'facebook-small',
          link: '#'
        },
        {
          title: 'youtube',
          icon: 'youtube-small',
          link: '#'
        },
      ]
    }
  },
  methods: {
    ...mapActions(useModalStore, ['closeModal', 'openModal']),
  }
}
</script>

<template>
  <div class="modal">
    <div class="modal__wrap">
      <div class="modal__content">
        <div class="modal-menu">
          <div class="modal-menu__block">
            <button @click="closeModal" class="menu__cross">
              <Icon src="cross-modal-bold" class="menu__cross-icon"/>
            </button>

            <ul class="menu__list">
              <li v-for="menuItem in menuList" class="menu__list-item">
                <router-link v-if="menuItem.linkName" :to="{name: menuItem.linkName}" @click="closeModal"
                             class="menu__list-item-link">{{ menuItem.title }}
                </router-link>

                <button v-else @click.prevent.stop="menuItem.handler(menuItem.handlerData)" class="menu__list-item-link">{{ menuItem.title }}</button>
              </li>
            </ul>
          </div>

          <div class="modal-menu__block">
            <ul class="menu__social-list">
              <li v-for="item in socialList" class="menu__social-list-item">
                <a :href="item.link" class="menu__social-list-item-link">
                  <Icon :src="item.icon" class="menu__social-list-item-icon"/>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
