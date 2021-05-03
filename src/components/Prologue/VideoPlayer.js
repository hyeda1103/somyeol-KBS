import React, { useState, useCallback, useRef, useLayoutEffect } from "react";
import ReactPlayer from "react-player/lazy";
import styled from "styled-components/macro";
import screenfull from "screenfull";
import { useSelector, useDispatch } from "react-redux";
import { handleMenu } from "../../modules/menuReducer";

// 다큐 프롤로그 영상
import prologue from "../../assets/videos/prologue.mp4";

// 컴포넌트
import PlayerControls from "./PlayerControls";

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
  const { open } = useSelector((state) => ({ open: state.menu.open }));
  const dispatch = useDispatch();
  const onClickMenu = () => dispatch(handleMenu());

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

  const handlePlayPause = useCallback(() => {
    setState({ ...state, playing: !state.playing });
  }, [state]);

  const handleFastForward = useCallback(() => {
    playerRef.current.seekTo(playerRef.current.getDuration());
  }, []);

  const handleMute = useCallback(() => {
    setState({ ...state, muted: !state.muted });
  }, [state]);

  const handleVolumeChange = useCallback(
    (e, newValue) => {
      setState({
        ...state,
        volume: parseFloat(newValue / 100),
        muted: newValue === 0 ? true : false,
      });
    },
    [state]
  );

  const handleVolumeSeekUp = useCallback(
    (e, newValue) => {
      setState({
        ...state,
        volume: parseFloat(newValue / 100),
        muted: newValue === 0 ? true : false,
      });
    },
    [state]
  );

  const handlePlaybackRateChange = useCallback(
    (rate) => {
      setState({ ...state, playbackRate: rate });
    },
    [state]
  );

  const toggleFullScreen = useCallback(() => {
    screenfull.toggle(playerContainerRef.current);
  }, []);

  const handleProgress = useCallback(
    (changeState) => {
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
    },
    [state]
  );

  const handleSeekChange = useCallback(
    (e, newValue) => {
      setState({ ...state, played: parseFloat(newValue / 100) });
    },
    [state]
  );

  const handleSeekMouseDown = useCallback(
    (e) => {
      setState({ ...state, seeking: true });
    },
    [state]
  );

  const handleSeekMouseUp = useCallback(
    (e, newValue) => {
      setState({ ...state, seeking: false });
      playerRef.current.seekTo(newValue / 100);
    },
    [state]
  );

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

  return (
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
        onEnded={onClickMenu}
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
  );
};

export default Video;

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
