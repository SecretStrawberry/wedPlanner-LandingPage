import { Button, styled } from "@mui/material";

export const NavButton = styled(Button)(() => ({
  fontSize: "1.4rem",
}));

export const CallToActionButton = styled(Button)(({ theme }) => ({
  gridRow: "5 / 6",
  gridColumn: "1 / 3",
  border: `1px solid ${theme.palette.line}`,
  fontSize: "2rem",

  padding: "1rem 10rem",
}));
