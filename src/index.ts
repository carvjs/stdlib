import * as is from '@carv/is'

export function noop(): void {
  // No op
}

export function never(): false {
  return false
}

export function always(): true {
  return true
}

export function identity<T>(value: T): T {
  return value
}

export function constant<T>(value: T): () => T {
  return () => value
}

export function roundTo(n: number, digits = 5): number {
  const multiplicator = 10 ** digits

  n = Number.parseFloat((n * multiplicator).toFixed(11))

  return Math.round(n) / multiplicator
}

export function clamp(
  number: number,
  boundOne: number,
  boundTwo?: number,
): number {
  if (boundTwo === undefined) {
    return Math.max(number, boundOne) === boundOne ? number : boundOne
  }

  if (Math.min(number, boundOne) === number) {
    return boundOne
  }

  if (Math.max(number, boundTwo) === number) {
    return boundTwo
  }

  return number
}

export function fail(error: Error): never {
  throw error
}

export function first<T>(array: T[] | unknown): T | undefined {
  return Array.isArray(array) ? array[0] : undefined
}

export function last<T>(array: T[] | unknown): T | undefined {
  return Array.isArray(array) ? array[array.length - 1] : undefined
}

export function castArray<T>(
  value: T | undefined = [] as any,
): T extends (infer V)[] ? V[] : T extends undefined ? any[] : [T] {
  return (Array.isArray(value) ? value : [value]) as any
}

export function add<K, T extends K = K>(
  set: { add(value: K): any },
  value: T,
): T {
  set.add(value)
  return value
}

export function set<K, V, T extends V = V>(
  map: { set(key: K, value: V): any },
  key: K,
  value: T,
): T {
  map.set(key, value)
  return value
}

export function matches(matcher: any): (value: any) => boolean {
  return value => looksLike(value, matcher)
}

export function looksLike(a: any, b: any): boolean {
  return (
    Object.is(a, b) ||
    Boolean(
      a &&
        b &&
        Object.keys(b).every(bKey => {
          const bValue = b[bKey]
          const aValue = a[bKey]

          if (is.function(bValue)) {
            return bValue(aValue, bKey, a, b)
          }

          return is.primitive(bValue)
            ? Object.is(aValue, bValue)
            : looksLike(aValue, bValue)
        }),
    )
  )
}
