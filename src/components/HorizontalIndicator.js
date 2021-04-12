import React, { useState, useEffect } from "react";
import styled from "styled-components/macro";

const ScrollIndicator = () => {
  const [reduce, setReduce] = useState(false);
  const [show, setShow] = useState(false);

  const [scrolled, setScrolled] = useState(0);
  const [totalHeight, setTotalHeight] = useState(0);

  useEffect(() => {
    const scrollProgress = () => {
      const scrollPx = document.documentElement.scrollTop;
      const winHeightPx =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;
      const scrolled = `${(scrollPx / winHeightPx) * 100}%`;

      setScrolled(scrolled);
      setTotalHeight(winHeightPx);
    };
    window.addEventListener("scroll", scrollProgress);
    return () => {
      window.removeEventListener("scroll", scrollProgress);
    };
  });

  useEffect(() => {
    const winHeightPx =
      document.documentElement.scrollHeight -
      document.documentElement.clientHeight;
    const reduceSize = () => {
      if (
        window.scrollY >= 60 &&
        window.scrollY <= winHeightPx - window.innerHeight
      ) {
        setReduce(true);
      } else {
        setReduce(false);
      }
    };
    window.addEventListener("scroll", reduceSize);
    return () => {
      window.removeEventListener("scroll", reduceSize);
    };
  }, [reduce]);

  useEffect(() => {
    const showProgress = () => {
      if (
        window.scrollY >= 88 &&
        window.scrollY < totalHeight - window.innerHeight
      ) {
        setShow(true);
      } else {
        setShow(false);
      }
    };
    window.addEventListener("scroll", showProgress);
    return () => {
      window.removeEventListener("scroll", showProgress);
    };
  }, [show, totalHeight]);

  return (
    <Section reduce={reduce}>
      <ProgressContainer show={show} reduce={reduce}>
        <ProgressBar scrolled={scrolled} show={show} />
      </ProgressContainer>
    </Section>
  );
};

export default ScrollIndicator;

const Section = styled.section`
  position: relative;
  z-index: 99;
  display: none;
  @media screen and (max-width: 1400px) {
    display: flex;
  }
`;

const ProgressContainer = styled.div`
  background: rgba(170, 170, 170, 1);
  position: fixed;
  top: 88px;
  height: 4px;
  width: 100vw;
  display: ${({ show }) => (show ? "block" : "none")};

  @media screen and (max-width: 425px) {
    top: ${({ reduce }) => (reduce ? "60px" : "88px")};
  }
`;

const ProgressBar = styled.div`
  background: #ff8a00;
  width: ${({ scrolled }) => scrolled};
  height: 4px;
  display: ${({ show }) => (show ? "block" : "none")};
`;
