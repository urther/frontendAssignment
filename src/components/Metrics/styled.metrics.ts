import styled from "styled-components";

export const StyledMetrics = styled.ul`
  li {
    font-size: 36px;
    letter-spacing: -1px;
    color: ${({ theme }) => theme.color.black};
    margin-bottom: 20px;
  }

  .metircs_bold {
    font-weight: 700;
  }
`;
