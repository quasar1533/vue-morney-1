## svg使用的过程中会遇到各种各样的问题

#### svg XML文件中的内联fill属性
* 从网上下载的svg XML文件中 <path>标签里往往会有fill内联属性，用来填充svg图形轨迹的颜色。

  这会影响到后续使用css对svg图像进行调整

  如果一个个svg文件去找到fill属性，并且删掉的话，是十分麻烦的。
* 可以使用svgo-loader插件来自动过滤掉svg的指定内联属性。

  例子：在vue.config.js中查看