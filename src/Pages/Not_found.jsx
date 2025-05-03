import React from 'react';

const NotFound = () => {
  const styles = {
    container: {
      fontFamily: "'Montserrat', Helvetica, sans-serif",
      color: '#bbb',
      textAlign: 'center',
      paddingBottom: '50px',
    },
    h1: {
      margin: '30px 15px',
    },
    zoomArea: {
      maxWidth: '490px',
      margin: '30px auto',
      fontSize: '19px',
    },
    errorContainer: {
      fontSize: '106px',
      fontFamily: "'Catamaran', sans-serif",
      fontWeight: 800,
      margin: '70px 15px',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      gap: '10px',
    },
    four: {
      position: 'relative',
      width: '136px',
      height: '43px',
      borderRadius: '999px',
      background: 'linear-gradient(to right, #d89ca4, #e27b7e)',
    },
    fourBefore: {
      content: "''",
      position: 'absolute',
      width: '43px',
      height: '156px',
      left: '60px',
      bottom: '-43px',
      borderRadius: '999px',
      background: 'linear-gradient(to top, #99749D, #B895AB, #CC9AA6, #D7969E, #E0787F)',
    },
    fourAfter: {
      content: "''",
      position: 'absolute',
      width: '137px',
      height: '43px',
      transform: 'rotate(-49.5deg)',
      left: '-18px',
      bottom: '36px',
      borderRadius: '999px',
      background: 'linear-gradient(to right, #99749D, #B895AB, #CC9AA6, #D7969E, #E0787F)',
    },
    zero: {
      position: 'relative',
      width: '156px',
      height: '156px',
      borderRadius: '999px',
      background: 'linear-gradient(to top right, #99749D, #99749D, #B895AB, #CC9AA6, #D7969E, #ED8687, #ED8687)',
      display: 'inline-block',
    },
    zeroAfter: {
      content: "''",
      position: 'absolute',
      width: '70px',
      height: '70px',
      left: '43px',
      bottom: '43px',
      backgroundColor: '#FDFAF5',
      borderRadius: '999px',
      boxShadow: '-2px 2px 2px 0px rgba(0, 0, 0, 0.1)',
    },
    linkContainer: {
      marginTop: '50px',
    },
    moreLink: {
      textTransform: 'uppercase',
      fontSize: '13px',
      backgroundColor: '#de7e85',
      padding: '10px 15px',
      color: '#fff',
      display: 'inline-block',
      marginBottom: '5px',
      textDecoration: 'none',
      letterSpacing: '1px',
    },
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.h1}>404 Error Page</h1>
    
      <section style={styles.errorContainer}>
        <span style={{ ...styles.four }}>
          <span style={styles.fourBefore}></span>
          <span style={styles.fourAfter}></span>
          <span className="screen-reader-text">4</span>
        </span>
        <span style={styles.zero}>
          <span style={styles.zeroAfter}></span>
          <span className="screen-reader-text">0</span>
        </span>
        <span style={{ ...styles.four }}>
          <span style={styles.fourBefore}></span>
          <span style={styles.fourAfter}></span>
          <span className="screen-reader-text">4</span>
        </span>
      </section>
      <div style={styles.linkContainer}>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://anahmarketing.com/"
          style={styles.moreLink}
        >
          Visit home page
        </a>
      </div>
    </div>
  );
};

export default NotFound;
