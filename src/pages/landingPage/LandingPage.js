import { Box } from "@mui/material";
import React from "react";
import AppPresentation from "../../components/AppPresentation";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import Hero from "../../components/Hero";
import theme from "../../styles/theme";

const LandingPage = () => {
  return (
    <Box
      sx={{ backgroundColor: theme.palette.primary.main, overflow: "hidden" }}
    >
      <Header />
      <Hero />
      <AppPresentation />
      <Footer />
    </Box>
  );
};

export default LandingPage;
