<script>
import Icon from "../Icon.vue";

export default {
  name: "AboutInfo",
  components: {Icon},
  data() {
    return {
      steps: [
        {
          title: 'Quickly',
          text: 'You do not spend a lot of your time going to car dealerships'
        },
        {
          title: 'Simply',
          text: 'You can order your dream car just by talking to our specialist by phone'
        },
        {
          title: 'Conveniently',
          text: 'We will deliver the car directly to the doorstep of your home or office'
        },
      ]
    }
  }
}
</script>

<template>
  <section class="section-our-mission">
    <div class="container container-tablet">
      <div class="our-mission__content">
        <div class="our-mission__column">
          <div class="our-mission__block">
            <h2 class="our-mission__title title-2">Our mission</h2>

            <div class="our-mission__text text">
              Our mission at VAC is to help you find the perfect car at the perfect price and with the perfect auto
              loan. We make buying a car simple. You can complete the entire process from home—we’ll even deliver the
              car to you!
            </div>

            <router-link :to="{name: 'quiz'}" class="our-mission__btn btn btn_solid btn_width">
              Request a Car
            </router-link>
          </div>
        </div>

        <div class="our-mission__column">
          <div class="our-mission__img-wrap">
            <img src="@/assets/imgs/about/Kia.png" alt="Car" class="our-mission__img">
          </div>
        </div>
      </div>
    </div>
  </section>

  <section class="section-get-dream-car">
    <div class="container container-tablet">
      <div class="get-dream-car__content">
        <div class="get-dream-car__column">
          <div class="get-dream-car__text-wrap">
            <h2 class="get-dream-car__title title-2">Get your dream car</h2>

            <div class="get-dream-car__text text">We founded VAC because we hated how complicated it was to buy a car. You
              only have so much free time in your life. You don’t want to waste it going to different car dealerships
              every weekend for weeks and months trying to track down the right car.
            </div>

            <div class="get-dream-car__text text">We also hated how choosing a car and figuring out the financing for the
              vehicle were treated as totally separate processes! Instead of dealing with a salesperson, then being handed
              off to a closer, and then shuffled over to a finance manager, we wanted to create a way for people to buy a
              car and only deal with a single person for the entire process.
            </div>
          </div>
        </div>

        <div class="get-dream-car__column">
          <ul class="steps__list get-dream-car__steps">
            <li v-for="(step, index) in steps" class="steps__list-item get-dream-car__steps-list-item">
              <div class="steps__list-item-number">
                <Icon src="step-triangle" class="steps__list-item-number-icon"/>
                <span class="steps__list-item-number-text">{{ index + 1 }}</span>
              </div>

              <div class="steps__list-item-text">
                <div class="steps__list-item__title title-text">{{ step.title }}</div>
                <div class="text steps__list-item-description">{{ step.text }}</div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </section>

  <section class="section-convenience section">
    <div class="container container-tablet">
      <div class="convenience__content">
        <div class="convenience__column">
          <div class="convenience__img-wrap">
            <img src="@/assets/imgs/about/Nissan.png" alt="Car" class="convenience__img">
          </div>
        </div>

        <div class="convenience__column">
          <div class="convenience__text-wrap">
            <h2 class="about-title convenience__title title-2">
              VAC is convenience and transparency
            </h2>

            <div class="about-text text">We want to make simple for you to find the car you want. We also want to make
              sure you
              are 100% comfortable with the terms of the conditions of your auto loann.
            </div>

            <div class="about-text text">Buying a car has never been easier. You pick out the car you want on our
              website. You
              work with one of our Qualified Agents to secure financing. Then we bring the car to you—all before you
              sign
              anything. You test drive the vehicle, and if you like it, you sign the loan documents right there and the
              car is yours.
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <section class="section section-best-prices">
    <div class="container container-tablet">
      <div class="best-prices__content">
        <div class="best-prices__column">
          <h2 class="title-2 about-title">Get a car at the best prices and conditions</h2>

          <div class="text about-text">Not only is buying a car with VAC easy, it’s also the best way to save money. We
            have partnerships with Canada’s largest lenders. That allows us to help you secure loans at the best
            interest rates available.
          </div>

          <div class="text about-text">
            Because convenience and transparency are our founding principles, we take the time to answer all of your
            questions about the vehicle and the auto loan. We will send you pictures and videos of any part of the car
            you like before you request a test drive.
          </div>
        </div>

        <div class="best-prices__column">
          <div class="best-prices__text-wrap">
            <div class="about-subtitle">
              We think that VAC is the best way to buy
              a car in Canada. Try it for yourself and see how much time and money you can save.
            </div>

            <div class="text about-text best-prices__text">
              There are never any hidden fees or costs. We never ask you to sign anything until we have explained it
              clearly and you have had a chance to read it.
            </div>

            <router-link :to="{name: 'quiz'}" class="our-mission__btn btn btn_solid btn_width">
              Request a Car
            </router-link>
          </div>
        </div>
      </div>
    </div>
  </section>

  <section class="section section-our-agents">
    <div class="container container-tablet">
      <div class="our-agents__content">
        <div class="our-agents__column">
          <div class="our-agents__block">
            <div class="subtitle our-agents__subtitle">Contact us today and speak with one of our qualified agents</div>

            <router-link :to="{name: 'contacts'}" class="our-mission__btn btn btn_solid btn_width">
              Contact Us Now
            </router-link>
          </div>
        </div>

        <div class="our-agents__column">
          <div class="our-agents__column">
            <div class="our-agents__text-wrap">
              <h2 class="title-2 about-title">Our qualified agents</h2>

              <div class="text about-text">The true secret to success of VAC isn’t our streamlined purchasing and
                financing processes. The real reason VAC is the easiest and best way to buy a car in Canada is because
                of our outstanding Qualified Agents.
              </div>

              <div class="text about-text">
                Our team provides you with the best customer experience in the automotive industry. You work with a
                dedicated representative throughout the process. They are able to answer any questions you have about
                any of our vehicles or the financing. Are you interested in seeing pictures or videos of a car? Your
                qualified agent will send them to you.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>