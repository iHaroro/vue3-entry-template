const path = require('path')
const { DllPlugin } = require('webpack')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')

module.exports = {
  entry: {
    vendor: [
      'vue',
      'vue-router',
      'vuex',
      'axios',
    ],
  },
  output: {
    filename: '[name]_dll_[hash:6].js', // 产生的文件名
    path: path.resolve(__dirname, '../static/dll'),
    library: '[name]_dll_[hash:6]',
  },
  plugins: [
    new CleanWebpackPlugin({
      root: path.resolve(__dirname, '../static/dll'),
      dry: false, // 启用删除文件
    }),
    new DllPlugin({
      name: '[name]_dll_[hash:6]',
      path: path.resolve(__dirname, '../static/dll', '[name].dll.manifest.json'),
    }),
  ],
}
