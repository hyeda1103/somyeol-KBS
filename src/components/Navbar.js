import React, { useState, useEffect } from "react";
import styled, { css } from "styled-components/macro";
import { useLocation } from "react-router-dom";
import { FaFacebookF, FaTwitter } from "react-icons/fa";
import { FacebookShareButton, TwitterShareButton } from "react-share";

// 컴포넌트
import KaKaoShareButton from "./KaKao1";
import MenuNav from "./MenuNav";
import HorizontalIndicator from "./HorizontalIndicator";
// 로고 이미지: KBS 창원 X 시사기획 창
import CompanyLogo from "../assets/images/Logo/Logo.png";

const Navbar = () => {
  const [reduce, setReduce] = useState(true);

  const [open, setOpen] = useState(false);
  const location = useLocation();
  const [path, setPath] = useState(null);
  const [navbar, setNavbar] = useState(false);

  let style = {
    backgroundColor: !open && !navbar ? "transparent" : "#000",
    transition: "0.4s",
  };

  useEffect(() => {
    const changeBackground = () => {
      if (window.scrollY >= 88) {
        setNavbar(true);
        if (window.innerWidth >= 768) {
          if (location.pathname === "/chp1") {
            setPath("Chapter1 위기의 전조");
          } else if (location.pathname === "/chp2") {
            setPath("Chapter2 쏠림과 빨림");
          } else if (location.pathname === "/chp3") {
            setPath("Chapter3 공생과 공멸사이");
          }
        }
      } else {
        setNavbar(false);
        setPath(null);
      }
    };

    window.addEventListener("scroll", changeBackground);
    return () => {
      window.removeEventListener("scroll", changeBackground);
    };
  }, [location.pathname]);

  useEffect(() => {
    const winHeightPx =
      document.documentElement.scrollHeight -
      document.documentElement.clientHeight;
    const reduceSize = () => {
      if (
        window.scrollY >= 60 &&
        window.scrollY < winHeightPx - window.innerHeight
      ) {
        setReduce(false);
      } else {
        setReduce(true);
      }
    };
    window.addEventListener("scroll", reduceSize);
    return () => {
      window.removeEventListener("scroll", reduceSize);
    };
  }, [reduce]);

  const refreshPage = () => {
    window.location.assign("/");
  };

  return (
    <>
      <Nav reduce={reduce} style={style}>
        {/* 'KBS 창원 X 시사기획 창' 로고 */}
        <Logo
          reduce={reduce}
          src={CompanyLogo}
          alt="KBS 창원 X 시사기획 창"
          onClick={refreshPage}
          to="/"
        />
        {/* 현재 경로 띄우기 */}
        <CurrentPath>{path}</CurrentPath>
        {/* SNS 공유 버튼 모음 */}
        <NavBtn>
          {/* 카카오  */}
          <KaKaoShareButton
            font={`24px`}
            background={`transparent`}
            radius={`0`}
            padding={`0`}
          />
          {/* 페이스북 */}
          <FacebookShareButton
            url={"https://somyeol.kbs.co.kr"}
            quote={"소멸의 땅, 지방은 어떻게 사라지나"}
            hashtag="#지방소멸"
            style={{ outline: "none" }}
          >
            <Facebook />
          </FacebookShareButton>
          {/* 트위터 */}
          <TwitterShareButton
            url={"https://somyeol.kbs.co.kr"}
            quote={"소멸의 땅, 지방은 어떻게 사라지나"}
            hashtag="#지방소멸"
            style={{ outline: "none" }}
          >
            <Twitter />
          </TwitterShareButton>
        </NavBtn>
        {/* 햄버거 메뉴 */}
        <StyledBurger open={open} onClick={() => setOpen(!open)}>
          <div />
          <div />
          <div />
          <div />
        </StyledBurger>
        {/* 네비게이션 메뉴 */}
        <MenuNav open={open} />
      </Nav>
      {/* 수평 스크롤 인디케이터 */}
      <HorizontalIndicator />
    </>
  );
};

export default Navbar;

const Nav = styled.nav`
  height: 88px;
  background: #000;
  padding: 22px 0;
  z-index: 9999;
  position: fixed;
  width: 100%;

  @media screen and (max-width: 768px) {
    padding: 18.09px 0;
  }

  @media screen and (max-width: 425px) {
    height: ${({ reduce }) => (reduce ? "88px" : "60px")};
    transition: height 0.4s;
    padding: 20px 0;
  }
`;

const Logo = styled.img`
  position: absolute;
  cursor: pointer;
  display: block;
  top: 0;
  bottom: 0;
  left: 44px;
  margin: auto 0;

  @media screen and (max-width: 425px) {
    left: 20px;
    display: ${({ reduce }) => (reduce ? "block" : "none")};
    transition: display 0.4s;
  }

  @media screen and (max-width: 315px) {
    width: 55vw;
    display: ${({ reduce }) => (reduce ? "block" : "none")};
    transition: display 0.4s;
  }
`;

const CurrentPath = styled.span`
  position: absolute;
  left: 311px;
  top: 0;
  bottom: 0;
  margin: auto 0;
  display: block;
  color: #fff;
  font-size: 16px;
  height: 18px;
  align-items: center;

  @media screen and (max-width: 1024px) {
    display: none;
  }
`;

const StyledBurger = styled.div`
  width: 30px;
  height: 20px;
  cursor: pointer;
  position: absolute;
  top: 0;
  bottom: 0;
  right: 44px;
  margin: auto 0;

  div {
    width: 30px;
    height: 4px;
    background-color: #fff;
    transform-origin: center;
    display: block;

    &:nth-child(1) {
      opacity: ${({ open }) => (open ? 0 : 1)};
      top: 0px;
      position: absolute;
    }

    &:nth-child(2) {
      transform: ${({ open }) => (open ? "rotate(45deg)" : "rotate(0)")};
      transition: all 100ms linear;
      top: 8px;
      position: absolute;
    }

    &:nth-child(3) {
      transform: ${({ open }) => (open ? "rotate(-45deg)" : "rotate(0)")};
      transition: all 100ms linear;
      top: 8px;
      position: absolute;
    }

    &:nth-child(4) {
      opacity: ${({ open }) => (open ? 0 : 1)};
      top: 16px;
      position: absolute;
    }
  }

  @media screen and (max-width: 425px) {
    right: 20px;
  }
`;

const NavBtn = styled.div`
  position: absolute;
  display: flex;
  top: 0;
  bottom: 0;
  margin: auto 0;
  right: 119.84px;

  @media screen and (max-width: 768px) {
    display: none;
  }

  @media screen and (max-width: 425px) {
    display: none;
  }
`;

const SNSIcon = css`
  font-size: 20.5px;
  position: relative;
  color: #fff;
  outline: none;
  vertical-align: middle;
  cursor: pointer;

  @media screen and (max-width: 425px) {
    display: none;
  }
`;

const Facebook = styled(FaFacebookF)`
  ${SNSIcon}
  margin: 0 28.3px;
`;

const Twitter = styled(FaTwitter)`
  ${SNSIcon}
`;
