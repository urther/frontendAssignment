import styled from "styled-components";

export const ContentLogoContainer = styled.figure`
  position: relative;
  display: inline;

  img {
    width: 400px;
  }

  figcaption {
    position: absolute;
    top: 275px;
    left: 50%;
    transform: translateX(-50%);
    font-size: 14px;
    color: ${({ theme }) => theme.color.gray};
  }
`;
