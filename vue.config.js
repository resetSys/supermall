module.exports = {
  configureWebpack: {
    resolve: {
      alias: {
        'assets':'@/assets',
        'components':'@/components',
        'views':"@/views"
      }
    }
  }
}
//配置路径别名文件