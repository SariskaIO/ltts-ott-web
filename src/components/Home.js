import React, { useEffect, useState } from "react";
import Cards from "../card/Card";
import GCards from "../card/GCards";
import { getLanguages, getGenres } from "../utils";
import styled from "styled-components";

// Styled components for responsiveness and layout
const HomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  background-color: black;
  max-width: fit-content;
  max-height: fit-content;

  @media only screen and (min-width: 1024px) and (max-width: 1440px) {
    width: auto;
    height: auto;
  }
`;

const Main = styled.main`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 100;
  background-color: rgb(0, 0, 0);
  padding: 20px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  box-sizing: border-box;
  max-height: fit-content;
  margin-left: -20px;

  @media only screen and (min-width: 1024px) and (max-width: 1440px) {
    width: auto;
    height: auto;
  }

  @media only screen and (max-width: 640px) {
    padding: 10px;
  }

  @media only screen and (min-width: 641px) and (max-width: 1024px) {
    padding: 15px;
  }

  @media only screen and (min-width: 1025px) {
    padding: 30px;
  }
`;

const Grid = styled.div`
  margin-top: 20px;
  margin-left: -60px;
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 30px;
  padding: 0 50px;
  width: 100%;
  box-sizing: border-box;

  @media only screen and (max-width: 640px) {
    grid-template-columns: repeat(2, 1fr);
    gap: 10px;
    padding: 0 10px;
  }

  @media only screen and (min-width: 641px) and (max-width: 1024px) {
    grid-template-columns: repeat(3, 1fr);
    gap: 15px;
    padding: 0 20px;
  }

  @media only screen and (min-width: 1025px) {
    grid-template-columns: repeat(5, 1fr);
    gap: 40px;
    padding: 0 60px;
  }
`;

const SectionTitle = styled.div`
  text-align: left;
  margin-left: 40px;
  margin-top: 65px;
  margin-bottom: 20px;
  font-size: 8px;

  @media (min-width: 320px) {
    font-size: 14px;
    margin-left: 38px;
  }

  @media (min-width: 768px) {
    font-size: 16px;
  }

  @media (min-width: 1024px) {
    font-size: 18px;
  }

  @media (min-width: 1440px) {
    font-size: 22px;
  }
`;

const CardSection = styled.div`
  margin-bottom: 20px;
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
    <HomeContainer>
      <Main>
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
        <Grid>
          {/* Add other content here if necessary */}
        </Grid>
      </Main>
    </HomeContainer>
  );
}

export default Home;
