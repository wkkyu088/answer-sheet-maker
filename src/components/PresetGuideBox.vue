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
  margin: 1.4rem auto;
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
  margin: 0 auto;
  padding: 3rem;
  align-items: center;
  justify-content: center;
  border: 1px solid $border-light;
  border-radius: 1rem;
}
</style>
