/*
 * @Author: BGG
 * @Date: 2021-12-24 13:29:19
 * @LastEditors: BGG
 * @LastEditTime: 2021-12-24 13:30:20
 * @Description:  
 */

const { regFn } = require('./index')

test('下划线、中横线和小驼峰转大驼峰', () => {
  expect(regFn('a-b-c')).toBe('ABC')
})

test('下划线、中横线和小驼峰转大驼峰', () => {
  expect(regFn('a-b_c')).toBe('ABC')
})
