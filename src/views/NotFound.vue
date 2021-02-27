<template>
  <div>
    您访问的页面不存在，请检查网址路径是否正确
    <div>
      <router-link to="/">Homepage</router-link>
<!--      <a href="#/">Homepage</a>-->
    </div>
  </div>
</template>

<script lang="ts">
export default {
  name: "NotFound"
};
</script>

<style lang="scss" scoped>

</style>