# @rickbrown/use-star-wars-quote

> a custom React hook which provides a random quote from the legendary star wars films.

[![NPM](https://img.shields.io/npm/v/@rickbrown/use-star-wars-quote.svg)](https://www.npmjs.com/package/@rickbrown/use-star-wars-quote) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
yarn add @rickbrown/use-star-wars-quote
```

## Usage

```jsx
import React from 'react';
import { useStarWarsQuote } from '@rickbrown/use-star-wars-quote';

const App = () => {
  const { quote, loading } = useStarWarsQuote();
  return <div>{loading ? <p>loading..</p> : <p>{quote}</p>}</div>;
};

export default App;

```

## License

MIT © [RickBr0wn](https://github.com/RickBr0wn)

---

This hook is created using [create-react-hook](https://github.com/hermanya/create-react-hook).
