import React from "react";


const Navigation = () => {
  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav>
      <ul style={styles.content} >
        <li style={styles.item} >
          <p style={styles.itemRef} onClick={() => scrollToSection("carousel")}>Carousel</p>
        </li>
        <li style={styles.item} >
          <p style={styles.itemRef} onClick={() => scrollToSection("about")}>About Us</p>
        </li>
        <li style={styles.item} >
          <p style={styles.itemRef} onClick={() => scrollToSection("article")}>Article List</p>
        </li>
        <li style={styles.item} >
          <p style={styles.itemRef} onClick={() => scrollToSection("video")}>Videos</p>
        </li>
      </ul>
    </nav>
  )
};

export default Navigation;

const styles = {
  content: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    listStyleType: 'none',
  },
  item: {
    flex: 1,
  },
  itemRef: {
    color: 'white',
    textDecoration: 'none',
    cursor: 'pointer',
  }
}
