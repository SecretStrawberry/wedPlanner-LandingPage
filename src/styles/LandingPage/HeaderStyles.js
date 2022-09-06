import { styled } from "@mui/material";

export const HeaderWrapper = styled("header")(({ theme }) => ({
  width: "100%",
  borderBottom: `1px solid ${theme.palette.line}`,
  padding: "2rem 0 .1rem 0",
}));

export const Navigation = styled("nav")(() => ({
  width: "100%",
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",

  padding: "0 2rem",
}));
