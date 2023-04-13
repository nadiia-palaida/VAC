<script>
import {articles} from "../api/blog";
import Icon from "../components/Icon.vue";

const SECTION_SUBTITLE = 'subtitle'
const SECTION_TEXT = 'paragraph'
const SECTION_IMAGE = 'image'
const SECTION_IMAGES = 'images'
const SECTION_TITLE_TEXT = 'title-text'

export default {
  name: "ArticleView",
  components: {Icon},
  data() {
    return {
      SECTION_SUBTITLE, SECTION_TEXT, SECTION_IMAGE, SECTION_IMAGES, SECTION_TITLE_TEXT
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
          <div class="article__btn-back">
            <Icon src="arrow-back" class="article__btn-back-icon"/>
            <span>Back</span>
          </div>

          <div class="article__block">
            <div class="article__date">{{ activeArticle.date }}</div>

            <div class="article__title title-2">{{ activeArticle.date }}</div>

            <div class="article__sections">
              <template v-for="section in activeArticle.sections">
                <h4 v-if="section.type === SECTION_SUBTITLE" class="subtitle-2 article__section">{{ section }}</h4>

                <p v-if="section.type === SECTION_TEXT" class="text article__section">{{ section }}</p>

                <p v-if="section.type === SECTION_TEXT" class="text article__section">{{ section }}</p>
              </template>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
