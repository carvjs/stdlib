# @carv/stdlib

Common utility functions.

[![License](https://flat.badgen.net/github/license/carvjs/is)](https://github.com/carvjs/stdlib/blob/main/LICENSE)
[![Latest Release](https://flat.badgen.net/npm/v/@carv/stdlib?label=release)](https://www.npmjs.com/package/@carv/stdlib)
[![Bundle Size](https://flat.badgen.net/bundlephobia/minzip/@carv/stdlib?icon=packagephobia&label&color=blue)](https://bundlephobia.com/result?p=@carv/stdlib)
[![Typescript](https://flat.badgen.net/badge/icon/included?icon=typescript&label)](https://unpkg.com/browse/@carv/stdlib/dist/index.d.
[![Sponsor](https://flat.badgen.net/badge/sponsored%20by/Kenoxa/2980b9)](https://www.kenoxa.com)

## Installation

```sh
npm install @carv/stdlib
```

## Usage

**Namespace Import**

```js
// ESM
import * as is from '@carv/stdlib'

// CommonJS
const is = require('@carv/stdlib')

is.string('a string') // => true
is.string(123) // => false
```

**Named Imports**

```js
// ESM
import { isString } from '@carv/stdlib'

// CommonJS
const { isString } = require('@carv/stdlib')

isString('a string') // => true
isString(123) // => false
```

## [API](https://github.com/carvjs/stdlib/blob/main/docs/README.md)

* [add](https://github.com/carvjs/stdlib/blob/main/docs/README.md#add)
* [always](https://github.com/carvjs/stdlib/blob/main/docs/README.md#always)
* [castArray](https://github.com/carvjs/stdlib/blob/main/docs/README.md#castarray)
* [clamp](https://github.com/carvjs/stdlib/blob/main/docs/README.md#clamp)
* [constant](https://github.com/carvjs/stdlib/blob/main/docs/README.md#constant)
* [defaultTo](https://github.com/carvjs/stdlib/blob/main/docs/README.md#defaultto)
* [fail](https://github.com/carvjs/stdlib/blob/main/docs/README.md#fail)
* [first](https://github.com/carvjs/stdlib/blob/main/docs/README.md#first)
* [identity](https://github.com/carvjs/stdlib/blob/main/docs/README.md#identity)
* [last](https://github.com/carvjs/stdlib/blob/main/docs/README.md#last)
* [never](https://github.com/carvjs/stdlib/blob/main/docs/README.md#never)
* [noop](https://github.com/carvjs/stdlib/blob/main/docs/README.md#noop)
* [push](https://github.com/carvjs/stdlib/blob/main/docs/README.md#push)
* [round](https://github.com/carvjs/stdlib/blob/main/docs/README.md#round)
* [set](https://github.com/carvjs/stdlib/blob/main/docs/README.md#set)

## Support

This project is free and open-source, so if you think this project can help you or anyone else, you may [star it on GitHub](https://github.com/carvjs/is). Feel free to [open an issue](https://github.com/carvjs/stdlib/issues) if you have any idea, question, or you've found a bug.

## Contribute

Thanks for being willing to contribute!

**Working on your first Pull Request?** You can learn how from this _free_ series [How to Contribute to an Open Source Project on GitHub](https://egghead.io/series/how-to-contribute-to-an-open-source-project-on-github)

We are following the [Conventional Commits](https://www.conventionalcommits.org) convention.

### Develop

- `yarn test`: Run test suite
- `yarn build`: Generate bundles
- `yarn lint`: Lints code

## Sponsors

[![Kenoxa GmbH](https://images.opencollective.com/kenoxa/9c25796/logo/68.png)](https://www.kenoxa.com) [Kenoxa GmbH](https://www.kenoxa.com)

## License

[MIT](https://github.com/carvjs/stdlib/blob/main/LICENSE) © [Kenoxa GmbH](https://kenoxa.com)
