<script>
import PageTitle from "../components/PageTitle.vue";
import Collapse from "../components/Collapse.vue";

export default {
  name: "PrivacyView",
  components: {Collapse, PageTitle},
  data() {
    return {
      privacyList: [
        {
          title: 'Terms',
          text: 'Vehicle Approval Centre may, in its sole discretion and for any reason, modify, supplement or amend these Terms and Conditions without any notice or liability to you or any other person, by posting revised Terms and Conditions on the Vehicle Approval Centre website. Your continued use of the Vehicle Approval Centre website signifies your acceptance of such revised Terms and Conditions. '
        },
        {
          title: 'Authorization',
          text: 'Vehicle Approval Centre may, in its sole discretion and for any reason, modify, supplement or amend these Terms and Conditions without any notice or liability to you or any other person, by posting revised Terms and Conditions on the Vehicle Approval Centre website. Your continued use of the Vehicle Approval Centre website signifies your acceptance of such revised Terms and Conditions. '
        },
        {
          title: 'Links',
          text: 'Vehicle Approval Centre may, in its sole discretion and for any reason, modify, supplement or amend these Terms and Conditions without any notice or liability to you or any other person, by posting revised Terms and Conditions on the Vehicle Approval Centre website. Your continued use of the Vehicle Approval Centre website signifies your acceptance of such revised Terms and Conditions. '
        },
        {
          title: 'Site terms of use modifications',
          text: 'Vehicle Approval Centre may, in its sole discretion and for any reason, modify, supplement or amend these Terms and Conditions without any notice or liability to you or any other person, by posting revised Terms and Conditions on the Vehicle Approval Centre website. Your continued use of the Vehicle Approval Centre website signifies your acceptance of such revised Terms and Conditions. '
        },
        {
          title: 'Governing law',
          text: 'Vehicle Approval Centre may, in its sole discretion and for any reason, modify, supplement or amend these Terms and Conditions without any notice or liability to you or any other person, by posting revised Terms and Conditions on the Vehicle Approval Centre website. Your continued use of the Vehicle Approval Centre website signifies your acceptance of such revised Terms and Conditions. '
        },
        {
          title: 'How we treat your personal information',
          text: 'Vehicle Approval Centre may, in its sole discretion and for any reason, modify, supplement or amend these Terms and Conditions without any notice or liability to you or any other person, by posting revised Terms and Conditions on the Vehicle Approval Centre website. Your continued use of the Vehicle Approval Centre website signifies your acceptance of such revised Terms and Conditions. '
        },
        {
          title: 'Cookies',
          text: 'Vehicle Approval Centre may, in its sole discretion and for any reason, modify, supplement or amend these Terms and Conditions without any notice or liability to you or any other person, by posting revised Terms and Conditions on the Vehicle Approval Centre website. Your continued use of the Vehicle Approval Centre website signifies your acceptance of such revised Terms and Conditions. '
        },
      ]
    }
  }
}
</script>

<template>
  <PageTitle title="Privacy Policy"/>

  <section class="section-terms">
    <div class="container">
      <div class="terms__content">
        <ul class="terms__list">
          <li v-for="item in privacyList" class="terms__list-item">
            <Collapse :title="item.title">
              <div class="collapse__text text">{{ item.text }}</div>
            </Collapse>
          </li>
        </ul>
      </div>
    </div>
  </section>
</template>
