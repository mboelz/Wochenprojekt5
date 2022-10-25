import React from 'react';

const NewsItem = ({ id, title, author, date, url }) => {
  return (
    <div>
      <a href={url}>
        <div>{id}</div>
        <div>{title}</div>
        <div>{author}</div>
        <div>{date}</div>
      </a>
    </div>
  );
};

export default NewsItem;
