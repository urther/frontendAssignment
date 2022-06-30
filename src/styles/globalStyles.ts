import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

const GlobalStyles = createGlobalStyle`
  ${reset}

  @import url('https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@300;400;500;700&display=swap');
  
  body{
    min-width:1200px;
    font-family: 'Noto Sans KR', sans-serif;
  }

  @keyframes fade-in{
    0% {
      transform: translateY(7px);
    }
    100% {
      transform: translateY(0px);
    }
  }
`;

export default GlobalStyles;
