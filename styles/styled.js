import styled from "styled-components";

export const Main = styled.main`
  width: 1440px;
  height: 1472px;
  padding: 100px 0 100px 120px;

  @media screen and (max-width: 376px) {    
      box-sizing: border-box;   
      width: 375px;
      padding: 50px 24px 20px 24px;    
`;

export const Paragraf = styled.p`
  margin: 0;
  font-family: "Inter";
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 22px;
  color: #001d6b;

  @media screen and (max-width: 376px) {
    width: 327px;
    height: 19px;
    margin: 0;
    font-size: 16px;
    line-height: 19px;
    color: #001d6b;
  }
`;

export const H1 = styled.h1`
  width: 379px;
  margin: 16px 0 0 0;
  font-family: "Ubuntu";
  font-style: normal;
  font-weight: 700;
  font-size: 40px;
  line-height: 50px;

  @media screen and (max-width: 376px) {
    width: 328px;
    height: 34px;
    margin: 16px 0 0 0;
    font-size: 24px;
    line-height: 34px;
    color: #121212;
  }
`;

export const Title = styled.div`
  height: 28px;
  margin-top: 60px;

  @media screen and (max-width: 376px) {
    height: 28px;
    margin-top: 32px;
    overflow: hidden;
  }
`;

export const TitleItem = styled.span`
  display: inline-block;
  height: 28px;
  font-family: "Inter";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 28px;
  margin-left: 40px;

  @media screen and (max-width: 376px) {
    display: inline;
    margin-left: 40px;
  }
`;

export const TitleFirstItem = styled.span`
  display: inline-block;
  height: 28px;
  font-family: "Inter";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 28px;

  @media screen and (max-width: 376px) {
    display: inline;
    white-space: nowrap;
  }
`;

export const Section = styled.section`
  display: flex;
  width: 100%;
  margin-top: 15px;

  @media screen and (max-width: 376px) {
    flex-direction: column;
  }
`;

export const Items = styled.div`
  width: 789px;

  @media screen and (max-width: 376px) {
    width: 327px;
  }
`;

export const Aside = styled.aside`
  margin: 12px 0 0 32px;

  @media screen and (max-width: 376px) {
    margin: 32px 0 0 0px;
    padding: 0 24px 24px 20px;
  }
`;

export const FirstRow = styled.div`
  font-family: "Inter";
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 22px;
  color: #001d6b;

  @media screen and (max-width: 376px) {
    width: 327px;
    height: 19px;
    font-size: 16px;
    line-height: 19px;
    color: #001d6b;
  }
`;

export const SecondRow = styled.div`
  margin-top: 16px;

  @media screen and (max-width: 376px) {
    margin-left: 3.4px;
  }
`;

export const Checked = styled.div`
  @media screen and (max-width: 376px) {
    margin-left: 3.4px;
  }
`;

export const CheckedImg = styled.img`
  width: 17.6px;
  height: 13.4px;
`;

export const CheckImageText = styled.span`
  display: inline-block;
  margin-left: 13px;
  font-family: "Inter";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 28px;
  color: rgba(0, 0, 0, 0.7);
`;

export const LastCheckImageText = styled.span`
  display: inline-block;
  margin-left: 13px;
  font-family: "Inter";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 28px;
  color: rgba(0, 0, 0, 0.7);

  @media screen and (max-width: 376px) {
    width: 233px;
    padding: 2px;
  }
`;

export const LastCheckedImg = styled.img`
  width: 17.6px;
  height: 13.4px;

  @media screen and (max-width: 376px) {
    vertical-align: top;
    margin-top: 10px;
  }
`;
