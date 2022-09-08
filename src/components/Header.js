import React from "react";

import { AppBar, Grid, Typography, Button } from "@mui/material";
import theme from "../styles/theme";

const Header = () => {
  return (
    <AppBar elevation={0} position="sticky">
      <Grid container rowGap={1} p={2}>
        <Grid item xs={12}>
          <Typography variant="h1" textAlign="center" color="secondary">
            In Perpetuum
          </Typography>
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
