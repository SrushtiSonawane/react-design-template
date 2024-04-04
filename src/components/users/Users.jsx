import React, { useEffect, useState } from "react";

export default function Users() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true); 

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((data) => {
        setUsers(data);
        setLoading(false); 
      })
      .catch((error) => {
        console.log("error:", error);
        setLoading(false); 
      });
  }, []);

  const colors = ['#f5ebe0'];

  const styles = {
    userContainer: {
      display: 'grid',
      gridTemplateColumns: `repeat(4, 1fr)`,
      gap: '15px',
    },
    user: {
      border: '1px solid #c89f9c',
      borderRadius: '10px',
      padding: '20px',
      marginBottom: '15px',
      marginTop: '25px',
    },
    userDetail: {
      fontSize: '14px',
      color: 'black',
    },
    userName: {
      fontSize: '25px',
      fontWeight: 'bold',
      color: '#5390d9',
    },
  };
  return (
    
    <div>
     {loading ? (
      <h3>Loading</h3>
     ) : (
     
      <div className="container" style={styles.userContainer}>
        {users.map((user) => (
          <div key={user.id} style={{ ...styles.user, backgroundColor: colors[0] }}>
            <h1 style={styles.userName}><strong>Name: </strong>{user.name}</h1>
            <p style={styles.userDetail}><strong>Username: </strong>{user.username}</p>
            <p style={styles.userDetail}><strong>Email: </strong>{user.email}</p>
            <p style={styles.userDetail}><strong>Address: </strong>{user.address.street}, {user.address.suite}, {user.address.city}, {user.address.zipcode}</p>
            <p style={styles.userDetail}><strong>Phone: </strong>{user.phone}</p>
            <p style={styles.userDetail}><strong>Website: </strong>{user.website}</p>
            <p style={styles.userDetail}><strong>Company: </strong>{user.company.name}</p>
          </div>
        ))}
      </div>
      )}
    </div>
  );
}
