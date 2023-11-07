import React from "react";
import YouTube from "react-youtube";

const MusicList = () => {
  const video1Id = "zQnBQ4tB3ZA"; 
  const video2Id = "5ChkQKUzDCs"; 

  const opts = {
    height: "500",
    width: "920",
    playerVars: {
      autoplay: 0,
    },
  };

  return (
    <div style={styles.content}>
      <div>
        <YouTube videoId={video1Id} opts={opts} />
      </div>
      <div>
        <YouTube videoId={video2Id} opts={opts} />
      </div>
    </div>
  );
};

const styles = {
  content: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
  },
};
  
  export default MusicList;