import { styled, Button } from "@mui/material";

export const HeroWrapper = styled("div")(() => ({
  display: "grid",
  gridTemplateColumns: "1fr 1fr",
  gridTemplateRows: "repeat(5, 9rem)",
  alignItems: "center",
  justifyItems: "center",

  marginTop: "2rem",
}));

export const TextWrapper = styled("div")(() => ({
  gridRow: "1 / -1",
  gridColumn: "1",

  display: "flex",
  flexDirection: "column",
  alignItems: "flex-start",
  justifyContent: "center",

  padding: "0 5rem",

  width: "100%",
  height: "100%",
}));

export const ImgWrapper = styled("div")(() => ({
  gridColumn: "1 / 3",
  gridRow: "1 / 6",
  justifySelf: "end",
  marginRight: "8rem",
}));
