<template>
  <nav>
    <router-link to="/labels" class="item" active-class="selected">
      <Icon name="label"/>
      标签
    </router-link>
    <router-link to="/money" class="item" active-class="selected">
      <Icon name="money"/>
      记账
    </router-link>
    <router-link to="/statistics" class="item" active-class="selected">
      <Icon name="statistics"/>
      统计
    </router-link>
  </nav>
</template>

<script lang="ts">
export default {
  name: "Nav"
};
</script>

<style lang="scss" scoped>
nav {
  display: flex;
  box-shadow: 0 0 2px rgba(0, 0, 0, 0.3);
  font-size: 12px;

  .item {
    padding: 2px 0;
    width: 33.33333%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    .icon {
      width: 32px;
      height: 32px;
    }

    &.selected {
      color: #42b983;

      .icon {
        fill: currentColor;
      }
    }
  }
}
</style>