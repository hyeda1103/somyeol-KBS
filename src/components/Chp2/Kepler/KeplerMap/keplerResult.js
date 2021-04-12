import React from "react";
import styled from "styled-components/macro";

const Panel = ({ allPop, youngPop, youngToMetro, regionName }) => {
  const youngPercentage = ((youngPop / allPop) * 100).toFixed(2);
  const youngToMetroPercentage = ((youngToMetro / youngPop) * 100).toFixed(2);

  allPop =
    allPop.toString().length >= 7
      ? allPop.toString().slice(0, allPop.toString().length - 6) +
        "," +
        allPop
          .toString()
          .slice(allPop.toString().length - 6, allPop.toString().length - 3) +
        "," +
        allPop.toString().slice(-3)
      : allPop.toString().slice(0, allPop.toString().length - 3) +
        "," +
        allPop.toString().slice(-3);
  youngPop =
    youngPop.toString().slice(0, youngPop.toString().length - 3) +
    "," +
    youngPop.toString().slice(-3);
  youngToMetro =
    youngToMetro.toString().slice(0, youngToMetro.toString().length - 3) +
    "," +
    youngToMetro.toString().slice(-3);
  return (
    <TextWrapper>
      <Paragraph>
        <Line>
          지난 2019년 한 해 동안 <Orange>{regionName}</Orange>에서 떠난 사람은
          모두 <Orange>{allPop}명</Orange>이었습니다. 이 가운데 20~39세 청년은{" "}
          <Orange>{youngPop}명</Orange>으로 전체의{" "}
          <Orange>{youngPercentage}%</Orange>를 차지했습니다. 특히, 수도권으로
          떠난 청년은 <Orange>{youngToMetro}명</Orange>이었는데,{" "}
          <Orange>{regionName}</Orange>을(를) 떠난 청년 가운데서도
          <Orange> {youngToMetroPercentage}%</Orange>를 차지했습니다.
        </Line>
      </Paragraph>
    </TextWrapper>
  );
};

export default Panel;

const TextWrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-top: 2.25rem;
`;

const Paragraph = styled.div`
  text-align: justify;
  font-size: 20px;
  color: #fff;
  line-height: 40px;
  white-space: pre-line;
  width: 910px;
  border: 1px solid #aaaaaa;
  padding: 55px 125px;

  @media screen and (max-width: 768px) {
    width: 720px;
    padding: 35px 122px;
  }

  @media screen and (max-width: 425px) {
    width: 390px;
    padding: 35px 18px;
    font-size: 16px;
    line-height: 30px;
  }

  @media screen and (max-width: 390px) {
    width: 83vw;
  }
`;
const Line = styled.div`
  text-decoration: none;
  color: #fff;
  font-size: 20px;
  line-height: 40px;

  @media screen and (max-width: 425px) {
    font-size: 16px;
    line-height: 30px;
  }
`;
const Orange = styled.span`
  font-size: 20px;
  font-weight: 800;
  line-height: 40px;
  color: #ff8a00;

  @media screen and (max-width: 425px) {
    font-size: 16px;
    line-height: 30px;
  }
`;
