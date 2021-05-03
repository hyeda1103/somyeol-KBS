import React, { useState, useEffect } from "react";
import styled from "styled-components/macro";
import _debounce from "lodash.debounce";

// 컴포넌트
import Interview from "../Common/Interview";
import Cartogram from "./Cartogram/Cartogram";
import Graph01 from "./Graphs/Graph01";
import {
  Container,
  Title,
  SubTitle,
  Paragraph,
  Line,
  Underline,
} from "../../globalStyles";
// 인터뷰 데이터
import { INTDataGangrae } from "../../data/INTData";

const Text = ({ background }) => {
  const [width, setWidth] = useState(window.innerWidth);
  const [title, setTitle] = useState(null);

  useEffect(() => {
    const handleResize = _debounce(() => setWidth(window.innerWidth), 300);

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    width >= 425
      ? setTitle(
          <>
            국토 면적 11.8% 수도권…
            <br />
            전체 인구 50% 넘어
          </>
        )
      : width >= 320
      ? setTitle(
          <>
            국토 면적 11.8%
            <br />
            수도권…
            <br />
            전체 인구 50% 넘어
          </>
        )
      : setTitle(<>국토 면적 11.8% 수도권… 전체 인구 50% 넘어</>);
  }, [width]);
  return (
    <Fragment background={background}>
      <Black>
        <Section>
          <Container>
            <TextWrapper>
              <Title>{title}</Title>
              <Paragraph>
                <Line>
                  1960~70년대부터 우리나라는 빠른 성장을 위해 수도권을 중심으로
                  ‘성장 거점 전략’을 펼치기 시작했습니다. 그때부터 시작된
                  산업화와 도시화 영향으로 인구의 상당수가 구직과 창업이
                  상대적으로 쉬운 수도권으로 이동했습니다.
                </Line>
              </Paragraph>
              <Paragraph>
                <Line>
                  이는 숫자로도 명확하게 나타납니다. 1980년대, 수도권은 전체
                  인구의 28%에 불과했습니다. 하지만 2000년에 46.3%, 2010년에는
                  49.2%로 올랐으며, 2019년에 비수도권 인구를 추월해 50%를
                  넘겼습니다.
                </Line>
              </Paragraph>
              <Paragraph style={{ marginBottom: 0 }}>
                <Underline>
                  현재 국토 11.8%에 불과한 땅에 우리나라 2명 중 1명이 살고
                  있습니다.
                </Underline>
              </Paragraph>
              {/* 연도별 수도권 인구비중 그래프 */}
              <SubTitle>수도권 인구 구성비</SubTitle>
              <Graph01 />
              <Paragraph>
                <Line>
                  문제는 그 사이 지역별 인구 분포가 기형적으로 변했다는
                  점입니다. KBS취재진은 카이스트 연구진과 함께, 수도권 인구 집중
                  정도를 확인하기 위해, 통계청 마이크로데이터를 바탕으로
                  우리나라 카토그램 지도를 만들었습니다.
                </Line>
              </Paragraph>
              <Paragraph>
                <Line>
                  카토그램은 인구 비례에 따라 면적과 길이 등이 바뀌는
                  지도입니다. 인구가 많을수록 해당 지역의 크기가 커집니다.
                </Line>
              </Paragraph>
              <Paragraph>
                <Line>
                  우리나라 카토그램 지도를 살펴보면, 전반적으로 강원과 호남권의
                  인구가 상대적으로 매우 적고, 또&nbsp;
                </Line>
                <Underline>
                  시간이 흐를수록 수도권과 비수도권의 불균형도 커지는 것을 알 수
                  있습니다.
                </Underline>
              </Paragraph>
            </TextWrapper>
          </Container>
        </Section>
        {/* 카토그램으로 보는 '대한민국 지도' */}
        <Cartogram />
        {/* 마강래 인터뷰 */}
        <Interview {...INTDataGangrae} />
      </Black>
    </Fragment>
  );
};

export default React.memo(Text);

const Fragment = styled.section`
  background-image: ${(props) => `url(${props.background})`};
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-position: 50% 50%;
  width: 100%;
  height: 100%;
  background-size: cover;
  overflow: hidden;
`;

const Black = styled.section`
  width: 100%;
  height: 100%;
  overflow: hidden;
  background: linear-gradient(#000, transparent 95%);
`;

// 타이틀과 첫 섹션에 배경 고정
const Section = styled.section`
  width: 100%;
  height: 100%;
  overflow: hidden;
`;

const TextWrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 150px 0;

  @media screen and (max-width: 425px) {
    padding: 149px 0 0;
  }
`;
