import React from "react";

import Logo from "./Logo";
import Navigation from "./Navigation";

import { PIXELS } from "../../utils/styles/dimensions";


const Header = ({ lg }) => {
  return (
   <header style={styles.content} >
      <div style={styles.logoWrap} >
        <Logo imageUrl={lg?.assetPath} />
      </div>
      <div style={styles.navWrap} >
        <Navigation />
      </div>
   </header>
  )
};

export default Header;

const styles = {
  content : {
    width: '100%',
    height: PIXELS*10,
    backgroundColor: '#012345',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    position: 'absolute',
    top: 0,
  },
  logoWrap: {
    flex: 1,
  },
  navWrap: {
    flex: 4,
  }
}