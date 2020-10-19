import { never, always } from '../src'

test('never', () => {
  expect(never()).toBe(false)
})

test('always', () => {
  expect(always()).toBe(true)
})
