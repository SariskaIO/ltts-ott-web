import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import MainWindow from './components/MainWindow';
import NavBar from './components/NavBar';
import TVShows from './pages/TvShows';
import Movies from './pages/Movies';
import Premium from './pages/Premium';
import News from './pages/News';

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
                <Route path="/mainwindow" element={<MainWindow />} />
            </Routes>
        </Router>
      </header>
    </div>
  );
}

export default App;
