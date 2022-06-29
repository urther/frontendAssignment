import AwardItem from "components/AwardItem";
import React from "react";

const AwardsContainer = () => {
  return (
    <ul>
      <AwardItem
        imgSrc=""
        title="2018 구글 플레이스토어"
        subTitle="올해의 앱 최우수상 수상"
      />
      <AwardItem
        imgSrc=""
        title="2018 애플 앱스토어"
        subTitle="오늘의 여행앱 선정"
      />
    </ul>
  );
};

export default AwardsContainer;
