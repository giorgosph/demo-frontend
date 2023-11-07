import React, { useState, useEffect } from 'react';
import './App.css';
import axios from 'axios';

import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import AboutUs from './components/Body/AboutUs';
import Carousel from './components/Body/Carousel';
import MusicList from './components/Body/MusicList';
import ArticleList from './components/Body/ArticleList';
import MainSection from './components/General/MainSection';

function App() {
  const [data, setData] = useState([]);
  const [lg, setLg] = useState(null);
  const [crl, setCrl] = useState(null);
  const [ab, setAb] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/v1/content');
        const contentPerSection = response.data.content || [];
        setData(contentPerSection);
      } catch (error) {
        console.error("Error while fetching data:", error);
        setData([]);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    if (data.length > 0) {
      const lgSection = data.find((section) => section.section.abbr === "lg");
      if (lgSection) setLg(lgSection.content);
      else console.error("No content for Logo section");

      const crlSection = data.find((section) => section.section.abbr === "crl");
      if (crlSection) setCrl(crlSection.content);
      else console.error("No content for Carousel section");

      const abSection = data.find((section) => section.section.abbr === "ab");
      if (abSection) setAb(abSection.content);
      else console.error("No content for About Us section");
    }
  }, [data]);

  return (
    <div className="App">
      {data.length > 0 ? (
        <>
          <Header lg={lg} />
          <MainSection>
            <Carousel crl={crl} />
            <AboutUs ab={ab} />
            <ArticleList />
            <MusicList />
          </MainSection>
          <Footer />
        </>
      ) : (
        <h1>No Content Retrieved</h1>
      )}
    </div>
  );
}

export default App;
