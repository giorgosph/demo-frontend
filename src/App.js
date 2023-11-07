import './App.css';

import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import AboutUs from './components/Body/AboutUs';
import Carousel from './components/Body/Carousel';
import MusicList from './components/Body/MusicList';
import ArticleList from './components/Body/ArticleList';
import MainSection from './components/General/MainSection';

function App() {
  return (
    <div className="App">
      <Header />
      <MainSection>
        <Carousel />
        <AboutUs />
        <ArticleList />
        <MusicList />
      </MainSection>
      <Footer />
    </div>
  );
}

export default App;
