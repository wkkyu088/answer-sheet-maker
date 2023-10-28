<template>
  <div
    class="answer-box"
    :style="{
      width: isEmpty ? '102rem' : 'fit-content',
      height: isEmpty ? '50rem' : 'fit-content',
    }"
  >
    <div v-if="isEmpty" class="empty-sheet">
      만들기 버튼을 눌러<br />답안지를 생성해주세요 :)
    </div>
    <div v-if="!isEmpty" class="answer-sheet">
      <div v-for="i in questionCnt" :key="i" class="answer-row">
        <div class="row">
          <div class="check-mark" v-if="isCorrect(i - 1)">⭕</div>
          <div class="check-mark" v-if="isWrong(i - 1)">❌</div>
          <div class="question-number">{{ i }} 번</div>
        </div>
        <label v-for="j in answerCnt" class="answer-label">
          <input
            type="radio"
            :name="'question-' + i"
            :value="j"
            :disabled="isDisabled"
            v-model="selectedAnswers[i - 1]"
            @keydown.enter="selectAnswer(i - 1, j)"
          />
          <span :class="isRemark(i, j)">{{ j }}</span>
        </label>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed } from "vue"
import { useStore } from "@/store/app"
import { storeToRefs } from "pinia"

const store = useStore()
const { questionCnt, answerCnt, status, selectedAnswers, scoringAnswerList } =
  storeToRefs(store)

const isEmpty = computed(() => {
  return (
    status.value !== "preset" &&
    status.value !== "submit" &&
    status.value !== "scoring"
  )
})
const isDisabled = computed(() => {
  return status.value === "submit" || status.value === "scoring"
})

const selectAnswer = (idx, value) => {
  selectedAnswers.value[idx] = value
}

const isCorrect = (idx) => {
  return (
    status.value === "scoring" &&
    selectedAnswers.value[idx] === scoringAnswerList.value[idx]
  )
}

const isWrong = (idx) => {
  return (
    status.value === "scoring" &&
    selectedAnswers.value[idx] !== scoringAnswerList.value[idx]
  )
}

const isRemark = (i, j) => {
  if (status.value === "submit") {
    return "disabled"
  } else if (status.value === "scoring") {
    return isWrong(i - 1) && scoringAnswerList.value[i - 1] === j
      ? "remark"
      : "disabled"
  } else {
    return ""
  }
}
</script>

<style lang="scss" scoped>
@import "@/assets/style/color.scss";
.answer-box {
  align-items: center;
  justify-content: center;
  border: 1px solid $border-light;
  border-radius: 1rem;
}
.answer-sheet {
  padding: 2rem 3rem;
  display: grid;
  grid-template-rows: auto auto auto auto auto auto auto auto auto auto;
  grid-auto-flow: column;
  align-items: stretch;
  justify-content: stretch;
  gap: 1rem 2rem;
}
.answer-row {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 1rem;
}
.row {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 0.2rem;
}
.question-number {
  width: 3rem;
  height: 4rem;
  border-radius: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.2rem;
  font-weight: 600;
  color: $text-primary;
}
.answer-label {
  display: flex;
  flex-direction: row;
  align-items: center;
  span {
    width: 2rem;
    height: 3rem;
    border: 1px dashed $border-dark;
    border-radius: 2rem;
    background: $background-white;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1rem;
    font-weight: 400;
    color: $text-secondary;
    transition: all 0.2s ease-in-out;
  }
  input[type="radio"] {
    vertical-align: middle;
    appearance: none;
    width: 0;
    height: 0;
    padding: 0;
    margin: 0;
  }
  input[type="radio"]:checked + span {
    background: $background-primary;
    border: 1px solid $background-primary;
    color: $text-surface;
    font-weight: 600;
  }
  input[type="radio"]:hover + span {
    box-shadow: 0 0 0 max(4px, 0.2em) $background-hover;
    cursor: pointer;
  }
  input[type="radio"]:focus + span {
    box-shadow: 0 0 0 max(4px, 0.2em) $background-hover;
    cursor: pointer;
  }
  input[type="radio"]:disabled:checked + span {
    background: $background-primary;
    border: 1px solid $background-primary;
    opacity: 0.4;
    color: $text-surface;
    cursor: auto;
  }
  input[type="radio"]:disabled:hover + span {
    box-shadow: none;
    cursor: auto;
  }
  .disabled {
    background: lightgray;
    opacity: 0.4;
    color: $text-surface;
    cursor: auto;
  }
  .remark {
    background: $background-primary;
    border: 1px solid $background-primary;
    opacity: 1;
    color: $text-surface;
    font-weight: 600;
  }
}
.check-mark {
  font-size: 1.4rem;
}
.empty-sheet {
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.4rem;
  font-weight: 400;
  line-height: 2rem;
  text-align: center;
  color: $text-secondary;
}
</style>
