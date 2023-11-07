import React from 'react';

const AboutUs = ({ ab }) => {
  return (
    <div
    dangerouslySetInnerHTML={{ __html: ab?.body }}
  />
  );
};

export default AboutUs;