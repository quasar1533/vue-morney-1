<template>
  <Layout class-prefix="money">
    <Keypad :value.sync="record.amount" @submit="saveRecords"/>
    <Types :value.sync="record.type"/>
    <Notes @update:value="onUpdateNotes"/>
    <Tags :data-source.sync="tags" @update:selectedTags="onUpdateSelectedTags"/>
  </Layout>
</template>

<script lang="ts">
import Vue from "vue";
import Keypad from "@/components/money/Keypad.vue";
import Types from "@/components/money/Types.vue";
import Notes from "@/components/money/Notes.vue";
import Tags from "@/components/money/Tags.vue";
import {Component, Watch} from "vue-property-decorator";

type Record = {
  tags: string[];
  type: string;
  notes: string;
  amount: number;
  createdAt?: Date;   // 表示该项可有可无！！
}

@Component({
  components: {Tags, Notes, Types, Keypad},
})
export default class Money extends Vue {
  tags = ["衣", "食", "住", "行"];
  record: Record = {
    tags: [], type: "-", notes: "", amount: 0
  };
  recordList: Record[] = JSON.parse(window.localStorage.getItem("localList") || "[]");

  onUpdateSelectedTags(value: string[]) {
    this.record.tags = value;
  }

  onUpdateNotes(value: string) {
    this.record.notes = value;
  }

  saveRecords() {
    const deepClone: Record = JSON.parse(JSON.stringify(this.record));
    deepClone.createdAt = new Date();
    this.recordList.push(deepClone);
  }

  @Watch("recordList")
  onRecordListChanged() {
    window.localStorage.setItem("recordList", JSON.stringify(this.recordList));
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