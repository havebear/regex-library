/*
 * @Author: BGG
 * @Date: 2021-12-19 21:27:36
 * @LastEditors: BGG
 * @LastEditTime: 2021-12-19 22:07:28
 * @Description:  
 */

const { regFn } = require('./index')

console.log(regFn('482356'))

test('邮政编码', () => {
  expect(regFn('482356')[0]).toBe('482356')
})

