/*
 * @Author: BGG
 * @Date: 2021-12-19 21:27:36
 * @LastEditors: BGG
 * @LastEditTime: 2021-12-19 21:48:09
 * @Description:  单元测试
 */

const { regFn } = require('./index')

test('带小数的数字输入校验', () => {
  expect(regFn('123abc')[0]).toBe('123')
})

test('带小数的数字输入校验', () => {
  expect(regFn('123.456abc')[0]).toBe('123')
})
