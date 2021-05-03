import React from "react";
import { Element } from "react-scroll";
// 컴포넌트
import ScrollIndicator from "../components/Chp3/ScrollIndicator";
import SEO from "../components/Common/SEO";
import Title from "../components/Chp3/Title";
import SubTitle1 from "../components/Chp3/SubTitle1";
import SubTitle2 from "../components/Chp3/SubTitle2";
import SubTitle3 from "../components/Chp3/SubTitle3";
import SubTitle4 from "../components/Chp3/SubTitle4";
import SubTitle5 from "../components/Chp3/SubTitle5";
import ToFirstChp from "../components/Chp3/ToPrev";
// 검은 땅 배경 이미지
import subBg from "../assets/images/subBg.webp";

const Chp3 = () => {
  const chp3 = {
    title: `제 3장 공생과 공멸사이`,
    image: Image,
    description: `제 3장 공생과 공멸사이입니다.`,
    hashtag: `#소멸의 땅 #공생과 공멸사이`,
  };

  return (
    <>
      <ScrollIndicator />
      <SEO
        title={chp3.title}
        image={chp3.image}
        description={chp3.description}
        hashtag={chp3.hashtag}
      />
      <Title />
      {/* 제1부 모두가 모인 '수도권'은 과연 행복할까? */}
      <Element id="section-1">
        <SubTitle1 background={subBg} />
      </Element>
      {/* 제2부 ‘아이 낳기’ 꺼리는 청년들, 왜? */}
      <Element id="section-2">
        <SubTitle2 background={subBg} />
      </Element>
      {/* 제3부 수도권 인구 집중이 부른 ‘초저출산 사태’ */}
      <Element id="section-3">
        <SubTitle3 background={subBg} />
      </Element>
      {/* 제4부 혁신도시 인구, 다시 수도권으로 유출 */}
      <Element id="section-4">
        <SubTitle4 background={subBg} />
      </Element>
      {/* 제5부 “뭉쳐야 산다!”…일본의 ‘연계중추 도시 전략’ */}
      <Element id="section-5">
        <SubTitle5 background={subBg} />
      </Element>
      <ToFirstChp />
    </>
  );
};

export default Chp3;
