import React from "react";
import styled from "styled-components/macro";
// 컴포넌트
import { Paragraph, Underline, Line } from "./../CommonStyles";
// 제3부 로고 이미지
import titleSrc from "../../assets/images/Logo/Chp3Title.svg";
// 인트로 배경 이미지
import bgImg from "../../assets/images/Chp3/inBg.webp";

const Title = () => {
  return (
    <Section background={bgImg}>
      <Container>
        <TitleWrapper>
          <ChapNum>Chapter3</ChapNum>
          <Chp3Title src={titleSrc} alt="공생과 공멸사이" />
          <Paragraph>
            <Line>
              수도권 공화국. 국토 11.8%에 불과한 이곳에 인구 전체의 절반이 살고
              있습니다. 사람이 살고 싶은 곳도, 주로 활동하고 싶은 곳도, 결국
              수도권입니다.
            </Line>
          </Paragraph>
          <Paragraph>
            <Line>
              하지만 모두가 수도권에만 사는 것이 과연 바람직할까요. 끊이지 않는
              집중은 수도권 사람들에게도 고통을 줄 뿐만 아니라,&nbsp;
            </Line>
            <Underline>
              모두가 공멸할 수 있는 ‘위험한 시나리오’로 이어질 수 있습니다.
            </Underline>
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
  padding: 172px 0 40px;

  @media screen and (max-width: 425px) {
    padding: 172px 0 123px;
  }
`;

// 챕터 넘버
const ChapNum = styled.h1`
  font-size: 25px;
  font-weight: 800;
  line-height: 28px;
  text-align: center;
  color: #aaaaaa;
  margin-bottom: 45.78px;
  white-space: nowrap;

  @media screen and (max-width: 768px) {
    font-size: 25px;
    font-weight: 800;
    line-height: 28px;
    margin-bottom: 43.28px;
  }

  @media screen and (max-width: 425px) {
    font-size: 16px;
    line-height: 18.16px;
    margin-bottom: 31.89px;
  }
`;

//  챕터 로고
const Chp3Title = styled.img`
  width: 528.39px;
  margin-bottom: 200px;

  @media screen and (max-width: 768px) {
    width: 553.95px;
    margin-bottom: 178.02px;
  }

  @media screen and (max-width: 555px) {
    width: 85vw;
    margin-bottom: 197.63px;
  }
`;
