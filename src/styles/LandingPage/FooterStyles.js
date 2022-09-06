import { styled } from "@mui/material";

export const Wrapper = styled("footer")(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  backgroundColor: theme.palette.secondary.main,

  padding: "4rem 0",
}));

export const FooterNav = styled("div")(() => ({
  display: "flex",
  width: "80%",
  alignItems: "center",
  justifyContent: "space-between",
}));
