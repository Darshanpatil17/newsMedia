import React from 'react';

const NewsItem = ({ article }) => {
  return (
    <div style={styles.newsBox}>
      {article.urlToImage && (
        <img
          src={article.urlToImage}
          alt={article.title}
          style={styles.image}
        />
      )}
      <h3>{article.title}</h3>
      <p>{article.description}</p>
      <a href={article.url} target="_blank" rel="noopener noreferrer">
        Read more
      </a>
    </div>
  );
};

const styles = {
  newsBox: {
    backgroundColor: '#f4f4f4',
    
    padding: '15px',
    margin: '10px 0',
    borderRadius: '8px',
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
    display: 'flex',
    flexDirection: 'column',
    width:"450px"
  },
  image: {
    width: '100%',
    borderRadius: '8px',
    marginBottom: '10px',
    
  },
};

export default NewsItem;
