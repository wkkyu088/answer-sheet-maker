<template>
  <MainTitle />
  <div class="container">
    <div class="sheet-container">
      <div class="preset-container">
        <PresetGuideBox />
        <PresetInputBox />
      </div>
      <div class="answer-container">
        <div class="answer-box">
          <div class="empty-sheet">
            만들기 버튼을 눌러<br />답안지를 생성해주세용 :)
          </div>
        </div>
        <button>채점하기 !</button>
        <div class="checking-contianer">
          <div class="check-guide-box"></div>
          <div class="check-box"></div>
          <div class="result-box"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import MainTitle from "@/components/MainTitle.vue";
import PresetGuideBox from "@/components/PresetGuideBox.vue";
import PresetInputBox from "@/components/PresetInputBox.vue";
</script>

<style scoped>
.container {
  width: 100%;
  height: 100%;
  margin: 0 auto;
  margin: 5rem auto;
}
.preset-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1rem;
}
.answer-box {
  width: 100rem;
  height: 48rem;
  border: 1px solid #dadada;
  border-radius: 1rem;
}
.sheet-container {
  display: flex;
  flex-direction: row;
  align-items: start;
  justify-content: center;
  gap: 1rem;
}
.empty-sheet {
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.4rem;
  font-weight: 400;
  text-align: center;
  color: #a0a0a0;
}
</style>
