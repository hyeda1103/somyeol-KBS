import styled from "styled-components/macro";

export const Section = styled.section`
  height: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: #fff;
  width: 100%;
  overflow: hidden;

  @media screen and (max-width: 425px) {
    padding-top: 100px;
  }
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const TextWrapper = styled.div`
  color: #fff;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Title = styled.h1`
  font-size: 30px;
  font-weight: 800;
  line-height: 41px;
  text-align: center;
  margin-bottom: 50px;
  flex-wrap: nowrap;

  @media screen and (max-width: 425px) {
    font-size: 22px;
    line-height: 30px;
    width: 75vw;
  }
`;

export const Guide = styled.div`
  font-size: 20px;
  line-height: 27px;
  text-align: center;
  color: #aaaaaa;
  margin: 30px 0 35px 0;
  width: 620px;

  @media screen and (max-width: 625px) {
    width: 80vw;
  }

  @media screen and (max-width: 425px) {
    width: 300px;
    margin: 0 0 20px 0;
    font-size: 16px;
    line-height: 30px;
  }

  @media screen and (max-width: 300px) {
    width: 80vw;
  }
`;

export const CartogramSVG = styled.svg`
  display: flex;
  position: relative;
  justify-content: center;
  align-items: center;
  width: 658px;
  height: 658px;

  @media screen and (max-width: 658px) {
    width: 100vw;
    height: 100vw;
  }
`;

export const ControlBarSVG = styled.svg`
  justify-content: center;
  align-items: center;
  height: 60px;
  margin-bottom: 40px;
  display: inline-block;
  position: relative;
  width: calc(70px * 8);
  overflow: hidden;

  @media screen and (max-width: 565px) {
    width: 100vw;
    margin-bottom: 30px;
  }
`;

export const ReferenceWrapper = styled.div`
  width: 658px;
  display: flex;
  flex-direction: column;
  color: #aaaaaa;
  font-family: "Noto Serif KR", serif;
  text-align: right;
  margin-top: 20.5px;
  margin-bottom: 150px;

  span:nth-child(1) {
    font-size: 15px;
    line-height: 21.5px;
    margin-bottom: 2px;
  }

  span:nth-child(2) {
    font-size: 13px;
    line-height: 18.5px;
  }

  @media screen and (max-width: 910px) {
    width: 93.75vw;
  }

  @media screen and (max-width: 768px) {
  }

  @media screen and (max-width: 425px) {
    margin-top: 20px;
    margin-bottom: 103px;
    span:nth-child(1) {
      font-size: 13px;
      line-height: 17px;
      margin-bottom: 2px;
    }

    span:nth-child(2) {
      font-size: 11px;
      line-height: 15px;
    }
  }
`;
