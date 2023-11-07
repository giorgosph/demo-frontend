import React from "react";

const Logo = ({ imageUrl }) => {
  return (
    <img
      src={imageUrl}
      alt="Logo"
      style={styles.logo}
    />
  );
};

const styles = {
  logo: {
    maxWidth: 64, 
    maxHeight: 64, 
  }
};

export default Logo;
