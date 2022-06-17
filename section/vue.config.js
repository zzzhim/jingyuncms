const { defineConfig } = require('@vue/cli-service')
const webpack = require('webpack')
const webpackNodeExternals = require('webpack-node-externals')

module.exports = defineConfig({
  transpileDependencies: true,
  pluginOptions: {
    electronBuilder: {
      //是否注入nodeapi
      nodeIntegration: true,
      contextIsolation: false,
      //渲染进程是否启用remote模块
      enableRemoteModule: true,
      externals: ['ffmpeg-static-electron', 'fluent-ffmpeg'],
      // If you are using Yarn Workspaces, you may have multiple node_modules folders
      // List them all here so that VCP Electron Builder can find them
      nodeModulesPath: ['../../node_modules', './node_modules']
    }
  },
  configureWebpack: {
    // plugins: [
    //   new webpack.DefinePlugin({
    //       'process.env.FLUENTFFMPEG_COV': false
    //   })
    // ],
    // externals: [
    //   webpackNodeExternals(),
    //   {
    //     'ffmpeg-static-electron': {
    //       commonjs: 'ffmpeg-static-electron'
    //     }
    //   },
    //   {
    //     'fluent-ffmpeg': {
    //       commonjs: 'fluent-ffmpeg'
    //     }
    //   },
    // ],
  },
})
