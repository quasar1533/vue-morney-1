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