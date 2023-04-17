<script>
import Icon from "./Icon.vue";

export default {
  name: "FilterList",
  components: {Icon},
  inject: ['deleteFilterHandler'],
  props: {
    list: {type: Array, required: true},
  }
}
</script>

<template>
  <ul class="filter__rule-chosen-list">
    <template v-for="item in list">
      <li v-for="itemFilter in item.list" class="filter__rule-chosen-list-item">
        <button @click.stop="deleteFilterHandler(item.name, itemFilter)">
          <Icon src="filter-cross" class="filter__rule-chosen-list-item-icon"/>
        </button>
        <span>{{ itemFilter }}</span>
      </li>
    </template>
  </ul>
</template>
