import React, { useState } from "react";
import styled, { keyframes, css } from "styled-components/macro";
import ReactPlayer from "react-player/lazy";
import { useInView } from "react-intersection-observer";
import { MdAirplay, MdPlayCircleOutline } from "react-icons/md";
import { FaHandPointer } from "react-icons/fa";
import Loadable from "react-loadable";
import Spinner from "./Spinner"
// 컴포넌트
// import Modal from "./Modal";

const AsyncModal = Loadable({
  loader: () => import(/* webpackChunkName: 'IntModalComponent' */ './Modal'),
  loading: Spinner
})

const Interview = ({ src, interviewee, position, lines }) => {
  const [ref, inView] = useInView({
    threshold: 0,
  });
  const [showCursor, setShowCursor] = useState(true);
  const [isModalOpen, toggleModal] = useState(false);
  return (
    <Section>
      <Container>
        <TextWrapper>
          <TitleSection>
            <PlayWrapper>
              <AirPlayVideo />
            </PlayWrapper>
            <Title>
              {interviewee} | {position}
            </Title>
            <PlayWrapper>
              <PlayCircle
                onClick={() => {
                  toggleModal(!isModalOpen)
                  setShowCursor(false)
                }}
              />
              <CursorWrapper ref={ref} inView={inView} show={showCursor}>
                <Cursor />
              </CursorWrapper>
            </PlayWrapper>
          </TitleSection>
          <Divider />
          <Script>{lines}</Script>
          {/* 인터뷰 영상 */}
          {isModalOpen && (
            <AsyncModal isOpen={isModalOpen} toggle={toggleModal}>
              <ReactPlayer width="100%" height="100%" url={src} controls playing={isModalOpen} volume={0.5} />
            </AsyncModal>
          )}
        </TextWrapper>
      </Container>
    </Section>
  )
};

export default React.memo(Interview);

// 타이틀과 첫 섹션에 배경 고정
const Section = styled.section`
  width: 100%;
  height: 100%;
  overflow: hidden;
`;

// 타이틀 섹션
const Container = styled.div`
  position: relative;
  display: flex;
  justify-content: center;

  @media screen and (max-width: 425px) {
    height: auto;
  }
`;

const TextWrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

// 인터뷰이 및 소속의 섹션
const TitleSection = styled.section`
  display: flex;
  color: #fff;
  text-align: start;
  width: 605px;

  @media screen and (max-width: 605px) {
    width: 80vw;
  }

  @media screen and (max-width: 425px) {
    width: 350px;
  }

  @media screen and (max-width: 350px) {
    width: 80vw;
  }
`;

// 인터뷰이 및 소속
const Title = styled.h1`
  font-size: 20px;
  font-weight: 800;
  line-height: 22.7px;

  @media screen and (max-width: 425px) {
    font-size: 16px;
    font-weight: 800;
    line-height: 22.7px;
  }
`;

// 인터뷰 내용
const Script = styled.div`
  font-family: "Noto Serif KR", serif;
  font-size: 20px;
  line-height: 40px;
  text-align: justify;
  align-items: center;
  color: #fff;
  width: 605px;

  @media screen and (max-width: 605px) {
    width: 80vw;
  }

  @media screen and (max-width: 425px) {
    font-size: 16px;
    line-height: 30px;
    width: 350px;
  }

  @media screen and (max-width: 350px) {
    font-size: 16px;
    line-height: 30px;
    width: 80vw;
  }
`;

// 구분선
const Divider = styled.div`
  border-bottom: 1px solid #fff;
  margin: 20px 0 40px;
  width: 600px;

  @media screen and (max-width: 605px) {
    width: 80vw;
  }

  @media screen and (max-width: 425px) {
    margin: 22.5px 0 30px;
    width: 350px;
  }

  @media screen and (max-width: 350px) {
    margin: 22.5px 0 30px;
    width: 80vw;
  }
`;

const PlayWrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: flex-start;
`;

// 재생 아이콘
const PlayCircle = styled(MdPlayCircleOutline)`
  font-size: 24px;
  color: #fff;
  outline: none;
  cursor: pointer;
  margin-left: 12px;

  &:hover {
    color: #ff8a00;
  }

  @media screen and (max-width: 425px) {
    font-size: 20px;
    margin-left: 12px;
  }
`;

// 미디어 아이콘
const AirPlayVideo = styled(MdAirplay)`
  font-size: 24px;
  color: #ff8a00;
  opacity: 70%;
  outline: none;
  margin-right: 21px;

  @media screen and (max-width: 425px) {
    font-size: 20px;
    margin-right: 16px;
  }
`;

// 커서 무빙 애니메이션
const moving = keyframes`
    0%   {
        left: 20px; top: 15px;
    }
    100%  {
        left: -2px; top: 12px;
    }
`;

const moving414 = keyframes`
    0%   {
        left: 20px; top: 10px;
    }
    100%  {
        left: 0px; top: 7px;
    }
`;

// 커서 아이콘 Wrapper
const CursorWrapper = styled.div`
  position: relative;
  width: auto;
  height: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: -14px;
  opacity: ${(props) => (props.show ? 1.0 : 0)};
  left: -2px;
  top: 12px;
  transform: rotate(-15deg);
  animation: ${(props) =>
    props.inView &&
    css`
      ${moving} 2s ease-in-out infinite
    `};

  @media screen and (max-width: 425px) {
    left: 0;
    top: 7px;
    animation: ${(props) =>
      props.inView &&
      css`
        ${moving414} 2s ease-in-out infinite
      `};
  }
`;

// 커서 아이콘
const Cursor = styled(FaHandPointer)`
  font-size: 24px;
  color: rgba(255, 255, 255, 0.7);
  outline: none;

  @media screen and (max-width: 425px) {
    font-size: 20px;
    margin-right: 16px;
  }
`;
