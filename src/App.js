import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './components/home/Home';
import NavBar from './components/navbar/NavBar';
import TVShows from './components/pages/TvShows';
import Movies from './components/pages/Movies';
import Premium from './components/pages/Premium';
import News from './components/pages/News';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <Router>
            <NavBar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/tv-shows" element={<TVShows />} />
                <Route path="/movies" element={<Movies />} />
                <Route path="/premium" element={<Premium />} />
                <Route path="/news" element={<News />} />
            </Routes>
        </Router>
      </header>
    </div>
  );
}

export default App;
