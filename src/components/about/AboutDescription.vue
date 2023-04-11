<script>
export default {
  name: "AboutDescription",
  data() {
    return {
      features: [
        {
          number: '7,988+',
          text: 'Sold Cars'
        },
        {
          number: '123',
          text: 'Working Experts'
        },
        {
          number: '1560+',
          text: 'Happy Clients'
        },
      ]
    }
  }
}
</script>

<template>
  <section class="section-our-team section">
    <div class="container container-tablet">
      <div class="our-team__content">
        <div class="our-team__column">
          <div class="our-team__text-wrap">
            <h2 class="title-2 about-title">We're dynamic team of creative people with innovative mind</h2>

            <div class="title-text about-title-text">Our History</div>

            <div class="text about-text">We founded VAC because we hated how complicated it was to buy a car. You only
              have so much free time in your life. You don’t want to waste it going to different car dealerships every
              weekend for weeks and months trying to track down the right car.
            </div>

            <div class="title-text about-title-text">Our Goal</div>

            <div class="text about-text">Buying a car has never been easier. You pick out the car you want on our
              website. You work with one of
              our Qualified Agents to secure financing. Then we bring the car to you—all before you sign anything. You
              test drive the vehicle, and if you like it, you sign the loan documents right there and the car is yours.
            </div>
          </div>
        </div>

        <div class="our-team__column">
          <div class="our-team__img-wrap">
            <img src="@/assets/imgs/about/team.jpg" alt="team">
          </div>
        </div>
      </div>
    </div>
  </section>

  <section class="section section-features-about">
    <div class="container container-tablet">
      <div class="features-about__content">
        <div class="features-about__column">
          <div class="features-about__img-wrap">
            <img src="@/assets/imgs/about/features.jpg" alt="features">
          </div>
        </div>

        <div class="features-about__column">
          <div class="features-about__text-wrap">
            <h2 class="title-2 about-title">Main features</h2>

            <div class="text about-text features-about__text">We are your one stop shop. We believe that vehicle shopping should be a fun and
              painless process and with years of experience, we make it just that.
            </div>

            <ul class="happy-customers__list features-about__list">
              <li v-for="item in features" class="happy-customers__list-item">
                <div class="happy-customers__list-item-number title-2">{{ item.number }}</div>
                <div class="happy-customers__list-item-text text">{{ item.text }}</div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>