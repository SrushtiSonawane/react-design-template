import React from 'react';

function Home() {
  return (
    <section style={styles.videoContainer}>
      <video autoPlay loop muted style={styles.video}>
        
        <video src="background-video.mp4" type="video/mp4"></video>
      </video>
      <div style={styles.content}>
        <h1 style={{
          color:"black",
          fontsize:"70px"
      }}
      >SCHOOL ART SHOW</h1>
        <h4 style={{
          color:"blue",
          fontsize:"40px",
        }}
        >APRIL 31st - PICASSO GALLERY HALL</h4>
        <p style={{
          color:"black",
          fontsize:"40px",

      }}>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ad iusto culpa amet eum maiores ullam, aspernatur fugit incidunt voluptas, quasi quam voluptatem error provident, architecto quaerat aperiam quibusdam mollitia quia.</p>
        <button style={{
          
          width:"300px",
          height:"150px",
          fontSize:"50px",
          backgroundColor:"blue",
          color:"white",
        }}>REGISTER NOW</button>
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
};

export default Home;
