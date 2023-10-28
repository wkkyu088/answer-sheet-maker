<template>
  <div class="sub-title">
    {{ text }}
    <div class="sub-underline"></div>
  </div>
</template>

<script setup>
import { toRefs } from "vue"

const props = defineProps(["text"])
const { text } = toRefs(props)
</script>

<style lang="scss" scoped>
@import "@/assets/style/color.scss";
.sub-title {
  position: relative;
  width: fit-content;
  height: 2rem;
  margin: 0 auto;
  margin-bottom: 1.5rem;
  padding: 0 0.5rem;
  font-size: 1.4rem;
  font-weight: 700;
  text-align: center;
}
.sub-underline {
  position: absolute;
  top: 1rem;
  left: 0;
  width: 100%;
  height: 0.8rem;
  transform: skew(-20deg);
  background-color: $background-primary;
  opacity: 0.24;
  z-index: -99;
}
</style>
