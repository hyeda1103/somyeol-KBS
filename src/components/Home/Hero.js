import React from "react";
import styled from "styled-components/macro";
import { Link } from "react-router-dom";
import IntroImg from "../../assets/images/mainBg.webp";
import mainSrc from "../../assets/images/Logo/MainTitle.svg";
import { ReactComponent as PlayCircleButton } from "../../assets/images/PlayCircle.svg";
import "./Hero.css";

const Hero = () => {
  return (
    <>
      <HeroSection>
        <HeroWrapper>
          <HeroImg src={IntroImg} alt="소멸의 땅" />
          <HeroContent>
            <h1>지방은 어떻게 사라지나?</h1>
            <MainTitle src={mainSrc} alt="소멸의 땅" />
            <Link to="./prologue">
              <PlayCircleButton className="playButton" alt="프롤로그 재생" />
            </Link>
          </HeroContent>
        </HeroWrapper>
      </HeroSection>
    </>
  );
};

export default Hero;

const HeroSection = styled.section`
  height: 100vh;
  position: relative;
  overflow: hidden;
`;

const HeroWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  overflow: hidden;
  position: relative;
  padding: 21.28vh 0;

  @media screen and (max-width: 425px) {
    padding: 23vh 0;
  }
`;

const HeroImg = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  object-fit: cover;
  object-position: 50% 50%;
`;

const HeroContent = styled.div`
  position: absolute;
  justify-content: center;
  align-items: center;
  z-index: 10;
  display: flex;
  flex-direction: column;
  width: 100%;
  color: #fff;

  h1 {
    font-size: 30px;
    font-weight: 800;
    line-height: 34px;
    letter-spacing: 0.3em;
    text-align: center;
    margin-bottom: 30px;
  }

  @media screen and (max-width: 768px) {
    h1 {
      font-size: 25px;
      font-weight: 800;
      line-height: 28px;
      letter-spacing: 0.3em;
      margin-bottom: 25px;
    }
  }

  @media screen and (max-width: 425px) {
    h1 {
      font-size: 20px;
      font-weight: 800;
      line-height: 22.7px;
      margin-bottom: 2.5vh;
    }
  }
`;

const MainTitle = styled.img`
  width: 420px;
  fill: white;
  margin-bottom: 35.12px;

  @media screen and (max-width: 768px) {
    width: 400px;
    margin-bottom: 50.35px;
  }

  @media screen and (max-width: 425px) {
    width: 265px;
    margin-bottom: 10.42vh;
  }
`;
