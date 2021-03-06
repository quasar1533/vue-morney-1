<template>
  <div class="keypad">
    <div class="output">
      <div class="empty" @click="empty">
        <Icon name="empty"/>
      </div>
      {{ output }}
    </div>
    <div class="buttons">
      <button @click="handleInput">1</button>
      <button @click="handleInput">2</button>
      <button @click="handleInput">3</button>
      <button @click="handleInput">+</button>
      <button @click="handleInput">4</button>
      <button @click="handleInput">5</button>
      <button @click="handleInput">6</button>
      <button @click="handleInput">-</button>
      <button @click="handleInput">7</button>
      <button @click="handleInput">8</button>
      <button @click="handleInput">9</button>
      <button class="ok" @click="ok">完成</button>
      <button @click="handleInput">.</button>
      <button @click="handleInput">0</button>
      <button class="backspace" @click="backspace">
        <Icon name="backspace"/>
      </button>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import {Component, Watch} from "vue-property-decorator";

@Component
export default class Keypad extends Vue {
  output = "0";
  dot = true;  // 是否可以使用'.'
  operator = "";

  beforeNumber = 0;
  beforeIndex = 0;

  validNumberAfterDot = 2;

  preState = {
    dot: true,
    beforeNumber: 0,
    beforeIndex: 0
  };

  handleInput(event: MouseEvent) {
    const button = (event.target as HTMLButtonElement);
    const input = (button.textContent as string);

    if (this.output.length > 14) return;

    if (this.output === "0") {
      if ("0123456789".includes(input)) {
        this.output = input;
      } else if (input === ".") {
        this.dot = false;
        this.output += input;
      } else {
        this.operator = input;
        this.output += input;
      }
      return;
    }

    if (input === ".") {
      this.handleDot();
    }

    if ("0123456789".includes(input)) {
      this.handleNumber(input);
    }

    if ("+-".includes(input)) {
      this.handleOperator(input);
    }
  }

  handleDot() {
    if (this.dot) {
      this.output += ".";
      this.dot = false;
    }
  }

  handleNumber(number: string) {
    if (!this.dot) {
      if (this.validNumberAfterDot > 0) {
        this.output += number;
        this.validNumberAfterDot -= 1;
      } else return;
    } else {
      this.output += number;
    }
  }

  handleOperator(operator: string) {
    const last = this.output.slice(-1);
    if ("+-".includes(last)) return;

    if (this.operator !== "") {
      this.calculate();
      this.operator = operator;
      this.reset();

      // this.beforeNumber = this.handleError(this.beforeNumber.toString());
      this.output = this.beforeNumber.toString() + this.operator;
      this.beforeIndex = this.output.length;
    } else {
      this.preState.dot = this.dot;
      this.preState.beforeNumber = this.beforeNumber;
      this.preState.beforeIndex = this.beforeIndex;

      this.beforeNumber = parseFloat(this.output);
      this.operator = operator;
      this.output += operator;
      this.beforeIndex = this.output.length;
    }
  }

  calculate() {
    // if (this.operator === "+") {
    //   console.log(this.beforeNumber);
    //   this.beforeNumber += parseFloat(this.output.slice(this.beforeIndex));
    //   console.log(this.beforeNumber);
    // } else if (this.operator === "-") {
    //   this.beforeNumber -= parseFloat(this.output.slice(this.beforeIndex));
    // }

    // 第二种方法：可以避免2位小数的 js浮点计算误差
    const currNumber = parseFloat(this.output.slice(this.beforeIndex));
    if (this.operator === "+") {
      this.beforeNumber = (this.beforeNumber * 1000 + currNumber * 1000) / 1000;
    } else if (this.operator === "-") {
      this.beforeNumber = (this.beforeNumber * 1000 - currNumber * 1000) / 1000;
    }
  }

  // 重要！！js小数加减运算时 999999 000000的问题
  handleError(input: string) {
    // 第一种方法
    let integer = input.split(".")[0];
    let decimal = input.split(".")[1];
    let whole: string;
    if (decimal) {
      const index = decimal.indexOf("999999");
      if (index === 0) {
        decimal = "";
        integer = (parseInt(integer) + 1).toString();
      } else if (index > 0 && index <= 2) {
        decimal = (parseInt(decimal.slice(0, index)) + 1).toString();
      } else {
        decimal = decimal.slice(0, 2);
      }
      whole = [integer, decimal].join(".");
    } else {
      whole = integer;
    }
    return parseFloat(whole);

    // 第二种方法 参考calculate
  }

  reset() {
    this.dot = true;
    this.validNumberAfterDot = 2;
  }

  backspace() {
    const last = this.output.slice(-1);
    if (this.output.length > 1) {
      if (last === ".") {
        this.dot = true;
      } else if ("0123456789".includes(last)) {
        if (!this.dot) {
          this.validNumberAfterDot += 1;
        }
      } else if ("+-".includes(last)) {
        this.operator = "";
      }
      this.output = this.output.slice(0, -1);
    } else {
      this.output = "0";
    }
  }

  empty() {
    this.output = "0";
    this.reset();
    this.preState.dot = true;
    this.preState.beforeNumber = 0;
    this.preState.beforeIndex = 0;
  }

  ok() {
    this.$emit("update:value", parseFloat(this.output));
    this.$emit("submit");
    this.empty();
  }

  @Watch("operator")
  onOperator(val: string) {
    if ("+-".includes(val)) {
      this.reset();
    } else if (val === "") {
      this.dot = this.preState.dot;
      this.beforeNumber = this.preState.beforeNumber;
      this.beforeIndex = this.preState.beforeIndex;
    }
  }
}
</script>

<style lang="scss" scoped>
@import '~@/assets/style/helper.scss';

.keypad {
  > .output {
    line-height: 1.25;
    padding: 6px 16px;
    font-size: 32px;
    font-family: Consolas, monospace;
    text-align: right;
    box-shadow: inset 0 -3px 3px -3px rgba(0, 0, 0, 0.3),
    inset 0 3px 3px -3px rgba(0, 0, 0, 0.3);
    position: relative;

    .empty {
      position: absolute;
      color: #bfbfbf;

      .icon {
        fill: currentColor;
      }
    }
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

      &.backspace {
        display: flex;
        justify-content: center;
        align-items: center;

        .icon {
          height: 20px;
          width: 20px;
          fill: currentColor;
        }
      }
    }
  }
}
</style>