import React, { useState, useRef, useLayoutEffect } from "react";
import ReactPlayer from "react-player/lazy";
import styled, { css } from "styled-components";
import prologue from "../assets/videos/prologue.mp4";
import PlayerControls from "./PlayerControls";
import screenfull from "screenfull";
import { FaFacebookF, FaTwitter } from "react-icons/fa";
import { FacebookShareButton, TwitterShareButton } from "react-share";
// 컴포넌트
import KaKaoShareButton from "./KaKao1";
import MenuNav from "./MenuNav";
// 로고 이미지: KBS 창원 X 시사기획 창
import CompanyLogo from "../assets/images/Logo/Logo.png";

const format = (seconds) => {
  if (isNaN(seconds)) {
    return "00:00";
  }

  const date = new Date(seconds * 1000);
  const hh = date.getUTCHours();
  const mm = date.getUTCMinutes();
  const ss = date.getUTCSeconds().toString().padStart(2, "0");

  if (hh) {
    return `${hh}:${mm.toString().padStart(2, "0")}:${ss}`;
  }
  return `${mm}:${ss}`;
};

let count = 0;

const Video = () => {
  const [open, setOpen] = useState(false);
  let style = {
    backgroundColor: !open ? "transparent" : "#000",
    transition: "0.4s",
  };

  const [state, setState] = useState({
    playing: true,
    muted: true,
    volume: 0.5,
    playbackRate: 1.0,
    played: 0,
    seeking: false,
  });
  // eslint-disable-next-line
  const { playing, muted, volume, playbackRate, played, seeking } = state;
  const playerRef = useRef(null);
  const playerContainerRef = useRef(null);
  const controlsRef = useRef(null);

  const handlePlayPause = () => {
    setState({ ...state, playing: !state.playing });
  };

  const handleFastForward = () => {
    playerRef.current.seekTo(playerRef.current.getDuration());
    setOpen(true);
  };

  const handleMute = () => {
    setState({ ...state, muted: !state.muted });
  };

  const handleVolumeChange = (e, newValue) => {
    setState({
      ...state,
      volume: parseFloat(newValue / 100),
      muted: newValue === 0 ? true : false,
    });
  };

  const handleVolumeSeekUp = (e, newValue) => {
    setState({
      ...state,
      volume: parseFloat(newValue / 100),
      muted: newValue === 0 ? true : false,
    });
  };

  const handlePlaybackRateChange = (rate) => {
    setState({ ...state, playbackRate: rate });
  };

  const toggleFullScreen = () => {
    screenfull.toggle(playerContainerRef.current);
  };

  const handleProgress = (changeState) => {
    if (count > 1.5) {
      controlsRef.current.style.visibility = "hidden";
      count = 0;
    }
    if (controlsRef.current.style.visibility === "visible") {
      count += 1;
    }
    if (!state.seeking) {
      setState({ ...state, ...changeState });
    }
  };

  const handleSeekChange = (e, newValue) => {
    setState({ ...state, played: parseFloat(newValue / 100) });
  };

  const handleSeekMouseDown = (e) => {
    setState({ ...state, seeking: true });
  };

  const handleSeekMouseUp = (e, newValue) => {
    setState({ ...state, seeking: false });
    playerRef.current.seekTo(newValue / 100);
  };

  useLayoutEffect(() => {
    open
      ? setState({ ...state, playing: false, muted: true })
      : setState({ ...state, playing: true });
    // eslint-disable-next-line
  }, [open]);

  const handleMouseMove = () => {
    controlsRef.current.style.visibility = "visible";
    count = 0;
  };

  const currentTime = playerRef.current
    ? playerRef.current.getCurrentTime()
    : "00:00";
  const duration = playerRef.current
    ? playerRef.current.getDuration()
    : "00:00";

  const elapsedTime = format(currentTime);
  const totalDuration = format(duration);

  const refreshPage = () => {
    window.location.assign("/");
  };

  return (
    <>
      <Nav style={style}>
        {/* 'KBS 창원 X 시사기획 창' 로고 */}
        <Logo
          src={CompanyLogo}
          alt="KBS 창원 X 시사기획 창"
          onClick={refreshPage}
          to="/"
        />
        {/* SNS 공유 버튼 모음 */}
        <NavBtn>
          {/* 카카오  */}
          <KaKaoShareButton
            font={`24px`}
            background={`transparent`}
            radius={`0`}
            padding={`0`}
          />
          <FacebookShareButton
            url={"https://somyeol.kbs.co.kr"}
            quote={"소멸의 땅, 지방은 어떻게 사라지나"}
            hashtag="#지방소멸"
            style={{ outline: "none" }}
          >
            <Facebook />
          </FacebookShareButton>
          <TwitterShareButton
            url={"https://somyeol.kbs.co.kr"}
            quote={"소멸의 땅, 지방은 어떻게 사라지나"}
            hashtag="#지방소멸"
            style={{ outline: "none" }}
          >
            <Twitter />
          </TwitterShareButton>
        </NavBtn>
        <StyledBurger open={open} onClick={() => setOpen(!open)}>
          <div />
          <div />
          <div />
          <div />
        </StyledBurger>
        <MenuNav open={open} />
      </Nav>

      <Section ref={playerContainerRef} onMouseMove={handleMouseMove} play>
        <ReactPlayer
          ref={playerRef}
          width={"100%"}
          height={"100%"}
          url={prologue}
          muted={muted}
          playing={playing}
          volume={volume}
          playbackRate={playbackRate}
          onProgress={handleProgress}
          onEnded={() => setOpen(true)}
        />
        <PlayerControls
          ref={controlsRef}
          onPlayPause={handlePlayPause}
          playing={playing}
          muted={muted}
          onSkip={handleFastForward}
          onMute={handleMute}
          onVolumeChange={handleVolumeChange}
          onVolumeSeekUp={handleVolumeSeekUp}
          volume={volume}
          playbackRate={playbackRate}
          onPlaybackRateChange={handlePlaybackRateChange}
          onToggleFullScreen={toggleFullScreen}
          played={played}
          onSeek={handleSeekChange}
          onSeekMouseDown={handleSeekMouseDown}
          onSeekMouseUp={handleSeekMouseUp}
          elapsedTime={elapsedTime}
          totalDuration={totalDuration}
        />
      </Section>
    </>
  );
};

export default Video;

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
  }

  @media screen and (max-width: 315px) {
    width: 55vw;
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

const Section = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: #000;
  z-index: 99;
  transform: ${({ play }) => (play ? "translateY(0%)" : "translateY(100%)")};
  transition: 300ms ease-in-out;
`;
