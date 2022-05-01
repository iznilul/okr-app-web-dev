const path = require('path')

function resolve(dir) {
  return path.join(__dirname, dir)
}

module.exports = {
  devServer: {
    port: 8101,
    proxy: {
      '/api': {
        target: 'http://localhost:9101/',
        changeOrigin: true,
        pathRewrite: { '^/api': '' },
      },
    },
  },
  configureWebpack: {
    plugins: [
      // new BundleAnalyzerPlugin() //webpack包统计
    ],
    resolve: {
      extensions: ['.js', '.vue', '.json'],
      alias: {
        '@': path.resolve(__dirname, 'src'),
      },
    },
  },
  publicPath: './',
  lintOnSave: false,
  css: {
    loaderOptions: {
      less: {
        javascriptEnabled: true,
      },
      sass: {
        data: `@import "@/style/global/global.scss";`,
      },
    },
  },
}
