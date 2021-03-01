<template>
  <Layout class-prefix="money">
    <div class="keypad">
      <div class="output">100</div>
      <div class="buttons">
        <button>1</button>
        <button>2</button>
        <button>3</button>
        <button>+</button>
        <button>4</button>
        <button>5</button>
        <button>6</button>
        <button>-</button>
        <button>7</button>
        <button>8</button>
        <button>9</button>
        <button class="ok">完成</button>
        <button>.</button>
        <button>0</button>
        <button>删除</button>
      </div>
    </div>
    <div>
      <ul class="types">
        <li class="selected">支出</li>
        <li>收入</li>
      </ul>
    </div>
    <div>
      <label class="notes">
        <span class="notes-name">备注</span>
        <input type="text" placeholder="请在这里添加备注"/>
      </label>
    </div>
    <div class="tags">
      <div class="new">
        <button>新增标签</button>
      </div>
      <ul class="current">
        <li>衣</li>
        <li>食</li>
        <li>住</li>
        <li>行</li>
        <li>衣</li>
        <li>食</li>
        <li>住</li>
        <li>行</li>
        <li>衣</li>
        <li>食</li>
        <li>住</li>
        <li>行</li>
        <li>衣</li>
        <li>食</li>
        <li>住</li>
        <li>行</li>
        <li>衣</li>
        <li>食</li>
        <li>住</li>
        <li>行</li>
        <li>行</li>
        <li>衣</li>
        <li>食</li>
        <li>住</li>
        <li>行</li>
        <li>衣</li>
        <li>食</li>
        <li>住</li>
        <li>行</li>
      </ul>
    </div>
  </Layout>
</template>

<script lang="ts">
export default {
  name: "Money",
};
</script>

<style lang="scss">
.money-layout-wrapper {
}
.money-content {
  border: 2px solid red;
  display: flex;
  flex-direction: column-reverse;
}
</style>
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
      background: #d9d9d9;
      $h: 24px;
      height: $h;
      line-height: $h;
      padding: 0 16px; // 比起指定宽度，最好用padding
      margin-right: 12px;
      margin-top: 5px;
      border-radius: $h / 2;
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

.keypad {
  > .output {
    line-height: 1.25;
    padding: 6px 16px;
    font-size: 36px;
    font-family: Consolas, monospace;
    text-align: right;
    box-shadow: inset 0 -3px 3px -3px rgba(0, 0, 0, 0.3),
                inset 0 3px 3px -3px rgba(0, 0, 0, 0.3)      ;
  }

  > .buttons {
    @extend %clearFix;

    > button {
      width: 25%;
      height: 56px;
      float: left;
      background: transparent;
      border: none;
      $bg: #f2f2f2;

      &:nth-child(1) {
        background: $bg;
      }

      &:nth-child(2), &:nth-child(5) {
        background: darken($bg, 4%);
      }

      &:nth-child(3), &:nth-child(6), &:nth-child(9) {
        background: darken($bg, 4*2%);
      }

      &:nth-child(4), &:nth-child(7), &:nth-child(10), &:nth-child(13) {
        background: darken($bg, 4*3%);
      }

      &:nth-child(8), &:nth-child(11), &:nth-child(14) {
        background: darken($bg, 4*4%);
      }

      &:nth-child(15) {
        background: darken($bg, 4*5%);
      }

      &:nth-child(12) {
        background: darken($bg, 4*6%);
      }

      &.ok {
        height: 56*2px;
        float: right;
      }
    }
  }
}
</style>