module.exports = {
  devServer: {
    // port: 8101,
    // proxy: {
    //     '/api': {
    //         target: 'http://xxxx/device/', // 对应自己的接口
    //         changeOrigin: true,
    //         ws: true,
    //         pathRewrite: {
    //             '^/api': '',
    //         },
    //     },
    // },
  },
  configureWebpack: {
    plugins: [
      // new BundleAnalyzerPlugin() //webpack包统计
    ],
    resolve: {
      extensions: ['.js', '.vue', '.json']
    }
  },
  publicPath: './',
  lintOnSave: false
}
