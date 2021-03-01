### 开始完善编写Money.vue组件

#### 1. 书写Money.vue组件的骨架 HTML
* **建议** 一个文件中代码行数超过了150行后，建议拆分为多个文件

#### 2. 书写Money.vue组件的css
* 写一个组件的css四个步骤
  1. reset  在App.vue中
     margin padding box-sizing
     可以将reset单独做成文件放在 assets/style中
     然后@import引入
  2. 全局
     在App.vue中写入全局的样式
  3. 变量
     在assets/style 目录中建立一个 helper.scss文件，专门存放用于全局引用的scss变量
  4. 局部
    根据具体需求书写每个模块局部的css
  
----------------------------------
# 学会引入web字体
* 网站fonts.css
* #333 柔和的黑色
----------------------------------

----------------------------------
# google搜索技巧
* 输入一段字符 比如fonts.css  如果不想被搜索引擎拆分解析
那么就将其加引号即可 "fonts.css"
----------------------------------

#### 3. 写Money.vue组件的局部css
* ！注意：border-radius默认以高度为基准
* ！注意：（在单行文字的情况下）垂直居中可以设置line-height与height一样即可

1. 写tags部分
2. 写notes和type部分
3. 写keypad部分

* ！注意：Vue的template替换时会将最外层必须添加div也替换过去，所以有时使用css时需要格外注意。

4. 整体css布局
  * 可以配合组件的props功能，使得在父组件上写css来操作子组件。

  再额外添加一个不scoped的style标签。

  一般的为classPrefix
  
  例子；参考Money.vue与Layout.vue 用后删除

----------------------------------
# scss占位语法 placeholder
* 参考reset.scss
* 使用时，@extend %xxx;  即可
----------------------------------

#### 书写Money.vue组件的js脚本
* 运用js+ts实现

