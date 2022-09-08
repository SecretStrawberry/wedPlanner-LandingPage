import React from "react";

import { Box, Typography, Grid, Button, Container } from "@mui/material";

import heroImg from "../resources/landingPageImages/kisspng-wedding-invitation-marriage-bridegroom-vector-wedding-5aa46adb7b01d1.8844934415207246995039.png";
import theme from "../styles/theme";

const sx = {
  [theme.breakpoints.down("md")]: {
    textAlign: "center",
  },
};

const Hero = () => {
  return (
    <Container maxWidth="lg">
      <Grid container py={5}>
        <Grid
          item
          xs={12}
          md={6}
          display="flex"
          flexDirection="column"
          justifyContent="center"
          sx={sx}
        >
          <Typography variant="h2" marginBottom="2rem">
            Wedding planning made easy
          </Typography>
          <Typography variant="body1" marginBottom="1rem">
            The perfect assistant for you to have a woderfull wedding.
          </Typography>
          <Typography variant="body1">
            Comprehensive and fast. A wedding planner that have everything you
            need.
          </Typography>
        </Grid>

        <Grid
          item
          xs={12}
          md={6}
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <Box
            component="img"
            src={heroImg}
            alt="wedding couple"
            sx={{
              width: 600,
              [theme.breakpoints.down("md")]: {
                width: 300,
              },
              [theme.breakpoints.down("lg")]: {
                width: 400,
              },
            }}
          ></Box>
        </Grid>
        <Grid item xs={12} textAlign="center">
          <Button
            color="error"
            variant="outlined"
            sx={{
              fontSize: "2rem",
              padding: "0 3rem",
              borderColor: theme.palette.line,
              marginTop: "-5rem",
              [theme.breakpoints.down("lg")]: {
                marginTop: "1rem",
              },
            }}
          >
            Contact
          </Button>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Hero;
