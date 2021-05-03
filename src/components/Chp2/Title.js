import React from "react";
import styled from "styled-components/macro";
// 컴포넌트
import { Paragraph, Line, Underline } from "../../globalStyles";
// 제2부 로고 이미지
import titleSrc from "../../assets/images/Logo/Chp2Title.svg";
// 인트로 배경 이미지
import bgImg from "../../assets/images/Chp2/inBg.webp";

const Title = () => {
  return (
    <Section background={bgImg}>
      <Container>
        <TitleWrapper>
          <ChapNum>Chapter2</ChapNum>
          <Chp2Title src={titleSrc} alt="쏠림과 빨림" />
          <Paragraph>
            <Line>
              지방에 살던 사람들은 전부 어디로 갔을까요. 저출산·고령화로 인한
              ‘자연적 감소’ 탓도 있겠지만, 보다 주된 요인은 인구 유출, ‘사회적
              감소’입니다.&nbsp;
            </Line>
            <Underline>특히, 수도권으로의 인구 유출이 심각합니다.</Underline>
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
  padding: 172px 0 176px;

  @media screen and (max-width: 768px) {
    padding: 169px 0 179px;
  }

  @media screen and (max-width: 425px) {
    padding: 197px 0 259px;
  }
`;

// 챕터 넘버
const ChapNum = styled.h1`
  font-size: 1.563rem;
  font-weight: 800;
  line-height: 1.75rem;
  text-align: center;
  color: #aaaaaa;
  margin-bottom: 28px;
  flex-wrap: nowrap;
  white-space: nowrap;

  @media screen and (max-width: 768px) {
    font-size: 25px;
    font-weight: 800;
    line-height: 28.37px;
    margin-bottom: 28px;
  }

  @media screen and (max-width: 425px) {
    font-size: 16px;
    line-height: 18.16px;
    margin-bottom: 22px;
  }
`;

//  챕터 로고
const Chp2Title = styled.img`
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
