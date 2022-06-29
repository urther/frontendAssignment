import React from "react";

import { ContentLogoContainer } from "./styled.contentLogo";
import tripleLogo from "@assets/images/triple2x.png";

const ContentLogo = () => {
  return (
    <ContentLogoContainer>
      <img src={tripleLogo} alt="" />
      <figcaption>2021년 12월 기준</figcaption>
    </ContentLogoContainer>
  );
};

export default ContentLogo;
