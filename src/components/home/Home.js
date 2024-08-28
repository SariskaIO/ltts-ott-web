import React, { useEffect, useState } from 'react';
import Cards from '../../card/Card';
import GCards from '../../card/GCards';
import "./home.css";

function Home() {
  const [languages, setLanguages] = useState([]);
  const [genres, setGenres] = useState([])

  useEffect(() => {
    fetch('/languages.json')
      .then(response => response.json())
      .then(data => setLanguages(data))
      .catch(error => console.error('Error fetching languages:', error));
  }, []);

  useEffect(() => {
    fetch('/genre.json')
      .then(response => response.json())
      .then(data => setGenres(data))
      .catch(error => console.error('Error fetching languages:', error));
  }, []);

  return (
    <div className="home">
      <main>
        <section >
          <h5 className="text-xl mb-4" style={{textAlign:'left', marginLeft:'40px',marginTop:'50px',marginBottom:'1px'}}>Browse by Language</h5>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
            <Cards languages={languages} />
          </div>
        </section>
        <section >
          <h5 className="text-xl mb-4" style={{textAlign:'left', marginLeft:'40px',marginBottom:'10px'}}>Browse by Genre</h5>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
            <GCards genres={genres} />
          </div>
        </section>
        </main>
    </div>
  );
}

export default Home;
