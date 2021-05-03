import React, { forwardRef } from "react";
import styled from "styled-components";
import { withStyles } from "@material-ui/core/styles";
import Slider from "@material-ui/core/Slider";
import {
  RiPlayFill,
  RiPauseFill,
  RiVolumeUpFill,
  RiVolumeMuteLine,
  RiFullscreenFill,
} from "react-icons/ri";

const PrettoSlider = withStyles({
  root: {
    color: "#fff",
    height: 2,
  },
  thumb: {
    height: 0,
    width: 0,
  },
  active: {},
  valueLabel: {
    left: "calc(-50% + 4px)",
  },
  track: {
    height: 2,
    borderRadius: 4,
  },
  rail: {
    height: 2,
    borderRadius: 4,
  },
})(Slider);

const VolumeSlider = withStyles({
  root: {
    color: "#fff",
    height: 2,
    width: 80,
  },
  thumb: {
    height: 0,
    width: 0,
  },
  track: {
    height: 2,
    borderRadius: 4,
  },
  rail: {
    height: 2,
    borderRadius: 4,
  },
})(Slider);

const PlayerControl = forwardRef(
  (
    {
      onPlayPause,
      playing,
      onSkip,
      muted,
      onMute,
      onVolumeChange,
      onVolumeSeekUp,
      volume,
      onToggleFullScreen,
      played,
      onSeek,
      onSeekMouseDown,
      onSeekMouseUp,
      elapsedTime,
      totalDuration,
    },
    ref
  ) => {
    return (
      <ControlsSection ref={ref}>
        {/* 재생시간을 보여주는 슬라이드 바 */}
        <SliderWrapper>
          <PrettoSlider
            min={0}
            max={100}
            value={played * 100}
            onChange={onSeek}
            onMouseDown={onSeekMouseDown}
            onChangeCommitted={onSeekMouseUp}
          />
        </SliderWrapper>
        {/* 재생 컨트롤 버튼 섹션 */}
        <ControlsWrapper>
          <ButtonWrapper>
            {/* 재생 버튼 */}
            <IconButton onClick={onPlayPause}>
              {playing ? <PauseIcon /> : <PlayArrowIcon />}
            </IconButton>
            {/* 음량 조절 버튼 */}
            <IconButton onClick={onMute}>
              {muted ? <VolumeOff /> : <VolumeUpIcon />}
            </IconButton>
            {/* 볼륨 조절 슬라이드 바 */}
            <VolumeWrapper>
              <VolumeSlider
                min={0}
                max={100}
                value={volume * 100}
                onChange={onVolumeChange}
                onChangeCommitted={onVolumeSeekUp}
              />
            </VolumeWrapper>
            {/* 재생 시간 / 총 영상 시간 */}
            <PlayTime>
              {elapsedTime} / {totalDuration}
            </PlayTime>
          </ButtonWrapper>
          <ButtonWrapper>
            {/* 스킵 버튼 */}
            <SkipButton onClick={onSkip}>SKIP</SkipButton>
            {/* 전체 화면 버튼      */}
            <IconButton onClick={onToggleFullScreen}>
              <FullScreenIcon />
            </IconButton>
          </ButtonWrapper>
        </ControlsWrapper>
      </ControlsSection>
    );
  }
);

export default PlayerControl;

const ControlsSection = styled.section`
  position: absolute;
  left: 10px;
  right: 10px;
  bottom: 0;
  background: transparent;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const SliderWrapper = styled.div`
  display: flex;
  padding: 16px 16px 8px 16px;
`;

const ControlsWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 16px 21px 16px;
`;

const ButtonWrapper = styled.div`
  display: flex;
  border: none;
  grid-template-columns: repeat(auto, 1fr);
  gap: 10px;
  align-items: center;
`;

const VolumeWrapper = styled.div`
  display: flex;

  @media screen and (max-width: 425px) {
    display: none;
  }
`;

const PlayTime = styled.div`
  display: flex;
  font-size: 18px;
  font-weight: 600;
  cursor: pointer;
  color: #999;
`;

const IconButton = styled.div`
  display: flex;
  cursor: pointer;
`;
const SkipButton = styled.div`
  display: flex;
  cursor: pointer;
  color: #999;
  font-size: 24px;
  display: block;
  transform: scale(0.9);
  font-weight: 800;
  &:hover {
    color: #fff;
    transform: scale(1);
  }
`;

const PlayArrowIcon = styled(RiPlayFill)`
  color: #999;
  font-size: 30px;
  transform: scale(0.9);
  &:hover {
    color: #fff;
    transform: scale(1);
  }
`;
const PauseIcon = styled(RiPauseFill)`
  color: #999;
  font-size: 30px;
  transform: scale(0.9);
  &:hover {
    color: #fff;
    transform: scale(1);
  }
`;
const VolumeUpIcon = styled(RiVolumeUpFill)`
  color: #999;
  font-size: 30px;
  transform: scale(0.9);
  &:hover {
    color: #fff;
    transform: scale(1);
  }
`;
const VolumeOff = styled(RiVolumeMuteLine)`
  color: #999;
  font-size: 30px;
  transform: scale(0.9);
  &:hover {
    color: #fff;
    transform: scale(1);
  }
`;
const FullScreenIcon = styled(RiFullscreenFill)`
  color: #999;
  font-size: 30px;
  transform: scale(0.9);
  &:hover {
    color: #fff;
    transform: scale(1);
  }
`;
