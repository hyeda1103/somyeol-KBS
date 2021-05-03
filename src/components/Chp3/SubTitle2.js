import React, { useState, useEffect } from "react";
import styled from "styled-components/macro";
import _debounce from "lodash.debounce";
import {
  Container,
  Title,
  Paragraph,
  Line,
  Underline,
} from "../../globalStyles";
import card01 from "../../assets/images/Chp3/card01.png";
import card02 from "../../assets/images/Chp3/card02.png";
import card03 from "../../assets/images/Chp3/card03.png";
import card04 from "../../assets/images/Chp3/card04.png";
import card05 from "../../assets/images/Chp3/card05.png";
import card06 from "../../assets/images/Chp3/card06.png";
import card07 from "../../assets/images/Chp3/card07.png";
import card08 from "../../assets/images/Chp3/card08.png";
import card09 from "../../assets/images/Chp3/card09.png";
import card10 from "../../assets/images/Chp3/card10.png";
import card11 from "../../assets/images/Chp3/card11.png";

const Text = ({ background }) => {
  const [width, setWidth] = useState(window.innerWidth);
  const [title, setTitle] = useState(null);
  useEffect(() => {
    const handleResize = _debounce(() => setWidth(window.innerWidth), 300);

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    width > 425
      ? setTitle(`‘아이 낳기’ 꺼리는 청년들, 왜?`)
      : setTitle(
          <>
            ‘아이 낳기’ 꺼리는
            <br />
            청년들, 왜?
          </>
        );
  }, [width]);

  return (
    <Fragment background={background}>
      <Section>
        <Container>
          <TextWrapper>
            <Title>{title}</Title>
            <Paragraph>
              <Line>
                지방보다 2~3배나 더 긴 출·퇴근 시간, 치솟는 물가와 집값!
                수도권에 사람들이 갈수록 많아지면서, 취업과 승진을 위한 경쟁도
                심해지고 있습니다.
              </Line>
            </Paragraph>
            <Paragraph>
              <Line>
                사정이 이렇다보니, 이제 수도권에는 자녀 계획을 꺼리는 청년들이
                늘어나기 시작했습니다. 출산과 보육 등에 쏟는 에너지를 자신에게
                쏟기로 한 것이죠.&nbsp;
              </Line>
              <Underline>
                높은 인구밀도가 낳는 경쟁에서 살아남기 위해, 출산을 포기하는
                겁니다.
              </Underline>
            </Paragraph>
            <Paragraph style={{ marginBottom: 0 }}>
              <Line>
                KBS 취재진은 지방에서 수도권으로 올라온 한 신혼부부를 만나, 직접
                이야기를 들어봤습니다.
              </Line>
            </Paragraph>
          </TextWrapper>
          <ImageWrapper>
            <RetouchedImage src={card01} alt="신혼부부 이야기 첫번째 컷" />
            <RetouchedImage src={card02} alt="신혼부부 이야기 두번째 컷" />
            <RetouchedImage src={card03} alt="신혼부부 이야기 세번째 컷" />
            <RetouchedImage src={card04} alt="신혼부부 이야기 네번째 컷" />
            <RetouchedImage src={card05} alt="신혼부부 이야기 다섯번째 컷" />
            <RetouchedImage src={card06} alt="신혼부부 이야기 여섯번째 컷" />
            <RetouchedImage src={card07} alt="신혼부부 이야기 일곱번째 컷" />
            <RetouchedImage src={card08} alt="신혼부부 이야기 여덟번째 컷" />
            <RetouchedImage src={card09} alt="신혼부부 이야기 아홉번째 컷" />
            <RetouchedImage src={card10} alt="신혼부부 이야기 열번째 컷" />
            <RetouchedImage
              src={card11}
              alt="신혼부부 이야기 열한번째 컷"
              style={{ paddingBottom: 0 }}
            />
          </ImageWrapper>
        </Container>
      </Section>
    </Fragment>
  );
};

export default React.memo(Text);

const Fragment = styled.section`
  background-image: ${(props) => `url(${props.background})`};
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-position: 50% 50%;
  width: 100%;
  height: 100%;
  background-size: cover;
  overflow: hidden;
`;

// 타이틀과 첫 섹션에 배경 고정
const Section = styled.section`
  width: 100%;
  height: 100%;
  overflow: hidden;
`;

const TextWrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-top: 280px;

  @media screen and (max-width: 425px) {
    padding-top: 200px;
  }
`;

const ImageWrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 150px 0 0;

  @media screen and (max-width: 425px) {
    padding: 100px 0 0;
  }
`;

const RetouchedImage = styled.img`
  width: 620px;
  height: auto;
  padding-bottom: 20px;
  z-index: 1;
  position: relative;

  @media screen and (max-width: 625px) {
    width: 80vw;
  }

  @media screen and (max-width: 425px) {
    width: 350px;
    padding-bottom: 10px;
  }

  @media screen and (max-width: 350px) {
    width: 80vw;
  }
`;
