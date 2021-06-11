import React, { Suspense, lazy } from 'react'
import styled from "styled-components/macro";
//컴포넌트
import Interview from "../Common/Interview";
// import KeplerContainer from "./Kepler/KeplerMap/KeplerContainer";
import {
  Container,
  Title,
  Paragraph,
  Line,
  Underline,
} from "../../globalStyles";
import Spinner from './../Common/Spinner'
// 인터뷰 데이터
import { INTDataSohyun, INTDataGangrae02 } from "../../data/INTData";

const KeplerContainer = lazy(() => import('./Kepler/KeplerMap/KeplerContainer'))


const Text = ({ background }) => {
  return (
    <Fragment background={background}>
      <Black>
        <Section>
          <Container>
            <TextWrapper style={{ paddingTop: 0 }}>
              <Title>
                “어쩔 수 없이 떠나요”…
                <br />
                지방 떠나는 청년
              </Title>
              <Paragraph>
                <Line>
                  돈을 벌 기회, 학원에 갈 기회, 치료를 받을 기회, 콘서트를 볼
                  기회 등 모든 기회가 전부 수도권에 몰려있는 상황.
                </Line>
              </Paragraph>
              <Paragraph style={{ paddingBottom: 0 }}>
                <Line>
                  지방에서 사는 청년들에게는 별다른 선택지가 없습니다.
                  KBS취재진은 자신이 나고 자란 고향을 ‘어쩔 수 없이’ 떠나는
                  청년을 만나 직접 이야기를 들어봤습니다.
                </Line>
              </Paragraph>
            </TextWrapper>
          </Container>
        </Section>
        {/* 박소현 인터뷰 */}
        <Interview {...INTDataSohyun} />
        <Section>
          <Container>
            <TextWrapper>
              <Paragraph>
                <Line>
                  실제로 부산은 대도시지만, 최근 청년 인구 유출로 ‘노인과
                  바다’라는 오명을 쓰고 있습니다.
                </Line>
              </Paragraph>
              <Paragraph>
                <Line>
                  2015년 부산에서 수도권으로 이동한 인구는 4,155명, 하지만
                  2016년에는 7,566명으로 3,000명 이상 늘었고, 2018년에는
                  12,240명으로, 2019년에는 13,520명으로 껑충 뛰었습니다.
                </Line>
              </Paragraph>
              <Paragraph>
                <Underline>
                  지방에서 경제와 사회의 허리라고 할 수 있는 청년 인구가 꾸준히
                  빠져나가고 있는 것입니다.
                </Underline>
              </Paragraph>
              <Paragraph style={{ marginBottom: 0 }}>
                <Line>
                  2019년 인구총조사 기준 부산시 전체 인구는 337만 여명, 이
                  가운데 청년 인구는 26%로 서울과 6대 광역시를 포함한 전국 7대
                  도시 가운데 가장 낮은 것으로 나타났습니다.
                </Line>
              </Paragraph>
            </TextWrapper>
          </Container>
        </Section>
        <Suspense fallback={<Spinner />}>
          <KeplerContainer />
        </Suspense>
        {/* 마강래 인터뷰 */}
        <Interview {...INTDataGangrae02} />
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
  background: linear-gradient(transparent 70%, #000);
  padding: 17.5rem 0 18.75rem;

  @media screen and (max-width: 425px) {
    padding: 100px 0 200px;
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
  padding: 150px 0;

  @media screen and (max-width: 425px) {
    padding: 100px 0;
  }
`;
