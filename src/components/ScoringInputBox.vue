<template>
  <div class="input-box">
    <textarea
      class="answer-box"
      placeholder="답안을 입력해 주세요."
      v-model="scoringAnswers"
      :maxlength="questionCnt"
      :disabled="isDisabled"
    ></textarea>
    <div v-if="scoringAnswers" class="counter">
      {{ scoringAnswers.length + " / " + questionCnt }}
    </div>
  </div>
</template>

<script setup>
import { computed } from "vue"
import { useStore } from "@/store/app"
import { storeToRefs } from "pinia"

const store = useStore()
const { questionCnt, status, scoringAnswers } = storeToRefs(store)

const isDisabled = computed(() => {
  return status.value === "" || status.value === "preset"
})
</script>

<style lang="scss" scoped>
@import "@/assets/style/color.scss";
.input-box {
  position: relative;
}
.answer-box {
  width: 22rem;
  height: 10rem;
  padding: 1.5rem 2rem;
  border-radius: 1rem;
  border: 1px solid $border-light;
  font-size: 1.2rem;
  font-weight: 400;
  line-height: 2.4rem;
  resize: none;
}
.counter {
  position: absolute;
  bottom: 1rem;
  right: 1rem;
  font-size: 1.2rem;
  font-weight: 400;
  color: $text-secondary;
}
@media screen and (max-width: 1440px) {
  .answer-box {
    width: 20rem;
    height: 15rem;
  }
}
@media screen and (max-width: 768px) {
  .answer-box {
    width: 70vw;
    height: 10rem;
  }
}
</style>
