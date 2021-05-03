import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Element } from "react-scroll";
import Panel from "./keplerPanel";
import {
  toggleGangwon,
  toggleGyeongnam,
  toggleGyeongbuk,
  toggleGwangju,
  toggleDaegu,
  toggleDaejeon,
  toggleBusan,
  toggleSejong,
  toggleUlsan,
  toggleJeonnam,
  toggleJeonbuk,
  toggleJeju,
  toggleChungnam,
  toggleChungbuk,
  toggleDefault,
} from "./../../../../modules/panelReducer";
import {
  Section,
  TitleSection,
  Title,
  Paragraph,
  Line,
  Underline,
  InfoWrapper,
  InfoRow,
  Column1,
  MapWrapper,
  ReferenceWrapper,
} from "../GridElements";

import Map from "./keplerMap";
import Result from "./keplerResult";

const KeplerContainer = () => {
  const {
    data,
    config,
    allPop,
    youngPop,
    youngToMetro,
    regionName,
  } = useSelector((state) => ({
    data: state.panel.data,
    config: state.panel.config,
    allPop: state.panel.allPop,
    youngPop: state.panel.youngPop,
    youngToMetro: state.panel.youngToMetro,
    regionName: state.panel.regionName,
  }));

  const dispatch = useDispatch();
  const onToggleGangwon = () => dispatch(toggleGangwon());
  const onToggleGyeongnam = () => dispatch(toggleGyeongnam());
  const onToggleGyeongbuk = () => dispatch(toggleGyeongbuk());
  const onToggleGwangju = () => dispatch(toggleGwangju());
  const onToggleDaegu = () => dispatch(toggleDaegu());
  const onToggleDaejeon = () => dispatch(toggleDaejeon());
  const onToggleBusan = () => dispatch(toggleBusan());
  const onToggleSejong = () => dispatch(toggleSejong());
  const onToggleUlsan = () => dispatch(toggleUlsan());
  const onToggleJeonnam = () => dispatch(toggleJeonnam());
  const onToggleJeonbuk = () => dispatch(toggleJeonbuk());
  const onToggleJeju = () => dispatch(toggleJeju());
  const onToggleChungnam = () => dispatch(toggleChungnam());
  const onToggleChungbuk = () => dispatch(toggleChungbuk());
  const onToggleDefault = () => dispatch(toggleDefault());

  return (
    <Section>
      <InfoWrapper>
        <InfoRow>
          <Column1>
            <TitleSection>
              <Title>3D로 보는 수도권 인구 이동</Title>
              <Paragraph>
                <Line>
                  이는 비단 부산만의 일은 아닙니다. 2019년 한 해 동안 모두
                  48만여 명이 전국 각지에서 수도권으로 이동했는데, 이 가운데
                  56%가 2030세대 청년이었습니다.{" "}
                </Line>
                <Underline>
                  수도권이 마치 블랙홀처럼 인구를 빨아들이고 있는 것입니다.
                </Underline>
              </Paragraph>
            </TitleSection>
            <Panel
              onToggleGangwon={onToggleGangwon}
              onToggleGyeongnam={onToggleGyeongnam}
              onToggleGyeongbuk={onToggleGyeongbuk}
              onToggleGwangju={onToggleGwangju}
              onToggleDaegu={onToggleDaegu}
              onToggleDaejeon={onToggleDaejeon}
              onToggleBusan={onToggleBusan}
              onToggleSejong={onToggleSejong}
              onToggleUlsan={onToggleUlsan}
              onToggleJeonnam={onToggleJeonnam}
              onToggleJeonbuk={onToggleJeonbuk}
              onToggleJeju={onToggleJeju}
              onToggleChungnam={onToggleChungnam}
              onToggleChungbuk={onToggleChungbuk}
              onToggleDefault={onToggleDefault}
            />
          </Column1>
          <Element id="section-4">
            <MapWrapper>
              <Map data={data} config={config} />
              <ReferenceWrapper>
                <span>(출처: KBS×KAIST 문화기술대학원 박주용 교수 연구실)</span>
              </ReferenceWrapper>
            </MapWrapper>
            {youngToMetro ? (
              <Result
                allPop={allPop}
                youngPop={youngPop}
                youngToMetro={youngToMetro}
                regionName={regionName}
              />
            ) : null}
          </Element>
        </InfoRow>
      </InfoWrapper>
    </Section>
  );
};

export default KeplerContainer;
