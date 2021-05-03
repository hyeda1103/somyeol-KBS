import React, { useState, useEffect } from "react";
import styled from "styled-components/macro";
import _debounce from "lodash.debounce";

import {
  Title,
  SubTitle,
  Paragraph,
  Line,
  Underline,
} from "../../globalStyles";

import Interview from "../Common/Interview";
import Graph05 from "./Graphs/Graph05";
import { INTDataSangjoon, INTDataKyungsoo } from "../../data/INTData";

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
    width > 265
      ? setTitle(
          <>
            혁신도시 인구,
            <br />
            다시 수도권으로 유출
          </>
        )
      : setTitle(<>혁신도시 인구, 다시 수도권으로 유출</>);
  }, [width]);
  return (
    <Fragment background={background}>
      <Section>
        <Container>
          <TextWrapper>
            <Title>{title}</Title>
            <Paragraph>
              <Line>
                정부가 이 같은 수도권 쏠림 현상을 그대로 내버려뒀던 것은
                아닙니다. 2003년 참여정부는 수도권에 집중된 자원을 분산하기 위해
                균형발전 정책의 일환으로 ‘혁신도시’ 카드를 꺼내들었습니다. 전국
                자치단체 10곳에 공공기관 112개를 내려 보냈고, 지난해(2020년)
                이전이 마무리됐습니다.
              </Line>
            </Paragraph>
            <Paragraph>
              <Line>하지만 인구 분산 효과는 크지 않았습니다.&nbsp;</Line>
              <Underline>
                매주 금요일 밤이면 진주와 나주, 세종 등 전국 거의 모든
                혁신도시에서 대이동이 시작됩니다.
              </Underline>
              <Line>
                &nbsp; 가족과 주말을 보내기 위해 서울과 수도권으로 향하는
                직원들을 위한 단체 통근버스 행렬입니다. 주말에는 혁신도시에서
                아예 인적을 찾기 어렵습니다.
              </Line>
            </Paragraph>
            <Paragraph style={{ marginBottom: 0 }}>
              <Line>
                혁신도시에 정주 여건이 제대로 조성되지 않아, 평일에만
                혁신도시에서 업무 시간을 보내고, 주말이면 다시 수도권으로 떠나는
                겁니다. 국토교통부 조사 결과, 지난해 전국 혁신도시 10곳의
                정주여건 만족도는 45.5% 교통 환경은 30.2%에 그쳤습니다.
              </Line>
            </Paragraph>
          </TextWrapper>
        </Container>
      </Section>
      {/* 이상준 인터뷰 */}
      <Interview {...INTDataSangjoon} />
      <Section>
        <Container>
          <TextWrapper>
            <Paragraph>
              <Line>
                물론, 혁신도시 조성으로 수도권과 비수도권의 인구가 역전되는
                시점을 2011년에서 2019년으로 8년 늦췄다는 평가도 있습니다.
                하지만 2015년 이후 수도권에서 혁신도시로의 인구 이동은 점차 감소
                추세로 나타났습니다.
              </Line>
            </Paragraph>
            <Paragraph>
              <Line>
                결국, 지난해 7월 전국 10개 혁신도시에서 수도권으로 빠져나간
                인구는 수도권에서 혁신도시로 이동한 인구의 규모를 처음으로
                앞질렀습니다.
              </Line>
            </Paragraph>
            <Paragraph style={{ maginBottom: 0 }}>
              <Line>
                이제 정부의 혁신도시 정책만으로 수도권 집중 현상을 막기에는
                역부족이라는 지적이 나오고 있습니다.
              </Line>
            </Paragraph>
            <SubTitle>10개 혁신도시 순이동자 수 변화 추이</SubTitle>
            {/* 10개 혁신도시 순이동자 수 변화 추이 */}
            <Graph05 />
          </TextWrapper>
        </Container>
      </Section>
      {/* 김경수 인터뷰 */}
      <Interview {...INTDataKyungsoo} />
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
  padding: 130px 0;

  @media screen and (max-width: 425px) {
    padding: 100px 0 0;
  }
`;

// 타이틀과 첫 섹션에 배경 고정
const Section = styled.section`
  width: 100%;
  height: 100%;
  overflow: hidden;
`;

const Container = styled.div`
  position: relative;
  height: auto;
  display: flex;
  justify-content: center;

  @media screen and (max-width: 425px) {
    height: auto;
  }
`;

const TextWrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 150px 0 150px 0;

  @media screen and (max-width: 425px) {
    padding: 100px 0 103px;
  }
`;
