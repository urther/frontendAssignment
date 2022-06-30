import useCounter from "@hooks/useCounter";
import useFadeIn from "@hooks/useFadeIn";
import { StyledMetrics } from "./styled.metrics";

const Metrics = () => {
  const fadeIn = useFadeIn(2);

  const travelerCount = useCounter(700);
  const reviewCount = useCounter(100);
  const scheduleCount = useCounter(470);

  return (
    <StyledMetrics {...fadeIn}>
      <li>
        <span className="metircs_bold">{travelerCount}만 명</span>의 여행자
      </li>
      <li>
        <span className="metircs_bold">{reviewCount}만 개</span>의 여행 리뷰
      </li>
      <li>
        <span className="metircs_bold">{scheduleCount}만 개</span>의 여행 일정
      </li>
    </StyledMetrics>
  );
};

export default Metrics;
