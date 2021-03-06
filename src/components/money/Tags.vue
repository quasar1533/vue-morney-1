<template>
  <div class="tags">
    <div class="new">
      <button @click="newTag">新增标签</button>
    </div>
    <ul class="current">
      <li v-for="tag in dataSource" :key="tag"
          @click="toggle(tag)"
          :class="{
            selected: selectedTags.includes(tag)
          }">{{ tag }}
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import {Component, Prop} from "vue-property-decorator";

@Component
export default class Tags extends Vue {
  @Prop(Array) dataSource: string[] | undefined;
  selectedTags: string[] = [];

  toggle(tag: string) {
    const index = this.selectedTags.indexOf(tag);
    if (index >= 0) {
      this.selectedTags.splice(index, 1);
    } else {
      this.selectedTags.push(tag);
    }
    this.$emit("update:selectedTags", this.selectedTags);
  }

  newTag() {
    const name = window.prompt("请输入标签名（最多四个字）：");
    if (name === "") {
      window.alert("标签名不能为空");
    } else if (name === null) {
      return;
    } else {
      if (this.dataSource) {
        this.$emit("update:dataSource", [...this.dataSource, name]);
        window.alert("添加成功！");
      }
    }
  }
}
</script>

<style lang="scss" scoped>
@import '~@/assets/style/helper.scss';

.tags {
  padding: 16px;
  font-size: 14px;
  display: flex;
  flex-grow: 1;
  flex-direction: column-reverse;

  > .current {
    display: flex;
    flex-wrap: wrap;

    > li {
      $bg: #d9d9d9;
      background: $bg;
      $h: 24px;
      height: $h;
      line-height: $h;
      padding: 0 16px; // 比起指定宽度，最好用padding
      margin-right: 12px;
      margin-top: 5px;
      border-radius: $h / 2;

      &.selected {
        background: darken($bg, 50%);
      }
    }
  }

  > .new {
    padding-top: 16px;

    > button {
      background: transparent;
      border: none;
      color: #999;
      border-bottom: 1px solid;
      padding: 0 3px;
    }
  }
}
</style>