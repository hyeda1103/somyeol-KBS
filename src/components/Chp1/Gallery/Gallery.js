import React, { useState, useEffect, useRef } from "react";
import styled from "styled-components/macro";
import { IoMdClose } from "react-icons/io";

// 농산어촌 및 소도시
import ImgS1 from "../../../assets/images/Chp1/Gallery/Small/Img1.webp";
import ImgS2 from "../../../assets/images/Chp1/Gallery/Small/Img2.webp";
import ImgS3 from "../../../assets/images/Chp1/Gallery/Small/Img3.webp";
import ImgS4 from "../../../assets/images/Chp1/Gallery/Small/Img4.webp";
import ImgS5 from "../../../assets/images/Chp1/Gallery/Small/Img5.webp";
import AudS1 from "../../../assets/audios/Chp1/Gallery/Small/Audio1.mp3";
import AudS2 from "../../../assets/audios/Chp1/Gallery/Small/Audio2.mp3";
import AudS3 from "../../../assets/audios/Chp1/Gallery/Small/Audio3.mp3";
import AudS4 from "../../../assets/audios/Chp1/Gallery/Small/Audio4.mp3";
import AudS5 from "../../../assets/audios/Chp1/Gallery/Small/Audio5.mp3";

// 중소도시
import ImgM1 from "../../../assets/images/Chp1/Gallery/Middle/Img1.webp";
import ImgM2 from "../../../assets/images/Chp1/Gallery/Middle/Img2.webp";
import ImgM3 from "../../../assets/images/Chp1/Gallery/Middle/Img3.webp";
import ImgM4 from "../../../assets/images/Chp1/Gallery/Middle/Img4.webp";
import ImgM5 from "../../../assets/images/Chp1/Gallery/Middle/Img5.webp";
import AudM1 from "../../../assets/audios/Chp1/Gallery/Middle/Audio1.mp3";
import AudM2 from "../../../assets/audios/Chp1/Gallery/Middle/Audio2.mp3";
import AudM3 from "../../../assets/audios/Chp1/Gallery/Middle/Audio3.mp3";
import AudM4 from "../../../assets/audios/Chp1/Gallery/Middle/Audio4.mp3";
import AudM5 from "../../../assets/audios/Chp1/Gallery/Middle/Audio5.mp3";

// 대도시
import ImgB1 from "../../../assets/images/Chp1/Gallery/Large/Img1.webp";
import ImgB2 from "../../../assets/images/Chp1/Gallery/Large/Img2.webp";
import ImgB3 from "../../../assets/images/Chp1/Gallery/Large/Img3.webp";
import ImgB4 from "../../../assets/images/Chp1/Gallery/Large/Img4.webp";
import ImgB5 from "../../../assets/images/Chp1/Gallery/Large/Img5.webp";
import AudB1 from "../../../assets/audios/Chp1/Gallery/Large/Audio1.mp3";
import AudB2 from "../../../assets/audios/Chp1/Gallery/Large/Audio2.mp3";
import AudB3 from "../../../assets/audios/Chp1/Gallery/Large/Audio3.mp3";
import AudB4 from "../../../assets/audios/Chp1/Gallery/Large/Audio4.mp3";
import AudB5 from "../../../assets/audios/Chp1/Gallery/Large/Audio5.mp3";

// import Modal from "../../Common/Modal";
import Loadable from 'react-loadable'
import Spinner from './../../Common/Spinner';

const AsyncModal = Loadable({
  loader: () => import(/* webpackChunkName: 'GalleryModalComponent' */ './../../Common/Modal'),
  loading: Spinner
})

const Gallery = () => {
  const [wave, setWave] = useState(null);
  // 농산어촌 및 소도시
  const [isModalOpen1a, toggleModal1a] = useState(false);
  const [isModalOpen1b, toggleModal1b] = useState(false);
  const [isModalOpen1c, toggleModal1c] = useState(false);
  const [isModalOpen1d, toggleModal1d] = useState(false);
  const [isModalOpen1e, toggleModal1e] = useState(false);

  // 중소도시
  const [isModalOpen2a, toggleModal2a] = useState(false);
  const [isModalOpen2b, toggleModal2b] = useState(false);
  const [isModalOpen2c, toggleModal2c] = useState(false);
  const [isModalOpen2d, toggleModal2d] = useState(false);
  const [isModalOpen2e, toggleModal2e] = useState(false);

  // 대도시
  const [isModalOpen3a, toggleModal3a] = useState(false);
  const [isModalOpen3b, toggleModal3b] = useState(false);
  const [isModalOpen3c, toggleModal3c] = useState(false);
  const [isModalOpen3d, toggleModal3d] = useState(false);
  const [isModalOpen3e, toggleModal3e] = useState(false);

  let audio = useRef();

  useEffect(() => {
    audio.current = new Audio(wave);
    // 볼륨 설정
    audio.current.volume = 0.2;
    if (isModalOpen1a) {
      setWave(AudS1);
      audio.current.play();
    } else if (isModalOpen1b) {
      setWave(AudS2);
      audio.current.play();
    } else if (isModalOpen1c) {
      setWave(AudS3);
      audio.current.play();
    } else if (isModalOpen1d) {
      setWave(AudS4);
      audio.current.play();
    } else if (isModalOpen1e) {
      setWave(AudS5);
      audio.current.play();
    } else if (isModalOpen2a) {
      setWave(AudM1);
      audio.current.play();
    } else if (isModalOpen2b) {
      setWave(AudM2);
      audio.current.play();
    } else if (isModalOpen2c) {
      setWave(AudM3);
      audio.current.play();
    } else if (isModalOpen2d) {
      setWave(AudM4);
      audio.current.play();
    } else if (isModalOpen2e) {
      setWave(AudM5);
      audio.current.play();
    } else if (isModalOpen3a) {
      setWave(AudB1);
      audio.current.play();
    } else if (isModalOpen3b) {
      setWave(AudB2);
      audio.current.play();
    } else if (isModalOpen3c) {
      setWave(AudB3);
      audio.current.play();
    } else if (isModalOpen3d) {
      setWave(AudB4);
      audio.current.play();
    } else if (isModalOpen3e) {
      setWave(AudB5);
      audio.current.play();
    }
    return () => {
      audio.current.pause(); // 컴포넌트 unmount시 오디오 정지
    };
  }, [
    wave,
    isModalOpen1a,
    isModalOpen1b,
    isModalOpen1c,
    isModalOpen1d,
    isModalOpen1e,
    isModalOpen2a,
    isModalOpen2b,
    isModalOpen2c,
    isModalOpen2d,
    isModalOpen2e,
    isModalOpen3a,
    isModalOpen3b,
    isModalOpen3c,
    isModalOpen3d,
    isModalOpen3e,
  ]);

  return (
    <>
      <Section style={style}>
        <SubSection style={{ marginTop: 0 }}>
          <SubTitleWrapper>
            <SubTitle>농산어촌 및 소도시</SubTitle>
          </SubTitleWrapper>
          <PhotoContainer data-aos="fade-up" data-aos-duration="600" data-aos-once="true">
            <PhotoWrapper onClick={() => toggleModal1a(!isModalOpen1a)}>
              <Photo background={ImgS1} alt="농산어촌 및 소도시01">
                <Black>
                  <DistrictName>경남 의령</DistrictName>
                </Black>
              </Photo>
            </PhotoWrapper>
            <PhotoWrapper onClick={() => toggleModal1b(!isModalOpen1b)}>
              <Photo background={ImgS2} alt="농산어촌 및 소도시02">
                <Black>
                  <DistrictName>경남 의령</DistrictName>
                </Black>
              </Photo>
            </PhotoWrapper>
            <PhotoWrapper onClick={() => toggleModal1c(!isModalOpen1c)}>
              <Photo background={ImgS3} alt="농산어촌 및 소도시03">
                <Black>
                  <DistrictName>경남 산청</DistrictName>
                </Black>
              </Photo>
            </PhotoWrapper>
            <PhotoWrapper onClick={() => toggleModal1d(!isModalOpen1d)}>
              <Photo background={ImgS4} alt="농산어촌 및 소도시04">
                <Black>
                  <DistrictName>경북 의성</DistrictName>
                </Black>
              </Photo>
            </PhotoWrapper>
            <PhotoWrapper onClick={() => toggleModal1e(!isModalOpen1e)}>
              <Photo background={ImgS5} alt="농산어촌 및 소도시05">
                <Black>
                  <DistrictName>경남 하동</DistrictName>
                </Black>
              </Photo>
            </PhotoWrapper>
          </PhotoContainer>
        </SubSection>
        <SubSection>
          <SubTitleWrapper>
            <SubTitle>중소도시</SubTitle>
          </SubTitleWrapper>
          <PhotoContainer data-aos="fade-up" data-aos-duration="600" data-aos-delay="50" data-aos-once="true">
            <PhotoWrapper onClick={() => toggleModal2a(!isModalOpen2a)}>
              <Photo background={ImgM1} alt="중소도시01">
                <Black>
                  <DistrictName>전북 익산</DistrictName>
                </Black>
              </Photo>
            </PhotoWrapper>
            <PhotoWrapper onClick={() => toggleModal2b(!isModalOpen2b)}>
              <Photo background={ImgM2} alt="중소도시02">
                <Black>
                  <DistrictName>전북 익산</DistrictName>
                </Black>
              </Photo>
            </PhotoWrapper>
            <PhotoWrapper onClick={() => toggleModal2c(!isModalOpen2c)}>
              <Photo background={ImgM3} alt="중소도시03">
                <Black>
                  <DistrictName>전북 익산</DistrictName>
                </Black>
              </Photo>
            </PhotoWrapper>
            <PhotoWrapper onClick={() => toggleModal2d(!isModalOpen2d)}>
              <Photo background={ImgM4} alt="중소도시04">
                <Black>
                  <DistrictName>경남 진주</DistrictName>
                </Black>
              </Photo>
            </PhotoWrapper>
            <PhotoWrapper onClick={() => toggleModal2e(!isModalOpen2e)}>
              <Photo background={ImgM5} alt="중소도시05">
                <Black>
                  <DistrictName>경남 거제</DistrictName>
                </Black>
              </Photo>
            </PhotoWrapper>
          </PhotoContainer>
        </SubSection>
        <SubSection>
          <SubTitleWrapper>
            <SubTitle>대도시</SubTitle>
          </SubTitleWrapper>
          <PhotoContainer data-aos="fade-up" data-aos-duration="600" data-aos-delay="100" data-aos-once="true">
            <PhotoWrapper onClick={() => toggleModal3a(!isModalOpen3a)}>
              <Photo background={ImgB1} alt="대도시02">
                <Black>
                  <DistrictName>부산</DistrictName>
                </Black>
              </Photo>
            </PhotoWrapper>
            <PhotoWrapper onClick={() => toggleModal3b(!isModalOpen3b)}>
              <Photo background={ImgB2} alt="대도시02">
                <Black>
                  <DistrictName>부산</DistrictName>
                </Black>
              </Photo>
            </PhotoWrapper>
            <PhotoWrapper onClick={() => toggleModal3c(!isModalOpen3c)}>
              <Photo background={ImgB3} alt="대도시03">
                <Black>
                  <DistrictName>부산</DistrictName>
                </Black>
              </Photo>
            </PhotoWrapper>
            <PhotoWrapper onClick={() => toggleModal3d(!isModalOpen3d)}>
              <Photo background={ImgB4} alt="대도시04">
                <Black>
                  <DistrictName>경남 창원</DistrictName>
                </Black>
              </Photo>
            </PhotoWrapper>
            <PhotoWrapper onClick={() => toggleModal3e(!isModalOpen3e)}>
              <Photo background={ImgB5} alt="대도시05">
                <Black>
                  <DistrictName>경남 창원</DistrictName>
                </Black>
              </Photo>
            </PhotoWrapper>
          </PhotoContainer>
        </SubSection>
      </Section>

      {/* 대도시 인터뷰 */}
      {isModalOpen3a && (
        <AsyncModal isOpen={isModalOpen3a} toggle={toggleModal3a}>
          <ModalSection>
            <CloseBtn onClick={() => toggleModal3a(false)} />
            <ModalImg src={ImgB1} alt="대도시01" />
            <ModalTextContainer>
              <ModalTitleSection>
                <ModalTitle>이병호</ModalTitle>
                <VerticalBar />
                <ModalTitle>부산시 영도구</ModalTitle>
              </ModalTitleSection>
              <Divider />
              <ModalScript>“옛날에는 반상회도 하고 관리도 잘하고, 옛날에는 좋았어요. (지금은) 다 나가버렸어요. 다들 나간 줄도 모르게 나가버렸어요.”</ModalScript>
            </ModalTextContainer>
          </ModalSection>
        </AsyncModal>
      )}

      {isModalOpen3b &&        
        (<AsyncModal isOpen={isModalOpen3b} toggle={toggleModal3b}>
          <ModalSection>
            <CloseBtn onClick={() => toggleModal3b(false)} />
            <ModalImg src={ImgB2} alt="대도시02" />
            <ModalTextContainer>
              <ModalTitleSection>
                <ModalTitle>강수궁</ModalTitle>
                <VerticalBar />
                <ModalTitle>부산시 영도구</ModalTitle>
              </ModalTitleSection>
              <Divider />
              <ModalScript>“너무 서글픕니다. 슬픕니다. 그냥 영도 자체가 없어진다고 하면, 인구가 없어진다고 하면 마음이 이상해집니다.”</ModalScript>
            </ModalTextContainer>
          </ModalSection>
        </AsyncModal>
        )}

      {isModalOpen3c &&
        (
        <AsyncModal isOpen={isModalOpen3c} toggle={toggleModal3c}>
          <ModalSection>
            <CloseBtn onClick={() => toggleModal3c(false)} />
            <ModalImg src={ImgB3} alt="대도시03" />
            <ModalTextContainer>
              <ModalTitleSection>
                <ModalTitle>이재정</ModalTitle>
                <VerticalBar />
                <ModalTitle>부산복지개발원 연구위원</ModalTitle>
              </ModalTitleSection>
              <Divider />
              <ModalScript>“부산은 대도시이지만, 2021년, 2022년이 되면 초고령사회로 진입할 것이기 때문에, 노인이 많은 지역이고 바다를 끼고 있어서 ‘노인과 바다’ 그런 얘기가 나와요.”</ModalScript>
            </ModalTextContainer>
          </ModalSection>
        </AsyncModal>
      )}

      {isModalOpen3d &&(
        <AsyncModal isOpen={isModalOpen3d} toggle={toggleModal3d}>
          <ModalSection>
            <CloseBtn onClick={() => toggleModal3c(false)} />
            <ModalImg src={ImgB4} alt="대도시04" />
            <ModalTextContainer>
              <ModalTitleSection>
                <ModalTitle>윤재선</ModalTitle>
                <VerticalBar />
                <ModalTitle>경남 창원시 월영동</ModalTitle>
              </ModalTitleSection>
              <Divider />
              <ModalScript>"이집도 비었고 저집도 비었고 저기 밑에 전부 다 빈집이에요."</ModalScript>
            </ModalTextContainer>
          </ModalSection>
        </AsyncModal>
      )}

      {isModalOpen3e &&
        <AsyncModal isOpen={isModalOpen3e} toggle={toggleModal3e}>
          <ModalSection>
            <CloseBtn onClick={() => toggleModal3c(false)} />
            <ModalImg src={ImgB5} alt="대도시05" />
            <ModalTextContainer>
              <ModalTitleSection>
                <ModalTitle>윤재선</ModalTitle>
                <VerticalBar />
                <ModalTitle>경남 창원시 월영동</ModalTitle>
              </ModalTitleSection>
              <Divider />
              <ModalScript>"(빈집에) 노숙자들이 들어와서 술도 마셔요. 어디 사람인지도 몰라요. 항상 겁이 나는 게, 겨울에 담배꽁초 하나라도 던지면 빈집만 타는 게 아니라 온 동네로 불이 번지니까."</ModalScript>
            </ModalTextContainer>
          </ModalSection>
        </AsyncModal>
      }

      {/* 중소도시 인터뷰 */}
      {isModalOpen2a &&
        <AsyncModal isOpen={isModalOpen2a} toggle={toggleModal2a}>
        <ModalSection>
          <CloseBtn onClick={() => toggleModal2a(false)} />
          <ModalImg src={ImgM1} alt="중소도시01" />
          <ModalTextContainer>
            <ModalTitleSection>
              <ModalTitle>진영규</ModalTitle>
              <VerticalBar />
              <ModalTitle>전북 익산시 공인중개사</ModalTitle>
            </ModalTitleSection>
            <Divider />
            <ModalScript>“옛날에 전성기를 누렸던 그런 가옥들인데, 지금 현재는 다 떠나고 다 비어있는 거죠. 부동산 거래를 하려면 경매로만 처분이 안 될 정도로 수요가 없어요.”</ModalScript>
          </ModalTextContainer>
        </ModalSection>
      </AsyncModal>}

      {isModalOpen2b &&
        <AsyncModal isOpen={isModalOpen2b} toggle={toggleModal2b}>
        <ModalSection>
          <CloseBtn onClick={() => toggleModal2b(false)} />
          <ModalImg src={ImgM2} alt="증소도시02" />
          <ModalTextContainer>
            <ModalTitleSection>
              <ModalTitle>김철환</ModalTitle>
              <VerticalBar />
              <ModalTitle>전북 익산시</ModalTitle>
            </ModalTitleSection>
            <Divider />
            <ModalScript>“역 앞이고 버스터미널이고 (사람이) 많이 있었는데, 익산역으로 오면, 그때는 팥죽 장사도 있고 옆에 거리에 장사하는 사람들이 많이 있었는데 (지금은 없어요).”</ModalScript>
          </ModalTextContainer>
        </ModalSection>
      </AsyncModal>}

      {isModalOpen2c &&
        <AsyncModal isOpen={isModalOpen2c} toggle={toggleModal2c}>
        <ModalSection>
          <CloseBtn onClick={() => toggleModal2c(false)} />
          <ModalImg src={ImgM3} alt="중소도시03" />
          <ModalTextContainer>
            <ModalTitleSection>
              <ModalTitle>강정순</ModalTitle>
              <VerticalBar />
              <ModalTitle>전북 익산시</ModalTitle>
            </ModalTitleSection>
            <Divider />
            <ModalScript>“허망하죠. 감미당도 없어지고, 송수당도 없어지고, 이리극장도 없어지면서, 이쪽은 더 쇠락해 갈 수 밖에... 그런 안타까운 현실이 됐죠.”</ModalScript>
          </ModalTextContainer>
        </ModalSection>
      </AsyncModal>}

      {isModalOpen2d &&
        <AsyncModal isOpen={isModalOpen2d} toggle={toggleModal2d}>
        <ModalSection>
          <CloseBtn onClick={() => toggleModal2d(false)} />
          <ModalImg src={ImgM4} alt="증소도시04" />
          <ModalTextContainer>
            <ModalTitleSection>
              <ModalTitle>강태기</ModalTitle>
              <VerticalBar />
              <ModalTitle>경남 진주시 충무공동</ModalTitle>
            </ModalTitleSection>
            <Divider />
            <ModalScript>"3만 명이 안 되는 자리에 상가들이 보시다시피 너무 많이 건축이 되다 보니까, 공실이 발생될 수 밖에 없는 거예요"</ModalScript>
          </ModalTextContainer>
        </ModalSection>
      </AsyncModal>}

      {isModalOpen2e && (
        <AsyncModal isOpen={isModalOpen2e} toggle={toggleModal2e}>
          <ModalSection>
            <CloseBtn onClick={() => toggleModal2e(false)} />
            <ModalImg src={ImgM5} alt="중소도시05" />
            <ModalTextContainer>
              <ModalTitleSection>
                <ModalTitle>김도현</ModalTitle>
                <VerticalBar />
                <ModalTitle>경남 거제시 옥포동</ModalTitle>
              </ModalTitleSection>
              <Divider />
              <ModalScript>"숙녀복, 메리야스, 란제리 같은 것을 팔았어요. 장사가 잘 안되다 보니까 개인파산 신청을 하고 나갔어요."</ModalScript>
            </ModalTextContainer>
          </ModalSection>
        </AsyncModal>
      )}

      {/* 농산어촌 및 소도시 인터뷰 */}
      {isModalOpen1a && (
        <AsyncModal isOpen={isModalOpen1a} toggle={toggleModal1a}>
          <ModalSection>
            <CloseBtn onClick={() => toggleModal1a(false)} />
            <ModalImg src={ImgS1} alt="농산어촌 및 소도시01" />
            <ModalTextContainer>
              <ModalTitleSection>
                <ModalTitle>허덕순</ModalTitle>
                <VerticalBar />
                <ModalTitle>경남 의령군 궁류면</ModalTitle>
              </ModalTitleSection>
              <Divider />
              <ModalScript>“이 동네는 젊은 사람은 다 나가고 동네는 폐쇄됐어. 옛날에 (사람들이) 많이 살 때는 소도 많이 길렀는데….”</ModalScript>
            </ModalTextContainer>
          </ModalSection>
        </AsyncModal>
      )}

      {isModalOpen1b && (
        <AsyncModal isOpen={isModalOpen1b} toggle={toggleModal1b}>
          <ModalSection>
            <CloseBtn onClick={() => toggleModal1b(false)} />
            <ModalImg src={ImgS2} alt="농산어촌 및 소도시02" />
            <ModalTextContainer>
              <ModalTitleSection>
                <ModalTitle>남정숙</ModalTitle>
                <VerticalBar />
                <ModalTitle>경남 의령군 궁류초등학교장</ModalTitle>
              </ModalTitleSection>
              <Divider />
              <ModalScript>“매년 학생 수가 급격하게 줄고 있어요. 전교생이 10명 밖에 되지 않아 교육과정 운영에 어려움이 있을까 큰 걱정입니다.”</ModalScript>
            </ModalTextContainer>
          </ModalSection>
        </AsyncModal>
      )}

      {isModalOpen1c && (
        <AsyncModal isOpen={isModalOpen1c} toggle={toggleModal1c}>
          <ModalSection>
            <CloseBtn onClick={() => toggleModal1c(false)} />
            <ModalImg src={ImgS3} alt="농산어촌 및 소도시03" />
            <ModalTextContainer>
              <ModalTitleSection>
                <ModalTitle>제순달</ModalTitle>
                <VerticalBar />
                <ModalTitle>경남 산청군 차황면</ModalTitle>
              </ModalTitleSection>
              <Divider />
              <ModalScript>“한 집 건너 한집이 다 비었어요. 저쪽에 빈집이 많아요. 저기 건너편에도 전부 다 빈집이에요.” </ModalScript>
            </ModalTextContainer>
          </ModalSection>
        </AsyncModal>
      )}

      {isModalOpen1d && (
        <AsyncModal isOpen={isModalOpen1d} toggle={toggleModal1d}>
          <ModalSection>
            <CloseBtn onClick={() => toggleModal1d(false)} />
            <ModalImg src={ImgS4} alt="농산어촌 및 소도시04" />
            <ModalTextContainer>
              <ModalTitleSection>
                <ModalTitle>주민</ModalTitle>
                <VerticalBar />
                <ModalTitle>경북 의성군 안계면</ModalTitle>
              </ModalTitleSection>
              <Divider />
              <ModalScript>"이 병원이 없다고 보면 상당히 불안하죠. 목숨 마저도 정부에서 차별을 한다고 하면 정말로 분개하지 않을 수가 없죠."</ModalScript>
            </ModalTextContainer>
          </ModalSection>
        </AsyncModal>
      )}

      {isModalOpen1e && (
        <AsyncModal isOpen={isModalOpen1e} toggle={toggleModal1e}>
          <ModalSection>
            <CloseBtn onClick={() => toggleModal1e(false)} />
            <ModalImg src={ImgS5} alt="농산어촌 및 소도시05" />
            <ModalTextContainer>
              <ModalTitleSection>
                <ModalTitle>조윤환</ModalTitle>
                <VerticalBar />
                <ModalTitle>경남 하동군 옥종면</ModalTitle>
              </ModalTitleSection>
              <Divider />
              <ModalScript>"(인구 감소로) 이 병원이 없어지면 우리 하동은 치명적입니다. 이 병원이 꼭 유지가 돼야해요. 문을 닫는 경우가 생겨서는 안 되죠."</ModalScript>
            </ModalTextContainer>
          </ModalSection>
        </AsyncModal>
      )}
    </>
  )
};

export default Gallery;

const Section = styled.section`
  width: 100%;
  height: auto;
  margin: 0;
  padding: 3.75rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  @media screen and (max-width: 425px) {
    padding: 30px 0;
  }
`;

const SubSection = styled.div`
  align-items: center;
  justify-content: center;
  display: flex;
  flex-direction: column;
  width: 100%;
  height: auto;
  margin-top: 20px;

  @media screen and (max-width: 425px) {
    margin-top: 10px;
  }
`;

// 제목 섹션
const SubTitleWrapper = styled.div`
  width: calc(175px * 5 + 9px * 4);
  margin: 0 auto;
  color: #fff;
  font-size: 20px;
  line-height: 40px;
  margin-bottom: 20px;
  font-weight: 800;
  display: flex;

  @media screen and (max-width: 875px) {
    width: calc(138.31px * 5 + 7.11px * 4);
  }

  @media screen and (max-width: 720px) {
    width: 82.35vw;
  }

  @media screen and (max-width: 425px) {
    width: 350px;
    font-size: 16px;
    margin-bottom: 0;
  }

  @media screen and (max-width: 350px) {
    width: 100vw;
    font-size: 16px;
    margin-bottom: 0;
  }
`;

// 도시 구분별 제목
const SubTitle = styled.h3`
  font-weight: 800;
  margin-right: 20px;

  @media screen and (max-width: 425px) {
    margin-right: 10px;
    font-size: 16px;
  }
`;

// 도시별 사진 컨테이너
const PhotoContainer = styled.div`
  height: auto;
  display: flex;
  grid-template-columns: repeat(5, 175px);
  gap: 9px;
  grid-auto-rows: 125px;
  flex-wrap: wrap;

  @media screen and (max-width: 875px) {
    grid-template-columns: repeat(5, 138.31px);
    gap: 7.11px;
    grid-auto-rows: 125px;
  }

  @media screen and (max-width: 720px) {
    width: 82.35vw;
    grid-template-columns: 40.475vw 40.475vw 26.51vw 26.51vw 26.51vw;
    grid-gap: 5.8px 1.4vw;
    grid-auto-rows: 104.96px;
  }

  @media screen and (max-width: 425px) {
    grid-template-columns: 49.3% 49.3% 32.4% 32.4% 32.4%;
    grid-gap: 5.8px 1.4%;
    grid-auto-rows: 104.96px;
    width: 100vw;
  }
`;

// 도시 풍경 사진
const Photo = styled.div`
  position: relative;
  z-index: 1;
  background-image: ${(props) => `url(${props.background})`};
  background-size: cover;
  width: 100%;
  height: 100%;
  border: none;
  flex-wrap: wrap;
  cursor: pointer;
  justify-content: center;
  align-items: center;
  transition: 300ms ease;
`;

// 투명도 있는 검정색 배경
const Black = styled.div`
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  position: relative;
  z-index: 2;
`;

// 사진 Wrapper
const PhotoWrapper = styled.div`
  position: relative;
  width: 175px;
  height: 125px;
  justify-content: center;
  align-items: center;
  text-align: center;

  &:hover ${Black} {
    background: rgba(0, 0, 0, 0);
    transition: 300ms ease;
  }
  &:hover ${Photo} {
    border: 1px solid #ff8a00;
    transition: 300ms ease;
  }

  @media screen and (max-width: 875px) {
    width: 138.31px;
    height: 125px;
  }

  @media screen and (max-width: 720px) {
    width: 26.51vw;
    height: 104.96px;

    &:nth-child(1) {
      width: 40.475vw;
    }

    &:nth-child(2) {
      width: 40.475vw;
    }
  }

  @media screen and (max-width: 425px) {
    width: 32.4%;
    height: 104.96px;

    &:nth-child(1) {
      width: 49.3%;
    }

    &:nth-child(2) {
      width: 49.3%;
    }
  }
`;

// 인터뷰이 지역명
const DistrictName = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: #fff;
  font-size: 20px;
  line-height: 40px;
  white-space: nowrap;
  cursor: pointer;

  @media screen and (max-width: 425px) {
    font-size: 16px;
    line-height: 20px;
  }
`;

const ModalSection = styled.div`
  padding: 3px;
  background-color: #fff;
`;

// 모달창의 이미지
const ModalImg = styled.img`
  position: relative;
  object-fit: cover;
  display: flex;
  width: 100%;
  height: auto;
  border: none;
`;

const ModalTextContainer = styled.section`
  position: relative;
  display: flex;
  flex-direction: column;
  padding: 35px 38px;

  @media screen and (max-width: 425px) {
    padding: 30.26px 16px;
  }
`;

// 모달창의 타이틀 섹션
const ModalTitleSection = styled.section`
  display: flex;
  color: #000;
  align-items: center;
`;

// 모달창의 인터뷰이 및 소속
const ModalTitle = styled.h1`
  font-size: 20px;
  font-weight: 800;
  line-height: 27px;

  @media screen and (max-width: 425px) {
    font-size: 18px;
    line-height: 24.52px;
  }

  @media screen and (max-width: 350px) {
    font-size: 16px;
    line-height: 20px;
  }
`;

// 모달창의 인터뷰 스크립트
const ModalScript = styled.p`
  font-family: "Noto Serif KR", serif;
  font-size: 18px;
  line-height: 30px;
  text-align: left;
  padding-right: 37px;

  @media screen and (max-width: 425px) {
    font-size: 17px;
    padding-right: 16px;
    line-height: 28px;
  }

  @media screen and (max-width: 350px) {
    font-size: 15px;
  }
`;

const Divider = styled.div`
  border-bottom: 0.5px solid #000;
  margin: 20px 0;

  @media screen and (max-width: 425px) {
    margin: 15px 0;
  }
`;

const VerticalBar = styled.div`
  border: 1px solid #000;
  margin: 2.5px 10px;
  height: 22px;
  transform: rotate(180deg);

  @media screen and (max-width: 425px) {
    height: 16px;
    margin: 1px 5px;
  }
`;

const CloseBtn = styled(IoMdClose)`
  position: absolute;
  top: 0;
  right: 0;
  font-size: 24px;
  color: #fff;
  z-index: 11;
  margin: 15px;
  cursor: pointer;

  @media screen and (max-width: 425px) {
    font-size: 16px;
    margin: 10px;
  }
`;

const style = {
  overflow: "hidden",
};
