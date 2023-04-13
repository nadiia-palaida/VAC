<script>
import PageTitle from "../components/PageTitle.vue";
import {articles} from "../api/blog";
import BlogCard from "../components/blog/BlogCard.vue";
import Pagination from "../components/Pagination.vue";

export default {
  name: "BlogView",
  components: {Pagination, BlogCard, PageTitle},
  data() {
    return {
      articles,

      activePage: 1,
    }
  },
  computed: {
    activePageArticles() {
      return this.articles.find(item => item.currentPage === this.activePage)
    }
  },
  mounted() {
    this.$router.push({name: 'blog', query: {page: this.activePage}})
  },
  methods: {
    onChangePage(page) {
      this.$router.push({name: 'blog', query: {page: page}})
      this.activePage = page
    }
  }
}
</script>

<template>
  <PageTitle title="Our blog"/>

  <section class="section-blog">
    <div class="container">
      <div class="blog__content">
        <div v-if="activePageArticles" class="blog__list">
          <BlogCard v-for="(article, articleIndex) in activePageArticles.items" :article="article"
                    :key="`blog-card-page-${articleIndex}`"/>
        </div>

        <Pagination :modelValue="activePage" @update:modelValue="onChangePage"
                    :total-items="activePageArticles.totalItems"
                    :current-page="activePageArticles.currentPage" :last-page="activePageArticles.lastPage"/>
      </div>
    </div>
  </section>
</template>
