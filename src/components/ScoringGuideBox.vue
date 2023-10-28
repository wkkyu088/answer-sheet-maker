<template>
  <div class="content-box">
    <SubTitle text="채점하기 가이드 ☆" />
    <div class="text" style="margin: 1.4rem auto">
      아래의 박스에 예시와 같이 띄어쓰기 없이 답안을 입력해 주세요.
    </div>
    <div class="text">
      예시) <br />
      1번에 3, 2번에 2, 3번에 1, 4번에 1, 5번에 2라면
      <span class="text-deco">32112</span> 와 같이 입력 !
    </div>
  </div>
</template>

<script setup>
import SubTitle from "@/components/SubTitle.vue"
</script>

<style lang="scss" scoped>
@import "@/assets/style/color.scss";
.content-box {
  width: 20rem;
}
.text {
  font-size: 1.2rem;
  font-weight: 400;
  line-height: 1.8rem;
}
.text-deco {
  color: $text-highlight;
  font-weight: 600;
  text-decoration: underline;
  text-underline-position: under;
}
</style>
