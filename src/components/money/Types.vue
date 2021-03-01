<template>
  <div>
    <ul class="types">
      <li :class="type === '-' && 'selected'" @click="selectType('-')">支出</li>
      <li :class="type === '+' && 'selected'" @click="selectType('+')">收入</li>
    </ul>
  </div>
</template>

// 普通的js代码
<!--<script>-->
<!--export default {-->
<!--  name: "Types",-->
<!--  data() {-->
<!--    return {-->
<!--      type: "-"-->
<!--    };-->
<!--  },-->
<!--  methods: {-->
<!--    selectType(type) {-->
<!--      if (type !== '-' && type !== '+') {-->
<!--        throw new Error('type unknown');-->
<!--      }-->
<!--      this.type = type;-->
<!--    }-->
<!--  },-->
<!--};-->
<!--</script>-->

// ts代码
<script lang="ts">
import Vue from "vue";
import {Component} from "vue-property-decorator";

@Component
export default class Types extends Vue {
  type = "-";

  selectType(type: string) {
    if (type !== "-" && type !== "+") {
      throw new Error("unknown type");
    }
    this.type = type;
  }
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