<script>
export default {
  name: "Pagination",
  emits: ['update:modelValue'],
  props: {
    totalItems: {type: Number, required: true},
    currentPage: {type: Number, required: true},
    lastPage: {type: Number, required: true},
    maxPagesShown: {type: Number, default: 4},
  },
  methods: {
    onClick(page) {
      if (page <= this.lastPage && page > 0) {
        this.$emit('update:modelValue', page)
      }
    }
  }
}
</script>

<template>
  <div class="pagination">
    <ul class="pagination__list">
      <li v-for="(paginationItem, paginationIndex) in lastPage" class="pagination__list-item"
          :class="{active: currentPage === paginationIndex + 1}">
        <button @click="onClick(paginationIndex + 1)" class="pagination__btn">
          <div class="pagination__btn-icon"></div>
        </button>
      </li>
    </ul>
  </div>
</template>