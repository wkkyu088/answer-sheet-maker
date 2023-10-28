<template>
  <div class="content-box">
    <SubTitle text="시험 결과 ☆" />
    <div v-if="isEmpty" class="empty-box">
      채점하기 버튼을 눌러<br />
      결과를 확인해 주세요 !<br /><br />
      두근두근
    </div>
    <div v-if="!isEmpty" class="score-box">
      <div class="score">{{ result }} 점</div>
      <div class="text">수고했어요 :)</div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from "vue"
import SubTitle from "@/components/SubTitle.vue"
import { useStore } from "@/store/app"
import { storeToRefs } from "pinia"

const store = useStore()
const { status, result, scoringAnswers } = storeToRefs(store)

const isEmpty = computed(() => {
  return status.value !== "scoring"
})
</script>

<style lang="scss" scoped>
@import "@/assets/style/color.scss";
.content-box {
  width: 20rem;
}
.score-box {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  padding: 2rem 0;
}
.score {
  font-size: 3rem;
  font-weight: 700;
  line-height: 3.6rem;
  text-align: center;
  color: $text-highlight;
}
.text {
  font-size: 1.2rem;
  font-weight: 400;
  line-height: 1.8rem;
  text-align: center;
  color: $text-secondary;
}
.empty-box {
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.2rem;
  font-weight: 400;
  line-height: 1.8rem;
  text-align: center;
  color: $text-secondary;
  padding: 1.5rem 0;
}
</style>
