import React, { useMemo } from "react";
import Lottie from "react-lottie";
import styled from "styled-components/macro";
import { useInView } from "react-intersection-observer";
import chp3_02 from "../../../data/Chp3/animationData302.json";

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
              animationData: chp3_02,
              rendererSettings: {
                progressiveLoad: true,
                viewBoxSize: "80 40 740 850",
                imagePreserveAspectRatio: "xMidYMid slice",
              },
            }}
            isPaused={!inView}
            isStopped={!inView}
          />
        </Section>
        <ReferenceWrapper>
          <span>(출처: 국토교통부, 한국교통안전공단)</span>
        </ReferenceWrapper>
      </>
    );
  }, [ref, inView]);
}

export default ControlledLottie;

const Section = styled.section`
  justify-content: center;
  align-items: center;
  width: 720px;
  margin-top: 70px;

  @media screen and (max-width: 720px) {
    width: 100vw;
  }

  @media screen and (max-width: 425px) {
    margin-top: 40px;
  }
`;

const ReferenceWrapper = styled.div`
  width: 720px;
  right: 0;
  display: flex;
  flex-direction: column;
  color: #aaaaaa;
  font-family: "Noto Serif KR", serif;
  text-align: right;
  margin-top: 20.5px;
  margin-bottom: 80px;

  span {
    font-size: 13px;
    line-height: 18.5px;
  }

  @media screen and (max-width: 768px) {
  }

  @media screen and (max-width: 720px) {
    width: 93.75vw;
  }

  @media screen and (max-width: 425px) {
    margin-top: 20px;
    margin-bottom: 50px;
    span {
      font-size: 11px;
      line-height: 15px;
    }
  }
`;
