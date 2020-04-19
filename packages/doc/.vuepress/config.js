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
    sidebar: [
      {
        title: '工具使用指南',
        path: '/guide/',
        children: [
          '/guide/github-web-hook',
          '/guide/vuepress',
          '/guide/markdown',
          '/guide/lerna',
          '/guide/npm',
        ]
      },{
        title: '优秀博客',
        path: '/blogs/',
        children: [
          '/blogs/ui-tools',
        ]
      }
    ],
  },
  dest: './build'
}