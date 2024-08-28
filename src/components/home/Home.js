import React, { useEffect, useState } from 'react';
import Cards from '../../card/Card';
import GCards from '../../card/GCards';

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
      <main >
        <section >
          <h2 className="text-xl mb-4" style={{textAlign:'left', marginLeft:'50px'}}>Browse by Language</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
            <Cards languages={languages} />
          </div>
        </section>
        <section >
          <h2 className="text-xl mb-4" style={{textAlign:'left', marginLeft:'50px'}}>Browse by Genre</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
            <GCards genres={genres} />
          </div>
        </section>
      </main>
    </div>
  );
}

export default Home;
