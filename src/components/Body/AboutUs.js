import React from 'react';

const AboutUs = () => {
  return (
    <div style={styles.content}>
      <h1 style={styles.title}>About Us</h1>
      <h2 style={styles.subtitle}>Our Story</h2>
      <p style={styles.paragraph}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam consectetur,
        nisl id hendrerit consequat, urna odio interdum lectus.
      </p>
    </div>
  );
};

export default AboutUs;

const styles = {
  content: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
  },
  title: {
    fontWeight: 'bold',
    margin: '10px 0',
  },
  subtitle: {
    margin: '10px 0',
  },
  paragraph: {
    margin: '10px 0',
  },
}