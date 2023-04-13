<script>
export default {
  name: "BlogCard",
  props: {
    article: {type: Object, required: true}
  },
  methods: {
    getImgFileUrl(imgUrl) {
      return new URL(`../../assets/imgs/${imgUrl}`, import.meta.url).href
    },
  }
}
</script>

<template>
  <div class="blog-card">
    <router-link :to="{name: 'article', params: {id: article.id}}">
      <div class="blog-card__img-wrap">
        <img :src="getImgFileUrl(article.img)" alt="article image" class="blog-card__img">
      </div>

      <div class="blog-card__description">
        <div class="blog-card__date text">{{ article.date }}</div>

        <div class="blog-card__title title-text">{{ article.title }}</div>
      </div>
    </router-link>
  </div>
</template>
