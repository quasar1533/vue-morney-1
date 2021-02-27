### 使用@vue/cli vue命令行工具来创建vue项目
* `cd <path>`
* `vue create <project name>`

### 了解一下vue项目各个目录作用
1. assets存放外部资源
2. store用于存放store
3. views用于最外层组件，重要的视图

#### 配置template使得可以快速创建文件模板
* 在webstorm中直接settings，搜索template即可修改。

  vue单文件组件的模板修改一下。
* 在vscode中安装插件 vetur与
Vue VSCode Snippets
  
#### 在项目中更方便的import文件
* 默认的 @ is an alias to /src
* @可以自行配置
* 在<style>中引入css 则使用@import 

  语法变为 '~@/xxx/xxx.css'
* vue/cli 创建的项目已经帮我们内置好了@的位置，但我们需要设置webpack的配置文件

  settings--> webpack--> 找到文件node_modules/@vue/cli-service/webpack.config.js

# Tips
* git reset --hard HEAD
  
  将代码恢复至初始git init状态 

#### 1. 使用Vue-router初步实现底部导航栏

#### 2. 将导航栏做成全局组件Nav.vue 
* 全局引入即在index.ts界面上，创建一个全局组件Vue.Component.  即可在全局使用
* 还可以在/components 中创建单文件组件，然后加以引用

#### 3. 使用Vue-router 创建一个404页面
* 路由是按路由表routes顺序去匹配的，所以在最后添加*即可
* 在views中添加NotFound组件

-------------------------------
# 注意Vue组件中 scoped的使用
* Vue会自动给scoped中的选择器，加上属性选择器
* 每个组件中便可以使用相同的className而不会冲突
-------------------------------

#### 4. 给底部导航添加样式
1. fixed定位
* ！！**手机上尽量不要使用fixed定位**
* 所以直接略过

2. flex布局
* 尽量减少复制重复
* 解决css重复的问题

  创建component/Layout组件来减少重复

  Vue提供了相应的插槽功能--> 文档


--------------------------------
# 必添加css
```css
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
```
---------------------------------

#### 5. 添加icon svg 
* 使用iconfont
* 创建assets/icons 文件夹
* import svg 默认得到的是一个路径，这并不是需要的，因此需要下载一个插件 svg-sprite-loader

  并且另外要配置webpack，在Vue项目中，即为配置Vue.config.js
  参考 vue.config.js
  * chainWebpack
  
    config 是Vue将webpack封装并暴露的接口
  
* svg-sprite-loader 作用：
  
  将svg的xml文件转换成一个symbol标签，并将其放入创建的svg标签里，可以配合Vue的use标签进行使用。
  
I* 例子；Money.vue等组件

--------------------------------
# ts 提示cannot find svg modules
* 在ts配置文件 shims-vue.d.ts 中配置即可
---------------------------------

--------------------------------
# eslint 报错设置
* /* eslint @typescript-eslint/no-var-requires: "off" */
* 强硬做法 /* eslint disabled */
  
  可以关掉eslint检测
---------------------------------

#### 改进svg的使用，使其组件化，方便引用
* 在Vue组件中import svg有一个小bug，即如果import后不调用它，那么引用的svg就不会被加载到页面的body中

  实质上，svg-sprite-loader 将svg文件加载为symbol标签并放入svg标签里，最后我们通过Vue提供的use标签选择svg标签中的symbol标签，然后在页面呈现svg图像。
  
* 使用组件化引用，解决这个问题

  例子，Label.vue

  一些奇技淫巧。
* 解决引用svg代码重复的问题

  见Nav.vue

  封装一个新的组件，专用于加载icon Icon.vue