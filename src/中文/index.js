/*
 * @Author: BGG
 * @Date: 2021-12-19 21:27:30
 * @LastEditors: BGG
 * @LastEditTime: 2021-12-19 21:52:03
 * @Description:  中文
 */

const { genGetTargetStrFnByRegex } = require('../utils')

/**
 * \u \un | 匹配 n，其中 n 是一个用四个十六进制数字表示的 Unicode 字符。例如， \u00A9 匹配版权符号 (?)。
 */

module.exports = {
  regFn: genGetTargetStrFnByRegex(new RegExp('[\u4e00-\u9fa5]'))
}
