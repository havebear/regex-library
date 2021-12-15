/*
 * @Author: BGG
 * @Date: 2021-12-15 12:56:51
 * @LastEditors: BGG
 * @LastEditTime: 2021-12-15 13:48:26
 * @Description:  函数库
 */

/**
 * 根据正则生成获取目标字符传的方法
 * @param {RegExp} regex 正则对象
 * @returns null | string | array
 */
const genGetTargetStrFnByRegex = regex => {
  return function (str) {
    if (str) {
      return str.match(regex)
    } else {
      return void 0
    }
  }
}

module.exports = {
  genGetTargetStrFnByRegex
}
