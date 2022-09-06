import React from "react";
import Header from "../../components/Header";
import { Box, Typography } from "@mui/material";

import theme from "../../styles/LandingPage/theme";
import { TextWrapper } from "../../styles/LandingPage/AppPresentationStyles";
import Hero from "../../components/Hero";
import AppPresentation from "../../components/AppPresentation";

import img from "../../resources/landingPageImages/toppng.com-welcome-to-our-wedding-699x582.png";
import img2 from "../../resources/landingPageImages/—Pngtree—black hand drawn line side_4980174.png";

import {
  data,
  data2,
  data3,
  data4,
  data5,
  data6,
} from "../../datafiles/presentattionPart1";
import Footer from "../../components/Footer";

// Adding dinamicly data from an array folowing the styled template to a css grid that has been declared before in AppPresentationStyles
// THE ORDER OF THE PARAMETTER IS IMPORTANT
// if variant1 & variant2 not specified the defaults will take place
// data = array
// rows = rows in css grid where the component should stay (string)
// columns = columns in css grid where the component should stay (string)
// height = height in css component (string) - if not specified it`s defaultin to 60%
// variant1 = variant of typogrphy for the title (string)
// variant2 = variant of typography for the lines (string)
const addData = (
  data,
  rows,
  columns,
  height,
  variant1 = "h4",
  variant2 = "body2"
) => {
  return data.map((data, index) => {
    return (
      <TextWrapper
        rows={rows}
        columns={columns}
        key={data.title}
        height={height}
      >
        <Typography variant={variant1} key={index}>
          {data.title}
        </Typography>
        {data.lines.map((line, index) => {
          return (
            <Typography variant={variant2} key={index}>
              {line}
            </Typography>
          );
        })}
      </TextWrapper>
    );
  });
};

const LandingPage = () => {
  return (
    <>
      <Box
        sx={{
          backgroundColor: `${theme.palette.primary.main}`,
          padding: "0 5rem 10rem 5rem",
        }}
      >
        <Header />
        <Hero />
        <AppPresentation
          img={img}
          //call addData fuction as specified to display the text on the screen
          data={addData(data, "3 / 6", "1 / 2")}
          data2={addData(data2, "1 / 4", "2 / 3")}
          data3={addData(data3, "3 / 6", "3 / 4")}
        />
        <AppPresentation
          // width, rows, columns props are for the image to position it and size it wherw its nedded
          img={img2}
          width="80%"
          rows="4 / 7"
          columns="2 / 3"
          data={addData(data4, "3 / 6", "1 / 2", "30%")}
          data2={addData(data5, "1 / 4", "2 / 3", "20%")}
          data3={addData(data6, "3 / 6", "3 / 4", "30%")}
        />
      </Box>
      <Footer />
    </>
  );
};

export default LandingPage;
