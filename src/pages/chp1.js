import React from "react";
import { Element } from "react-scroll";

// 컴포넌트
import SEO from "../components/Common/SEO";
import Title from "../components/Chp1/Title";
import SubTitle1 from "../components/Chp1/SubTitle1";
import SubTitle2 from "../components/Chp1/SubTitle2";
import SubTitle3 from "../components/Chp1/SubTitle3";
import SubTitle4 from "../components/Chp1/SubTitle4";
import ToNextChp from "../components/Chp1/ToNext";
import ScrollIndicator from "../components/Chp1/ScrollIndicator";
// 검은 땅 배경 이미지
import subBg from "../assets/images/subBg.webp";

const Chp1 = () => {
  const chp1 = {
    title: `제 1장 위기의 전조`,
  };

  return (
    <>
      <ScrollIndicator />
      <SEO
        title={chp1.title}
        image={chp1.image}
        description={chp1.description}
        hashtag={chp1.hashtag}
      />
      {/* 제1부 위기의 전조  */}
      <Title />
      {/* 제1장 지방이 사라진다 */}
      <Element id="section-1">
        <SubTitle1 background={subBg} />
      </Element>
      {/* 제2장 마을에 350개 인형만… '지방 소멸' 경고 */}
      <Element id="section-2">
        <SubTitle2 background={subBg} />
      </Element>
      {/* 제3장 지금, 지방의 모습은? */}
      <Element id="section-3">
        <SubTitle3 background={subBg} />
      </Element>
      {/* 제4장 전국 시군구 46%…30년 뒤, ‘소멸 위험’ */}
      <Element id="section-4">
        <SubTitle4 background={subBg} />
      </Element>
      <ToNextChp />
    </>
  );
};

export default Chp1;
