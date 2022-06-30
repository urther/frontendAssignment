import AwardsContainer from "@components/AwardsContainer";
import ContentLogo from "@components/ContentLogo";
import Metrics from "@components/Metrics";

import { SectionContainer } from "styled.app";

function App() {
  return (
    <SectionContainer>
      <h2 className="srOnly">트리플</h2>
      <ContentLogo />
      <div className="statistic">
        <Metrics />
        <AwardsContainer />
      </div>
    </SectionContainer>
  );
}

export default App;
