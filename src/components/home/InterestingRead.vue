<script>
import BlogCard from "../blog/BlogCard.vue";
import Icon from "../Icon.vue";
export default {
  name: "InterestingRead",
  components: {Icon, BlogCard},
  data() {
    return {
      interestingArticles: [
        {
          id: 1,
          img: 'blog/1.jpg',
          title: 'How to save on buying a car? Why is it better to buy from us',
          text: 'lorem ipsum',
          date: '10 May, 2020'
        },
        {
          id: 2,
          img: 'blog/2.jpg',
          title: 'How fast can you order a car in Canada?',
          text: 'lorem ipsum',
          date: '10 May, 2020'
        },
        {
          id: 3,
          img: 'blog/3.jpg',
          title: 'How to save on buying a car? Why is it better to buy from us',
          text: 'lorem ipsum',
          date: '10 May, 2020'
        },
      ],

      swiperBreakpoints: {
        320: {
          slidesPerView: 1,
          enabled: true,
        },
        767: {
          slidesPerView: 2,
          enabled: false
        },
        992: {
          slidesPerView: 3,
        },
      }
    }
  }
}
</script>

<template>
  <section class="section section-interesting-read">
    <div class="container">
      <div class="interesting-read__content">
          <h2 class="interesting-read__title title-2">Interesting to read</h2>

          <router-link :to="{name: 'blog'}" class="interesting-read__btn-articles btn btn_liner btn_bordered">
            all articles
          </router-link>

        <div class="interesting-read__articles">
          <swiper-container :breakpoints="swiperBreakpoints" :spaceBetween="20" :loop="true"
                            :navigation="{nextEl: '.interesting-read__carousel-btn-next', prevEl: '.interesting-read__carousel-btn-prev'}"
                            class="interesting-read__swiper">
            <swiper-slide  v-for="(article, articleIndex) in interestingArticles" :key="`interesting-article-${articleIndex}`" class="interesting-read__swiper-slide">
              <BlogCard :article="article"/>
            </swiper-slide>
          </swiper-container>

          <div class="swiper__custom-carousel-navigation interesting-read__custom-carousel-navigation">
            <button
                class="swiper__custom-carousel-navigation-btn swiper__custom-carousel-navigation-btn-prev interesting-read__carousel-btn-prev">
              <Icon src="carousel-arrow-left" width="13" height="24"
                    class="swiper__custom-carousel-arrow swiper__custom-carousel-btn-prev-img"/>
            </button>
            <button
                class="swiper__custom-carousel-navigation-btn swiper__custom-carousel-navigation-btn-next interesting-read__carousel-btn-next">
              <Icon src="carousel-arrow-right" width="13" height="24"
                    class="swiper__custom-carousel-arrow swiper__custom-carousel-btn-next-img"/>
            </button>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
