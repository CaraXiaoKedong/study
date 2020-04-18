# VuePress搭建

> Vue 驱动的静态网站生成器 [链接](https://vuepress.vuejs.org/zh/)


1. 全局安装vuepress
```bash
npm install -g vuepress
```

2. 项目配置
```bash
cd somedir && mkdir .vuepress 
cd .vuepress 
创建 config.js
```
> config.js 内容如下
```javascript
module.exports = {
  title: '左上角标题',
  description: '网站描述',
  themeConfig: {
    // 右上角导航
    nav: [
      { text: '主页', link: '/' },
      { text: 'Github', link: 'https://github.com/CaraXiaoKedong/study'}
    ],
    // 侧边栏
    sidebar: [{
      title: '使用指南',
      // 需要保证path目录下有一个README.md，即/xxx/README.md
      // 否则会出现404
      path: '/xxx/',
      // 路由对应的是文件路径; 
      // 比如/xxx/vuepress对应路径/xxx/vuepress.md，
      // 必须保证路径正确，否则侧边栏渲染不出来
      children: [ 
        '/xxx/vuepress', 
        '/xxx/lerna',
        '/xxx/markdown'
      ]
    }],
  },
}
```
3. 按照config.js配置增加页面

``` bash
cd somedir && mkdir xxx  
cd xxx 
创建 README.md vuepress.md lerna.md markdown.md 
```
4. 在根目录下执行

```bash
# 开发运行
vuepress dev .
```

```bash
# 打包
vuepress build .
```
