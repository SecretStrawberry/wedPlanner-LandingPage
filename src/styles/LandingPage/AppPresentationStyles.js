import { styled } from "@mui/material";

export const Wrapper = styled("div")(() => ({
  display: "grid",
  gridTemplateColumns: "repeat(3, 1fr)",
  gridTemplateRows: "repeat(6, 9rem)",
  alignItems: "center",
  justifyItems: "center",

  marginTop: "7rem",

  overflow: "hidden",
}));

export const TextWrapper = styled("div")(({ rows, columns, height }) => ({
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-around",
  alignItems: "center",

  gridRow: rows,
  gridColumn: columns,

  height: height ? height : "60%",
}));

export const ImgWrapper = styled("img")(({ rows, columns }) => ({
  gridRow: rows ? rows : "1 / -1",
  gridColumn: columns ? columns : "1 / -1",
  opacity: "50%",
}));
