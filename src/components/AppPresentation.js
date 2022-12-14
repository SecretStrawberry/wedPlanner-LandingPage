import React, { useRef, useEffect } from "react";
import { Grid, Typography, Container, Box } from "@mui/material";

import { v4 as uuidv4 } from "uuid";

import image1 from "../resources/landingPageImages/toppng.com-welcome-to-our-wedding-699x582.png";
import image2 from "../resources/landingPageImages/—Pngtree—black hand drawn line side_4980174.png";
import {
  data,
  data2,
  data3,
  data4,
  data5,
  data6,
} from "../datafiles/presentattionPart1";
import theme from "../styles/theme";
import { motion, useAnimation, useInView } from "framer-motion";

// sx object so I do not write the same code 6 times
// the object is fed to the sx prop of MUI component
const sx = {
  [theme.breakpoints.down("md")]: {
    alignItems: "center",
    marginBottom: "1rem",
    textAlign: "center",
  },
};

// helper to add data to DOM from a data file

const addData = (data) => {
  return data.map((data) => (
    <>
      <Typography variant="h4" key={data.title}>
        {data.title}
      </Typography>
      {data.lines.map((line, index) => (
        <Typography varinat="body" key={uuidv4()}>
          {line}
        </Typography>
      ))}
    </>
  ));
};

const AppPresentation = () => {
  const ref = useRef(null);
  const inVeiw = useInView(ref);
  const animation = useAnimation();

  useEffect(() => {
    if (inVeiw) {
      animation.start({
        opacity: 1,
        y: 0,
        transition: {
          type: "spring",
          duration: 1,
        },
      });
      if (!inVeiw) {
        animation.start({
          opacity: 0,
          y: "30vh",
        });
      }
    }
  }, [inVeiw, animation]);

  return (
    <Container
      sx={{ marginTop: "10rem" }}
      ref={ref}
      component={motion.div}
      initial={{
        y: "30vh",
        opacity: 0,
      }}
      animate={animation}
    >
      <Grid container minHeight={"100vh"}>
        <Grid
          item
          xs={12}
          md={4}
          display="flex"
          flexDirection="column"
          alignItems="flex-start"
          justifyContent="center"
          sx={sx}
        >
          {addData(data)}
        </Grid>
        <Grid
          item
          xs={12}
          md={4}
          display="flex"
          flexDirection="column"
          alignItems="center"
          justifyContent="center"
          sx={sx}
        >
          <Box
            component="img"
            src={image1}
            alt="wedding cuple"
            width="100%"
            sx={{ opacity: "50%" }}
          />
        </Grid>
        <Grid
          item
          xs={12}
          md={4}
          display="flex"
          flexDirection="column"
          alignItems="flex-end"
          justifyContent="center"
          sx={sx}
        >
          {addData(data2)}
        </Grid>
        <Grid
          item
          xs={12}
          display="flex"
          flexDirection="column"
          alignItems="center"
          justifyContent="center"
          sx={sx}
        >
          {addData(data3)}
        </Grid>

        <Grid item xs={12} height={100}></Grid>

        <Grid
          item
          xs={12}
          display="flex"
          flexDirection="column"
          alignItems="center"
          justifyContent="center"
          sx={sx}
        >
          {addData(data4, 12, 0)}
        </Grid>
        <Grid
          item
          xs={12}
          md={4}
          display="flex"
          flexDirection="column"
          alignItems="flex-start"
          justifyContent="center"
          sx={sx}
        >
          {addData(data5)}
        </Grid>
        <Grid
          item
          xs={12}
          md={4}
          display="flex"
          flexDirection="column"
          alignItems="center"
          justifyContent="center"
        >
          <Box
            component="img"
            src={image2}
            alt="flowers"
            width="100%"
            sx={{ opacity: "50%" }}
          />
        </Grid>
        <Grid
          item
          xs={12}
          md={4}
          display="flex"
          flexDirection="column"
          alignItems="flex-end"
          justifyContent="center"
          sx={sx}
        >
          {addData(data6)}
        </Grid>
      </Grid>
    </Container>
  );
};

export default AppPresentation;
