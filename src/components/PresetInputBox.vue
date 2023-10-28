<template>
  <div class="content-box">
    <div class="sub-title">
      문제 수
      <div class="sub-underline"></div>
    </div>
    <div class="input-container">
      <input type="number" placeholder="50" min="1" max="100" />
      문제
      <span class="text-secondary">(1~100)</span>
    </div>
    <div class="sub-title">
      선지 수
      <div class="sub-underline"></div>
    </div>
    <div class="radio-container">
      <label class="radio-label">
        <input type="radio" name="choice" value="4" checked />
        <span>4지선다</span>
      </label>
      <label class="radio-label">
        <input type="radio" name="choice" value="5" />
        <span>5지선다</span>
      </label>
    </div>
    <button>만들기 !</button>
  </div>
</template>

<script setup></script>

<style lang="scss" scoped>
@import "@/assets/style/color.scss";
.input-container {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin-bottom: 2.5rem;
  font-size: 1.2rem;
}
input {
  width: 4rem;
  height: 1.4rem;
  margin: 0 0.5rem;
  padding: 0.5rem;
  border: 1px solid $border-light;
  border-radius: 0.5rem;
  text-align: center;
  font-size: 1.2rem;
}
.text-secondary {
  font-size: 0.8rem;
  font-weight: 400;
  color: $text-secondary;
  margin-left: 0.3rem;
}
.radio-container {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin-bottom: 2rem;
  font-size: 1.2rem;
}
.radio-label {
  padding: 0.2em 0.6em;
  font-size: 1.2rem;
  font-weight: 400;
  align-items: center;
  justify-content: center;
  line-height: 2rem;
}
input[type="radio"] + span {
  vertical-align: middle;
}
input[type="radio"] {
  vertical-align: middle;
  appearance: none;
  border: max(2px, 0.1em) solid $border-light;
  border-radius: 50%;
  width: 1.5em;
  height: 1.5em;
  transition: border 0.2s ease-in-out;
}
input[type="radio"]:checked {
  border: 0.4em solid #f85b5b;
}
input[type="radio"]:hover {
  box-shadow: 0 0 0 max(4px, 0.2em) #dedede;
  cursor: pointer;
}
input[type="radio"]:hover + span {
  cursor: pointer;
}
</style>
