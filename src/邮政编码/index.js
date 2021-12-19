/*
 * @Author: BGG
 * @Date: 2021-12-19 21:27:30
 * @LastEditors: BGG
 * @LastEditTime: 2021-12-19 22:08:13
 * @Description:  邮政编码
 */

const { genGetTargetStrFnByRegex } = require('../utils')

/**
 * \d 匹配一个数字字符。等价于 [0-9]
 */

/**
 * ?! 
 * - exp1(?!exp2)
 * - 表示查找后面不是 exp2 的 exp1
 */

module.exports = {
  regFn: genGetTargetStrFnByRegex(new RegExp('^[1-9]\d{5}$'))
}
