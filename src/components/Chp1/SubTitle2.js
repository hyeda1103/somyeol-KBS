import React, { useState, useEffect } from "react";
import styled from "styled-components/macro";
import _debounce from "lodash.debounce";

// 컴포넌트
import Slider from "./Slider/ImageSlider";
import Interview from "../Common/Interview";
import {
  Section,
  Container,
  Title,
  Paragraph,
  Line,
  Underline,
} from "../../globalStyles";

// 인터뷰 데이터
import { INTDataAyano } from "../../data/INTData";

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
    width >= 375
      ? setTitle(
          <>
            마을에 350개 인형만…
            <br />
            ‘지방 소멸’ 경고
          </>
        )
      : setTitle(`마을에 350개 인형만… ‘지방 소멸’ 경고`);
  }, [width]);

  return (
    <Section background={background}>
      <Container>
        <TextWrapper>
          <Title>{title}</Title>
          <Paragraph style={{ marginBottom: 0 }}>
            <Line>
              마쓰다 히로야 교수의 말처럼, 현재 일본은 도시 절반이 소멸 위험에
              직면해 있습니다. 지방소멸이 이미 심각하게 진행된 상태인데요. 이를
              바로 보여주는 곳이 일본 도쿠시마현 나고로 마을입니다.
            </Line>
          </Paragraph>
          {/* 사진 슬라이더 */}
          <Slider />
          <Paragraph>
            <Line>
              나고로 마을에는 사람보다 인형이 더 많습니다. 길가를 걷는 여인,
              공원 벤치에서 쉬는 사람, 담배를 피우는 공사장 일꾼, 버스를
              기다리는 이들 모두 인형입니다.
            </Line>
          </Paragraph>
          <Paragraph>
            <Line>
              1960년대만 해도 번성했던 마을. 언제부턴가 주민들이 하나둘 떠나기
              시작해 이제 마을을 지키는 건 나이 든 어르신들뿐입니다. 마을 주민인
              아야노 츠키미씨가 텅 빈 마을에 활기를 불어넣기 위해 사람 대신
              인형을 만든 것입니다.{" "}
            </Line>
          </Paragraph>
          <Paragraph>
            <Line>
              현재 이 마을 곳곳에 놓은 인형은 350여 개, 반면 주민 수는 27명에
              불과합니다.&nbsp;
            </Line>
            <Underline>
              나고로 마을의 모습은 인구 감소로 텅 빈 유령 도시의 이미지를
              상징적으로 보여줍니다.
            </Underline>
          </Paragraph>
        </TextWrapper>
        {/* 아야노 츠키미 인터뷰 */}
        <Interview {...INTDataAyano} />
      </Container>
    </Section>
  );
};

export default React.memo(Text);

const TextWrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 280px 0 151px;

  @media screen and (max-width: 425px) {
    height: auto;
    padding: 200px 0 103px;
  }
`;
