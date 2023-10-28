<template>
  <div class="content-box">
    <div class="sub-title">
      간단한 사용법 ☆
      <div class="sub-underline"></div>
    </div>
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

<script setup></script>

<style lang="scss" scoped>
@import "@/assets/style/color.scss";
.sub-title {
  width: fit-content;
  margin: 0 auto;
  margin-bottom: 1.5rem;
  padding: 0 1rem;
  font-size: 1.4rem;
  font-weight: 700;
  text-align: center;
}
.sub-underline {
  margin-top: -0.6rem;
  width: 100%;
  height: 0.8rem;
  transform: skew(-20deg);
  background-color: #f85b5b33;
}
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
