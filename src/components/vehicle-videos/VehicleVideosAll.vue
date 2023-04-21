<script>
import VehicleVideoItem from "./VehicleVideoItem.vue";
import Pagination from "../Pagination.vue";
import VehiclePopup from "./VehiclePopup.vue";

export default {
  name: "VehicleVideosAll",
  components: {VehiclePopup, Pagination, VehicleVideoItem},
  data() {
    return {
      activePage: 1,

      allVideos: [
        {
          currentPage: 1,
          lastPage: 4,
          totalItems: 16,
          items: [
            {
              id: 1,
              title: 'VAC\'s Vehicle Shoot #10: 2018 Chevy Cruze Hatchback',
              poster: 'vehicle-videos/1.jpg',
              videoUrl: 'https://www.youtube.com/embed/X7qEjYMuAcw'
            },
            {
              id: 2,
              title: 'VAC\'s Vehicle Shoot #11: Toyota Highlander',
              poster: 'vehicle-videos/2.jpg',
              videoUrl: 'https://www.youtube.com/embed/PtFPj1ml0yg'
            },
            {
              id: 3,
              title: 'VAC\'s Vehicle Shoot #09: 2019 Mazda CX-5',
              poster: 'vehicle-videos/3.jpg',
              videoUrl: 'https://www.youtube.com/embed/XSSdfHZDH90'
            },
            {
              id: 4,
              title: 'Some Vehicles VAC Offers!',
              poster: 'vehicle-videos/4.jpg',
              videoUrl: 'https://www.youtube.com/embed/LVhC17roLBI'
            },
          ]
        },
        {
          currentPage: 2,
          lastPage: 4,
          totalItems: 16,
          items: [
            {
              id: 1,
              title: 'VAC\'s Vehicle Shoot #10: 2018 Chevy Cruze Hatchback',
              poster: 'vehicle-videos/3.jpg',
              videoUrl: 'https://www.youtube.com/embed/XSSdfHZDH90'

            },
            {
              id: 2,
              title: 'VAC\'s Vehicle Shoot #11: Toyota Highlander',
              poster: 'vehicle-videos/4.jpg',
              videoUrl: 'https://www.youtube.com/embed/LVhC17roLBI'

            },
            {
              id: 3,
              title: 'VAC\'s Vehicle Shoot #09: 2019 Mazda CX-5',
              poster: 'vehicle-videos/1.jpg',
              videoUrl: 'https://www.youtube.com/embed/X7qEjYMuAcw'
            },
            {
              id: 4,
              title: 'Some Vehicles VAC Offers!',
              poster: 'vehicle-videos/2.jpg',
              videoUrl: 'https://www.youtube.com/embed/PtFPj1ml0yg'
            },
          ]
        },
        {
          currentPage: 3,
          lastPage: 4,
          totalItems: 16,
          items: [
            {
              id: 1,
              title: 'VAC\'s Vehicle Shoot #10: 2018 Chevy Cruze Hatchback',
              poster: 'vehicle-videos/3.jpg',
              videoUrl: 'https://www.youtube.com/embed/XSSdfHZDH90'

            },
            {
              id: 2,
              title: 'VAC\'s Vehicle Shoot #11: Toyota Highlander',
              poster: 'vehicle-videos/1.jpg',
              videoUrl: 'https://www.youtube.com/embed/X7qEjYMuAcw'


            },
            {
              id: 3,
              title: 'VAC\'s Vehicle Shoot #09: 2019 Mazda CX-5',
              poster: 'vehicle-videos/4.jpg',
              videoUrl: 'https://www.youtube.com/embed/LVhC17roLBI'
            },
            {
              id: 4,
              title: 'Some Vehicles VAC Offers!',
              poster: 'vehicle-videos/2.jpg',
              videoUrl: 'https://www.youtube.com/embed/PtFPj1ml0yg'
            },
          ]
        },
        {
          currentPage: 4,
          lastPage: 4,
          totalItems: 16,
          items: [
            {
              id: 1,
              title: 'VAC\'s Vehicle Shoot #10: 2018 Chevy Cruze Hatchback',
              poster: 'vehicle-videos/2.jpg',
              videoUrl: 'https://www.youtube.com/embed/PtFPj1ml0yg'
            },
            {
              id: 2,
              title: 'VAC\'s Vehicle Shoot #11: Toyota Highlander',
              poster: 'vehicle-videos/1.jpg',
              videoUrl: 'https://www.youtube.com/embed/X7qEjYMuAcw'
            },
            {
              id: 3,
              title: 'VAC\'s Vehicle Shoot #09: 2019 Mazda CX-5',
              poster: 'vehicle-videos/4.jpg',
              videoUrl: 'https://www.youtube.com/embed/LVhC17roLBI'
            },
            {
              id: 4,
              title: 'Some Vehicles VAC Offers!',
              poster: 'vehicle-videos/3.jpg',
              videoUrl: 'https://www.youtube.com/embed/XSSdfHZDH90'
            },
          ]
        },
      ]
    }
  },
  computed: {
    activePageVideos() {
      return this.allVideos.find(item => item.currentPage === this.activePage)
    }
  },
  mounted() {
    this.$router.push({name: 'vehicle-videos', query: {page: this.activePage}})
  },
  methods: {
    onChangePage(page) {
      this.$router.push({name: 'vehicle-videos', query: {page: page}})
      this.activePage = page
    }
  }
}
</script>

<template>
  <section class="vehicle-videos-all">
    <div class="container">
      <div v-if="activePageVideos" class="vehicle-videos-all__content">
        <VehicleVideoItem v-for="(vehicleVideo, vehicleVideoIndex) in activePageVideos.items"
                          :vehicle-video="vehicleVideo"
                          :key="`vehicle-video-${vehicleVideoIndex}`"/>
      </div>

      <Pagination :modelValue="activePage" @update:modelValue="onChangePage" :total-items="activePageVideos.totalItems"
                  :current-page="activePageVideos.currentPage" :last-page="activePageVideos.lastPage"/>
    </div>
  </section>
</template>