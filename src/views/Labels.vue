<template>
  <Layout>
    <ol class="tags">
      <li v-for="tag in tagList" :key="tag">
        <span>{{ tag }}</span>
        <Icon name="right"/>
      </li>
    </ol>
    <div class="btnCreate-wrapper">
      <button class="btnCreate" @click="createNewTag">新建标签</button>
    </div>
  </Layout>
</template>

<script lang="ts">
import Vue from "vue";
import {Component} from "vue-property-decorator";
import {tagListModel} from "@/models/tagListModel";

const tagList = tagListModel.fetch();

@Component
export default class Labels extends Vue {
  tagList = tagList;

  createNewTag() {
    const name = window.prompt("请输入标签名（最多四个字）：");
    if (name === "") {
      window.alert("标签名不能为空");
    } else if (name === null) return;
    else {
      const result = tagListModel.createTag(name);
      if (result === "duplicated") this.handle();
      else tagListModel.createTag(name);
    }
  }

  handle() {
    const isDuplicated = true;
    while (isDuplicated) {
      const name = window.prompt("标签名重复，请重新输入：") as string;
      if (name === "") {
        window.alert("标签名不能为空");
        break;
      } else if (name === null) {
        return;
      } else {
        const result = tagListModel.createTag(name);
        if (result !== "duplicated") break;
      }
    }
  }
}


</script>

<style lang="scss" scoped>
.tags {
  background: #fff;
  font-size: 16px;
  padding-left: 20px;

  > li {
    min-height: 44px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-bottom: 1px solid #e5e5e7;

    svg {
      color: #666;
      fill: currentColor;
      margin-right: 16px;
    }
  }
}

.btnCreate {
  border: none;
  background: #767676;
  color: #ffffff;
  height: 40px;
  padding: 0 16px;
  border-radius: 4px;
  margin-top: 28px;

  &-wrapper {
    text-align: center;
    padding: 16px;
  }
}
</style>