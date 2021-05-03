import React, { useMemo } from "react";
import Lottie from "react-lottie";
import styled from "styled-components/macro";
import { useInView } from "react-intersection-observer";
import chp2_04 from "../../../data/Chp2/animationData204.json";

function ControlledLottie() {
  const [ref, inView] = useInView({
    threshold: 0,
  });

  return useMemo(() => {
    return (
      <Section ref={ref}>
        <Lottie
          options={{
            loop: false,
            autoplay: false,
            animationData: chp2_04,
            rendererSettings: {
              progressiveLoad: true,
              viewBoxSize: "0 0 910 390",
              imagePreserveAspectRatio: "xMidYMid slice",
            },
          }}
          isPaused={!inView}
          isStopped={!inView}
        />
      </Section>
    );
  }, [ref, inView]);
}

export default ControlledLottie;

const Section = styled.section`
  justify-content: center;
  align-items: center;
  width: 910px;
  margin: 80px 0;

  @media screen and (max-width: 910px) {
    width: 100vw;
  }

  @media screen and (max-width: 425px) {
    margin: 50px 0;
  }
`;
