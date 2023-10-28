<template>
  <div class="title">
    답안지 생성기 💯
    <div class="underline"></div>
  </div>
</template>

<script setup></script>

<style lang="scss" scoped>
@import "@/assets/style/color.scss";
.title {
  width: 20rem;
  margin: 0 auto;
  margin-top: 5rem;
  font-size: 2.5rem;
  font-weight: 700;
  text-align: center;
  color: $text-primary;
}
.underline {
  margin-top: -1.1rem;
  width: 100%;
  height: 1.2rem;
  transform: skew(-20deg);
  background-color: $background-underline;
}
</style>
