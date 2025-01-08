import React from 'react';
import NewsItem from './NewsItem';

const NewsList = ({ news, loading }) => {
  if (loading) {
    return <p>Loading...</p>;
  }

  if (!news || news.length === 0) {
    return <p>No news found</p>;
  }

  return (
    <div style={styles.newsContainer}>
      {news.map((article) => (
        <NewsItem  article={article} />
      ))}
    </div>
  );
};

const styles = {
  newsContainer: {
    display: 'flex',
    
    flexWrap: 'wrap',
     flexDirection: 'row',
     justifyContent: "space-between",
    padding: '20px',
  },
};

export default NewsList;
