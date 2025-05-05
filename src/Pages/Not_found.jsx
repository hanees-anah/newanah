import React from 'react';
import teakwood_logo from "../assets/images/logo-img.png";


const NotFound = () => {
  const styles = {
    container: {
      fontFamily: "'Montserrat', Helvetica, sans-serif",
      color: '#bbb',
      textAlign: 'center',
      paddingBottom: '50px',
      marginTop: '100px',
    },
    h1: {
      margin: '40px 15px',
    },
    image: {
      width: '500px',
      maxWidth: '90%',
      margin: '0 auto 30px',
      marginTop: '20px',
    },
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.h1}>404 Error Page</h1>

      {/* Replace the src with your own image path or URL */}
      <img
        src={teakwood_logo}
        alt="Page not found"
        style={styles.image}
      />

      <div className="flex items-center justify-center h-screen mt-5">
        <a href="https://anahmarketing.com/" className="header-btn1">
          Go to Home <span><i className="fa-solid fa-arrow-right"></i></span>
        </a>
      </div>
    </div>
  );
};

export default NotFound;
