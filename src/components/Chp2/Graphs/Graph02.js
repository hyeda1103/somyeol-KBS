import React, { useMemo } from "react";
import Lottie from "react-lottie";
import styled from "styled-components/macro";
import { useInView } from "react-intersection-observer";
import chp2_02 from "../../../data/Chp2/animationData202.json";

function ControlledLottie() {
  const [ref, inView] = useInView({
    threshold: 0,
  });

  return useMemo(() => {
    return (
      <Fragment>
        <Section ref={ref}>
          <Lottie
            options={{
              loop: false,
              autoplay: false,
              animationData: chp2_02,
              rendererSettings: {
                progressiveLoad: true,
                viewBoxSize: "0 0 910 550",
                imagePreserveAspectRatio: "xMidYMid slice",
              },
            }}
            isPaused={!inView}
            isStopped={!inView}
          />
        </Section>
        <ReferenceWrapper>
          <span>(출처: KBS 자체 분석)</span>
        </ReferenceWrapper>
      </Fragment>
    );
  }, [ref, inView]);
}

export default ControlledLottie;

const Fragment = styled.section`
  margin-bottom: 80px;
  display: flex;
  flex-direction: column;

  @media screen and (max-width: 425px) {
    margin-bottom: 50px;
  }
`;

const Section = styled.section`
  justify-content: center;
  align-items: center;
  width: 910px;
  margin-top: 40px;

  @media screen and (max-width: 910px) {
    width: 100vw;
  }

  @media screen and (max-width: 425px) {
    margin-top: 30px;
  }
`;

const ReferenceWrapper = styled.div`
  width: 910px;
  color: #aaaaaa;
  font-family: "Noto Serif KR", serif;
  text-align: right;
  margin-bottom: 80px;

  span {
    font-size: 13px;
    line-height: 18.5px;
  }

  @media screen and (max-width: 910px) {
    width: 93.75vw;
  }

  @media screen and (max-width: 768px) {
  }

  @media screen and (max-width: 425px) {
    margin-bottom: 50px;
    span {
      font-size: 11px;
      line-height: 15px;
    }
  }
`;
