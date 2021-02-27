<template>
  <LayoutNav>
    <svg>
      <use xlink:href="#label"/>
    </svg>
    <p>Label.vue</p>
  </LayoutNav>
</template>

<script lang="ts">
import x from '@/assets/icons/label.svg';

console.log(x);
// 打印出来的是一个 路径
export default {
  name: "Labels",
};
</script>

<style lang="scss" scoped>

</style>