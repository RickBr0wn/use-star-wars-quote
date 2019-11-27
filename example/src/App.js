import React from 'react';
import { useStarWarsQuote } from '@rickbrown/use-star-wars-quote';

const App = () => {
  const { quote, loading } = useStarWarsQuote();
  return <div>{loading ? <p>loading..</p> : <p>{quote}</p>}</div>;
};
export default App;
