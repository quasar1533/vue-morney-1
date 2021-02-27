<template>
  <div class="nav-wrapper">
    <div class="content">
      <slot/>
    </div>
    <Nav/>
  </div>
</template>

<script lang="ts">
export default {
name: "Layout-nav"
}
</script>

<style lang="scss" scoped>
.nav-wrapper {
  border: 1px solid blue;
  display: flex;
  flex-direction: column;
  height: 100vh;
}

.content {
  border: 1px solid red;
  flex-grow: 1;
  overflow: auto;
}
</style>