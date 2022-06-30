import { StyledAward } from "./styled.awardItem";
import { AwardsProps } from "./awardItem.types";

const AwardItem = ({ backgroundImgSrc, title, subTitle }: AwardsProps) => {
  return (
    <StyledAward backgroundImg={backgroundImgSrc}>
      {title}
      <br />
      {subTitle}
    </StyledAward>
  );
};

export default AwardItem;
