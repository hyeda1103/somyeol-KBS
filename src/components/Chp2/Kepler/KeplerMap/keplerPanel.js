import React from "react";
import styled from "styled-components/macro";
import { Link } from "react-scroll";
const Panel = ({
  onToggleGangwon,
  onToggleGyeongnam,
  onToggleGyeongbuk,
  onToggleGwangju,
  onToggleDaegu,
  onToggleDaejeon,
  onToggleBusan,
  onToggleSejong,
  onToggleUlsan,
  onToggleJeonnam,
  onToggleJeonbuk,
  onToggleJeju,
  onToggleChungnam,
  onToggleChungbuk,
  onToggleDefault,
}) => {
  return (
    <PanelSection
      spy
      smooth
      offset={-40}
      activeClass="active"
      to="section-4"
      key="section-4"
    >
      <ButtonWrapper>
        <Button onClick={onToggleDefault}>전국</Button>
        <Button onClick={onToggleGangwon}>강원</Button>
        <Button onClick={onToggleGyeongnam}>경남</Button>
        <Button onClick={onToggleGyeongbuk}>경북</Button>
        <Button onClick={onToggleGwangju}>광주</Button>
        <Button onClick={onToggleDaegu}>대구</Button>
        <Button onClick={onToggleDaejeon}>대전</Button>
        <Button onClick={onToggleBusan}>부산</Button>
        <Button onClick={onToggleSejong}>세종</Button>
        <Button onClick={onToggleUlsan}>울산</Button>
        <Button onClick={onToggleJeonnam}>전남</Button>
        <Button onClick={onToggleJeonbuk}>전북</Button>
        <Button onClick={onToggleJeju}>제주</Button>
        <Button onClick={onToggleChungnam}>충남</Button>
        <Button onClick={onToggleChungbuk}>충북</Button>
      </ButtonWrapper>
    </PanelSection>
  );
};

export default Panel;

const PanelSection = styled(Link)`
  display: flex;
  flex-direction: column;
`;

const ButtonWrapper = styled.div`
  height: auto;
  display: grid;
  grid-template-columns: repeat(5, 112px);
  gap: 10px;
  grid-auto-rows: 45px;

  @media screen and (max-width: 425px) {
    grid-template-columns: repeat(3, 110px);
    gap: 8px;
    grid-auto-rows: 45px;
  }

  @media screen and (max-width: 425px) {
    grid-template-columns: repeat(3, calc((85vw - 16px) / 3));
    gap: 8px;
    grid-auto-rows: 45px;
  }
`;

const Button = styled.div`
  background: #fff;
  border: "1px solid #fff";
  cursor: pointer;
  text-align: center;
  border-radius: 5px;
  text-decoration: none;
  display: flex;
  font-weight: 800;
  justify-content: center;
  align-items: center;
  color: #5a5a5a;
  padding: 3px 29.4px;
  font-size: 20px;
  line-height: 40px;
  transition: 2s ease 1;
  white-space: nowrap;

  &:hover {
    color: #fff;
    background: #ff8a00;
    border: "1px solid #FF8A00";
    transition: 2s ease 1;
  }

  @media screen and (max-width: 425px) {
    font-size: 16px;
    line-height: 30px;
  }
`;
