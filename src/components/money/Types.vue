<template>
  <div>
    <ul class="types">
      <li class="selected">支出</li>
      <li>收入</li>
    </ul>
  </div>
</template>

<script lang="ts">
export default {
name: "Types"
}
</script>

<style lang="scss" scoped>
@import '~@/assets/style/helper.scss';

.types {
  background: #c4c4c4;
  display: flex;
  font-size: 24px;

  li {
    height: 64px;
    width: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;

    &.selected {
      &::after {
        content: '';
        position: absolute;
        width: 100%;
        height: 4px;
        background: $color-black;
        bottom: 0;
        left: 0;
      }
    }
  }
}
</style>