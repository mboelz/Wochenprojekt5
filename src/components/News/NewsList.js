import React from 'react';
import NewsItem from './NewsItem';
import styles from './NewsList.module.css'

const NewsList = ({articles}) => {
 
  

  const newsJSX = articles.map((article, index) => {

    if (index+1 < 10) {
      return (
      <NewsItem
      key={index}
      id={`0${index + 1}`}
      author={article.author}
      title={article.title}
      date={article.created_at}
      url={article.url}
      points={article.points}
    />)
    
    } else {
      return (
      <NewsItem
      key={index}
      id={index + 1}
      author={article.author}
      title={article.title}
      date={article.created_at}
      url={article.url}
      points={article.points}
    />)
    }
   
  });

  return (
    <div className={styles.NewsList}>
      {newsJSX}
    </div>
  );
};

export default NewsList;
