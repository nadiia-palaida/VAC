<script>
import {articles} from "../api/blog";
import Icon from "../components/Icon.vue";
import InterestingRead from "../components/InterestingRead.vue";

const SECTION_SUBTITLE = 'subtitle'
const SECTION_TEXT = 'paragraph'
const SECTION_IMAGE = 'image'
const SECTION_IMAGES = 'images'
const SECTION_TITLE_TEXT = 'title-text'

export default {
  name: "ArticleView",
  components: {InterestingRead, Icon},
  data() {
    return {
      SECTION_SUBTITLE, SECTION_TEXT, SECTION_IMAGE, SECTION_IMAGES, SECTION_TITLE_TEXT,

      interestingArticles: [
        {
          id: 1,
          img: 'blog/1.jpeg',
          title: 'How to save on buying a car? Why is it better to buy from us',
          text: 'lorem ipsum',
          date: '10 May, 2020'
        },
        {
          id: 2,
          img: 'blog/2.jpeg',
          title: 'How fast can you order a car in Canada?',
          text: 'lorem ipsum',
          date: '10 May, 2020'
        },
        {
          id: 3,
          img: 'blog/3.jpeg',
          title: 'How to save on buying a car? Why is it better to buy from us',
          text: 'lorem ipsum',
          date: '10 May, 2020'
        },
        {
          id: 1,
          img: 'blog/1.jpeg',
          title: 'How to save on buying a car? Why is it better to buy from us',
          text: 'lorem ipsum',
          date: '10 May, 2020'
        },
        {
          id: 2,
          img: 'blog/2.jpeg',
          title: 'How fast can you order a car in Canada?',
          text: 'lorem ipsum',
          date: '10 May, 2020'
        },
        {
          id: 3,
          img: 'blog/3.jpeg',
          title: 'How to save on buying a car? Why is it better to buy from us',
          text: 'lorem ipsum',
          date: '10 May, 2020'
        },
      ],
    }
  },
  computed: {
    activeArticle() {
      let activeArticle

      articles.forEach(page => {
        if (activeArticle) {
          return
        }

        activeArticle = page.items.find(item => {
          return +item.id === +this.$route.params.id
        })
      })

      return activeArticle
    }
  },
  methods: {
    getImgFileUrl(imgUrl) {
      return new URL(`../assets/imgs/${imgUrl}`, import.meta.url).href
    },
    routeBack() {
      this.$router.go(-1)
    }
  }
}
</script>
<template>
  <section class="section-article">
    <div v-if="activeArticle" class="article">
      <div class="article__poster">
        <img :src="getImgFileUrl(activeArticle.poster)" alt="Article poster" class="article__poster-img">
      </div>

      <div class="container">
        <div class="article__content">
          <button @click="routeBack" class="article__btn-back">
            <Icon src="arrow-back" class="article__btn-back-icon"/>
            <span class="article__btn-back-text">Back</span>
          </button>

          <div class="article__block">
            <div class="article__date text">{{ activeArticle.date }}</div>

            <div class="article__title title-2">{{ activeArticle.title }}</div>

            <div class="article__sections">
              <template v-for="section in activeArticle.sections">
                <h4 v-if="section.type === SECTION_SUBTITLE" class="subtitle-2 article__section">{{ section.text }}</h4>

                <div v-if="section.type === SECTION_TEXT"  class="article__section">
                  <p v-for="paragraph in section.paragraphs" class="text">{{ paragraph }}</p>
                </div>

                <div v-if="section.type === SECTION_IMAGE" class="article__section-img-wrap article__section">
                  <img :src="getImgFileUrl(section.image)" alt="Article image" class="article__section-img">
                </div>

                <div v-if="section.type === SECTION_IMAGES" class="article__section-images-wrap article__section">
                  <div v-for="img in section.images" class="article__section-images-item">
                    <img :src="getImgFileUrl(img)" alt="Article image" class="article__section-img">
                  </div>
                </div>

                <p v-if="section.type === SECTION_TITLE_TEXT" class="title-text article__section">{{ section.text }}</p>
              </template>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <InterestingRead :articles="interestingArticles" title="You might like it" :show-desktop-navigation="true" class="article__section-swiper"/>
</template>
