/*
 * @Author: BGG
 * @Date: 2021-12-24 14:11:51
 * @LastEditors: BGG
 * @LastEditTime: 2021-12-24 14:12:27
 * @Description:  
 */

const { regFn } = require('./index')

test('短横线、下划线和大驼峰转小驼峰命名', () => {
  expect(regFn('a-b-c')).toBe('aBC')
})

test('短横线、下划线和大驼峰转小驼峰命名', () => {
  expect(regFn('ABC')).toBe('aBC')
})
