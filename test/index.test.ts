import {
  noop,
  never,
  always,
  identity,
  constant,
  fail,
  defaultTo,
  clamp,
  roundTo,
  first,
  last,
  castArray,
  push,
  add,
  set,
} from '../src'

test('noop', () => {
  expect(noop()).toBeUndefined()
})

test('never', () => {
  expect(never()).toBe(false)
})

test('always', () => {
  expect(always()).toBe(true)
})

test('identity', () => {
  expect(identity(undefined)).toBeUndefined()
  expect(identity(NaN)).toBeNaN()

  const fixture = Symbol('fixture')
  expect(identity(fixture)).toBe(fixture)
})

test('fail', () => {
  const fixture = new Error('fixture')
  expect(() => fail(fixture)).toThrow(fixture)
})

test('constant', () => {
  expect(constant(undefined)()).toBeUndefined()
  expect(constant(NaN)()).toBeNaN()

  const fixture = Symbol('fixture')
  expect(constant(fixture)()).toBe(fixture)
})

test('defaultTo', () => {
  const defaultValue = Symbol('defaultValue')

  expect(defaultTo(undefined, defaultValue)).toBe(defaultValue)
  expect(defaultTo(null, defaultValue)).toBe(defaultValue)
  expect(defaultTo(NaN, defaultValue)).toBe(defaultValue)

  expect(defaultTo(true, defaultValue)).toBe(true)
  expect(defaultTo(false, defaultValue)).toBe(false)
  expect(defaultTo('', defaultValue)).toBe('')
  expect(defaultTo(0, defaultValue)).toBe(0)
})

test('clamp', () => {
  expect(clamp(2, 3, 5)).toBe(3)
  expect(clamp(3, 3, 5)).toBe(3)
  expect(clamp(4, 3, 5)).toBe(4)
  expect(clamp(5, 3, 5)).toBe(5)
  expect(clamp(6, 3, 5)).toBe(5)

  expect(clamp(NaN, 5, 7)).toBe(NaN)
  expect(clamp(3, NaN, 7)).toBe(NaN)
  expect(clamp(4, 5, NaN)).toBe(NaN)
  expect(clamp(5, 5, NaN)).toBe(NaN)
  expect(clamp(6, 5, NaN)).toBe(NaN)
})

test('roundTo', () => {
  expect(roundTo(1.234567)).toBe(1)
  expect(roundTo(1.5)).toBe(2)

  expect(roundTo(Math.PI, 2)).toBe(3.14)
  expect(roundTo(Math.PI, 3)).toBe(3.142)
  expect(roundTo(Math.PI, 5)).toBe(3.14159)
})

test('first', () => {
  expect(first([])).toBeUndefined()
  expect(first([1, 2, 3])).toBe(1)
  // eslint-disable-next-line no-sparse-arrays
  expect(first([, 2, 3])).toBeUndefined()
  expect(first([NaN, 2, 3])).toBeNaN()
  expect(first([null, 2, 3])).toBeNull()

  expect(first(null)).toBeUndefined()
  expect(first('string')).toBeUndefined()
})

test('last', () => {
  expect(last([])).toBeUndefined()
  expect(last([1, 2, 3])).toBe(3)
  // eslint-disable-next-line no-sparse-arrays
  expect(last([1, , 2])).toBe(2)
  expect(last([1, 2, NaN])).toBeNaN()
  expect(last([1, 2, null])).toBeNull()

  expect(last(null)).toBeUndefined()
  expect(last('string')).toBeUndefined()
})

test('castArray', () => {
  expect(castArray()).toMatchObject([])
  expect(castArray(undefined)).toMatchObject([])
  expect(castArray(null)).toMatchObject([null])
  expect(castArray(NaN)).toMatchObject([NaN])
  expect(castArray(0)).toMatchObject([0])

  const a = [0]
  expect(castArray(a)).toBe(a)
})

test('push', () => {
  const array: unknown[] = []
  const fixture = Symbol('fixture')

  expect(push(array, fixture)).toBe(fixture)
  expect(array).toMatchObject([fixture])

  expect(push(array, NaN)).toBeNaN()
  expect(array).toMatchObject([fixture, NaN])
})

test('add', () => {
  const set = new Set<unknown>()
  const fixture = Symbol('fixture')

  expect(add(set, fixture)).toBe(fixture)
  expect([...set]).toMatchObject([fixture])

  expect(add(set, NaN)).toBeNaN()
  expect([...set]).toMatchObject([fixture, NaN])
})

test('set', () => {
  const map = new Map<symbol, unknown>()
  const key1 = Symbol('key1')
  const key2 = Symbol('key2')
  const value1 = Symbol('value1')

  expect(set(map, key1, value1)).toBe(value1)
  expect([...map]).toMatchObject([[key1, value1]])

  expect(set(map, key2, NaN)).toBeNaN()
  expect([...map]).toMatchObject([
    [key1, value1],
    [key2, NaN],
  ])
})
