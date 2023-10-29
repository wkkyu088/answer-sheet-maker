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
  position: relative;
  width: fit-content;
  height: 3rem;
  margin: 0 auto;
  margin-top: 8rem;
  padding: 0 0.5rem;
  font-size: 2.5rem;
  font-weight: 700;
  text-align: center;
  color: $text-primary;
}
.underline {
  position: absolute;
  top: 2.2rem;
  left: 0;
  width: 100%;
  height: 1.2rem;
  transform: skew(-20deg);
  background-color: $background-primary;
  opacity: 0.25;
  z-index: -99;
}
@media screen and (max-width: 1440px) {
  .title {
    margin-top: 5rem;
  }
}

@media screen and (max-width: 768px) {
  .title {
    margin-top: 4rem;
  }
}
</style>
