const path = require('path')
const WebpackBar = require('webpackbar')
const { DefinePlugin } = require('webpack')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const { VueLoaderPlugin } = require('vue-loader/dist/index')
const {
  getPageEntry,
  getHtmlPluginEntry,
} = require('./entry.util')

module.exports = {
  entry: getPageEntry,
  output: {
    path: path.resolve(__dirname, '../dist'),
    filename: 'js/[name]/index.[chunkhash].js',
    chunkFilename: 'js/[name]/[name].[chunkhash].js',
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        include: path.resolve(__dirname, '../src'),
        use: [
          {
            loader: 'vue-loader',
            options: {},
          },
        ],
      },
      {
        test: /\.(css|less)$/,
        use: [
          'style-loader',
          'css-loader',
          'postcss-loader', // 处理兼容，px2rem等
          'less-loader',
          {
            loader: 'style-resources-loader',
            options: {
              patterns: path.resolve(__dirname, '../src/assets/css/global.less'),
            },
          },
        ],
      },
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        use: [
          {
            loader: 'babel-loader',
          },
        ],
      },
      {
        test: /\.(png|jpg|jpe?g|gif|svg)(\?.*)?$/,
        use: {
          loader: 'url-loader',
          options: {
            limit: 20 * 1024,
            name: 'img/[name].[hash:7].[ext]',
            esModule: false,
          },
        },
      },
      {
        test: /\.(mp4|webm|ogg|mp3|wav|flac|aac)(\?.*)?$/,
        use: {
          loader: 'url-loader',
          options: {
            limit: 20 * 1024,
            name: 'video/[name].[hash:7].[ext]',
            esModule: false,
          },
        },
      },
      {
        test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
        use: {
          loader: 'url-loader',
          options: {
            limit: 20 * 1024,
            name: 'font/[name].[hash:7].[ext]',
            esModule: false,
          },
        },
      },
    ],
  },
  plugins: [
    new WebpackBar(),
    new DefinePlugin({
      __VUE_OPTIONS_API__: true, // 是否禁用Option API
      __VUE_PROD_DEVTOOLS__: false, // 是否禁用生成环境的Devtools
    }),
    new CleanWebpackPlugin(),
    new VueLoaderPlugin(),
    ...getHtmlPluginEntry(),
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, '..', 'src'),
    },
    extensions: [
      '.js',
      '.json',
      '.vue',
    ],
  },
}
