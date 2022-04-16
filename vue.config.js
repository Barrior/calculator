const { defineConfig } = require('@vue/cli-service')

const isProd = process.env.NODE_ENV === 'production'

module.exports = defineConfig({
  // https://cli.vuejs.org/zh/guide/deployment.html#github-pages
  publicPath: isProd ? '/calculator/' : '/',
  outputDir: 'docs',
  productionSourceMap: false,
  lintOnSave: false,
  css: {
    sourceMap: !isProd,
    loaderOptions: {
      scss: {
        additionalData: `@import "@/assets/styles/_mixins.scss";`,
      },
    },
  },
  chainWebpack: (config) => {
    config.plugin('html').tap((args) => {
      args[0].title = '一颗星星计算器'
      return args
    })
  },
})
