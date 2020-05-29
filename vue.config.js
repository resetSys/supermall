//配置路径别名文件
module.exports = {
  publicPath: "./",
  configureWebpack: {
    resolve: {
      alias: {
        'assets':'@/assets',
        'components':'@/components',
        'views':"@/views",
      }
    }
  }
}