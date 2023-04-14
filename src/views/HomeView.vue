<script>
import MainHome from "../components/home/MainHome.vue";
import HowWork from "../components/home/HowWork.vue";
import Steps from "../components/home/Steps.vue";
import Advantages from "../components/home/Advantages.vue";
import ChooseVehicle from "../components/home/ChooseVehicle.vue";
import HappyCustomers from "../components/home/HappyCustomers.vue";
import Reviews from "../components/Reviews.vue";
import CalculatorSection from "../components/CalculatorSection.vue";
import InterestingRead from "../components/InterestingRead.vue";

export default {
  components: {
    InterestingRead,
    CalculatorSection, Reviews, HappyCustomers, ChooseVehicle, Advantages, Steps, HowWork, MainHome},
  data() {
    return {
      reviews: [
        {
          id: 1,
          photo: 'reviews/1.jpeg',
          name: 'Laura Chaisson',
          text: 'In irure et ipsum eiusmod adipisicing id elit cillum proident. ' +
              'Adipisicing ullamco nisi veniam occaecat id excepteur ad non. Sunt occaecat elit ullamco commodo exercitation.' +
              ' Anim mollit irure Lorem proident veniam excepteur non irure Lorem. Lorem esse sint in nisi id esse.'
        },
        {
          id: 2,
          photo: 'reviews/1.jpeg',
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
          photo: 'reviews/1.jpeg',
          name: 'Chaisson',
          text: 'In irure et ipsum eiusmod adipisicing id elit cillum proident. ' +
              ' Anim mollit irure Lorem proident veniam excepteur non irure Lorem. Lorem esse sint in nisi id esse.'
        },
      ],

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
      ],
    }
  }
}
</script>

<template>
  <main>
    <MainHome/>

    <HowWork/>

    <Steps/>

    <Advantages/>

    <ChooseVehicle/>

    <HappyCustomers/>

    <Reviews :reviews="reviews"/>

    <CalculatorSection/>

    <InterestingRead :articles="interestingArticles"/>
  </main>
</template>
