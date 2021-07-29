module.exports = {
  devServer: {
    // port: 8101,
    // proxyTable: {
    //   '/api': {
    //     target:
    //       'http://api.map.baidu.com/weather/v1/?district_id=370300&data_type=now&ak=q1qe46nLki8V4r0bSvslFi6dIZcaA0XU', // 对应自己的接口
    //     changeOrigin: true,
    //     ws: true,
    //     pathRewrite: {
    //       '^/api': '',
    //     },
    //   },
    // },
  },
  configureWebpack: {
    plugins: [
      // new BundleAnalyzerPlugin() //webpack包统计
    ],
    resolve: {
      extensions: ['.js', '.vue', '.json'],
    },
  },
  publicPath: './',
  lintOnSave: false,
  css: {
    loaderOptions: {
      less: {
        javascriptEnabled: true,
      },
    },
  },
}
