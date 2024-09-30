import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import MainWindow from './components/MainWindow';
import NavBar from './components/NavBar';
import TVShows from './pages/TvShows';
import Movies from './pages/Movies';
import Premium from './pages/Premium';
import News from './pages/News';
import Setting from './pages/Setting';
import Entertainment from './views/Entertainment';

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
                <Route path="/setting" element={<Setting />} />
                <Route path="/entertainment" element={<Entertainment />} />
            </Routes>
        </Router>
      </header>
    </div>
  );
}

export default App;
