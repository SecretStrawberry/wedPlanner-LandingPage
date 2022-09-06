import React from "react";
import {
  ImgWrapper,
  Wrapper,
} from "../styles/LandingPage/AppPresentationStyles";

const AppPresentation = ({ img, width, data, data2, data3, rows, columns }) => {
  return (
    <Wrapper>
      {/* data, data2, data3 will display the text where is specified in the function call in the LandingPage component */}
      {data}
      {data2}
      {data3}
      {/* we specify for ImgWrapper all the data it needs with props when called in the LandingPage
      if rows and columns are not specified the default to rows & columns: 1 / -1
      */}
      <ImgWrapper src={img} width={width} rows={rows} columns={columns} />
    </Wrapper>
  );
};

export default AppPresentation;
