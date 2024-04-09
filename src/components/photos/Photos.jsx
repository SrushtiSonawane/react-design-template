import React, { useEffect, useState } from 'react';
import Footer from '../footer/Footer';

export default function Photos() {
  const [photos, setPhotos] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/photos")
      .then(response => response.json())
      .then(data => {
        setPhotos(data.slice(0, 50));
        setLoading(false); 
      })
      .catch(error => {
        console.log("error:", error);
        setLoading(false); 
      });
  }, []);

  const styles = {
    postContainer: {
      display: 'grid',
      gridTemplateColumns: `repeat(3, 1fr)`,
      gridAutoRows: 'min-content',
      gap: "15px",
      padding: "10px",
      margin: "10px",
    },
    post: {
      backgroundColor: " #f5ebe0",
      border: '1px solid #c89f9c',
      borderRadius: '10px',
      padding: '15px',
      fontSize: '10px',
      color: 'black',
    },
    postTitle: {
      fontSize: '20px',
      color: 'black',
    },
    photo: {
      width: "100%",
      height: "300px",
      aspectRatio: "3/2",
      borderRadius: '8px',
    }
  };

  return (
    <div>
      {loading ? ( 
        <div style={{color:"black",fontSize:"25px"}}>Loading...</div>
      ) : (
        <div style={styles.postContainer}>
          {photos.map((image) => (
            <div
              key={image.id}
              style={styles.post}
            >
              <img style={styles.photo} src={image.url} alt={image.title} />
              <h1 style={styles.postTitle}><strong>Title: </strong>{image.title}</h1>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
