# @rickbrown/use-star-wars-quote

> a custom React hook the provides a random quote from the star wars films.

[![NPM](https://img.shields.io/npm/v/@rickbrown/use-star-wars-quote.svg)](https://www.npmjs.com/package/@rickbrown/use-star-wars-quote) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save @rickbrown/use-star-wars-quote
```

## Usage

```jsx
import React, { Component } from 'react'

import { useMyHook } from '@rickbrown/use-star-wars-quote'

const Example = () => {
  const example = useMyHook()
  return (
    <div>{example}</div>
  )
}
```

## License

MIT © [RickBr0wn](https://github.com/RickBr0wn)

---

This hook is created using [create-react-hook](https://github.com/hermanya/create-react-hook).
