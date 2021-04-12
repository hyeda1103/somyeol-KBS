import React, { useState, useEffect } from "react";
import styled from "styled-components/macro";
import _debounce from "lodash.debounce";
import {
  Black,
  Container,
  Title,
  Paragraph,
  Line,
  Underline,
  SubTitle,
} from "../CommonStyles";

// 컴포넌트
import Interview from "./../Interview";
import Graph01 from "./Graphs/Graph01";
import Graph02 from "./Graphs/Graph02";
// 인터뷰 데이터
import { INTDataDooyoung } from "../../globalData/INTData";

const Text = ({ background }) => {
  const [width, setWidth] = useState(window.innerWidth);
  const [title, setTitle] = useState(null);
  const [subGraph1, setGraph1] = useState(null);
  useEffect(() => {
    const handleResize = _debounce(() => setWidth(window.innerWidth), 300);

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    width > 510
      ? setGraph1(`수도권 출근시간 지역 간 평균 이동시간`)
      : setGraph1(
          <>
            수도권 출근시간
            <br />
            지역 간 평균 이동시간
          </>
        );

    width > 480
      ? setTitle(
          <>
            모두가 모인 ‘수도권’은
            <br /> 과연 행복할까?
          </>
        )
      : setTitle(`모두가 모인 ‘수도권’은 과연 행복할까?`);
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
                  사람과 기업이 한데 모이면 집적의 이익을 낳고, 한 사회의 경제
                  성장에도 도움이 됩니다. 하지만 어느 단계를 넘어서면, 오히려
                  얻는 것보다 잃는 것이 더 많아집니다. 우리나라 수도권 상황이
                  그렇습니다.
                </Line>
              </Paragraph>
              <Paragraph>
                <Line>
                  출·퇴근 시간부터 살펴볼까요. ‘1년 중 한 달을 길바닥에서
                  보낸다’는 말이 있을 정도로 수도권 출·퇴근길은 악명 높기로
                  소문이 자자합니다.
                </Line>
              </Paragraph>
              <Paragraph style={{ marginBottom: 0 }}>
                <Underline>
                  2019년 국토교통부와 한국교통안전공단의 조사결과, 수도권에서
                  대중교통으로 출근하는 시간은 평균 1시간 27분이었습니다.
                </Underline>
                <Line>
                  &nbsp;퇴근 시간까지 더하면 하루에 3시간 정도를 길 위에서
                  버리는 셈입니다.
                </Line>
              </Paragraph>
              {/* 수도권 출근시간 지역 간 평균 이동시간 */}
              <SubTitle>{subGraph1}</SubTitle>
              <Graph01 />
              <Paragraph>
                <Line>
                  이렇게 길 위에서 버리는 시간과 운행비 등의 손실을 비용으로
                  환산하면 그 액수도 상당합니다. 2017년 한국교통연구원 조사결과,
                  전국에서 교통 혼잡으로 인한 사회적 손실은 59조 5천2백억
                  원이었습니다.
                </Line>
              </Paragraph>
              <Paragraph style={{ marginBottom: 0 }}>
                <Underline>
                  이 가운데 수도권은 전체의 52%를 차지하는 31조5백억 원. 이는
                  같은 해 서울시 한 해 예산과 비슷한 규모
                </Underline>
                <Line>입니다.</Line>
              </Paragraph>
              {/* 시도별 교통혼잡비용 추정결과 */}
              <SubTitle>시도별 교통혼잡비용 추정결과</SubTitle>
              <Graph02 />
              <Paragraph>
                <Line>
                  이뿐만이 아닙니다. 국토 면적 11.8%에 불과한 수도권에 사람들이
                  꾸준히 몰려들다보니, 수도권은 늘 집이 부족할 수밖에 없습니다.
                  2018년 전국 주택보급률은 평균 104.2%였지만, 서울은 95.9%로
                  전국에서 가장 낮았습니다. 또, 경기와 인천도 각각 101.0%와
                  101.2%로 그 뒤를 이었습니다.
                </Line>
              </Paragraph>
              <Paragraph style={{ maginBottom: 0 }}>
                <Line>
                  주택보급률이 100%에 못 미칠 정도로 사람들이 많이 몰리다보니,
                  수도권 집값은 연일 최고가를 경신합니다.&nbsp;
                </Line>
                <Underline>
                  지난 1월 KB국민은행의 ‘월간주택가격동향’을 보면, 서울의 아파트
                  매매가 평균은 9억2천5백만 원으로 지방 5대 광역시 평균인
                  2억9천4백만 원의 3.2배였습니다.
                </Underline>
                <Line>
                  &nbsp;또, 5대 광역시를 제외한 지방의 아파트 평균인 1억7천9백만
                  원의 5.2배에 이르렀습니다.
                </Line>
              </Paragraph>
            </TextWrapper>
          </Container>
        </Section>
        {/* 성경륭 인터뷰 */}
        <Interview {...INTDataDooyoung} />
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
    padding: 146px 0 103px;
  }
`;
