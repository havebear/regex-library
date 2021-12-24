/*
 * @Author: BGG
 * @Date: 2021-12-24 13:22:21
 * @LastEditors: BGG
 * @LastEditTime: 2021-12-24 14:16:57
 * @Description:  下划线、中横线和小驼峰转大驼峰
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


// const regFn = genGetTargetStrFnByRegex(/(^|-|_)(\w)/g)

const reg = /(^|-|_)(\w)/g

/**
 * 匹配 字符串开头 或 -字符串开头 或 _字符串开头，然后替代最小组的小写
 */

const regFn = (text = '') => {
  return text.replace(reg, (reg, ($, $1, $2) => {
    // console.log($)
    // console.log($1)
    // console.log($2)
    return $2.toUpperCase()
  }))
}

// console.log(regFn('a-b-c'))

module.exports = {
  regFn
}

// console.log('a-b-c'.match(reg))

// module.exports = {
//   regFn: genGetTargetStrFnByRegex(new RegExp('^[1-9]\\d{5}$'))
// }
