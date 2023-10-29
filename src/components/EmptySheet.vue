<template>
  <div class="empty-answer-box">
    <div class="empty-sheet">
      만들기 버튼을 눌러<br />답안지를 생성해주세요 :)
    </div>
  </div>
</template>

<script setup></script>

<style lang="scss" scoped>
@import "@/assets/style/color.scss";
.empty-answer-box {
  width: 102rem;
  height: 50rem;
  align-items: center;
  justify-content: center;
  border: 1px solid $border-light;
  border-radius: 1rem;
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
@media screen and (max-width: 768px) {
  .empty-answer-box {
    width: 70vw;
    height: 50rem;
    padding: 2rem;
  }
}
</style>
