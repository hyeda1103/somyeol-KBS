import React from "react";
import styled from "styled-components/macro";

import DownloadIcon from "../../assets/images/DownloadButton.svg";
// 컴포넌트
import Graph02 from "./Graphs/Graph02";
import Graph03 from "./Graphs/Graph03";
import Graph04 from "./Graphs/Graph04";
import Interview from "../Common/Interview";
import {
  Container,
  Title,
  SubTitle,
  Paragraph,
  Line,
  Underline,
} from "../../globalStyles";
// 인터뷰 데이터
import { INTDataKyung } from "../../data/INTData";

const Text = ({ background }) => {
  return (
    <Fragment background={background}>
      <Section>
        <Container>
          <TextWrapper>
            <Title>
              수도권 블랙홀···
              <br />
              ‘파멸적 집중’
            </Title>
            <Paragraph>
              <Line>
                수도권 인구 쏠림은 하나의 현상으로 치부할 문제가 아닙니다. 특정
                지역에만 인구가 쏠릴 경우, 다른 지역의 자본과 기업도 함께
                빨려가기 때문입니다.   인구의 쏠림이 자원의 빨림을 낳는 이른바
                ‘파멸적 집중’입니다.
              </Line>
            </Paragraph>
            <Paragraph style={{ marginBottom: 0 }}>
              <Underline>
                현재 전체 인구의 절반이 살고 있는 수도권은 우리나라 경제력의
                3분의 2, 국세 수입의 4분의 3 등을 차지하는 세계 최고 수준의
                집적을 보이고 있습니다.
              </Underline>
            </Paragraph>
            {/* 수도권과 비수도권의 격차 */}
            <SubTitle>수도권과 비수도권의 격차</SubTitle>
            <Graph02 />
            <Paragraph>
              <Line>
                이 같은 현실을 국민들은 어떻게 생각할까요. KBS는 지난 1월
                국회의장실과 함께, 전국에 거주하는 만 18살 이상 남녀 1,018명을
                대상으로 여론조사를 했습니다.
              </Line>
            </Paragraph>
            <Paragraph>
              <Line>
                먼저, “‘대한민국은 서울에서 멀어지면 불안한 나라’라는 의견에
                동의하느냐”고 물었더니, 10명 중 4명꼴인 38.9%가 공감을
                표했습니다.
              </Line>
            </Paragraph>
            <Paragraph style={{ marginBottom: 0 }}>
              <Line>
                특히, 서울에 사는 국민들은 무려 51%가 공감한다고 응답했습니다.{" "}
              </Line>
              <Underline>
                서울에 사는 2명 중 1명은 서울을 떠나는 데 불안을 느낀다는
                겁니다.
              </Underline>{" "}
               
            </Paragraph>
            <SubTitle>
              “대한민국은 서울에서 멀어지면 불안한 나라다” 라는 의견에 대해
              어떻게 생각하십니까?
            </SubTitle>
            {/* 대한민국은 서울에서 멀어지면 불안한 나라다 라는 의견에 대해 어떻게 생각하십니까? */}
            <Graph03 />
            <Paragraph>
              <Line>
                다음으로 수도권 집중이 가장 심각한 분야를 물었습니다. 일자리와
                주거, 인구, 교육, 의료, 소득, 복지 가운데 무엇이 가장
                많았을까요?
              </Line>
            </Paragraph>
            <Paragraph style={{ marginBottom: 0 }}>
              <Line>
                하나만 선택했을 땐 일자리가 28.3%로 가장 많았고, 주거 18.8%,
                인구 16.2%, 교육은 16% 순이었습니다. 두 개를 골랐을 때는
                일자리가 역시 가장 많이 꼽혔지만, 2위는 주거를 제치고 교육
                분야였습니다.
              </Line>
            </Paragraph>
            <SubTitle>
              다음 중 수도권 집중이 가장 심각한 분야는 무엇이라고 생각하십니까?
            </SubTitle>
            {/* 다음 중 수도권 집중이 가장 심각한 분야는 무엇이라고 생각하십니까? */}
            <Graph04 />
            <ButtonWrapper>
              <DownloadButton
                href="/data/file01.pdf"
                download="신년 여론조사 설문지.pdf"
              >
                <span>신년 여론조사 설문지</span>
                <Icon src={DownloadIcon} alt="신년 여론조사 설문지 다운로드" />
              </DownloadButton>
              <DownloadButton
                href="/data/file02.pdf"
                download="신년 여론조사 조사결과표.pdf"
              >
                <span>신년 여론조사 조사결과표</span>
                <Icon
                  src={DownloadIcon}
                  alt="신년 여론조사 조사결과표 다운로드"
                />
              </DownloadButton>
            </ButtonWrapper>
          </TextWrapper>
        </Container>
      </Section>
      {/* 성경륭 인터뷰 */}
      <Interview {...INTDataKyung} />
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

  @media screen and (max-width: 425px) {
    padding: 100px 0;
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
  padding: 280px 0 151px;

  @media screen and (max-width: 425px) {
    padding: 100px 0 103px;
  }
`;

const ButtonWrapper = styled.div`
  display: flex;
  position: relative;

  @media screen and (max-width: 425px) {
    flex-direction: column;
  }
`;

const DownloadButton = styled.a`
  height: 45px;
  width: 230px;
  border-radius: 5px;
  background-color: #fff;
  text-decoration: none;
  cursor: pointer;
  justify-content: center;
  align-items: center;
  padding: 14px;
  &:nth-child(1) {
    margin-right: 60px;
  }
  span {
    margin: 0;
    height: 100%;
    font-size: 15px;
    font-weight: 800;
    line-height: 17px;
    float: left;
    color: #5a5a5a;
  }

  @media screen and (max-width: 425px) {
    &:nth-child(1) {
      margin: 0 0 8px 0;
    }
  }
`;

const Icon = styled.img`
  float: right;
`;
