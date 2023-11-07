import React from "react";

const Footer = () => {
  const name = "Giorgos Philippou";
  const mobile = "96460514";
  const email = "g.philippou00@gmail.com";
  const workingHours = generateRandomWorkingHours();

  function generateRandomWorkingHours() {
    const days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"];
    const randomDay = days[Math.floor(Math.random() * days.length)];
    const startTime = Math.floor(Math.random() * 12) + 8; 
    const endTime = startTime + Math.floor(Math.random() * 5) + 4; 

    return `${randomDay}, ${startTime}:00 AM - ${endTime}:00 PM`;
  }

  return (
    <div style={styles.footer}>
      <div>
        <strong>Name:</strong> {name}
      </div>
      <div>
        <strong>Mobile:</strong> {mobile}
      </div>
      <div>
        <strong>Email:</strong> {email}
      </div>
      <div>
        <strong>Working Hours:</strong> {workingHours}
      </div>
    </div>
  );
};

const styles = {
  footer: {
    width: '100%',
    height: 151,
    backgroundColor: "#012345",
    color: "#fff",
    textAlign: "center",
    position: 'absolute',
    bottom: 0,
    left: 0,
    overflow: 'hidden',
  },
};

export default Footer;
