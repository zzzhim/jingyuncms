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
      externals: ['ffmpeg-static-electron', 'fluent-ffmpeg', '@ffmpeg-installer/ffmpeg', 'ffmpeg-static'],
      // If you are using Yarn Workspaces, you may have multiple node_modules folders
      // List them all here so that VCP Electron Builder can find them
      nodeModulesPath: ['../../node_modules', './node_modules'],
      builderOptions: {
        // appId: "com.jingyunshipin.www",
        appId: "8736291234332",
        productName: "鲸云切片", //项目名，也是生成的安装文件名，即aDemo.exe
        copyright: "jingyuncms © 2022", //版权信息
        // directories: {
        //   output: "./dist" //输出文件路径
        // },
        win: {
          //win相关配置
          icon: "./public/logo_256.png", //图标，当前图标在根目录下，注意这里有两个坑
          target: [
            {
              target: "nsis", //利用nsis制作安装程序,打包文件的后缀为exe
              arch: [
                "x64", //64位
                // "ia32" //32位
              ],
            }
          ]
        },
        nsis: {
          include: "./installer.nsh",//定义默认安装路径
          oneClick: false, //一键安装
          // language: "2052", //安装语言
          perMachine: true, //应用所有用户
          allowElevation: true,
          allowToChangeInstallationDirectory: true //用户可以选择路径
        }
      }
    },
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
