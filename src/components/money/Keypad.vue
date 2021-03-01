<template>
  <div class="keypad">
    <div class="output">100</div>
    <div class="buttons">
      <button>1</button>
      <button>2</button>
      <button>3</button>
      <button>+</button>
      <button>4</button>
      <button>5</button>
      <button>6</button>
      <button>-</button>
      <button>7</button>
      <button>8</button>
      <button>9</button>
      <button class="ok">完成</button>
      <button>.</button>
      <button>0</button>
      <button>删除</button>
    </div>
  </div>
</template>

<script lang="ts">
export default {
name: "Keypad"
}
</script>

<style lang="scss" scoped>
@import '~@/assets/style/helper.scss';

.keypad {
  > .output {
    line-height: 1.25;
    padding: 6px 16px;
    font-size: 36px;
    font-family: Consolas, monospace;
    text-align: right;
    box-shadow: inset 0 -3px 3px -3px rgba(0, 0, 0, 0.3),
    inset 0 3px 3px -3px rgba(0, 0, 0, 0.3)      ;
  }

  > .buttons {
    @extend %clearFix;

    > button {
      width: 25%;
      height: 56px;
      float: left;
      background: transparent;
      border: none;
      $bg: #f2f2f2;

      &:nth-child(1) {
        background: $bg;
      }

      &:nth-child(2), &:nth-child(5) {
        background: darken($bg, 4%);
      }

      &:nth-child(3), &:nth-child(6), &:nth-child(9) {
        background: darken($bg, 4*2%);
      }

      &:nth-child(4), &:nth-child(7), &:nth-child(10), &:nth-child(13) {
        background: darken($bg, 4*3%);
      }

      &:nth-child(8), &:nth-child(11), &:nth-child(14) {
        background: darken($bg, 4*4%);
      }

      &:nth-child(15) {
        background: darken($bg, 4*5%);
      }

      &:nth-child(12) {
        background: darken($bg, 4*6%);
      }

      &.ok {
        height: 56*2px;
        float: right;
      }
    }
  }
}
</style>