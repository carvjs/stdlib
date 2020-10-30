> Globals

# @carv/stdlib - v1.1.0

## Index

### Functions

* [add](README.md#add)
* [always](README.md#always)
* [castArray](README.md#castarray)
* [clamp](README.md#clamp)
* [constant](README.md#constant)
* [defaultTo](README.md#defaultto)
* [fail](README.md#fail)
* [first](README.md#first)
* [identity](README.md#identity)
* [last](README.md#last)
* [never](README.md#never)
* [noop](README.md#noop)
* [push](README.md#push)
* [round](README.md#round)
* [set](README.md#set)

## Functions

### add

▸ **add**\<V, T>(`set`: { add: (value: V) => void  }, `value`: T): T

*Defined in [index.ts:169](https://github.com/carvjs/stdlib/blob/main/src/index.ts#L169)*

Invokes `set.add(value)` and returns `value`.

#### Type parameters:

Name | Type |
------ | ------ |
`V` | - |
`T` | V |

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`set` | { add: (value: V) => void  } | to modify |
`value` | T | to add to `set`  |

**Returns:** T

___

### always

▸ **always**(): true

*Defined in [index.ts:20](https://github.com/carvjs/stdlib/blob/main/src/index.ts#L20)*

This method returns `true`.

**Returns:** true

___

### castArray

▸ **castArray**\<T>(`value?`: T[] \| T \| undefined)

*Defined in [index.ts:143](https://github.com/carvjs/stdlib/blob/main/src/index.ts#L143)*

Casts `value` as an array if it's not one.

```js
castArray(1);
// => [1]

castArray({ 'a': 1 });
// => [{ 'a': 1 }]

castArray('abc');
// => ['abc']

castArray(null);
// => [null]

castArray(undefined);
// => []

castArray([]);
// => []

castArray([1]);
// => [1]
```

#### Type parameters:

Name |
------ |
`T` |

#### Parameters:

Name | Type | Default value | Description |
------ | ------ | ------ | ------ |
`value` | T[] \| T \| undefined | [] as any[] | to inspect  |

___

### clamp

▸ **clamp**(`number`: number, `lower`: number, `upper`: number): number

*Defined in [index.ts:88](https://github.com/carvjs/stdlib/blob/main/src/index.ts#L88)*

Clamps `number` within the inclusive `lower` and `upper` bounds.

**Note**: If any argument is `NaN`, `NaN` is returned.

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`number` | number | to clamp |
`lower` | number | The lower bound. |
`upper` | number | The upper bound.  |

**Returns:** number

___

### constant

▸ **constant**\<T>(`value`: T): function

*Defined in [index.ts:40](https://github.com/carvjs/stdlib/blob/main/src/index.ts#L40)*

Creates a function that returns `value`.

#### Type parameters:

Name | Description |
------ | ------ |
`T` | type of `value` |

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`value` | T | to return  |

**Returns:** function

___

### defaultTo

▸ **defaultTo**\<T, TDefault>(`value`: T \| null \| undefined, `defaultValue`: TDefault): Exclude\<T, null \| undefined> \| TDefault

*Defined in [index.ts:52](https://github.com/carvjs/stdlib/blob/main/src/index.ts#L52)*

Checks `value` to determine whether a default value should be returned in its place.

The `defaultValue` is returned if `value` is `NaN`, `null`, or `undefined`.

#### Type parameters:

Name |
------ |
`T` |
`TDefault` |

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`value` | T \| null \| undefined | to check |
`defaultValue` | TDefault | to use  |

**Returns:** Exclude\<T, null \| undefined> \| TDefault

___

### fail

▸ **fail**(`error`: Error): never

*Defined in [index.ts:96](https://github.com/carvjs/stdlib/blob/main/src/index.ts#L96)*

Throws the given `error`.

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`error` | Error | to throw  |

**Returns:** never

___

### first

▸ **first**\<T>(`array`: T[] \| unknown): T \| undefined

*Defined in [index.ts:104](https://github.com/carvjs/stdlib/blob/main/src/index.ts#L104)*

Gets the first element of `array`.

#### Type parameters:

Name |
------ |
`T` |

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`array` | T[] \| unknown | to query  |

**Returns:** T \| undefined

___

### identity

▸ **identity**\<T>(`value`: T): T

*Defined in [index.ts:30](https://github.com/carvjs/stdlib/blob/main/src/index.ts#L30)*

This method returns the first argument it receives.

#### Type parameters:

Name | Description |
------ | ------ |
`T` | type of `value` |

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`value` | T | to return  |

**Returns:** T

___

### last

▸ **last**\<T>(`array`: T[] \| unknown): T \| undefined

*Defined in [index.ts:112](https://github.com/carvjs/stdlib/blob/main/src/index.ts#L112)*

Gets the last element of `array`.

#### Type parameters:

Name |
------ |
`T` |

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`array` | T[] \| unknown | to query  |

**Returns:** T \| undefined

___

### never

▸ **never**(): false

*Defined in [index.ts:13](https://github.com/carvjs/stdlib/blob/main/src/index.ts#L13)*

This method returns `false`.

**Returns:** false

___

### noop

▸ **noop**(): undefined

*Defined in [index.ts:6](https://github.com/carvjs/stdlib/blob/main/src/index.ts#L6)*

This method returns `undefined`.

**Returns:** undefined

___

### push

▸ **push**\<V, T>(`array`: { push: (value: V) => void  }, `value`: T): T

*Defined in [index.ts:155](https://github.com/carvjs/stdlib/blob/main/src/index.ts#L155)*

Invokes `array.push(value)` and returns `value`.

#### Type parameters:

Name | Type |
------ | ------ |
`V` | - |
`T` | V |

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`array` | { push: (value: V) => void  } | to modify |
`value` | T | to push into `array`  |

**Returns:** T

___

### round

▸ **round**(`number`: number, `precision?`: undefined \| number): number

*Defined in [index.ts:67](https://github.com/carvjs/stdlib/blob/main/src/index.ts#L67)*

Computes `number` rounded to `precision`.

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`number` | number | to round |
`precision?` | undefined \| number | to round to should be between `0` and `11` |

**Returns:** number

the rounded number.

___

### set

▸ **set**\<K, V, T>(`map`: { set: (key: K, value: V) => void  }, `key`: K, `value`: T): T

*Defined in [index.ts:184](https://github.com/carvjs/stdlib/blob/main/src/index.ts#L184)*

Invokes `map.set(key, value)` and returns `value`.

#### Type parameters:

Name | Type |
------ | ------ |
`K` | - |
`V` | - |
`T` | V |

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`map` | { set: (key: K, value: V) => void  } | to modify |
`key` | K | to set in `map` |
`value` | T | to set in `map`  |

**Returns:** T
