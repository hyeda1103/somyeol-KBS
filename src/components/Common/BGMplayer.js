import React, { useRef, useEffect, useState } from "react";
import styled from "styled-components";
import { useLocation } from "react-router-dom";

// 각 챕터별 배경음악 음원
import wave1 from "../../assets/audios/chp1ThemeSong.mp3";
import wave2 from "../../assets/audios/chp2ThemeSong.mp3";
import wave3 from "../../assets/audios/chp3ThemeSong.mp3";

const BGMplayer = () => {
  const [visiblity, setVisibility] = useState(false);
  const [playing, setPlaying] = useState(false);
  const [wave, setWave] = useState(null);
  let audio = useRef();
  let location = useLocation();

  useEffect(() => {
    // 페이지별 배경음악 변경
    if (location.pathname === "/chp1") {
      setWave(wave1);
      setVisibility(true);
    } else if (location.pathname === "/chp2") {
      setWave(wave2);
      setVisibility(true);
    } else if (location.pathname === "/chp3") {
      setWave(wave3);
      setVisibility(true);
    }

    audio.current = new Audio(wave);

    // 볼륨 설정
    audio.current.volume = 0.1;
    // 반복 재생
    audio.current.loop = true;

    // 재생 버튼 누르면 play 일시정지 누르면 pause
    playing ? audio.current.play() : audio.current.pause();

    return () => {
      audio.current.pause(); // 컴포넌트 unmount시 오디오 정지
    };
  }, [playing, wave, location.pathname]);

  const toggle = () => setPlaying(!playing); // 재생/일시정지 버튼 누를 때마다 재생상태 변동

  return (
    <>
      {visiblity && (
        <Player>
          <BGM>BGM</BGM>

          <PlayPause>
            <input type="checkbox" value="None" id="playpause" name="check" />
            <label onClick={toggle} htmlFor="playpause"></label>
          </PlayPause>
        </Player>
      )}
    </>
  );
};
export default BGMplayer;

const Player = styled.div`
  position: fixed;
  z-index: 99999;
  margin-top: calc((88px - 45px) / 2);
  right: 0;
  border: 1px solid #fff;
  width: 150px;
  height: 45px;
  border-radius: 50px;
  margin-right: 290px;
  align-items: center;
  display: flex;
  padding: 0 20px;

  @media screen and (max-width: 768px) {
    margin-right: 120px;
  }

  @media screen and (max-width: 600px) {
    display: none;
  }
`;

const BGM = styled.div`
  font-size: 15px;
  line-height: 1;
  margin-right: 58px;
  color: #fff;
  @media screen and (max-width: 425px) {
    display: none;
  }
`;

const PlayPause = styled.div`
  margin-top: -15px;
  @media screen and (max-width: 425px) {
    margin-top: -21px;
  }
  label {
    display: block;
    box-sizing: border-box;
    width: 0;
    height: 15px;
    border-color: transparent transparent transparent #fff;
    transition: 100ms all ease;
    cursor: pointer;
    border-style: solid;
    border-width: 7.5px 0 7.5px 12.5px;
  }
  input[type="checkbox"] {
    visibility: hidden;
    &:checked + label {
      display: block;
      box-sizing: border-box;
      width: 0;
      height: 15px;
      border-color: transparent transparent transparent #fff;
      transition: 100ms all ease;
      cursor: pointer;
      border-style: double;
      border-width: 0px 0px 0px 12.5px;
    }
  }
`;
