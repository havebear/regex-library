/*
 * @Author: BGG
 * @Date: 2021-12-19 21:27:30
 * @LastEditors: BGG
 * @LastEditTime: 2021-12-19 21:34:46
 * @Description:  带小数的数字输入校验
 */

const { genGetTargetStrFnByRegex } = require('../utils')

module.exports = {
  regFn: genGetTargetStrFnByRegex(new RegExp('^[0-9]+(.[0,9]+)?'))
}
