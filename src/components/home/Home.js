import React, { useEffect, useState } from 'react';
import Cards from '../../card/Card';
import GCards from '../../card/GCards';
import { getLanguages,getGenres } from '../../utils';
import "./home.css";

function Home() {
  const [languages, setLanguages] = useState([]);
  const [genres, setGenres] = useState([])

  useEffect(() => {
    async function fetchData() {
        const languagesData = await getLanguages();
        if (languagesData) {
            setLanguages(languagesData);
        }
    }
    fetchData();
}, []);
 
useEffect(() => {
  async function fetchData() {
      const genresData = await getGenres();
      if (genresData) {
          setGenres(genresData);
      }
  }
  fetchData();
}, []);

  return (
    <div className="home">
      <main>
        <section >
          <h4 className="text-xl mb-4" style={{textAlign:'left', marginLeft:'40px',marginTop:'50px',marginBottom:'1px'}}>Browse by Language</h4>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
            <Cards languages={languages} />
          </div>
        </section>
        <section >
          <h4 className="text-xl mb-4" style={{textAlign:'left', marginLeft:'40px',marginBottom:'10px'}}>Browse by Genre</h4>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
            <GCards genres={genres} />
          </div>
        </section>
        </main>
    </div>
  );
}

export default Home;
