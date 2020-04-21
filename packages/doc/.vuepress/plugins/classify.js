const fs = require('fs');
const path = require('path');
const sidebar = require('../sidebarData');
/**
 * 根据指定目录生成sideBar
 * @param {*} options 插件选项
 * @param {*} ctx 编译上下文
 */
module.exports = (options, ctx) => {
  ctx.options.clearScreen = false;
  ctx.siteConfig.themeConfig.sidebar = sidebar.map(item => {
    var readDir = fs.readdirSync(path.resolve(__dirname, `../../${item.path}`));
    item.children = readDir.reduce((arr, name)=> {
      const result = name.split(/\.md$/);
      if(result[1] === '' && result[0] !== 'README'){
        arr.push(item.path + result[0]);
      }
      return arr;
    }, [])
    return item;
  });
  return {}
}