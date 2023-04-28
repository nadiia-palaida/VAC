<script>
import Icon from "./Icon.vue";
export default {
  name: "Footer",
  components: {Icon},
  data() {
    return {
      socials: [
        {
          name: 'Instagram',
          icon: 'instagram',
          link: 'https://www.instagram.com/'
        },
        {
          name: 'Facebook',
          icon: 'facebook',
          link: 'https://www.facebook.com/'
        },
        {
          name: 'Youtube',
          icon: 'youtube',
          link: 'https://www.youtube.com/'
        },
      ]
    }
  }
}
</script>

<template>
<footer class="footer">
  <div class="container">
    <div class="footer__content">
      <div class="footer__img-wrap">
        <router-link :to="{name: 'home'}" class="footer__img-link">
          <img src="@/assets/imgs/LogoLight.svg" alt="Logo" class="footer__img">
        </router-link>
      </div>

      <ul class="footer__info-list">
        <li class="footer__info-list-item">
          <router-link :to="{name: 'terms'}" class="footer__text">Terms</router-link>
        </li>
        
        <li class="footer__info-list-item">
          <router-link :to="{name: 'privacy'}" class="footer__text">Privacy</router-link>
        </li>
      </ul>
      
      <ul class="footer__social-list">
        <li v-for="social in socials" class="footer__social-list-item">
          <a :href="social.link" class="footer__social-list-item-link" :aria-label="social.name">
            <Icon :src="social.icon" :class="`footer__icon-${social.icon}`"/>
          </a>
        </li>
      </ul>

      <div class="footer__company">
        <a href="#" class="footer__company-link">
          <div class="footer__text footer__company-link-text">Created by</div>
          <img src="@/assets/imgs/LogoCompany.svg" alt="Develop company logo">
        </a>
      </div>

      <div class="footer__copyright">
        <div>
          ©Copyright, 2020. Vehicle Approval
        </div>
      </div>
    </div>
  </div>
</footer>
</template>
