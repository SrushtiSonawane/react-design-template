import React from 'react';
import video1 from "../assets/background-video.mp4";

function Home() {
  return (
    <section style={styles.videoContainer}>
      <video loop autoPlay style={styles.video}>
        <source src={require('../assets/background-video.mp4')} type="video/mp4" />
      </video>

      <div style={styles.content}>
        <h1 style={styles.heading}>SCHOOL ART SHOW</h1>
        <h4 style={styles.subHeading}>APRIL 31st - PICASSO GALLERY HALL</h4>
        <button style={styles.button}>REGISTER NOW</button>
      </div>
    </section>
  );
}

const styles = {
  videoContainer: {
    position: 'relative',
    width: '100%',
    height: '100vh',
    overflow: 'hidden',
    
  },
  video: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    minWidth: '100%',
    minHeight: '100%',
    width: 'auto',
    height: 'auto',
    zIndex: '-1',
  },
  content: {
    position: 'relative',
    zIndex: '1',
    textAlign: 'center',
    color: '#fff',
    padding: '20px',
  },
  heading: {
    color: 'white',
    fontSize: '70px',
    fontFamily: 'Arial, sans-serif', 
    textShadow: '2px 2px 4px rgba(0,0,0,0.5)', 
  },
  subHeading: {
    color: '#FFD700',
    fontSize: '40px',
    fontFamily: 'Arial, sans-serif', 
    textShadow: '2px 2px 4px rgba(0,0,0,0.5)', 
  },
  button: {
    width: '200px',
    height: '80px',
    fontSize: '25px',
    backgroundColor: '#c89f9c',
    color: 'white',
    border: 'none',
    borderRadius: '10px',
    marginTop: '20px',
    cursor: 'pointer',
    fontFamily: 'Arial, sans-serif', 
    boxShadow: '0px 4px 8px rgba(0,0,0,0.3)', 
  },
};

export default Home;
