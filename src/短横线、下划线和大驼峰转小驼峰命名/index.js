/*
 * @Author: BGG
 * @Date: 2021-12-24 13:41:13
 * @LastEditors: BGG
 * @LastEditTime: 2021-12-24 14:16:35
 * @Description:  
 */

/**
 * ^ 开头
 */

/**
 * \w 匹配字母、数字、下划线。等价于'[A-Za-z0-9_]'。
 */

/**
 * x|y 匹配 x 或 y。例如，'z|food' 能匹配 "z" 或 "food"。'(z|f)ood' 则匹配 "zood" 或 "food"。
 */

/**
 * (^|-|_)(\w)
 * 字符串开头 或
 * -字符串开头 或
 * _字符串开头
 */


// const reg = /(^|-|_)(\w)/g;
//     const reg2 = /^(\w)/g;
//     return str.replace(reg, ($, $1, $2) => $2.toUpperCase())
//     .replace(reg2, ($, $1) => $1.toLowerCase());



const regFn = (str = '') => {

  const reg = /(^|-|_)(\w)/g
  const reg2 = /^(\w)/g

  return str
    .replace(reg, ($, $1, $2) => $2.toUpperCase()) // 先把短横线、下划线后面的第一个字母转为大写，替代_A
    .replace(reg2, ($, $1) => $1.toLowerCase()) // 再把首字母转为小写
}

/**
 * \w 
 */

module.exports = {
  regFn
}
