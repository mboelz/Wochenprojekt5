import React from 'react';
import styles from './NewsItem.module.css'
import {FaUserAlt} from 'react-icons/fa'
import {VscActivateBreakpoints} from 'react-icons/vsc'
import {BsCalendarDateFill} from 'react-icons/bs'


const NewsItem = ({ id, title, author, date, url, points }) => {

  const convertedDate = new Date(date).toDateString()


  return (
    <div className={styles.NewsItem}>


        <div className={styles["NewsItem-ID"]}>
         <span>{id}</span>
        </div>

        <div className={styles["NewsItem-Text"]}>
          <a href={url} target="_blank">
          <div className={styles["title-bold"]}>{title}</div>
          </a>
          <div className={styles["NewsItem-Text-Info"]}>
          <div><span><FaUserAlt/></span>{author}</div>
          <div><span><VscActivateBreakpoints/></span>{points}</div>
          <div><span><BsCalendarDateFill/></span>{convertedDate}</div>
        </div>
    </div>
        {/* </a> */}
    </div >
  );
};

export default NewsItem;
