<script>
import PageTitle from "../components/PageTitle.vue";
import AboutInfo from "../components/about/AboutInfo.vue";
import Reviews from "../components/Reviews.vue";
import AboutDescription from "../components/about/AboutDescription.vue";
import CalculatorSection from "../components/CalculatorSection.vue";

export default {
  name: "AboutView",
  components: {CalculatorSection, AboutDescription, Reviews, AboutInfo, PageTitle},
  data() {
    return {
      reviews: [
        {
          id: 1,
          photo: 'reviews/1.jpg',
          name: 'Laura Chaisson',
          text: 'In irure et ipsum eiusmod adipisicing id elit cillum proident. ' +
              'Adipisicing ullamco nisi veniam occaecat id excepteur ad non. Sunt occaecat elit ullamco commodo exercitation.' +
              ' Anim mollit irure Lorem proident veniam excepteur non irure Lorem. Lorem esse sint in nisi id esse.'
        },
        {
          id: 2,
          photo: 'reviews/1.jpg',
          name: 'Laura',
          text: 'In irure et ipsum eiusmod adipisicing id elit cillum proident. ' +
              'Adipisicing ullamco nisi veniam occaecat id excepteur ad non. Sunt occaecat elit ullamco commodo exercitation.' +
              'Adipisicing ullamco nisi veniam occaecat id excepteur ad non. Sunt occaecat elit ullamco commodo exercitation.' +
              'Adipisicing ullamco nisi veniam occaecat id excepteur ad non. Sunt occaecat elit ullamco commodo exercitation.' +
              'Adipisicing ullamco nisi veniam occaecat id excepteur ad non. Sunt occaecat elit ullamco commodo exercitation.' +
              'Adipisicing ullamco nisi veniam occaecat id excepteur ad non. Sunt occaecat elit ullamco commodo exercitation.' +
              'Adipisicing ullamco nisi veniam occaecat id excepteur ad non. Sunt occaecat elit ullamco commodo exercitation.' +
              ' Anim mollit irure Lorem proident veniam excepteur non irure Lorem. Lorem esse sint in nisi id esse.'
        },
        {
          id: 3,
          photo: 'reviews/1.jpg',
          name: 'Chaisson',
          text: 'In irure et ipsum eiusmod adipisicing id elit cillum proident. ' +
              ' Anim mollit irure Lorem proident veniam excepteur non irure Lorem. Lorem esse sint in nisi id esse.'
        }
      ]
    }
  }
}
</script>

<template>
  <PageTitle title="About VAC"/>

  <AboutInfo/>

  <Reviews :reviews="reviews"/>

  <AboutDescription/>

  <CalculatorSection class="section-calculator-about"/>
</template>