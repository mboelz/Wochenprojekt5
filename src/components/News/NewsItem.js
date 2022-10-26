import React from 'react';
import styles from './NewsItem.module.css'

const NewsItem = ({ id, title, author, date, url }) => {

  const convertedDate = new Date(date).toDateString()


  return (
    <div className={styles.NewsItem}>
      {/* <a href={url}> */}

        <div className={styles["NewsItem-ID"]}>
         <span>{id}</span>
        </div>

        <div className={styles["NewsItem-Text"]}>
          <div className={styles["title-bold"]}>{title}</div>
          <div className={styles["NewsItem-Text-Info"]}>
          <div>{author}</div>
          <div>{convertedDate}</div>
        </div>
    </div>
        {/* </a> */}
    </div >
  );
};

export default NewsItem;
