import React from "react";


const Navigation = () => {
  return (
    <nav>
      <ul style={styles.content} >
        <li style={styles.item} ><a style={styles.itemRef} href="#">Home</a></li>
        <li style={styles.item} ><a style={styles.itemRef} href="#">About</a></li>
        <li style={styles.item} ><a style={styles.itemRef} href="#">Contact</a></li>
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
  }

}
