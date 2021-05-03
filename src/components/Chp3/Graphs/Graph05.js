import React, { useMemo } from "react";
import Lottie from "react-lottie";
import styled from "styled-components/macro";
import { useInView } from "react-intersection-observer";
import chp3_05 from "../../../data/Chp3/animationData305.json";

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
              animationData: chp3_05,
              rendererSettings: {
                progressiveLoad: true,
                viewBoxSize: "0 0 890 460",
                imagePreserveAspectRatio: "xMidYMid slice",
              },
            }}
            isPaused={!inView}
            isStopped={!inView}
          />
        </Section>
        <ReferenceWrapper>
          <span>단위: 명</span>
          <span>(출처: 더불어민주당 김용덕 의원실)</span>
        </ReferenceWrapper>
      </>
    );
  }, [ref, inView]);
}

export default ControlledLottie;

const Section = styled.section`
  justify-content: center;
  align-items: center;
  width: 890px;
  margin-top: 80px;

  @media screen and (max-width: 890px) {
    width: 100vw;
  }

  @media screen and (max-width: 425px) {
    margin-top: 50px;
  }
`;

const ReferenceWrapper = styled.div`
  width: 890px;
  right: 0;
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

  @media screen and (max-width: 890px) {
    width: 93.75vw;
  }

  @media screen and (max-width: 768px) {
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
