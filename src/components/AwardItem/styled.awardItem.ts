import styled from "styled-components";

export const StyledAward = styled.li<{ backgroundImg: string }>`
  background: url(${({ backgroundImg }) => backgroundImg});
  background-position: left top;
  background-repeat: no-repeat;
  background-size: 54px 54px;

  padding: 5px 0px 10px 62px;
  margin-right: 68px;

  font-size: 14px;
  line-height: 22px;
  color: ${({ theme }) => theme.color.darkgray};
  font-weight: 700;
`;
