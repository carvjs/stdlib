import * as is from '@carv/is'

/**
 * This method returns `undefined`.
 */
export function noop(): undefined {
  return undefined
}

/**
 * This method returns `false`.
 */
export function never(): false {
  return false
}

/**
 * This method returns `true`.
 */
export function always(): true {
  return true
}

/**
 * This method returns the first argument it receives.
 *
 * @typeparam T type of `value`
 * @param value to return
 */
export function identity<T>(value: T): T {
  return value
}

/**
 * Creates a function that returns `value`.
 *
 * @typeparam T type of `value`
 * @param value to return
 */
export function constant<T>(value: T): () => T {
  return () => value
}

/**
 * Checks `value` to determine whether a default value should be returned in its place.
 *
 * The `defaultValue` is returned if `value` is `NaN`, `null`, or `undefined`.
 *
 * @param value to check
 * @param defaultValue to use
 */
export function defaultTo<T, TDefault = T>(
  value: T | null | undefined,
  defaultValue: TDefault,
): Exclude<T, null | undefined> | TDefault {
  return is.nil(value) || is.NaN(value)
    ? defaultValue
    : (value as Exclude<T, null | undefined>)
}

/**
 * Computes `number` rounded to `precision`.
 * @param number to round
 * @param precision to round to should be between `0` and `11`
 * @returns the rounded number.
 */
export function round(number: number, precision?: number): number {
  if (precision) {
    const multiplicator = 10 ** precision

    number = Number.parseFloat((number * multiplicator).toFixed(11))

    return Math.round(number) / multiplicator
  }

  return Math.round(number)
}

/**
 * Clamps `number` within the inclusive `lower` and `upper` bounds.
 *
 * **Note**: If any argument is `NaN`, `NaN` is returned.
 *
 * @param number to clamp
 * @param lower The lower bound.
 * @param upper The upper bound.
 */
export function clamp(number: number, lower: number, upper: number): number {
  return Math.min(Math.max(number, lower), upper)
}

/**
 * Throws the given `error`.
 * @param error to throw
 */
export function fail(error: Error): never {
  throw error
}

/**
 * Gets the first element of `array`.
 * @param array to query
 */
export function first<T>(array: T[] | unknown): T | undefined {
  return is.array(array) ? array[0] : undefined
}

/**
 * Gets the last element of `array`.
 * @param array to query
 */
export function last<T>(array: T[] | unknown): T | undefined {
  return is.array(array) ? array[array.length - 1] : undefined
}

/**
 * Casts `value` as an array if it's not one.
 * 
 * ```js
 * castArray(1);
 * // => [1]
 * 
 * castArray({ 'a': 1 });
 * // => [{ 'a': 1 }]
 * 
 * castArray('abc');
 * // => ['abc']
 * 
 * castArray(null);
 * // => [null]
 * 
 * castArray(undefined);
 * // => []
 * 
 * castArray([]);
 * // => []

 * castArray([1]);
 * // => [1]
 * ```
 * @param value to inspect
 */
export function castArray<T>(
  value: T[] | T | undefined = [] as any[],
): T extends (infer V)[] ? V[] : T extends undefined ? any[] : T[] {
  return (is.array(value) ? value : [value]) as any
}

/**
 * Invokes `array.push(value)` and returns `value`.
 *
 * @param array to modify
 * @param value to push into `array`
 */
export function push<V, T extends V = V>(
  array: { push(value: V): void },
  value: T,
): T {
  array.push(value)
  return value
}

/**
 * Invokes `set.add(value)` and returns `value`.
 *
 * @param set to modify
 * @param value to add to `set`
 */
export function add<V, T extends V = V>(
  set: { add(value: V): void },
  value: T,
): T {
  set.add(value)
  return value
}

/**
 * Invokes `map.set(key, value)` and returns `value`.
 *
 * @param map to modify
 * @param key to set in `map`
 * @param value to set in `map`
 */
export function set<K, V, T extends V = V>(
  map: { set(key: K, value: V): void },
  key: K,
  value: T,
): T {
  map.set(key, value)
  return value
}
