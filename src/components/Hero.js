import React from "react";

import { Box, Typography, Grid, Button, Container } from "@mui/material";
import { motion } from "framer-motion";

import heroImg from "../resources/landingPageImages/kisspng-wedding-invitation-marriage-bridegroom-vector-wedding-5aa46adb7b01d1.8844934415207246995039.png";
import theme from "../styles/theme";

// object fed to sx prop
const sx = {
  [theme.breakpoints.down("md")]: {
    textAlign: "center",
  },
};

// animation objects
const moveFromLeft = {
  hidden: {
    opacity: 0,
    x: "-50vw",
  },
  show: {
    opacity: 1,
    x: 0,
    transition: {
      delay: 2,
      duration: 1,
      type: "spring",
      stiffness: 120,
    },
  },
};

const moveFromRight = {
  hidden: {
    opacity: 0,
    x: "50vw",
  },
  show: {
    opacity: 1,
    x: 0,
    transition: {
      delay: 2,
      duration: 1,
      type: "spring",
      stiffness: 120,
    },
  },
};

const moveFromDown = {
  hidden: {
    opacity: 0,
    y: "50vh",
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      delay: 2,
      duration: 1,
      type: "spring",
      stiffness: 120,
    },
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
          component={motion.div}
          variants={moveFromLeft}
          initial="hidden"
          animate="show"
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
          sx={{ overflow: "hidden" }}
          component={motion.div}
          variants={moveFromRight}
          initial="hidden"
          animate="show"
        >
          <Box
            component="img"
            src={heroImg}
            alt="wedding couple"
            sx={{
              width: "100%",
            }}
          ></Box>
        </Grid>
        <Grid
          item
          xs={12}
          textAlign="center"
          component={motion.div}
          variants={moveFromDown}
          initial="hidden"
          animate="show"
        >
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
