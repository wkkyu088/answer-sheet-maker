<template>
  <MainTitle />
  <div class="container">
    <div class="row-container">
      <div class="column-container">
        <PresetGuideBox />
        <PresetInputBox />
      </div>
      <div class="column-container">
        <AnswerSheet />
        <SubmitButton />
      </div>
      <div class="column-container">
        <ScoringGuideBox />
        <ScoringInputBox />
        <ScoringResultBox />
      </div>
    </div>
  </div>
</template>

<script setup>
import MainTitle from "@/components/MainTitle.vue"
import PresetGuideBox from "@/components/PresetGuideBox.vue"
import PresetInputBox from "@/components/PresetInputBox.vue"
import AnswerSheet from "@/components/AnswerSheet.vue"
import ScoringGuideBox from "@/components/ScoringGuideBox.vue"
import ScoringInputBox from "@/components/ScoringInputBox.vue"
import ScoringResultBox from "@/components/ScoringResultBox.vue"
import SubmitButton from "@/components/SubmitButton.vue"
</script>

<style lang="scss" scoped>
@import "@/assets/style/color.scss";
.container {
  width: 100%;
  height: 100%;
  margin: 5rem auto;
}
.row-container {
  display: flex;
  flex-direction: row;
  align-items: start;
  justify-content: center;
  gap: 1rem;
}
.column-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1rem;
}
</style>
