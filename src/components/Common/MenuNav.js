import React, { useState, useEffect } from "react";
import styled, { keyframes } from "styled-components/macro";
import { Link, useLocation } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { handleMenu } from "./../../modules/menuReducer";

import chp1 from "../../assets/images/Menu/chp1.webp";
import chp2 from "../../assets/images/Menu/chp2.webp";
import chp3 from "../../assets/images/Menu/chp3.webp";
import chp1Src from "../../assets/images/Logo/Chp1Title.svg";
import chp2Src from "../../assets/images/Logo/Chp2Title.svg";
import chp3Src from "../../assets/images/Logo/Chp3Title.svg";
import "../Home/Hero.css";

const MenuNav = () => {
  const { open } = useSelector((state) => ({ open: state.menu.open }));
  const dispatch = useDispatch();
  const onClickMenu = () => dispatch(handleMenu());

  const [expand, setExpand] = useState(false);

  let location = useLocation();

  const reloadPage = () => {
    window.location.reload();
  };

  useEffect(() => {
    const winHeightPx =
      document.documentElement.scrollHeight -
      document.documentElement.clientHeight;
    const expandSize = () => {
      if (
        window.scrollY >= 60 &&
        window.scrollY < winHeightPx - window.innerHeight
      ) {
        setExpand(true);
      } else {
        setExpand(false);
      }
    };
    window.addEventListener("scroll", expandSize);
    return () => {
      window.removeEventListener("scroll", expandSize);
    };
  }, [expand]);

  return (
    <GrandParent>
      <Parent
        to="/chp1"
        onClick={() => {
          onClickMenu();
          location.pathname === "/chp1" && reloadPage();
        }}
        $expand={expand}
        open={open}
        left="0"
        delay="0"
      >
        <CardSection bg={chp1}>
          <Container>
            <HeroContent>
              <h1 data-aos="fade-down" data-aos-duration="600">
                Chapter1
              </h1>
              <Chapter src={chp1Src} alt="위기의 전조" />
            </HeroContent>
          </Container>
        </CardSection>
      </Parent>
      <Parent
        to="/chp2"
        onClick={() => {
          onClickMenu();
          location.pathname === "/chp2" && reloadPage();
        }}
        $expand={expand}
        open={open}
        left="calc(100vw / 3)"
        delay="0.1s"
      >
        <CardSection bg={chp2}>
          <Container>
            <HeroContent>
              <h1 data-aos="fade-down" data-aos-duration="600">
                Chapter2
              </h1>
              <Chapter src={chp2Src} alt="쏠림과 빨림" />
            </HeroContent>
          </Container>
        </CardSection>
      </Parent>
      <Parent
        to="/chp3"
        onClick={() => {
          onClickMenu();
          location.pathname === "/chp3" && reloadPage();
        }}
        $expand={expand}
        open={open}
        left="calc(200vw / 3)"
        delay="0.2s"
      >
        <CardSection bg={chp3}>
          <Container>
            <HeroContent>
              <h1 data-aos="fade-down" data-aos-duration="600">
                Chapter3
              </h1>
              <Chapter src={chp3Src} alt="공생과 공멸사이" />
            </HeroContent>
          </Container>
        </CardSection>
      </Parent>
    </GrandParent>
  );
};

export default MenuNav;

const MovetoRight = keyframes`
    from {
        background-position: center;
    }
    to {
        background-position: right center;
    }
`;

const CardSection = styled.div`
  justify-content: center;
  align-items: center;
  background-image: url(${(props) => props.bg});
  background-position: center;
  background-size: cover;
  display: block;
  height: 100%;
  width: 100%;
  transition: 35s ease 1;
  &:hover {
    animation: ${MovetoRight} 35s ease 1;
  }
`;

const Container = styled.div`
  position: relative;
  z-index: 3;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.7);
  cursor: pointer;

  &:hover {
    background: rgba(0, 0, 0, 0.3);
  }
`;

const HeroContent = styled.div`
  position: absolute;
  justify-content: center;
  align-items: center;
  z-index: 10;
  display: flex;
  flex-direction: column;
  text-decoration: none;
  width: 100%;
  height: 100%;
  opacity: 50%;

  h1 {
    margin-bottom: 20px;
    font-size: 25px;
    font-weight: 800;
    line-height: 28px;
    text-align: center;
    color: #aaaaaa;
  }

  &:hover {
    opacity: 100%;
  }

  @media screen and (max-width: 768px) {
    h1 {
      margin-bottom: 15px;
      font-size: 18px;
      line-height: 20px;
    }
  }

  @media screen and (max-width: 425px) {
    h1 {
      margin-bottom: 15px;
      font-size: 16px;
      line-height: 18.16px;
    }
  }
`;

const GrandParent = styled.section`
  display: flex;

  @media screen and (max-width: 425px) {
    flex-direction: column;
  }
`;

const Parent = styled(Link)`
  position: fixed;
  display: block;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  transform: ${({ open }) => (open ? "translateY(0)" : "translateY(100%)")};
  transition: 300ms ease;
  transition-delay: ${(props) => props.delay};
  top: 0;
  left: ${(props) => props.left};
  margin-top: 88px;
  height: calc(100vh - 88px);
  width: calc(100vw / 3);
  color: #fff;
  cursor: pointer;

  @media screen and (max-width: 425px) {
    margin-top: ${({ $expand }) => ($expand ? "60px" : "88px")};
    height: ${({ $expand }) =>
      $expand ? `calc((100vh - 60px)/3)` : `calc((100vh - 88px) / 3)`};
    width: 100vw;
    left: 0;
    transform: ${({ open }) => (open ? "translateX(0%)" : "translateX(-100%)")};

    &:nth-child(1) {
      top: 0;
    }

    &:nth-child(2) {
      top: ${({ $expand }) =>
        $expand ? `calc((100vh - 60px) / 3)` : `calc((100vh - 88px) / 3)`};
    }

    &:nth-child(3) {
      top: ${({ $expand }) =>
        $expand
          ? `calc((100vh - 60px) * 2 / 3)`
          : `calc((100vh - 88px) * 2 / 3)`};
    }
  }
`;

const Chapter = styled.img`
  height: 85px;
  fill: white;

  @media screen and (max-width: 768px) {
    height: 41px;
  }

  @media screen and (max-width: 425px) {
    height: 45px;
  }
`;
