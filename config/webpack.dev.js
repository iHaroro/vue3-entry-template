const base = require('./webpack.config')
const path = require('path')
const { merge } = require('webpack-merge')
const WebpackBar = require('webpackbar')

module.exports = merge(base, {
  mode: 'development',
  devServer: {
    historyApiFallback: true,
    hot: true, // 热更新,
    port: 'auto',
    client: {
      logging: 'none',
      progress: true,
      overlay: {
        errors: false,
        warnings: false,
      },
    },
  },
  plugins: [
    new WebpackBar(),
  ],
})
