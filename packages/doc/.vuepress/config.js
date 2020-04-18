module.exports = {
  title: '前端知识乐园',
  description: 'Just playing around',
  themeConfig: {
    displayAllHeaders: false,
    smoothScroll: true,
    nav: [
      { text: '主页', link: '/' },
      { text: 'Github', link: 'https://github.com/CaraXiaoKedong/study'}
    ],
    sidebar: [{
      title: '使用指南',
      path: '/guide/',
      children: [
        '/guide/vuepress',
        '/guide/lerna',
        '/guide/markdown'
      ]
    }],
  },
}