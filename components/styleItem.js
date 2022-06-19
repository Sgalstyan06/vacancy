import styled from "styled-components";
import { primaryColor, whiteColor } from "../styles/varuables";

export const MainItem = styled.div`
  position: relative;
  width: 100%;
  height: 60px;
  margin-top: 17px;
  padding-left: 0;
  background: ${whiteColor};
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  overflow: hidden;
  border-width: 2px;
  border-style: solid;
  border-image: linear-gradient(
      to left top,
      ${primaryColor} 0%,
      ${whiteColor} 100px,
      #fff 50%,
      #fff calc(100% - 100px),
      ${primaryColor} 100%
    )
    10;
`;

export const Item = styled.div`
  position: relative;

  @media screen and (max-width: 376px) {
    width: 327px;
    height: 60px;
  }
`;

export const Anchor = styled.a`
  display: block;
  text-decoration: none;
  width: 100%;
  height: 100%;
`;

export const VacancyTitle = styled.span`
  display: inline-block;
  width: 376px;
  height: 34px;
  margin: 16.4px 0 13px 20px;
  font-family: "Ubuntu";
  font-style: normal;
  font-weight: 700;
  font-size: 24px;
  line-height: 34px;
  color: #121212;

  @media screen and (max-width: 376px) {
    width: 251px;
    height: 18px;
    font-family: "Ubuntu";
    font-style: normal;
    font-weight: 700;
    font-size: 16px;
    line-height: 18px;
    color: #121212;
  }
`;

export const Btn = styled.div`
  position: absolute;
  width: 20px;
  height: 20px;
  left: 744px;
  top: 22px;
  z-index: 5;

  @media screen and (max-width: 376px) {
    position: absolute;
    width: 20px;
    height: 20px;
    left: 292px;
    top: 18px;
    z-index: 5;
  }
`;

export const Button = styled.button`
  border: none;
  width: 20px;
  line-height: 22px;
  color: #1dca9d;
  font-size: 28px;
  background: ${whiteColor};
  padding: 0;
`;

export const Descript = styled.div`
  position: relative;
  width: 789px;
  height: 504px;
  margin-top: 17px;
  background: ${whiteColor};
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-width: 2px;
  border-style: solid;
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
    margin-top: 17px;
    width: 327px;
    height: 744px;
    background: ${whiteColor};
    box-shadow: 0px 3.45119px 3.45119px rgba(0, 0, 0, 0.25);
  }
`;

export const AccordContent = styled.div`
  width: 749px;
  height: 504px;
  margin: 20px 20px 15px 20px;
  padding: 0;

  @media screen and (max-width: 376px) {
    width: 289px;
    height: 672px;
    margin: 12px 19px 15px 20px;
    padding: 0;
  }
`;

export const AccordionText = styled.span`
  font-family: "Inter";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 28px;
  color: rgba(0, 0, 0, 0.7);
`;

export const AccordionUl = styled.ul`
  li {
    font-family: "Inter";
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 28px;
    color: rgba(0, 0, 0, 0.7);
  }
`;

export const BlockP = styled.p`
  margin-top: 30px;
  margin-bottom: 30px;
  font-weight: 700;
  color: rgba(0, 0, 0, 0.7);
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
