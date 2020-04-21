const config = {
  plugins: [
    [require('./plugins/classify.js')]
  ],
  title: '前端知识乐园',
  description: 'Just playing around',
  themeConfig: {
    displayAllHeaders: false,
    smoothScroll: true,
    nav: [
      { text: '主页', link: '/' },
      { text: 'Github', link: 'https://github.com/CaraXiaoKedong/study'}
    ],
  },
  dest: './build',
}

module.exports = config;