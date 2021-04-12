import React from "react";
import ImageGallery from "react-image-gallery";
import styled from "styled-components/macro";
import "./ImageSlider.css";

// 슬라이드 이미지
import Img1 from "../../../assets/images/Chp1/Slide/Img1.webp";
import Img2 from "../../../assets/images/Chp1/Slide/Img2.webp";
import Img3 from "../../../assets/images/Chp1/Slide/Img3.webp";
import Img4 from "../../../assets/images/Chp1/Slide/Img4.webp";
import Img5 from "../../../assets/images/Chp1/Slide/Img5.webp";
import Img6 from "../../../assets/images/Chp1/Slide/Img6.webp";
import Img7 from "../../../assets/images/Chp1/Slide/Img7.webp";
import Img8 from "../../../assets/images/Chp1/Slide/Img8.webp";
import Img9 from "../../../assets/images/Chp1/Slide/Img9.webp";
import Img10 from "../../../assets/images/Chp1/Slide/Img10.webp";
import Img11 from "../../../assets/images/Chp1/Slide/Img11.webp";
import Img12 from "../../../assets/images/Chp1/Slide/Img12.webp";
import Img13 from "../../../assets/images/Chp1/Slide/Img13.webp";

const ImageSlider = () => {
  const images = [
    {
      original: Img1,
      originalAlt: "일본 도쿠시마현 나고로 마을 인형사진 01",
      thumbnail: Img1,
      thumbnailAlt: "일본 도쿠시마현 나고로 마을 인형사진 01",
    },
    {
      original: Img2,
      originalAlt: "일본 도쿠시마현 나고로 마을 인형사진 02",
      thumbnail: Img2,
      thumbnailAlt: "일본 도쿠시마현 나고로 마을 인형사진 02",
    },
    {
      original: Img3,
      originalAlt: "일본 도쿠시마현 나고로 마을 인형사진 03",
      thumbnail: Img3,
      thumbnailAlt: "일본 도쿠시마현 나고로 마을 인형사진 03",
    },
    {
      original: Img4,
      originalAlt: "일본 도쿠시마현 나고로 마을 인형사진 04",
      thumbnail: Img4,
      thumbnailAlt: "일본 도쿠시마현 나고로 마을 인형사진 04",
    },
    {
      original: Img5,
      originalAlt: "일본 도쿠시마현 나고로 마을 인형사진 05",
      thumbnail: Img5,
      thumbnailAlt: "일본 도쿠시마현 나고로 마을 인형사진 05",
    },
    {
      original: Img6,
      originalAlt: "일본 도쿠시마현 나고로 마을 인형사진 06",
      thumbnail: Img6,
      thumbnailAlt: "일본 도쿠시마현 나고로 마을 인형사진 06",
    },
    {
      original: Img7,
      originalAlt: "일본 도쿠시마현 나고로 마을 인형사진 07",
      thumbnail: Img7,
      thumbnailAlt: "일본 도쿠시마현 나고로 마을 인형사진 07",
    },
    {
      original: Img8,
      originalAlt: "일본 도쿠시마현 나고로 마을 인형사진 08",
      thumbnail: Img8,
      thumbnailAlt: "일본 도쿠시마현 나고로 마을 인형사진 08",
    },
    {
      original: Img9,
      originalAlt: "일본 도쿠시마현 나고로 마을 인형사진 09",
      thumbnail: Img9,
      thumbnailAlt: "일본 도쿠시마현 나고로 마을 인형사진 09",
    },
    {
      original: Img10,
      originalAlt: "일본 도쿠시마현 나고로 마을 인형사진 10",
      thumbnail: Img10,
      thumbnailAlt: "일본 도쿠시마현 나고로 마을 인형사진 10",
    },
    {
      original: Img11,
      originalAlt: "일본 도쿠시마현 나고로 마을 인형사진 11",
      thumbnail: Img11,
      thumbnailAlt: "일본 도쿠시마현 나고로 마을 인형사진 11",
    },
    {
      original: Img12,
      originalAlt: "일본 도쿠시마현 나고로 마을 인형사진 12",
      thumbnail: Img12,
      thumbnailAlt: "일본 도쿠시마현 나고로 마을 인형사진 12",
    },
    {
      original: Img13,
      originalAlt: "일본 도쿠시마현 나고로 마을 인형사진 13",
      thumbnail: Img13,
      thumbnailAlt: "일본 도쿠시마현 나고로 마을 인형사진 13",
    },
  ];
  return (
    <>
      <Section>
        <ImageGallery items={images} autoPlay={true} showPlayButton={false} />
      </Section>
    </>
  );
};

export default ImageSlider;

const Section = styled.section`
  width: 910px;
  margin: 60px 0;

  @media screen and (max-width: 910px) {
    width: 90vw;
  }

  @media screen and (max-width: 768px) {
    width: 720px;
  }

  @media screen and (max-width: 720px) {
    width: 100%;
    margin: 30px 0 29.5px;
  }
`;
