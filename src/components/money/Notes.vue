<template>
  <div>
    <label class="notes">
      <span class="notes-name">备注</span>
      <input type="text" placeholder="请在这里添加备注"/>
    </label>
  </div>
</template>

<script lang="ts">
export default {
name: "Notes"
}
</script>

<style lang="scss" scoped>
@import '~@/assets/style/helper.scss';

.notes {
  background: #f5f5f5;
  font-size: 14px;
  display: flex;
  padding-left: 16px;
  align-items: center;

  .notes-name {
    padding-right: 16px;
  }

  input {
    height: 64px;
    flex-grow: 1;
    border: none;
    background: transparent;
  }
}
</style>