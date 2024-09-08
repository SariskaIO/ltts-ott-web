import React, { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import AppsIcon from "@mui/icons-material/Apps";

// Main header styling
const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 20px;
  background-color: #060606;
  color: white;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  font-size: 30px;

  @media only screen and (max-width: 64em) {
    padding: 0.5rem 3rem;
    font-size: 20px;
  }

  @media only screen and (max-width: 40em) {
    padding: 0.5rem 1.5rem;
    font-size: 16px;
  }

  @media only screen and (min-width: 90em) {
    padding: 1rem 7rem;
  }
`;

// Styling for links displayed on larger screens
const HeaderLeft = styled.div`
  display: flex;
  align-items: center;

  a {
    font-weight: 600;
    line-height: 1.5;
    color: white;
    text-decoration: none;
    margin: 0 30px;

    &:hover {
      color: rgb(117, 184, 246);
      text-decoration: underline;
    }

    @media only screen and (max-width: 40em) {
      display: none;
    }
  }

  @media only screen and (min-width: 40em) {
    font-weight: 600;
  }
`;

// Styling for the AppsIcon
const MenuIcon = styled(AppsIcon)`
  display: none;

  @media only screen and (max-width: 40em) {
    display: flex;
    height: 24px;
    cursor: pointer;
  }

  @media only screen and (min-width: 48em) {
    display: flex;
    height: 24px;
    cursor: pointer;
    margin-left: 17px;
  }

  @media only screen and (min-width: 64em) {
    font-size: 80px;
    height: 30px;
  }

  @media only screen and (min-width: 90em) {
    font-size: 60px;
    height: 80px;
  }
`;

const Icon = styled.div`
  display: flex;
  @media only screen and (max-width: 40em) {
    display: none;
  }
`;

const MobileNav = styled.div`
  display: none;

  @media only screen and (max-width: 40em) {
    display: flex;
    justify-content: space-between;
    width: 100%;
    margin-top: 20px;

    a {
      text-decoration: none;
      color: white;
    }
  }
`;

// Styling for the mobile menu, visible only on mobile devices
const MobileMenu = styled.nav`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 2rem 0;
  position: absolute;
  top: 100%;
  left: 0;
  right: 0;
  background-color: rgb(53 53 63 / 95%);
  border-radius: 20px;
  transition: opacity 0.5s, visibility 0.5s;
  z-index: 1000;
  opacity: ${(props) => (props.clicked ? "1" : "0")};
  visibility: ${(props) => (props.clicked ? "visible" : "hidden")};

  a {
    color: white;
    font-weight: 600;
    font-size: 1.5rem;
    margin: 1.5rem;
    cursor: pointer;
  }
`;

const NavBar = () => {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);

  return (
    <Header>
      <HeaderLeft>
        <Link to="/">Home</Link>
        <Link to="/movies">Movies</Link>
        <Link to="/tv-shows">TV Shows</Link>
        <Link to="/premium">Premium</Link>
        <Link to="/news">News</Link>
        <Icon>
          <MenuIcon onClick={handleClick} />
        </Icon>
      </HeaderLeft>
      <MobileNav>
        <Link to="/">Home</Link>
        <MenuIcon onClick={handleClick} />
      </MobileNav>
      <MobileMenu clicked={click}>
        <Link to="/" onClick={handleClick}>Home</Link>
        <Link to="/movies" onClick={handleClick}>Movies</Link>
        <Link to="/tv-shows" onClick={handleClick}>TV Shows</Link>
        <Link to="/premium" onClick={handleClick}>Premium</Link>
        <Link to="/news" onClick={handleClick}>News</Link>
      </MobileMenu>
    </Header>
  );
};

export default NavBar;
