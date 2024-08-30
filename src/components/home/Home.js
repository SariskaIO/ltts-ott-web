import React, { useEffect, useState } from "react";
import Cards from "../../card/Card";
import GCards from "../../card/GCards";
import { getLanguages, getGenres } from "../../utils";
import "./home.css";
import styled from "styled-components";

const SectionTitle = styled.div`
  text-align: left;
  margin-left: 40px;
  margin-top: 65px;
  margin-bottom: 20px;
  font-size: 8px; /* Default font size for small devices */

  /* Small devices (mobile) */
  @media (min-width: 320px) {
    font-size: 14px; /* Adjust as needed */
    margin-left: 38px;
  }

  /* Medium devices (tablets) */
  @media (min-width: 768px) {
    font-size: 16px; /* Adjust as needed */
  }

  /* Large devices (desktops) */
  @media (min-width: 1024px) {
    font-size: 18px; /* Adjust as needed */
  }

  /* Extra large devices (large desktops) */
  @media (min-width: 1440px) {
    font-size: 22px; /* Adjust as needed */
  }
`;

const HomeContainer = styled.div`
  .gap-4 {
    gap: 4px;
  }
`;

const CardSection = styled.div`
  margin-bottom: 20px; /* Adjust the spacing between the card and the title */
`;

function Home() {
  const [languages, setLanguages] = useState([]);
  const [genres, setGenres] = useState([]);

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
    <HomeContainer className="home">
      <main>
        <section>
          <SectionTitle>Browse by Language</SectionTitle>
          <CardSection>
            <Cards languages={languages} />
          </CardSection>
        </section>
        <section>
          <SectionTitle>Browse by Genre</SectionTitle>
          <CardSection>
            <GCards genres={genres} />
          </CardSection>
        </section>
      </main>
    </HomeContainer>
  );
}

export default Home;
