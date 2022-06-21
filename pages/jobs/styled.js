import styled from "styled-components";
import { primaryColor, whiteColor } from "../../styles/varuables";

export const Content = styled.div`
  position: relative;
  width: 789px;
  height: 484px;
  margin-top: 17px;
  background: ${whiteColor};
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-style: solid;
  border-width: 2px;
  border-image: linear-gradient(
      to left top,
      ${primaryColor} 0%,
      ${whiteColor} 100px,
      #fff 50%,
      #fff calc(100% - 100px),
      ${primaryColor} 100%
    )
    10;

  @media screen and (max-width: 376px) {
    width: 360px;
    height: 744px;
    background: ${whiteColor};
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  }
`;
export const VacancyTitile = styled.div`
  width: 376px;
  height: 34px;
  margin: 15px 393px 15px 20px;
  font-family: "Ubuntu";
  font-style: normal;
  font-weight: 700;
  font-size: 24px;
  line-height: 34px;
  color: #121212;

  @media screen and (max-width: 376px) {
    width: 251px;
    height: 18px;
    margin: 17px 21px 21px 16px;
    font-family: "Ubuntu";
    font-style: normal;
    font-weight: 700;
    font-size: 16px;
    line-height: 18px;
    color: #121212;
  }
`;

export const Accordion = styled.div`
  width: 749px;
  height: 400px;
  margin: 20px 20px 15px 20px;
  padding: 0;

  @media screen and (max-width: 376px) {
    width: 322px;
    height: 672px;
    margin: 20px 19px 16px 19px;
    padding: 0;
    line-height: 28px;
  }
`;

export const Paragraf = styled.p`
  margin-top: 35px;
  margin-bottom: 35px;
  font-weight: 700;
  color: rgba(0, 0, 0, 0.7);

  @media screen and (max-width: 376px) {
    margin-top: 45px;
    margin-bottom: 45px;
  }
`;

export const Text = styled.span`
  font-family: "Inter";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 28px;
  color: rgba(0, 0, 0, 0.7);
`;

export const Ul = styled.ul`
  li {
    font-family: "Inter";
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 28px;
    color: rgba(0, 0, 0, 0.7);
  }
`;
export const ItSector = styled.span`
  display: block;
  font-family: "Inter";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 28px;
  color: rgba(0, 0, 0, 0.7);
`;

export const Message = styled.div`
  position: absolute;
  font-size: 24px;
  color: red;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;
