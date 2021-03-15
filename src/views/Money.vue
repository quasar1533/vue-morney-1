<template>
  <Layout class-prefix="money">
    <Keypad :value.sync="record.amount" @submit="saveRecords"/>
    <Types :value.sync="record.type"/>
    <Notes @update:value="onUpdateNotes"/>
    <Tags :data-source.sync="tagList" @update:selectedTags="onUpdateSelectedTags"/>
  </Layout>
</template>

<script lang="ts">
import Vue from "vue";
import Keypad from "@/components/money/Keypad.vue";
import Types from "@/components/money/Types.vue";
import Notes from "@/components/money/Notes.vue";
import Tags from "@/components/money/Tags.vue";
import {Component, Watch} from "vue-property-decorator";
import {recordListModel} from "@/models/recordListModel";

// 模拟一下数据的迁移，数据库的升级
// window.localStorage.setItem("version", "0.0.1");
// const version = window.localStorage.getItem("version") || "0.0.1";
// const recordList: Record[] = JSON.parse(window.localStorage.getItem("recordList") || "[]");
//
// if (version === "0.0.1") {
//   recordList.forEach(record => {
//     record.createdAt = new Date(2021, 0, 1);
//   });
// } else if (version === '0.0.2') {
//   // doing something
// }
// --------------------------分割线

// // eslint-disable-next-line @typescript-eslint/no-var-requires
// const {recordListModel} = require('@/recordListModel.ts');

const recordList = recordListModel.fetch();

@Component({
  components: {Tags, Notes, Types, Keypad},
})
export default class Money extends Vue {
  tagList = ["衣", "食", "住", "行"];
  record: MyRecord = {
    tagList: [], type: "-", notes: "", amount: 0
  };
  recordList = recordList;

  onUpdateSelectedTags(value: string[]) {
    this.record.tagList = value;
  }

  onUpdateNotes(value: string) {
    this.record.notes = value;
  }

  saveRecords() {
    const dataClone: MyRecord = recordListModel.deepClone(this.record);
    dataClone.createdAt = new Date();
    this.recordList.push(dataClone);
  }

  @Watch("recordList")
  onRecordListChanged() {
    recordListModel.save(this.recordList);
  }
}
</script>

<style lang="scss">
.money-content {
  display: flex;
  flex-direction: column-reverse;
}
</style>
<style lang="scss" scoped>
@import '~@/assets/style/helper.scss';

</style>