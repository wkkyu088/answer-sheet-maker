// src/store/app.js

import { ref, computed } from "vue"
import { defineStore } from "pinia"

export const useStore = defineStore("app", () => {
  // state
  const questionCnt = ref(0)
  const answerCnt = ref(5)

  const status = ref("")

  const selectedAnswers = ref(null)
  const scoringAnswers = ref(null)

  const result = ref(0)

  return {
    questionCnt,
    answerCnt,
    status,
    selectedAnswers,
    scoringAnswers,
    result,
  }
})
