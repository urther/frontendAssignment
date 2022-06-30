import AwardItem from "components/AwardItem";
import { StyledAwardsContainer } from "./styled.awardsContainer";

import appStoreImg from "@assets/images/badge-apple4x.png";
import playStoreImg from "@assets/images/play-store2x.png";
import useFadeIn from "@hooks/useFadeIn";

const AwardsContainer = () => {
  const fadeIn = useFadeIn(3);

  return (
    <StyledAwardsContainer {...fadeIn}>
      <AwardItem
        backgroundImgSrc={playStoreImg}
        title="2018 구글 플레이스토어"
        subTitle="올해의 앱 최우수상 수상"
      />
      <AwardItem
        backgroundImgSrc={appStoreImg}
        title="2018 애플 앱스토어"
        subTitle="오늘의 여행앱 선정"
      />
    </StyledAwardsContainer>
  );
};

export default AwardsContainer;
