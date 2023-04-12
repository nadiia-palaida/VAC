<script>
import Icon from "../Icon.vue";
import {mapActions, mapState} from "pinia";
import {useModalStore} from "../../store/modal";

import InputComponent from "../form/InputComponent.vue"
import ContactsForm from "./ContactsForm.vue";

const STEP1 = 'contacts-form'
const STEP2 = 'form-success'

export default {
  name: "ContactsModal",
  components: {ContactsForm, InputComponent, Icon},
  data() {
    return {
      STEP1, STEP2,
      activeStep: STEP1,

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
        {
          title: 'email',
          icon: 'email-small',
          link: '#'
        },
      ],
    }
  },
  methods: {
    ...mapActions(useModalStore, ['closeModal']),
    changeStep() {
      this.activeStep = STEP2
    }
  }
}
</script>

<template>
  <div class="modal">
    <div class="modal__wrap">
      <div class="modal__content modal__content_contacts"
           :class="{'modal__content_success': activeStep === STEP2}">
        <button @click="closeModal" class="modal-contacts__cross"
                :class="{'modal-contacts__cross_success': activeStep === STEP2}">
          <Icon src="cross-btn" width="24" height="24" class="modal-contacts__cross-icon"/>
        </button>

        <div v-if="activeStep === STEP1" class="modal-contacts">
          <div>
            <h3 class="modal-contacts__title subtitle modal__title">We can't wait to hear from you!</h3>

            <div class="modal-contacts__form-wrap">
              <ContactsForm @on-submit-event="changeStep"/>
            </div>
          </div>

          <div class="modal-contacts__socials">
            <div class="modal-contacts__socials-title title-text">You can contact us yourself</div>

            <ul class="menu__social-list">
              <li v-for="item in socialList" class="menu__social-list-item">
                <a :href="item.link" class="menu__social-list-item-link">
                  <Icon :src="item.icon" class="menu__social-list-item-icon"/>
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div v-else class="modal-contacts-success">
          <Icon src="success-tick" class="modal-contacts-success__icon"/>

          <h3 class="subtitle modal-contacts-success__title">Application Successful!</h3>

          <div class="text modal-contacts-success__text">Our manager will contact you in the nearest time.</div>
        </div>
      </div>
    </div>
  </div>
</template>
