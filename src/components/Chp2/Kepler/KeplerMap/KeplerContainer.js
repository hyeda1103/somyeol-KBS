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
              <Title>3D??? ?????? ????????? ?????? ??????</Title>
              <Paragraph>
                <Line>
                  ?????? ?????? ???????????? ?????? ????????????. 2019??? ??? ??? ?????? ??????
                  48?????? ?????? ?????? ???????????? ??????????????? ???????????????, ??? ?????????
                  56%??? 2030?????? ?????????????????????.{" "}
                </Line>
                <Underline>
                  ???????????? ?????? ??????????????? ????????? ??????????????? ?????? ????????????.
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
                <span>(??????: KBS??KAIST ????????????????????? ????????? ?????? ?????????)</span>
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
