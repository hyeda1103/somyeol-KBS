import React, { useState, useEffect } from "react";
import styled from "styled-components/macro";
import _debounce from "lodash.debounce";

// 컴포넌트
import ExtinctionMap from "./Map/ExtinctionMap/ExtinctionMap";
import Interview from "../Common/Interview";
import Graph from "./Graph";
import {
  Title,
  SubTitle,
  Container,
  Paragraph,
  Line,
  Underline,
} from "../../globalStyles";

// 인터뷰 데이터
import { INTDataSangho } from "../../data/INTData";

class Grid extends React.Component {
  render() {
    return (
      <GridLayout>
        <ColorLayout>
          <div>지방소멸 위험지수</div>
          <div style={{ color: "#007200" }}>매우 낮음</div>
          <div style={{ color: "#85bf4c" }}>보통</div>
          <div style={{ color: "#ffff33" }}>주의</div>
          <div style={{ color: "#ff8433" }}>위험</div>
          <div style={{ color: "#e20707" }}>고위험</div>
        </ColorLayout>
        <IndexLayout>
          <div>1.5</div>
          <div>1.0</div>
          <div>0.5</div>
          <div>0.2</div>
        </IndexLayout>
      </GridLayout>
    );
  }
}

const Text = ({ background }) => {
  const [width, setWidth] = useState(window.innerWidth);
  const [title, setTitle] = useState(null);
  const [graph1, setGraph1] = useState(null);

  useEffect(() => {
    const handleResize = _debounce(() => setWidth(window.innerWidth), 300);

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    width >= 320
      ? setTitle(
          <>
            전국 시군구 46%…
            <br />
            30년 뒤, ‘소멸 위험’
          </>
        )
      : setTitle(`전국 시군구 46%… 30년 뒤, ‘소멸 위험’`);

    width >= 340
      ? setGraph1(<>전국 시도별 소멸위험 자치단체 현황</>)
      : setGraph1(
          <>
            전국 시도별 소멸위험
            <br />
            자치단체 현황
          </>
        );
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
                  학생이 줄어든 학교가 몇 년을 못 버티고 문을 닫듯, 사람이 살지
                  않고 빈 집만 늘어나는 마을은 머지않아 사라질 것입니다.
                </Line>
              </Paragraph>
              <Paragraph>
                <Line>
                  앞으로 30년 뒤 대한민국은 어떤 모습일까. 지방소멸 위험지수라는
                  것이 있습니다. 한 지역의 젊은 여성 인구를 65살 이상 고령인구로
                  나눈 값입니다.
                </Line>
              </Paragraph>
              <Paragraph style={{ marginBottom: 0 }}>
                <Underline>
                  이 값이 0.5 아래로 내려가면, 인구 감소로 자치단체의 기능을
                  상실해 30년 뒤 사라질 가능성이 높은 것으로 판단
                </Underline>
                <Line>합니다.</Line>
              </Paragraph>
              {/* 지방소멸 위험지수 표 */}
              <Grid />
              <Paragraph>
                <Line>한국고용정보원 조사 결과, &nbsp;</Line>
                <Underline>
                  지난해 5월 기준 전국 228개 시군구 가운데 42%가 '소멸
                  위험지역'으로 분류
                </Underline>
                <Line>
                  됐습니다. 2014년 79곳에서, 2016년 84곳, 2018년 89곳으로 늘다가
                  지난해 105곳을 기록했습니다.
                </Line>
              </Paragraph>
              <Paragraph>
                <Underline>
                  105곳의 인구 소멸 위험지역 가운데 92%인 97곳은 비수도권인 지방
                </Underline>
                <Line>
                  이었습니다. 현재 그 지수가 가장 높은 곳은 경북 군위군(0.12),
                  경북 의성군(0.13), 전남 고흥군(0.13), 경남 합천군(0.14)
                  등입니다.
                </Line>
              </Paragraph>
              <Paragraph>
                <Line>특히,&nbsp;</Line>
                <Underline>
                  소멸 위험지역은 최근 수년 사이 '군' 단위에서 '시·구' 단위로
                  늘어나고 있습니다.
                </Underline>
                <Line>
                  &nbsp;2014년 소멸위험 지역 가운데 시 단위 지역은 11곳이었지만,
                  2020년에는 28곳으로 늘었습니다.
                </Line>
              </Paragraph>
              <Paragraph style={{ marginBottom: 0 }}>
                <Line>
                  시 단위에선 전북 김제시(0.24)가 가장 높았고, 경북
                  문경시(0.25), 경남 밀양시(0.28)가 그 뒤를 이었습니다.
                  광역자치단체인 부산 영도구(0.37), 부산 동구(0.44), 부산 중구
                  (0.45), 부산 서구(0.48), 대구 서구 (0.50) 등도 포함됐습니다.
                </Line>
              </Paragraph>
              {/* 시*도 단위의 소멸 위험지역 그래프 */}
              <SubTitle>{graph1}</SubTitle>
              <Graph />
            </TextWrapper>
          </Container>
        </Section>
        {/* 우리 동네 소멸위험 지도 */}
        <ExtinctionMap />
        {/* 이상호 국토연구원장 인터뷰 */}
        <Interview {...INTDataSangho} />
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
  background: linear-gradient(transparent 95%, #000);
  padding-bottom: 300px;

  @media screen and (max-width: 425px) {
    padding-bottom: 200px;
  }
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
  padding: 128px 0 150px;

  @media screen and (max-width: 425px) {
    padding: 100px 0;
  }
`;

const GridLayout = styled.div`
  justify-content: center;
  align-items: center;
  margin: 50px 0;

  @media screen and (max-width: 425px) {
    margin: 20px 0;
  }
`;

const ColorLayout = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 120px);
  grid-gap: 0px;
  width: 100%;
  border: none;
  color: rgba(170, 170, 170, 1);
  text-align: center;
  font-size: 18px;
  font-weight: 800;
  line-height: 20px;
  justify-content: center;

  div {
    border: 1px solid rgba(170, 170, 170, 1);
    padding: 15px 0;
    text-align: center;
    background-color: #333;

    &:nth-child(1) {
      background-color: rgba(0, 0, 0, 0);
      border: none;
      grid-column-start: 1;
      grid-column-end: 6;
      font-size: 20px;
      font-weight: 800;
      line-height: 23px;
      padding: 0 0 30px 0;
    }
  }

  @media screen and (max-width: 600px) {
    display: grid;
    grid-template-columns: repeat(5, 16.5vw);
    grid-gap: 0px;
    width: 100%;
    border: none;
    color: rgba(170, 170, 170, 1);
    text-align: center;
    font-size: 13px;
    font-weight: 800;
    line-height: 14.75px;
    justify-content: center;

    div {
      border: 1px solid rgba(170, 170, 170, 1);
      padding: 14px 0;
      text-align: center;
      background-color: #333;

      &:nth-child(1) {
        font-size: 20px;
        line-height: 23px;
        padding: 0 0 20px 0;
      }
    }
  }

  @media screen and (max-width: 425px) {
    display: grid;
    grid-template-columns: repeat(5, 70px);
    grid-gap: 0px;
    width: 100%;
    border: none;
    color: rgba(170, 170, 170, 1);
    text-align: center;
    font-size: 13px;
    font-weight: 800;
    line-height: 14.75px;
    justify-content: center;

    div {
      border: 1px solid rgba(170, 170, 170, 1);
      padding: 14px 0;
      text-align: center;
      background-color: #333;

      &:nth-child(1) {
        font-size: 16px;
        line-height: 18.16px;
        padding: 0 0 20px 0;
      }
    }
  }

  @media screen and (max-width: 350px) {
    display: grid;
    grid-template-columns: repeat(5, 16.5vw);
    grid-gap: 0px;
    width: 100%;
    border: none;
    color: rgba(170, 170, 170, 1);
    text-align: center;
    font-size: 11px;
    font-weight: 800;
    line-height: 14.75px;
    justify-content: center;

    div {
      border: 1px solid rgba(170, 170, 170, 1);
      padding: 14px 0;
      text-align: center;
      background-color: #333;

      &:nth-child(1) {
        font-size: 16px;
        line-height: 18.16px;
        padding: 0 0 20px 0;
      }
    }
  }
`;

const IndexLayout = styled.div`
  display: grid;
  grid-gap: 0px;
  width: 100%;
  border: none;
  grid-template-columns: repeat(4, 120px);
  font-size: 16px;
  font-weight: 800;
  line-height: 18px;
  color: #aaaaaa;
  justify-content: center;

  div {
    background-color: rgba(0, 0, 0, 0);
    border: none;
    text-align: center;
    margin-top: 15px;
  }

  @media screen and (max-width: 600px) {
    display: grid;
    grid-gap: 0px;
    width: 100%;
    border: none;
    grid-template-columns: repeat(4, 16.5vw);
    font-size: 13px;
    font-weight: 800;
    line-height: 14.75px;
    color: #aaaaaa;
    justify-content: center;

    div {
      background-color: rgba(0, 0, 0, 0);
      border: none;
      text-align: center;
      margin-top: 10px;
    }
  }

  @media screen and (max-width: 425px) {
    display: grid;
    grid-gap: 0px;
    width: 100%;
    border: none;
    grid-template-columns: repeat(4, 70px);
    font-size: 13px;
    font-weight: 800;
    line-height: 14.75px;
    color: #aaaaaa;
    justify-content: center;

    div {
      background-color: rgba(0, 0, 0, 0);
      border: none;
      text-align: center;
      margin-top: 10px;
    }
  }

  @media screen and (max-width: 350px) {
    display: grid;
    grid-gap: 0px;
    width: 100%;
    border: none;
    grid-template-columns: repeat(4, 16.5vw);
    font-size: 11px;
    font-weight: 800;
    line-height: 14.75px;
    color: #aaaaaa;
    justify-content: center;

    div {
      background-color: rgba(0, 0, 0, 0);
      border: none;
      text-align: center;
      margin-top: 10px;
    }
  }
`;
