import React from 'react';

const useStarWarsQuote = () => {
  const [quote, setQuote] = React.useState();
  const [loading, setLoading] = React.useState(false);

  React.useEffect(() => {
    const abortController = new AbortController();
    const signal = abortController.signal;

    async function getStarWarsQuote() {
      setLoading(true);
      await fetch(
        'http://swquotesapi.digitaljedi.dk/api/SWQuote/RandomStarWarsQuote',
        { signal }
      )
        .then(res => res.json())
        .then(data => {
          setQuote(data.starWarsQuote);
          setLoading(false);
        })
        .catch(err =>
          console.log('This is not the error you are looking for!')
        );
    }
    getStarWarsQuote();

    return function cleanup() {
      abortController.abort();
    };
  }, [setLoading]);
  return { quote, loading };
};

export { useStarWarsQuote };
