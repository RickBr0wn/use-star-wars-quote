import React from 'react';

const useStarWarsQuote = () => {
  const [quote, setQuote] = React.useState();
  const [loading, setLoading] = React.useState(false);

  React.useEffect(() => {
    async function getStarWarsQuote() {
      setLoading(true);
      await fetch(
        'http://swquotesapi.digitaljedi.dk/api/SWQuote/RandomStarWarsQuote'
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
  }, [setLoading]);
  return { quote, loading };
};

export { useStarWarsQuote };
