import React from "react";
import { Grid, Button } from "@mui/material";
import theme from "../styles/theme";

const Footer = () => {
  return (
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
  );
};

export default Footer;
