<script>
import {quizTree} from '@/api/quizTree.js'
import QuizForm from "../components/quiz/QuizForm.vue";

export default {
  name: "QuizView",
  components: {QuizForm},
  data() {
    return {
      activeQuiz: null,
      historyQuiz: [],

      quizData: {
        budget: null,
        employment_status: null,
        monthly_income: {
          monthly_income: ''
        },
        is_working: null,
        how_earn: null,
        employment: {
          employer: '',
          title: ''
        },
        how_long_have_been: {
          long_years: '',
          long_months: ''
        },
        how_long_receiving: {
          long_time: ''
        },
        address: {
          street_address: '',
          city_address: '',
          province_address: '',
          postal_code_address: ''
        },
        born_date: {
          born_year: '',
          born_month: '',
          born_day: ''
        },
        user_info: null
      }
    }
  },
  computed: {
    activeQuizItem() {
      return quizTree.find(item => item.id === this.activeQuiz)
    },
    previousQuiz() {
      const activeIndex = this.historyQuiz.indexOf(this.historyQuiz.find(item => item === this.activeQuiz))
      return activeIndex !== -1 ? this.historyQuiz[activeIndex > 0 ? activeIndex - 1 : null] : null
    }
  },
  methods: {
    changeForm(value) {
      this.quizData[this.activeQuizItem.name] = value

      if (this.activeQuizItem.next) {
        this.activeQuiz = this.activeQuizItem.next
      } else {
        this.activeQuiz = this.activeQuizItem.values.find(item => item.value === this.quizData[this.activeQuizItem.name]).next
      }

      this.historyQuiz.push(this.activeQuiz)
    },
    goToPreviousForm() {
      if (this.previousQuiz) {
        this.activeQuiz = this.previousQuiz
        this.historyQuiz.pop()
      }
    },
    activeQuizIndex(id) {
      const activeIndex = quizTree.find((item, index) => {
        if (item.id === id) {
          return index
        }
      })

      return activeIndex
    },
    isLastQuiz(id) {
      return this.activeQuizIndex(id) === quizTree.length - 1
    }
  },
  mounted() {
    this.activeQuiz = quizTree[0].id
    this.historyQuiz.push(this.activeQuiz)
  }
}
</script>

<template>
  <section class="quiz-section">
    <div class="container">
      <div class="quiz__content">
        <div v-if="activeQuizItem" class="quiz__form-wrap">
          <QuizForm :quiz="activeQuizItem" :previousQuiz="previousQuiz" :activeValueData="quizData[activeQuizItem.name]"
                    @changeValue="changeForm" @goBack="goToPreviousForm" :key="activeQuizItem?.id"/>
        </div>
      </div>
    </div>
  </section>
</template>
