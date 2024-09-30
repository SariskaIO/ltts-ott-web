import React, { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import SettingsIcon from '@mui/icons-material/Settings';

import ChatIcon from '@mui/icons-material/Chat';
import Setting from "../pages/Setting";
import { Box, margin } from "@mui/system";
import DrawerBox from "./DrawerBox";

// Main header styling
const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
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
    padding: 0;
    top: 10px;
    left: -10px;
    font-size: 18px;
  }

  @media only screen and (max-width: 40em) {
    padding: 0.5rem 1.5rem;
    left: 4px;
    top: -5px;
    font-size: 16px;
    justify-content: space-between;
  }

  @media only screen and (max-width: 90em) {
    padding: 0;
    top: 10;
    left: 0;
    font-size: 30px;
  }
`;

// Styling for links displayed on larger screens
const HeaderLeft = styled.div`
  display: flex;
  align-items: center;

  a {
 font-weight: 300;
    font-size: 24px;
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
 margin: 0 15px;
    font-weight: 200;
    font-size: 18px;
    margin-right: -10px;
  }
`;

const MenuIcon = styled(SettingsIcon)`
  display: none;

  @media only screen and (max-width: 40em) {
    display: flex;
    margin-right: 10px;
    margin-top: 7px;
    height: 24px;
    cursor: pointer;
  }

  @media only screen and (min-width: 48em) {
    display: flex;
    height: 24px;
    cursor: pointer;
    margin-left: 17px;
    margin-top: 7px;
    margin-right: 10px;
  }

  @media only screen and (min-width: 64em) {
    font-size: 80px;
    height: 30px;
    margin-top: 7px;
    margin-right: 10px;
  }

  @media only screen and (min-width: 90em) {
    font-size: 60px;
    height: 80px;
    margin-top: 7px;
    margin-right: 10px;
  }
`;

const ChatsIcon = styled(ChatIcon)`
  display: none;

  @media only screen and (max-width: 40em) {
    display: flex;
    margin-right: 10px;
    margin-top: 7px;
    height: 24px;
    cursor: pointer;
  }

  @media only screen and (min-width: 48em) {
    display: flex;
    height: 24px;
    cursor: pointer;
    margin-left: 17px;
    margin-top: 7px;
    margin-right: 10px;
  }

  @media only screen and (min-width: 64em) {
    font-size: 80px;
    height: 30px;
    margin-top: 7px;
    margin-right: 10px;
  }

  @media only screen and (min-width: 90em) {
    font-size: 60px;
    height: 80px;
    margin-top: 7px;
    margin-right: 10px;
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
    font-size:22px;
    justify-content: space-between;
    width: 100%;
    margin-top: 20px;
    margin-left:10px;

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
  // left: 0;
  right: 20px;
  // background-color: rgb(53 53 63 / 95%);
  background-color: rgb(43, 11, 42 ,0.9);
  // backdrop-filter:  rgb(43, 11, 42) blur(10px);
  border-radius: 20px;
  transition: opacity 0.5s, visibility 0.5s;
  z-index: 1000;
  opacity: ${(props) => (props['clicked'] === 'true' ? "1" : "0")};
  visibility: ${(props) => (props['clicked'] === 'true' ? "visible" : "hidden")};

  a {
    color: white;
    font-weight: 600;
    font-size: 1.5rem;
    margin: 1.5rem;
    cursor: pointer;
  
  }
    @media (max-width: 480px){
        position: flex;
        
    }

`;

const NavBar = () => {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);

  const [open, setOpen] = useState(false);
  
  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };


  return (
    <Header>
      <HeaderLeft>
        <Link to="/">Home</Link>
        <Link to="/movies">Movies</Link>
        <Link to="/tv-shows">TV Shows</Link>
        <Link to="/premium">Premium</Link>
        <Link to="/news">News</Link>
        {/* <Icon>
          <MenuIcon onClick={handleClick} />
        </Icon> */}
      </HeaderLeft>
      <Box sx={{display: 'flex'}}>
        <Icon>
        <ChatsIcon onClick={toggleDrawer(true)} />
        </Icon>
        <DrawerBox toggleDrawer={toggleDrawer} open={open} />
      <Icon>
          <MenuIcon onClick={handleClick} />
        </Icon>
        </Box>
      <MobileNav>
        <Link to="/">Home</Link>
        <MenuIcon onClick={handleClick} />
      </MobileNav>
      <MobileMenu clicked={click ? 'true' : 'false'}>
        {/* <Link to="/" onClick={handleClick}>Home</Link>
        <Link to="/movies" onClick={handleClick}>Movies</Link>
        <Link to="/tv-shows" onClick={handleClick}>TV Shows</Link>
        <Link to="/premium" onClick={handleClick}>Premium</Link>
        <Link to="/news" onClick={handleClick}>News</Link> */}

      <DrawerBox toggleDrawer={toggleDrawer} open={open} />
      <Setting style={{"margin-right":"-10px"}}/>
      </MobileMenu>
    </Header>
  );
};

export default NavBar;
