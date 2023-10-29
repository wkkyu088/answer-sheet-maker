<template>
  <div class="content-box">
    <div class="row">
      <div>
        <SubTitle text="문제 수" />
        <div class="input-container">
          <input
            v-model="questions"
            type="number"
            placeholder="50"
            min="1"
            max="50"
          />
          문제
          <span class="text-secondary">(1~50)</span>
        </div>
      </div>
      <div>
        <SubTitle text="선지 수" />
        <div class="radio-container">
          <label class="radio-label">
            <input
              v-model="answers"
              type="radio"
              name="choice"
              value="5"
              checked
            />
            <span>5지선다</span>
          </label>
          <label class="radio-label">
            <input v-model="answers" type="radio" name="choice" value="4" />
            <span>4지선다</span>
          </label>
        </div>
      </div>
    </div>
    <button
      class="primary-btn"
      :disabled="questions === ''"
      @click="onClickBtn"
    >
      만들기 !
    </button>
  </div>
</template>

<script setup>
import { ref } from "vue"
import { useStore } from "@/store/app"
import { storeToRefs } from "pinia"
import SubTitle from "@/components/SubTitle.vue"

const store = useStore()
const { questionCnt, answerCnt, status, selectedAnswers, scoringAnswers } =
  storeToRefs(store)

const questions = ref("")
const answers = ref("5")

const setQuestionCnt = () => {
  questionCnt.value = parseInt(questions.value)
}

const setAnswerCnt = () => {
  answerCnt.value = parseInt(answers.value)
}

const setArray = () => {
  selectedAnswers.value = Array(questionCnt.value).fill(0)
  console.log(selectedAnswers.value)
}

// 만들기 버튼 클릭
const onClickBtn = () => {
  if (questions.value > 50) {
    alert("문제 수는 50개를 넘을 수 없습니다.")
    return
  }
  setQuestionCnt()
  setAnswerCnt()
  setArray()
  status.value = "preset"
  scoringAnswers.value = null
}
</script>

<style lang="scss" scoped>
@import "@/assets/style/color.scss";
.input-container {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin-bottom: 2.5rem;
  font-size: 1.2rem;
}
input {
  width: 4rem;
  height: 1.4rem;
  margin: 0 0.5rem;
  padding: 0.5rem;
  border: 1px solid $border-light;
  border-radius: 0.5rem;
  text-align: center;
  font-size: 1.2rem;
}
input::placeholder {
  color: $text-placeholder;
}
.text-secondary {
  font-size: 1rem;
  font-weight: 400;
  color: $text-secondary;
  margin-left: 0.3rem;
}
.radio-container {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin-bottom: 2rem;
  font-size: 1.2rem;
}
.radio-label {
  padding: 0.2em 0.6em;
  font-size: 1.2rem;
  font-weight: 400;
  align-items: center;
  justify-content: center;
  line-height: 2rem;
}
input[type="radio"] + span {
  vertical-align: middle;
}
input[type="radio"] {
  vertical-align: middle;
  appearance: none;
  border: max(2px, 0.1em) solid $border-light;
  border-radius: 50%;
  width: 1.5em;
  height: 1.5em;
  transition: all 0.2s ease-in-out;
}
input[type="radio"]:checked {
  border: 0.4em solid $background-primary;
}
input[type="radio"]:hover {
  box-shadow: 0 0 0 max(4px, 0.2em) $background-hover;
  cursor: pointer;
}
input[type="radio"]:hover + span {
  cursor: pointer;
}
@media screen and (max-width: 1440px) {
  .row {
    display: flex;
    flex-direction: row;
    gap: 4rem;
  }
  .content-box {
    width: fit-content;
    height: 15rem;
    padding: 2rem 4rem;
  }
}
@media screen and (max-width: 768px) {
  .row {
    display: flex;
    flex-direction: column;
    gap: 0rem;
  }
  .content-box {
    width: 70vw;
    height: fit-content;
    padding: 2rem;
  }
}
</style>
