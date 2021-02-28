<template>
  <LayoutNav>
    <div class="tags">
      <ul class="current">
        <li>衣</li>
        <li>食</li>
        <li>住</li>
        <li>行</li>
      </ul>
    </div>
    <div class="notes-wrapper">
      <div class="new">
        <button>新增标签</button>
      </div>
      <div class="notes">
        <label>
          <span class="notes-name">备注</span>
          <input type="text"/>
        </label>
      </div>
    </div>
    <div class="type">
      <ul class="types">
        <li>支出</li>
        <li>收入</li>
      </ul>
    </div>
    <div class="keypad">
      <div>100 number</div>
      <div>
        <button>1</button>
        <button>2</button>
        <button>3</button>
        <button>+</button>
        <button>删除</button>
        <button>4</button>
        <button>5</button>
        <button>6</button>
        <button>清空</button>
        <button>7</button>
        <button>8</button>
        <button>9</button>
        <button>-</button>
        <button>完成</button>
        <button>.</button>
        <button>0</button>
      </div>
    </div>
  </LayoutNav>
</template>

<script lang="ts">
export default {
  name: "Money",
};
</script>

<style lang="scss" scoped>

</style>