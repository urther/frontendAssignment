import { StyledAward } from "./styled.awardItem";

const AwardItem = ({ imgSrc, title, subTitle }: AwardsProps) => {
  return (
    <StyledAward>
      <img src={imgSrc} alt={`${title} 이미지`} />
      <div>
        {title}
        <br />
        {subTitle}
      </div>
    </StyledAward>
  );
};

export default AwardItem;
