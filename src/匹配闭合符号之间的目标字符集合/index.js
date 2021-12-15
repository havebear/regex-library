/*
 * @Author: BGG
 * @Date: 2021-12-15 12:55:00
 * @LastEditors: BGG
 * @LastEditTime: 2021-12-15 13:48:43
 * @Description:  匹配闭合符号之间的目标字符
 */

const { genGetTargetStrFnByRegex } = require('../utils')

/** 生成正则 */
const genRegExp = (start = '"', end = '"', target = '\\s') => {
  return new RegExp(`(?<=${start}.*[^${end}])${target}+(?=.*?${end})`, 'g')
}

/**
 * 匹配双引号之间的空格/换行符
 * /(?<=".*[^"])\s+(?=.*?")/g
 */
const doubleQuotesSpaceRegex = genRegExp()

module.exports = {
  doubleQuotesSpace: genGetTargetStrFnByRegex(doubleQuotesSpaceRegex)
}
