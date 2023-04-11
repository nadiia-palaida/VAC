<script>
export default {
  name: "PageTitle",
  props: {
    title: {type: String, required: true}
  }
}
</script>

<template>
  <section class="page-title first-section">
    <div class="container">
      <div class="page-title__content">
        <h1 class="page-title__title title">{{ title }}</h1>
      </div>
    </div>
  </section>
</template>