// vue.config.js
// const CompressionWebpackPlugin = require ('compression-webpack-plugin');
const productionGzipExtensions = ['js', 'css'];
const isProduction = process.env.NODE_ENV === 'production';
module.exports = {
  // 选项...
  // 当使用基于 HTML5 history.pushState 的路由时；
  // 当使用 pages 选项构建多页面应用时。
  publicPath: '',
  // 当运行 vue-cli-service build 时生成的生产环境构建文件的目录。注意目标目录在构建之前会被清除 (构建时传入 --no-clean 可关闭该行为)。
  outputDir: process.env.VUE_APP_DIST,
  // 放置生成的静态资源 (js、css、img、fonts) 的 (相对于 outputDir 的) 目录。
  assetsDir: 'assets',
  // 指定生成的 index.html 的输出路径 (相对于 outputDir)。也可以是一个绝对路径。
  indexPath: 'index.html',
  // 默认情况下，生成的静态资源在它们的文件名中包含了 hash 以便更好的控制缓存。然而，这也要求 index 的 HTML 是被 Vue CLI 自动生成的。如果你无法使用 Vue CLI 生成的 index HTML，你可以通过将这个选项设为 false 来关闭文件名哈希。
  filenameHashing: true,
  css: {
    loaderOptions: {
      postcss: {
        plugins: [
          require ('postcss-pxtorem') ({
            rootValue: 72, // 换算的基数
            selectorBlackList: ['weui', 'mu'], // 忽略转换正则匹配项
            propList: ['*'],
          }),
        ],
      },
      sass: {
        // data: fs.readFileSync ('src/styles/_variables.scss', 'utf-8')
      },
    },
  },
  // 多页面
  pages: undefined,
  // 编译警告
  lintOnSave: false,
  // 是否使用包含运行时编译器的 Vue 构建版本。设置为 true 后你就可以在 Vue 组件中使用 template 选项了，但是这会让你的应用额外增加 10kb 左右。
  runtimeCompiler: false,
  // 默认情况下 babel-loader 会忽略所有 node_modules 中的文件。如果你想要通过 Babel 显式转译一个依赖，可以在这个选项中列出来。
  transpileDependencies: [],

  // webpack配置
  // see https://github.com/vuejs/vue-cli/blob/dev/docs/webpack.md
  chainWebpack: () => {},
  //  将接收ChainableConfig由webpack-chain提供支持的实例的函数。
  // configureWebpack: config => {
  //   // config.externals = {
  //   //   'vue': 'Vue',
  //   //   'vue-router': 'VueRouter'
  //   // };
  //   if (isProduction) {
  //     config.plugins.push (
  //       new CompressionWebpackPlugin ({
  //         algorithm: 'gzip',
  //         test: new RegExp (
  //           '\\.(' + productionGzipExtensions.join ('|') + ')$'
  //         ),
  //         threshold: 10240,
  //         minRatio: 0.8,
  //       })
  //     );
  //   }
  // },
  configureWebpack: {
    performance: {
      hints: false
    }
  },
  // 生产环境是否生成 sourceMap 文件
  // 如果你不需要生产环境的 source map，可以将其设置为 false 以加速生产环境构建。
  productionSourceMap: false,
  // 设置生成的 HTML 中 <link rel="stylesheet"> 和 <script> 标签的 crossorigin 属性。需要注意的是该选项仅影响由 html-webpack-plugin 在构建时注入的标签 - 直接写在模版 (public/index.html) 中的标签不受影响。
  crossorigin: undefined,
  // 在生成的 HTML 中的 <link rel="stylesheet"> 和 <script> 标签上启用 Subresource Integrity (SRI)。如果你构建后的文件是部署在 CDN 上的，启用该选项可以提供额外的安全性。需要注意的是该选项仅影响由 html-webpack-plugin 在构建时注入的标签 - 直接写在模版 (public/index.html) 中的标签不受影响。另外，当启用 SRI 时，preload resource hints 会被禁用，因为 Chrome 的一个 bug 会导致文件被下载两次。
  integrity: false,
 
  // 反向代理
  devServer: {
    hotOnly:true,
    proxy: {
      '/prevApi': {
        target: 'http://120.79.151.52:9093/vskit/', // 测试环境
        // target: 'https://cms-api.v-skit.com/vskit/', // 正式环境
        changeOrigin: true,
        pathRewrite: {
          '^/prevApi': '/'
        }
      }
    }
  },
};
