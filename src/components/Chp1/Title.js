import React from "react";
import styled from "styled-components/macro";
// 컴포넌트
import { Paragraph } from "../../globalStyles";
// 제1부 로고 이미지
import titleSrc from "../../assets/images/Logo/Chp1Title.svg";
// 인트로 배경 이미지
import bgImg from "../../assets/images/Chp1/inBg.webp";

const Title = () => {
  return (
    <Section background={bgImg}>
      <Container>
        <TitleWrapper>
          <ChapNum>Chapter1</ChapNum>
          <Chp1Title src={titleSrc} alt="위기의 전조" />
          <Paragraph>
            우리나라 국토의 88%를 차지하는 지방이 텅 비어가고 있습니다. 급격한
            인구 감소로 나타나는, 이른바 '지방 소멸' 현상인데요.
          </Paragraph>
          <Paragraph>
            비단 시골 마을에서만 나타나는 것은 아닙니다. 마치 전염병처럼
            중소도시를 넘어 지방 대도시까지 번지고 있습니다.
          </Paragraph>
        </TitleWrapper>
      </Container>
    </Section>
  );
};

export default Title;

// 타이틀과 첫 섹션에 배경 고정
const Section = styled.section`
  background-image: ${(props) => `url(${props.background})`};
  background-repeat: no-repeat;
  background-position: 50% 50%;
  background-size: cover;
  width: 100%;
  height: 100%;
  overflow: hidden;
`;
// 타이틀 섹션
const Container = styled.div`
  position: relative;
  z-index: 2;
  height: 100vh;
  display: flex;
  justify-content: center;
  background: linear-gradient(#00000050 85%, #000000);

  @media screen and (max-width: 425px) {
    height: auto;
  }
`;

// 타이틀을 포함하고 있는 Wrapper
const TitleWrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 172px 0 118.57px;

  @media screen and (max-width: 425px) {
    padding: 198px 0 109.04px;
  }
`;

// 챕터 넘버
const ChapNum = styled.h1`
  font-size: 25px;
  font-weight: 800;
  line-height: 28px;
  text-align: center;
  color: #aaaaaa;
  margin-bottom: 30px;
  flex-wrap: nowrap;
  white-space: nowrap;

  @media screen and (max-width: 768px) {
    font-size: 25px;
    font-weight: 800;
    line-height: 28.37px;
    margin-bottom: 28.36px;
  }

  @media screen and (max-width: 425px) {
    font-size: 16px;
    line-height: 18.16px;
    margin-bottom: 21.96px;
  }
`;

//  챕터 로고
const Chp1Title = styled.img`
  height: 100px;
  margin-bottom: 200px;

  @media screen and (max-width: 768px) {
    height: 100px;
    margin-bottom: 200px;
  }

  @media screen and (max-width: 425px) {
    height: 70px;
    margin-bottom: 210px;
  }

  @media screen and (max-width: 320px) {
    height: 16.5vw;
    margin-bottom: 210px;
  }
`;
