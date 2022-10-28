import React, { useEffect, useState } from 'react';
import NewsList from './NewsList';
import Searchbar from './Searchbar';

// search_by_date?tags=story&

const News = () => {
  //aller JSON code ab hier

  const numberOfArticles = 10; // z.B. für Butten mit Inputfeld Newsanzahl
  const [articles, setArticles] = useState([]);
  const [url, setUrl] = useState(
    `https://hn.algolia.com/api/v1/search_by_date?tags=story&hitsPerPage=${numberOfArticles}`
  );
  // is Loading zu späterem Zeitpunkt
  // const INITURL = `https://hn.algolia.com/api/v1/search_by_date?tags=story&hitsPerPage=${numberOfArticles}`;

  // const url = `https://hn.algolia.com/api/v1/search_by_date?query=${searchQuery}&hitsPerPage=${numberOfArticles}`;

  // Funktion um articles zu fetchen
  function getArticles() {
    fetch(url)
      .then(response => response.json()) //JSON format in JS Object umwandeln
      .then(articles => setArticles(articles.hits)); // temporäres Ergebnis im State speichern
  }

  // Funktion einmalig aufrufen
  useEffect(() => {
    getArticles();
  }, [url]);

  return (
    <>
      {/* <div>
    </div> */}
      <div>
        <Searchbar setUrl={setUrl} numberOfArticles={numberOfArticles} />
        {articles.length < 1 ? (
          <h1>Nix gefunden</h1>
        ) : (
          <NewsList articles={articles} />
        )}
      </div>
    </>
  );
};

export default News;
