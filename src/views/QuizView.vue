<script>
import {quizTree} from '@/api/quizTree.js'
import QuizForm from "../components/quiz/QuizForm.vue";
import QuizSuccess from '../components/quiz/QuizSuccess.vue';
import {carItems} from '../api/carsList';
import CarCard from '../components/catalog/CarCard.vue';
import {mapWritableState} from 'pinia';
import {useGeneralStore} from '../store/general';

export default {
  name: "QuizView",
  components: {CarCard, QuizSuccess, QuizForm},
  data() {
    return {
      activeQuiz: null,
      historyQuiz: [],

      quizData: {},
      showSuccess: false,
      totalQuestions: 0
    }
  },
  computed: {
    ...mapWritableState(useGeneralStore, ['headerRequestCarId']),
    activeQuizItem() {
      return quizTree.find(item => item.id === this.activeQuiz)
    },
    previousQuiz() {
      const activeIndex = this.historyQuiz.indexOf(this.historyQuiz.find(item => item === this.activeQuiz))
      return activeIndex !== -1 ? this.historyQuiz[activeIndex > 0 ? activeIndex - 1 : null] : null
    },
    isLastQuiz() {
      return this.activeQuizItem.hasOwnProperty('lastStep') && this.activeQuizItem.lastStep
    },
    progressFillPercent() {
      return (this.historyQuiz.length * 100) / this.totalQuestions
    },
    car() {
      if(this.$route.params.carId) {
        return carItems.find(item => item.id === +this.$route.params.carId)
      }
    }
  },
  methods: {
    changeForm(value) {
      this.changeValue(value)

      if (this.isLastQuiz) {
        this.showSuccess = true
        this.activeQuiz = null
      } else {
        if (this.activeQuizItem.next) {
          this.activeQuiz = this.activeQuizItem.next
        } else {
          this.activeQuiz = this.activeQuizItem.values.find(item => item.value === this.quizData[this.activeQuizItem.id]).next
        }
        this.historyQuiz.push(this.activeQuiz)
      }
    },
    changeValue(value) {
      this.quizData[this.activeQuizItem.id] = value
      this.changeTotal()
    },
    changeTotal() {
      let localTotal = 0
      let localActive = this.activeQuiz
      let localActiveItem = quizTree.find(item => item.id === localActive)

      amountTotal(localActiveItem)

      function amountTotal(question) {
        if(question.next) {
          localTotal++
          localActive = question.next
          localActiveItem = quizTree.find(item => item.id === localActive)
          amountTotal(localActiveItem)
        } else if(question.values.some(item => item.hasOwnProperty('next'))) {
          let findItem = question.values.find(item => item.hasOwnProperty('next') && item.next)
          if(findItem) {
            localTotal++
            localActive = findItem.next
            localActiveItem = quizTree.find(item => item.id === localActive)
            amountTotal(localActiveItem)
          }
        }
      }

      this.totalQuestions = localTotal + this.historyQuiz.length
    },
    goToPreviousForm() {
      if (this.previousQuiz) {
        this.activeQuiz = this.previousQuiz
        this.historyQuiz.pop()
      }
    },
  },
  mounted() {
    this.activeQuiz = quizTree[0].id
    this.historyQuiz.push(this.activeQuiz)
  },
  unmounted() {
    this.headerRequestCarId = null
  }
}
</script>

<template>
  <section class="quiz-section">
    <div class="container">
      <div class="quiz__content">
        <div class="quiz__content-wrap" :class="{'quiz__content-wrap_car': car}">

          <div class="quiz__card-car">
            <CarCard v-if="car" :car="car"/>
          </div>

          <div v-if="activeQuizItem && !showSuccess" class="quiz__form-wrap">
            <div class="quiz__progress">
              <div class="quiz__progress-content">
                <div class="quiz__progress-fill" :style="`width: ${progressFillPercent}%;`"></div>
              </div>
            </div>

            <QuizForm :quiz="activeQuizItem" :previousQuiz="previousQuiz" :activeValueData="quizData[activeQuiz]"
                      @changeValue="changeForm" @goBack="goToPreviousForm" @setEmptyValue="changeValue"
                      :key="activeQuizItem?.id"/>
          </div>

          <div v-else class="quiz__form-wrap quiz__form-wrap_success">
            <QuizSuccess/>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
