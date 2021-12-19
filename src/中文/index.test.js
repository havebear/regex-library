/*
 * @Author: BGG
 * @Date: 2021-12-19 21:27:36
 * @LastEditors: BGG
 * @LastEditTime: 2021-12-19 22:00:43
 * @Description:  
 */

const { regFn } = require('./index')

test('中文', () => {
  expect(regFn('张三')[0]).toBe('张')
})

test('中文', () => {
  expect(regFn('张三.123李四')[0]).toBe('张')
})
