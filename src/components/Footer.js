import React, { useRef, useEffect } from "react";
import { useInView, useAnimation, motion } from "framer-motion";

import { Grid, Button, Box } from "@mui/material";
import theme from "../styles/theme";

const Footer = () => {
  const ref = useRef(null);
  const inVeiw = useInView(ref);
  const animation = useAnimation();

  useEffect(() => {
    if (inVeiw) {
      animation.start({
        opacity: 1,
        x: 0,
        transition: {
          type: "spring",
          duration: 1,
        },
      });
      if (!inVeiw) {
        animation.start({
          opacity: 0,
          x: "-100vw",
        });
      }
    }
  }, [inVeiw, animation]);

  return (
    <Box
      ref={ref}
      component={motion.div}
      animate={animation}
      initial={{
        opacity: 0,
        x: "-100vw",
      }}
    >
      <Grid
        container
        sx={{
          backgroundColor: theme.palette.secondary.main,
          padding: "5rem",
          marginTop: "4rem",
        }}
      >
        {/* <Grid item xs={6}>
        <Button color="primary" sx={{ fontSize: "1.4rem" }}>
          Home
        </Button>
      </Grid>
      <Grid item xs={6} textAlign="right">
        <Button color="primary" sx={{ fontSize: "1.4rem" }}>
          About
        </Button>
      </Grid> */}
        <Grid item xs={12} textAlign="center">
          <Button
            color="primary"
            variant="contained"
            sx={{
              color: "error.main",
              fontSize: "2rem",
              padding: "0 3rem",
            }}
          >
            Contact
          </Button>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Footer;
