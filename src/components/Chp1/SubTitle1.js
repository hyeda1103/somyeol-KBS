import React from "react";
// 컴포넌트
import Interview from "../Common/Interview";
import {
  Section,
  Black,
  Container,
  TextWrapper,
  Title,
  Paragraph,
  Underline,
  Line,
} from "../../globalStyles";
// 인터뷰 데이터
import { INTDataHiroya } from "../../data/INTData";

const SubTitle = ({ background }) => {
  return (
    <Section background={background}>
      <Black>
        <Container>
          {/* 소제목01. 지방이 사라진다 */}
          <TextWrapper>
            <Title>지방이 사라진다</Title>
            <Paragraph>
              <Line>
                지방소멸. 농어촌과 중소도시 등 지방의 인구감소 문제를 다소
                자극적으로 표현한 말입니다. 2014년 도쿄대 마쓰다 히로야 교수가
                낸 『지방소멸』이란 책에서 시작됐습니다.
              </Line>
            </Paragraph>
            <Paragraph>
              <Line>당시,&nbsp;</Line>
              <Underline>
                마쓰다 히로야 교수는 일본에 1,800여 개의 기초자치단체가 있고, 이
                가운데 절반 정도인 890여 개가 2040년에 소멸한다고 주장했습니다.
              </Underline>
            </Paragraph>
            <Paragraph>
              <Line>
                그리고 2021년, 『지방소멸』이라는 책이 나온 지 7년이 흘렀습니다.
                일본 사회는 어떻게 변했을까요. KBS취재진은 마쓰다 히로야 교수를
                직접 만나 이야기를 들어봤습니다.
              </Line>
            </Paragraph>
          </TextWrapper>
          {/* 마쓰다 히로야 인터뷰 */}
          <Interview {...INTDataHiroya} />
        </Container>
      </Black>
    </Section>
  );
};

export default React.memo(SubTitle);
