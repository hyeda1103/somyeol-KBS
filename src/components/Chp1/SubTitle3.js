import React, { useState, useEffect } from "react";
import styled from "styled-components/macro";
import _debounce from "lodash.debounce";

// 컴포넌트
import Gallery from "./Gallery/Gallery";
import EmptyHouseMap from "./Map/EmptyHouseMap/EmptyHouseMap";
import { Title, Paragraph, Line, Underline } from "../../globalStyles";

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
    width >= 375
      ? setTitle(<>지금, 지방의 모습은?</>)
      : setTitle(
          <>
            지금,
            <br />
            지방의 모습은?
          </>
        );
  }, [width]);
  return (
    <Fragment background={background}>
      <Section>
        <Container>
          <TextWrapper>
            <Title>{title}</Title>
            <Paragraph>
              <Line>
                일본의 현재는 우리의 가까운 미래일지도 모릅니다. 우리나라 지방
                도시들 또한 최근 급격한 인구 감소로 쇠퇴 위기를 겪고 있기
                때문입니다.
              </Line>
            </Paragraph>
            <Paragraph style={{ marginBottom: 0 }}>
              <Line>
                KBS취재진은 지방 소멸 위기의 심각성을 확인하기 위해, 지난해
                10월부터 넉 달 동안 전국 지방도시 10여 곳을 현장 취재했습니다.
              </Line>
            </Paragraph>
            {/* 갤러리 */}
            <Gallery />
            <Paragraph>
              <Line>
                빈집이 늘어나고, 기반 시설이 남아도는 상황. 이는 인구 감소의
                심각성을 알리는 일종의 징후이자 경고입니다.
              </Line>
            </Paragraph>
            <Paragraph>
              <Line>
                KBS취재진은 우리나라 빈집 분포 현황을 파악하기 위해, 통계청
                등록센서스 자료인 2019년 인구주택총조사를 심층 분석했습니다.
                빈집은 '준공 뒤 1년 이상 빈 주택'으로 삼았습니다.
              </Line>
            </Paragraph>
            <Paragraph>
              <Line>그 결과,&nbsp;</Line>
              <Underline>
                수도권 빈집률은 4.93%(총가구 889만 가구, 빈집 44만 가구), 지방
                빈집률은 10.65%(총가구 1,013만 가구, 빈집 107만 가구)로
                수도권보다 지방의 빈집률이 2배 이상 많다
              </Underline>
              <Line>
                는 사실을 확인했습니다. 인구 감소가 지방에서 유독 심하게
                일어나고 있다는 뜻입니다.
              </Line>
            </Paragraph>
          </TextWrapper>
        </Container>
      </Section>
      {/* 우리 동네 빈집 지도 */}
      <EmptyHouseMap />
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
  padding: 280px 0 150px;

  @media screen and (max-width: 425px) {
    padding: 200px 0 100px;
  }
`;
