import React from "react";

import { Box, Typography } from "@mui/material";

import {
  HeroWrapper,
  TextWrapper,
  ImgWrapper,
} from "../styles/LandingPage/HeroStyles";

import { CallToActionButton } from "./Buttons";

import heroImg from "../resources/landingPageImages/kisspng-wedding-invitation-marriage-bridegroom-vector-wedding-5aa46adb7b01d1.8844934415207246995039.png";

const Hero = () => {
  return (
    <HeroWrapper>
      <TextWrapper>
        <Typography variant="h2" marginBottom="2rem" marginTop="-3rem">
          Wedding planning made easy
        </Typography>
        <Typography variant="body1" marginBottom="1rem">
          The perfect assistant for you to have a woderfull wedding.
        </Typography>
        <Typography variant="body1">
          Comprehensive and fast. A wedding planner that have everything you
          need.
        </Typography>
      </TextWrapper>

      <CallToActionButton color="error" variant="outlined">
        Contact
      </CallToActionButton>
      <ImgWrapper>
        <Box
          component="img"
          src={heroImg}
          alt="wedding couple"
          sx={{ width: 600 }}
        ></Box>
      </ImgWrapper>
    </HeroWrapper>
  );
};

export default Hero;
