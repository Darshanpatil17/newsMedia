import React from 'react';

const Navbar = () => {
  return (
    <nav style={styles.navbar}>
      <h2>News App</h2>
      
    </nav>
  );
};

const styles = {
  navbar: {
    width:"100%",
    backgroundColor: 'orange',
    padding: '10px',
    color: 'white',
    textAlign: 'center',
  }
};

export default Navbar;
