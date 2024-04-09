import React, { useEffect, useState } from "react";

export default function Post() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => response.json())
      .then((data) => {
        setPosts(data);
        setLoading(false); 
      })
      .catch((error) => {
        console.log("error:", error);
        setLoading(false); 
      });
  }, []);

  const colors = ['#f5ebe0'];

  const styles = {
    postContainer: {
      display: "grid",
      gridTemplateColumns: `repeat(4, 1fr)`,
      gridAutoRows: 'min-content', 
      padding:"10px",
      margin:"10px",
      gap: "15px", 
      fontSize: "16px",
      color:"black",
    },
    post: {
      border: '1px solid #c89f9c',
      borderRadius: '10px',
      padding: '10px',
      marginBottom: '10px',
      marginTop: '20px',
    },
    postBody: {
      fontSize: '20px',
      color: '#212529',
    },
    postTitle: {
      color :"#5390d9"
    },
  };

  return (
    <div>
      {loading ? (
        <div style={{color:"black", fontSize:"25px"}}>Loading...</div>
      ) : (
        <div style={styles.postContainer}>
          {posts.map((post) => (
            <div key={post.id} style={{ ...styles.post, backgroundColor: colors[0] }}>
              <h1 className="postTitle"><strong>Title: </strong>{post.title}</h1>
              <p style={styles.postBody}>{post.body}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
