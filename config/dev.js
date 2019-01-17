module.exports = {
  env: {
    NODE_ENV: '"development"'
  },
  defineConstants: {
  },
  weapp: {
    compile: {
      exclude: [
        'src/components/wemark/remarkable.js'
      ]
    },
    module: {
      postcss: {
        autoprefixer: {
          enable: true
        },
        // 小程序端样式引用本地资源内联配置
        url: {
          enable: true,
          config: {
            limit: 102400 // 文件大小限制
          }
        }
      }
    }
  },
  h5: {}
}
