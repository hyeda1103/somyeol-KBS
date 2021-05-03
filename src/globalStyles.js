import styled, { createGlobalStyle } from "styled-components/macro";

export const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: 'Noto Serif KR' serif, 'NanumSquare', sans-serif;
    }

    html, body {
        overflow-x: hidden;
        font-family: 'NanumSquare';
    }
`;

export const Section = styled.section`
  background-image: ${(props) => `url(${props.background})`};
  background-repeat: no-repeat;
  background-position: 50% 50%;
  background-attachment: fixed;
  width: 100%;
  background-size: cover;
`;

export const Black = styled.section`
  width: 100%;
  height: 100%;
  overflow: hidden;
  background: linear-gradient(#000000, transparent 95%);
`;

export const Container = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;

  @media screen and (max-width: 425px) {
    height: auto;
  }
`;

export const TextWrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 151px 0;

  @media screen and (max-width: 425px) {
    padding: 151px 0 103px;
  }
`;

// 제목
export const Title = styled.h1`
  font-size: 50px;
  font-weight: 800;
  line-height: 65px;
  letter-spacing: 1.6px;
  text-align: center;
  margin-bottom: 80px;
  color: #fff;

  @media screen and (max-width: 425px) {
    font-size: 35px;
    line-height: 50px;
    letter-spacing: 1.6px;
    margin-bottom: 60px;
    width: 100vw;
  }
`;

// 소제목
export const SubTitle = styled.h1`
  font-size: 30px;
  font-weight: 800;
  line-height: 50px;
  text-align: center;
  margin: 80px 0 0;
  color: #fff;
  width: 590px;

  @media screen and (max-width: 425px) {
    margin: 50px 0 0;
    font-size: 22px;
    line-height: 30px;
    width: 100vw;
  }
`;

// 문단
export const Paragraph = styled.div`
  text-align: justify;
  font-size: 20px;
  color: #fff;
  line-height: 40px;
  white-space: pre-line;
  width: 600px;
  margin-bottom: 20px;

  &:last-child {
    margin-bottom: 0;
  }

  @media screen and (max-width: 605px) {
    width: 80vw;
  }

  @media screen and (max-width: 425px) {
    font-size: 16px;
    line-height: 30px;
    width: 350px;
  }

  @media screen and (max-width: 350px) {
    font-size: 16px;
    line-height: 30px;
    width: 80vw;
  }
`;

// 밑줄처리된 문장
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

// 일반 문장
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

// 레퍼런스 (그래프 출처, 설명)
export const ReferenceWrapper = styled.div`
  width: 910px;
  right: 0;
  display: flex;
  flex-direction: column;
  color: #aaaaaa;
  font-family: "Noto Serif KR", serif;
  text-align: right;
  margin-top: 20.5px;

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
    margin-top: 20px;
  }

  @media screen and (max-width: 425px) {
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

export const ReferenceWrapper02 = styled.div`
  width: 910px;
  display: flex;
  flex-direction: column;
  color: #aaaaaa;
  font-family: "Noto Serif KR", serif;
  text-align: right;
  margin-top: 20.5px;
  margin-bottom: 80px;

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
    margin-bottom: 50px;
    span {
      font-size: 11px;
      line-height: 15px;
    }
  }
`;
