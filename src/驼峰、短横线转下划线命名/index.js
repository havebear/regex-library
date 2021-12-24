/*
 * @Author: BGG
 * @Date: 2021-12-24 14:17:03
 * @LastEditors: BGG
 * @LastEditTime: 2021-12-24 14:53:41
 * @Description:  驼峰、短横线转下划线命名
 */

/**
 * $ 匹配输入字符串的结束位置。如果设置了RegExp 对象的 Multiline 属性，$ 也匹配 '\n' 或 '\r' 之前的位置。
 */

// const reg = /^([A-Z$]+)/g;
//     const reg2 = /_([a-zA-Z$]+)/g;
//     const reg3 = /([A-Z$]+)/g;
//     return str.replace(reg, ($, $1) => $1.toLowerCase())
//     .replace(reg2, ($, $1) => '-' + $1.toLowerCase())
//     .replace(reg3, ($, $1) => '-' + $1.toLowerCase());

const regFn = (str = '') => {
  const reg = /([A-Z$])+/g
  
  return ''
}

module.exports = {
  regFn
}
