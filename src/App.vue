<template>
  <div id="app">
    <router-view class="router-view"/>
  </div>
</template>

<style lang="scss">
@import '~@/assets/style/reset.scss';
@import '~@/assets/style/helper.scss';

#app {
  font-family: $font-hei;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: $color-black;
  font-size: 16px;
  line-height: 1.5;

  background: #f5f5f5;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}

.router-view {

}
</style>
