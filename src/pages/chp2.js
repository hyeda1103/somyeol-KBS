import React from "react";
import { Element } from "react-scroll";
// 컴포넌트
import SEO from "../components/Common/SEO";
import Title from "../components/Chp2/Title";
import SubTitle1 from "../components/Chp2/SubTitle1";
import SubTitle2 from "../components/Chp2/SubTitle2";
import SubTitle3 from "../components/Chp2/SubTitle3";
import ToNextChp from "../components/Chp2/ToNext";
import ScrollIndicator from "../components/Chp2/ScrollIndicator";

// 검은 땅 배경 이미지
import subBg from "../assets/images/subBg.webp";

const Chp2 = () => {
  const chp2 = {
    title: `제 2장 쏠림과 빨림`,
  };
  return (
    <>
      <ScrollIndicator />
      <SEO
        title={chp2.title}
        image={chp2.image}
        description={chp2.description}
        hashtag={chp2.hashtag}
      />
      <Title />
      {/* 제1부 국토 면적 11.8% 수도권…전체 인구 50% 넘어 */}
      <Element id="section-1">
        <SubTitle1 background={subBg} />
      </Element>
      {/* 제2부 수도권 블랙홀···‘파멸적 집중’ */}
      <Element id="section-2">
        <SubTitle2 background={subBg} />
      </Element>
      {/* 제3부 “어쩔 수 없이 떠나요”…지방 떠나는 청년 */}
      <Element id="section-3">
        <SubTitle3 background={subBg} />
      </Element>
      <ToNextChp />
    </>
  );
};

export default Chp2;
