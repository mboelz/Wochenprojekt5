import React from 'react';
import NewsItem from './NewsItem';
import styles from './NewsList.module.css'

const NewsList = articles => {
  // console.log(typeof articles.articles);

  const newsJSX = articles.articles.map((article, index) => {
    return (
      <NewsItem
      key={index}
      id={index + 1}
      author={article.author}
      title={article.title}
      date={article.created_at}
      url={article.url}
    />
    );
  });

  return (
    <div className={styles.NewsList}>
      <h1>NewsList</h1>
      {newsJSX}
    </div>
  );
};

export default NewsList;
