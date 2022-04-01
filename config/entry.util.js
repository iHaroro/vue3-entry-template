const path = require('path')
const glob = require('glob')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const {
  IS_DEV,
  PAGES_PATH,
  TEMP_HTML_PATH,
} = require('./config')

// 开发环境需要编译的模块， 空数组则全部遍历编译
// 取值为src/modules/[name]/...路径中的name
const devPages = []
// const devPages = ['demo', 'wechat']
// const devPages = ['demo', 'wechat', 'tiktok']

// 通用依赖
const COMMON_VENDORS = [
  path.resolve(__dirname, '../src/assets/js/common.js'),
]
const COMMON_VENDORS_FILENAME = 'vendors'

/**
 * @function 获取入口文件html，js
 * @param {string} type 'html'|'js'
 * @param {string?} entryName 入口名称（模块名），不传默认获取全部模块对应类型（type）的文件数组
 * @returns {array} 文件数组
 **/
const getEntryFileByType = (type, entryName) => glob.sync(`${PAGES_PATH}/${entryName || '*'}/index.${type}*`)

/**
 * @function 根据URL获取入口名称
 * @param {string} path 路径
 * @returns {string} 入口名称
 **/
const pathMatchEntryName = path => {
  const match = path.match(/\/src\/modules\/(\S*)\/index\.[\w]+/)
  return match.length
    ? match[1]
    : null
}

/**
 * @function 创建HtmlWebpackPlugin
 * @param {string} entryName 入口名称
 * @param {string} templateFile html模板名称
 * @returns {any}
 **/
const createHtmlPlugin = (entryName, templateFile) => {
  return new HtmlWebpackPlugin({
    filename: `${entryName}/index.html`, // 生成的html模板文件名
    template: templateFile || TEMP_HTML_PATH, // 模板html路径
    publicPath: './../',
    chunks: [
      COMMON_VENDORS_FILENAME,
      entryName,
      '[name]/index.css',
    ],
    favicon: path.resolve(__dirname, '../public/favicon.ico'),
  })
}

// 处理公共模块配置
function getCommonEntryOption (entryFile) {
  const entryName = pathMatchEntryName(entryFile)
  let option = {
    import: entryFile,
    filename: '[name]/index.[chunkhash].js',
  }
  COMMON_VENDORS.length && (option.dependOn = COMMON_VENDORS_FILENAME)
  return option
}

// 获取入口配置
function getPageEntry () {
  let entry = {}
  if (IS_DEV && devPages.length) { // 开发环境，按需编译
    devPages.forEach(entryName => {
      const entryFile = getEntryFileByType('js', entryName)[0]
      entry[entryName] = getCommonEntryOption(entryFile)
    })
  } else { // 默认编译全部
    const allEntryFiles = getEntryFileByType('js')
    allEntryFiles.forEach(entryFile => {
      const entryName = pathMatchEntryName(entryFile)
      entry[entryName] = getCommonEntryOption(entryFile)
    })
  }
  // 添加react公共依赖
  entry[COMMON_VENDORS_FILENAME] = {
    import: COMMON_VENDORS,
    filename: 'js/[name].[chunkhash].js', // 如果不经常升级通用依赖，可以不增加chunk hash
  }
  return entry
}

// 获取HTML模板创建
const getHtmlPluginEntry = () => {
  const htmlPlugins = []
  if (IS_DEV && devPages.length) { // 开发环境，按需编译
    devPages.forEach(entryName => {
      const entryFile = getEntryFileByType('html', entryName)[0]
      htmlPlugins.push(createHtmlPlugin(entryName, entryFile))
    })
  } else {  // 默认编译全部
    const allEntryFiles = getEntryFileByType('js')
    allEntryFiles.forEach(entryFile => {
      const entryName = pathMatchEntryName(entryFile)
      const entryTemplate = getEntryFileByType('html', entryName)[0]
      entryName && htmlPlugins.push(createHtmlPlugin(entryName, entryTemplate))
    })
  }
  return htmlPlugins
}

module.exports = {
  getPageEntry,
  getHtmlPluginEntry,
}
