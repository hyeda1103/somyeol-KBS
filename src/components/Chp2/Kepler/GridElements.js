import styled from "styled-components/macro";

export const Section = styled.section`
  width: 100%;
  height: 100%;
  overflow: hidden;
`;

export const InfoWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  color: #fff;
  padding-bottom: 151px;

  @media screen and (max-width: 425px) {
    padding-bottom: 103px;
  }
`;

export const InfoRow = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Column1 = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Paragraph = styled.div`
  text-align: justify;
  font-size: 20px;
  color: #fff;
  line-height: 40px;
  white-space: pre-line;
  width: 600px;
  margin-bottom: 40px;

  @media screen and (max-width: 768px) {
    margin-bottom: 20px;
  }

  @media screen and (max-width: 605px) {
    width: 80vw;
  }

  @media screen and (max-width: 425px) {
    font-size: 16px;
    line-height: 30px;
    width: 350px;
    margin-bottom: 28px;
  }

  @media screen and (max-width: 350px) {
    font-size: 16px;
    line-height: 30px;
    width: 80vw;
  }
`;

export const Line = styled.span`
  text-decoration: none;
  color: #fff;
  font-size: 20px;
  line-height: 40px;

  @media screen and (max-width: 425px) {
    font-size: 16px;
    line-height: 30px;
  }
`;

export const Underline = styled.span`
  text-decoration: none;
  color: #fff;
  font-size: 20px;
  line-height: 40px;
  background-repeat: no-repeat;
  transition: all 0.4s ease;
  background-image: linear-gradient(
    180deg,
    transparent 0%,
    rgba(255, 138, 0, 0.7) 0
  );
  background-size: 100% 100%;

  @media screen and (max-width: 425px) {
    font-size: 16px;
    line-height: 30px;
  }
`;

export const MapWrapper = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  z-index: 1;
  width: 100%;
  height: 100%;
  margin-top: 40px;
  justify-content: center;
  align-items: center;

  @media screen and (max-width: 425px) {
    display: none;
  }
`;

export const ReferenceWrapper = styled.div`
  width: 910px;
  display: flex;
  flex-direction: column;
  color: #aaaaaa;
  font-family: "Noto Serif KR", serif;
  text-align: right;
  margin-top: 20.5px;

  span {
    font-size: 13px;
    line-height: 18.5px;
  }

  @media screen and (max-width: 910px) {
    width: 93.75vw;
  }

  @media screen and (max-width: 768px) {
    margin-top: 20px;
  }

  @media screen and (max-width: 425px) {
    span {
      font-size: 11px;
      line-height: 15px;
    }
  }
`;

export const TitleSection = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: #fff;
`;

export const Title = styled.h1`
  font-size: 30px;
  font-weight: 800;
  line-height: 50px;
  text-align: center;
  margin-bottom: 80px;
  width: 590px;

  @media screen and (max-width: 425px) {
    font-size: 22px;
    line-height: 30px;
    width: 75vw;
    margin-bottom: 50px;
  }
`;
