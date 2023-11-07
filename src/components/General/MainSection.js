import React from "react";
import { Scrollbars } from 'react-custom-scrollbars';
import { HEIGHT, PIXELS } from "../../utils/styles/dimensions";

const MainSection = ({ children }) => {
  return (
    <div style={styles.content}>
      <div style={styles.subContent}>
        <Scrollbars
          autoHide
          autoHideTimeout={1000}
          autoHideDuration={200}
          style={styles.scrollbar}
        >
          {children}
        </Scrollbars>
      </div>
    </div>
  );
};

export default MainSection;

const styles = {
  content: {
    width: '100%',
    height: HEIGHT - PIXELS * 10,
    paddingTop: PIXELS * 10,
    margin: 0,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#a7c4e2',
  },
  scrollbar: {
    width: '100%',
    height: '100%',
    overflow: 'hidden',
  },
  subContent: {
    width: '80%',
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    backgroundColor: '#6b8eb1',
  }
};
