import React from "react";
import { Wrapper, FooterNav } from "../styles/LandingPage/FooterStyles";
import { CallToActionButton, NavButton } from "./Buttons";

const Footer = () => {
  return (
    <Wrapper>
      <FooterNav>
        <NavButton>Home</NavButton>
        <NavButton>About the App</NavButton>
      </FooterNav>
      <CallToActionButton
        color="primary"
        variant="contained"
        sx={{
          color: "error.main",
        }}
      >
        Contact
      </CallToActionButton>
    </Wrapper>
  );
};

export default Footer;
