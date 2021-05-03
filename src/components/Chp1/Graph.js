import React, { useMemo } from "react";
import Lottie from "react-lottie";
import styled from "styled-components/macro";
import { useInView } from "react-intersection-observer";
import chp1_01 from "./../../data/Chp1/animationData101.json";

// 전국 시도별 소멸위험 자치단체 현황
function ControlledLottie() {
  const [ref, inView] = useInView({
    threshold: 0,
  });

  return useMemo(() => {
    return (
      <>
        <Section ref={ref}>
          <Lottie
            options={{
              loop: false,
              autoplay: false,
              animationData: chp1_01,
              rendererSettings: {
                progressiveLoad: true,
                viewBoxSize: "0 0 746 878",
                imagePreserveAspectRatio: "xMidYMid slice",
              },
            }}
            isPaused={!inView}
            isStopped={!inView}
          />
        </Section>
        <ReferenceWrapper>
          <span>소멸위험 자치단체/전체 자치단체</span>
          <span>(출처: 한국고용정보원)</span>
        </ReferenceWrapper>
      </>
    );
  }, [ref, inView]);
}

export default ControlledLottie;

const Section = styled.section`
  justify-content: center;
  align-items: center;
  width: 550px;
  margin-top: 80px;

  @media screen and (max-width: 560px) {
    width: 100vw;
  }

  @media screen and (max-width: 425px) {
    margin-top: 50px;
  }
`;

const ReferenceWrapper = styled.div`
  width: 658px;
  display: flex;
  flex-direction: column;
  color: #aaaaaa;
  font-family: "Noto Serif KR", serif;
  text-align: right;
  margin-top: 20.5px;

  span:nth-child(1) {
    font-size: 15px;
    line-height: 21.5px;
    margin-bottom: 2px;
  }

  span:nth-child(2) {
    font-size: 13px;
    line-height: 18.5px;
  }

  @media screen and (max-width: 768px) {
  }

  @media screen and (max-width: 660px) {
    width: 93.75vw;
  }

  @media screen and (max-width: 425px) {
    margin-top: 20px;
    span:nth-child(1) {
      font-size: 13px;
      line-height: 17px;
      margin-bottom: 2px;
    }

    span:nth-child(2) {
      font-size: 11px;
      line-height: 15px;
    }
  }
`;
