<template>
  <button class="primary-btn" :disabled="isDisabled" @click="onSubmit">
    {{ buttonTxt }}
  </button>
</template>

<script setup>
import { ref, computed, watch } from "vue"
import { useStore } from "@/store/app"
import { storeToRefs } from "pinia"

const store = useStore()
const {
  questionCnt,
  status,
  scoringAnswers,
  scoringAnswerList,
  selectedAnswers,
  result,
} = storeToRefs(store)

const buttonTxt = ref("제출하기 !")

const isDisabled = computed(() => {
  return status.value === "" || status.value === "scoring"
})

const getTotalScore = () => {
  const temp = selectedAnswers.value.reduce((acc, cur, idx) => {
    if (cur === scoringAnswerList.value[idx]) {
      return acc + 1
    } else {
      return acc
    }
  }, 0)
  return ((temp / questionCnt.value) * 100).toFixed(1)
}

const onSubmit = () => {
  // 제출하기 버튼 클릭
  if (status.value === "preset") {
    status.value = "submit"
    buttonTxt.value = "채점하기 !"
  }
  // 채점하기 버튼 클릭
  else if (status.value === "submit") {
    if (!scoringAnswers.value) {
      alert("채점을 위해서 답안을 입력해 주세요.")
    } else {
      if (selectedAnswers.value.length !== scoringAnswers.value.length) {
        alert("문항의 길이와 답안의 길이가 맞지 않습니다.")
        return
      }
      scoringAnswerList.value = scoringAnswers.value
        .split("")
        .map((el) => parseInt(el))
      status.value = "scoring"
      result.value = getTotalScore()
    }
  }
}

watch([scoringAnswers], () => {
  if (status.value === "scoring") {
    status.value = "submit"
  }
})
</script>

<style lang="scss" scoped>
@import "@/assets/style/color.scss";
</style>
