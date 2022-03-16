const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
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
        use: 'vue-loader',
      },
      {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader',
        ],
      },
      {
        test: /\.less$/,
        use: [
          'style-loader',
          'css-loader',
          'less-loader',
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
    new CleanWebpackPlugin(),
    new VueLoaderPlugin(),
    ...getHtmlPluginEntry(),
  ],
  resolve: {
    extensions: [
      '.js',
      '.json',
      '.vue',
    ],
    alias: {
      '@': path.resolve(__dirname, '..', 'src'),
    },
  },
}
