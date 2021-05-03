import React, { useMemo } from "react";
import Lottie from "react-lottie";
import styled from "styled-components/macro";
import { useInView } from "react-intersection-observer";
import chp3_06 from "../../../data/Chp3/animationData306.json";

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
            animationData: chp3_06,
            rendererSettings: {
              progressiveLoad: true,
              viewBoxSize: "0 0 910 1080",
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
  margin: -70px 0 -450px;

  @media screen and (max-width: 768px) {
    width: 720px;
    margin: -70px 0 -400px -40px;
  }

  @media screen and (max-width: 425px) {
    width: 370px;
    margin: -30px -20px -150px;
  }
`;
