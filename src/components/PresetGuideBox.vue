<template>
  <div class="content-box">
    <SubTitle text="만들기 가이드 ☆" />
    <div class="guide-item">
      1. <span class="text-deco">문제 수</span>를 입력해 주세요.
    </div>
    <div class="guide-item">
      2. <span class="text-deco">선지 수</span>를 입력해 주세요.
    </div>
    <div class="guide-item">
      3. <span class="text-deco">만들기 버튼</span>을 눌러서 완료 !
    </div>
  </div>
</template>

<script setup>
import SubTitle from "@/components/SubTitle.vue"
</script>

<style lang="scss" scoped>
@import "@/assets/style/color.scss";
.guide-item {
  width: 15rem;
  margin: 0.8rem auto;
  font-size: 1.2rem;
  font-weight: 400;
}
.text-deco {
  font-weight: 600;
  text-decoration: underline;
  text-underline-position: under;
}
.content-box {
  width: 18rem;
  padding: 3rem;
  align-items: center;
  justify-content: center;
  border: 1px solid $border-light;
  border-radius: 1rem;
}
@media screen and (max-width: 1440px) {
  .content-box {
    width: fit-content;
    height: 15rem;
    padding: 2rem 4rem;
  }
}
@media screen and (max-width: 768px) {
  .content-box {
    width: 70vw;
    height: fit-content;
    padding: 2rem;
  }
}
</style>
