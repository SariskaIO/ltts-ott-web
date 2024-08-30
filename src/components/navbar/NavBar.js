import React, { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import AppsIcon from "@mui/icons-material/Apps";

// Main header styling
const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 5rem;
  background-color: var(--nav);
  color: var(--white);
  position: fixed;
  top: 5px;
  left: 0;
  right: 0;
  z-index: 500;

  @media only screen and (max-width: 64em) {
    /* Tablets and up */
    padding: 0.5rem 3rem;
    font-size: 20px;
    margin-left: -30px;
    margin-top: 10px;
  }
  @media only screen and (max-width: 40em) {
    /* Mobile */
    padding: 0.5rem 1.5rem;
    margin-left: 2px;
    margin-top: -5px;
  }
  @media only screen and (min-width: 90em) {
    /* Laptop L 1440px and above */
    padding: 1rem 7rem; /* Adjust the padding for larger screens */
    margin-top: 10px;
    margin-left: -73px; /* Adjust margin if needed */
  }
`;

// Styling for links displayed on larger screens
const HeaderLeft = styled.div`
  display: flex;
  align-items: center;

  a {
    font-weight: 600;
    line-height: 1.5;
    color: var(--white);
    text-decoration: none;
    margin: 0 1rem;

    &:hover {
      color: var(--purple);
    }

    /* Only hide links on mobile devices */
    @media only screen and (max-width: 40em) {
      /* Mobile */
      display: none;
    }
  }

  @media only screen and (min-width: 40em) {
    /* Tablets and larger screens */
    display: flex;
    align-items: center;
  }
  @media only screen and (min-width: 40em) {
    /* Tablets and larger screens */
    font-weight: 600;
  }
`;

// Styling for the AppsIcon
const MenuIcon = styled(AppsIcon)`
  display: none; /* Hide on tablets and larger screens */

  @media only screen and (max-width: 40em) {
    /* Mobile */
    display: flex; /* Show on mobile */
    height: 24px;
    cursor: pointer;
  }
  @media only screen and (min-width: 48em) {
    /* Tablets and larger screens */
    display: flex; /* Show on laptops and larger screens */
    height: 24px;
    cursor: pointer;
    margin-left: 17px;
    margin-top: 2px;
  }
  @media only screen and (min-width: 64em) {
    font-size: 80px;
    height: 30px;
  }

  @media only screen and (min-width: 90em) {
    /* Laptop L (1440px and above) */
    font-size: 60px; /* Increase size */
    height: 80px; /* Adjust height */
    width: 30px;
    margin-left: 20px; /* Align to the right if needed */
  }
`;

const Icon = styled.div`
  display: flex;
  @media only screen and (max-width: 40em) {
    display: none;
  }
`;

const MobileNav = styled.div`
  display: none; /* Hidden on larger screens */

  @media only screen and (max-width: 40em) {
    /* Mobile */
    display: flex; /* Visible on mobile */
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
  display: flex; /* Hidden on larger screens */

  @media only screen and (max-width: 40em) {
    /* Mobile */
    display: flex; /* Visible on mobile */
  }
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
    color: var(--white);
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
        <MobileMenu clicked={click}>
          <Link to="/" onClick={handleClick}>
            Home
          </Link>
        </MobileMenu>
      </HeaderLeft>
      {/* For mobile, Home on the left and MenuIcon on the right */}
      <MobileNav>
        <Link to="/">Home</Link>
        <MenuIcon onClick={handleClick} /> {/* MenuIcon for mobile screens */}
      </MobileNav>
      <MobileMenu clicked={click}>
        <Link to="/" onClick={handleClick} style={{ textDecoration: "none" }}>
          Home
        </Link>
        <Link
          to="/movies"
          onClick={handleClick}
          style={{ textDecoration: "none" }}
        >
          Movies
        </Link>
        <Link
          to="/tv-shows"
          onClick={handleClick}
          style={{ textDecoration: "none" }}
        >
          TV Shows
        </Link>
        <Link
          to="/premium"
          onClick={handleClick}
          style={{ textDecoration: "none" }}
        >
          Premium
        </Link>
        <Link
          to="/news"
          onClick={handleClick}
          style={{ textDecoration: "none" }}
        >
          News
        </Link>
      </MobileMenu>
    </Header>
  );
};

export default NavBar;
