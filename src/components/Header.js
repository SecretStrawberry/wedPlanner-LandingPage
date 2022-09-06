import React from "react";

import { AppBar, Typography, Button } from "@mui/material";

import { Navigation, HeaderWrapper } from "../styles/LandingPage/HeaderStyles";

import { NavButton } from "./Buttons";

const Header = () => {
  return (
    <AppBar elevation={0} position="sticky">
      <HeaderWrapper>
        <Typography variant="h1" textAlign="center" color="secondary">
          In Perpetuum
        </Typography>
        <Navigation>
          <NavButton color="error">Contact</NavButton>
          <NavButton color="error">About the App</NavButton>
        </Navigation>
      </HeaderWrapper>
    </AppBar>
  );
};

export default Header;
