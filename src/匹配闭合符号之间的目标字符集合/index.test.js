/*
 * @Author: BGG
 * @Date: 2021-12-15 13:10:55
 * @LastEditors: BGG
 * @LastEditTime: 2021-12-15 14:00:43
 * @Description:  单元测试
 */

const { doubleQuotesSpace } = require('./index')

test('匹配英文双引号之间的空格/换行符', () => {
  expect(doubleQuotesSpace(`a "sd f#$ %^"&`).join('')).toBe('  ')
})
