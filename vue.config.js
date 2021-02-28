/* eslint @typescript-eslint/no-var-requires: "off" */
const path = require('path');

module.exports = {
  lintOnSave: false,

  chainWebpack: config => {
    const dir = path.resolve(__dirname, './src/assets/icons');
    config.module
      .rule('svg-sprite')
      .test(/\.svg$/)
      .include.add(dir).end()
      .use('svg-sprite-loader').loader('svg-sprite-loader').options({extract: false}).end()  // 选项表示不单独析出文件
      .use('svgo-loader').loader('svgo-loader')
      .tap(options => ({...options, plugins: [{removeAttrs: {attrs: 'fill'}}]})).end();
    config.plugin('svg-sprite').use(require('svg-sprite-loader/plugin'), [{plainSprite: true}]);
    config.module.rule('svg').exclude.add(dir); // 将其他svg-loader 排出该目录
  }
};
