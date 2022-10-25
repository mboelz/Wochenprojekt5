import React, { useEffect, useState } from 'react';
import NewsList from './NewsList';

const numberOfArticles = 10; // z.B. für Butten mit Inputfeld Newsanzahl
const url = `https://hn.algolia.com/api/v1/search_by_date?tags=story&hitsPerPage=${numberOfArticles}`;

const News = () => {
  // Funktion um articles zu fetchen
  function getArticles() {
    fetch(url)
      .then(response => response.json()) //JSON format in JS Object umwandeln
      .then(articles => setArticles(articles.hits)); // temporäres Ergebnis im State speichern
  }

  const [articles, setArticles] = useState([]);
  // is Loading zu späterem Zeitpunkt

  // Funktion einmalig aufrufen
  useEffect(() => {
    getArticles();
  }, []);

  return (
    <div>
      <NewsList articles={articles} />
    </div>
  );
};

export default News;
