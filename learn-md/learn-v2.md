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