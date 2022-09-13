import React from "react";

import { AppBar, Grid, Typography, Button, Box } from "@mui/material";
import theme from "../styles/theme";

import { motion } from "framer-motion";

// animation rules
const appbar = {
  hidden: {
    opacity: 0,
    x: "-100vw",
  },
  show: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.5,
    },
  },
};

const wordAnimation = {
  hidden: {},
  visible: {},
};

const title = {
  hidden: {
    opacity: 0,
    y: "1rem",
  },
  show: {
    opacity: 1,
    y: "0rem",
    transition: {
      duration: 2,
      ease: [0.2, 0.65, 0.3, 0.9],
    },
  },
};

const text = "In Perpetuum";

const Header = () => {
  return (
    <AppBar
      elevation={0}
      position="sticky"
      component={motion.div}
      variants={appbar}
      initial="hidden"
      animate="show"
    >
      <Grid container rowGap={1} p={2}>
        <Grid item xs={12} display="flex" justifyContent="center">
          <Box
            sx={{
              display: "flex",
            }}
          >
            {text.split("").map((word, index) => {
              return (
                <Typography
                  component={motion.span}
                  key={index}
                  initial="hidden"
                  animate="show"
                  variants={wordAnimation}
                  transition={{
                    delayChildren: index * 0.25,
                    staggerChildren: 0.05,
                  }}
                >
                  {word.split("").map((letter, index) => {
                    return (
                      <Typography
                        variant="h1"
                        color="secondary"
                        component={motion.div}
                        key={index}
                        variants={title}
                      >
                        {letter}
                      </Typography>
                    );
                  })}
                </Typography>
              );
            })}

            {/* {text.split("").map((letter, index) => (
              <Typography
                variant="h1"
                color="secondary"
                component={motion.span}
                key={index}
                variants={title}
                initial="hidden"
                animate="show"
              >
                {letter}
              </Typography>
            ))} */}
          </Box>
        </Grid>

        <Grid
          item
          xs={6}
          md={3}
          p={0}
          textAlign="center"
          borderBottom={`1px solid ${theme.palette.line}`}
        >
          <Button color="error" sx={{ fontSize: "1.2rem" }}>
            Contact
          </Button>
        </Grid>

        <Grid
          item
          xs={0}
          md={6}
          borderBottom={`1px solid ${theme.palette.line}`}
        ></Grid>

        <Grid
          item
          xs={6}
          md={3}
          p={0}
          textAlign="center"
          borderBottom={`1px solid ${theme.palette.line}`}
        >
          <Button color="error" sx={{ fontSize: "1.2rem" }}>
            About
          </Button>
        </Grid>
      </Grid>
    </AppBar>
  );
};

export default Header;
