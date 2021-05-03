import React, { useState, useEffect, useCallback } from "react";
import {
  MapContainer,
  GeoJSON,
  ZoomControl,
  Marker,
  useMap,
} from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import AnimatedNumber from "react-animated-numbers";
import Select from "react-select";
import {
  Section,
  TitleSection,
  Title,
  Paragraph,
  Line,
  InfoWrapper,
  ResultWrapper,
  InfoRow,
  Column1,
  GuideWrapper,
  GuideLine,
  SearchBox,
  EmptyHouseResult,
  EmptyIndex,
  Divider,
  Sentence,
  District,
  MapWrapper,
  ReferenceWrapper,
  LegendContainer,
  LegendWrapper,
  LegendTitle,
  LegendContent,
  LegendColor,
  LegendEl,
  Unit,
} from "../GridElements";
import "leaflet-control-geocoder/dist/Control.Geocoder.js";
import markerC from "../../../../assets/images/markerCur.svg";
import "../Map.css";
import subBg from "../../../../assets/images/subBg.webp";
class Legend extends React.Component {
  render() {
    return (
      <LegendContainer>
        <LegendWrapper>
          <LegendTitle>빈집률</LegendTitle>
          <LegendEl>
            <LegendColor style={{ backgroundColor: "#800026" }} />
            <LegendContent>45% 이상</LegendContent>
          </LegendEl>
          <LegendEl>
            <LegendColor style={{ backgroundColor: "#bd0026" }} />
            <LegendContent>40% 이상 45% 미만</LegendContent>
          </LegendEl>
          <LegendEl>
            <LegendColor style={{ backgroundColor: "#e31a1c" }} />
            <LegendContent>35% 이상 40% 미만</LegendContent>
          </LegendEl>
          <LegendEl>
            <LegendColor style={{ backgroundColor: "#fc4e2a" }} />
            <LegendContent>30% 이상 35% 미만</LegendContent>
          </LegendEl>
          <LegendEl>
            <LegendColor style={{ backgroundColor: "#fd8d3c" }} />
            <LegendContent>25% 이상 30% 미만</LegendContent>
          </LegendEl>
          <LegendEl>
            <LegendColor style={{ backgroundColor: "#feb24c" }} />
            <LegendContent>20% 이상 25% 미만</LegendContent>
          </LegendEl>
          <LegendEl>
            <LegendColor style={{ backgroundColor: "#fed976" }} />
            <LegendContent>15% 이상 20% 미만</LegendContent>
          </LegendEl>
          <LegendEl>
            <LegendColor style={{ backgroundColor: "#ffeda0" }} />
            <LegendContent>10% 이상 15% 미만</LegendContent>
          </LegendEl>
          <LegendEl>
            <LegendColor style={{ backgroundColor: "#ffffcc" }} />
            <LegendContent>10% 미만</LegendContent>
          </LegendEl>
        </LegendWrapper>
      </LegendContainer>
    );
  }
}

const icon = L.icon({
  iconSize: [25, 41],
  iconAnchor: [10, 41],
  popupAnchor: [2, -40],
  iconUrl: markerC,
});

// 지도 범례 색 지정
const getColor = (d) => {
  return d >= 0.45
    ? "#800026" // 빈집지수 0.45 이상
    : d >= 0.4
    ? "#bd0026" // 빈집지수 0.40 이상 0.45 미만
    : d >= 0.35
    ? "#e31a1c" // 빈집지수 0.35 이상 0.40 미만
    : d >= 0.3
    ? "#fc4e2a" // 빈집지수 0.30 이상 0.35 미만
    : d >= 0.25
    ? "#fd8d3c" // 빈집지수 0.25 이상 0.30 미만
    : d >= 0.2
    ? "#feb24c" // 빈집지수 0.20 이상 0.25 미만
    : d >= 0.15
    ? "#fed976" // 빈집지수 0.15 이상 0.20 미만
    : d >= 0.1
    ? "#ffeda0" // 빈집지수 0.10 이상 0.15 미만
    : "#ffffcc"; // 빈집지수 0.10 미만
};

// 마우스를 올린(Hover) 레이어의 스타일 지정
const highlightFeature = (e) => {
  let layer = e.target; // 이벤트가 발생한 레이어 설정
  // 레이어 스타일 설정
  layer.setStyle({
    weight: 1.5,
    color: "#171717",
  });

  if (!L.Browser.ie && !L.Browser.opera && !L.Browser.edge) {
    layer.bringToFront();
  }
};

// 마우스를 올리지 않은 레이어의 스타일 기본으로 리셋
const resetHighlight = (e) => {
  let layer = e.target; // 이벤트가 발생한 레이어 설정
  // 레이어 스타일 설정
  layer.setStyle({
    weight: 0.3,
    color: "#171717",
  });

  if (!L.Browser.ie && !L.Browser.opera && !L.Browser.edge) {
    layer.bringToFront();
  }
};

const customStyles = {
  control: (provided, state) => ({
    ...provided,
    background: "#fff",
    borderColor: "#9e9e9e",
    minHeight: "45px",
    height: "45px",
    boxShadow: state.isFocused ? null : null,
  }),

  valueContainer: (provided, state) => ({
    ...provided,
    height: "45px",
    padding: "0 6px",
  }),

  input: (provided, state) => ({
    ...provided,
    margin: "0px",
  }),
  indicatorSeparator: (state) => ({
    display: "none",
  }),
  indicatorsContainer: (provided, state) => ({
    ...provided,
    height: "45px",
  }),
};

// 메인 컴포넌트
const EupMeonDong = ({ districts }) => {
  const [eupMeonDongName, setEupMeonDongName] = useState("");
  const [siDoName, setSiDoName] = useState("");
  const [siGunGuName, setSiGunGuName] = useState("");
  const [emptyCnt, setEmptyCnt] = useState(null);
  const [totalCnt, setTotalCnt] = useState(null);
  const [emptyPercentage, setEmptyPercentage] = useState(null);
  const [searchPosition, setSearchPosition] = useState(null);

  const SelectBox = () => {
    const [selectedSiDo, setSelectedSiDo] = useState("");
    const [selectedSiGunGu, setSelectedSiGunGu] = useState("");
    const [selectedEupMeonDong, setSelectedEupMeonDong] = useState("");

    const SiDoOptions = [
      ...new Set(
        districts.map((district) => district.properties.adm_nm.split(" ")[0])
      ),
    ].sort();
    const SiDoOption = SiDoOptions.map((district, index) => ({
      value: index,
      label: district,
    }));

    const SiGunGuOptions = districts.filter(
      (district) => district.properties.adm_nm.split(" ")[0] === selectedSiDo
    );
    let SiGunGuOption = [
      ...new Set(
        SiGunGuOptions.map(
          (district) => district.properties.adm_nm.split(" ")[1]
        )
      ),
    ].sort();
    SiGunGuOption = SiGunGuOption.map((district) => {
      if (/^\D{1,}시\D{1,}구/g.test(district)) {
        return (district = `${district.split("시")[0]}시 ${
          district.split("시")[1]
        }`);
      }
      return district;
    });
    SiGunGuOption = SiGunGuOption.map((district, index) => ({
      value: index,
      label: district,
    }));

    const EupMeonDongOptions = districts.filter(
      (district) =>
        district.properties.adm_nm.split(" ")[0] === selectedSiDo &&
        district.properties.adm_nm.split(" ")[1] ===
          selectedSiGunGu.replace(" ", "")
    );
    let EupMeonDongOption = [
      ...new Set(
        EupMeonDongOptions.map(
          (district) => district.properties.adm_nm.split(" ")[2]
        )
      ),
    ].sort();
    EupMeonDongOption = EupMeonDongOption.map((district, index) => ({
      value: index,
      label: district,
    }));

    const searchResults = districts.filter(
      (district) =>
        district.properties.adm_nm.split(" ")[0] === selectedSiDo &&
        district.properties.adm_nm.split(" ")[1] ===
          selectedSiGunGu.replace(" ", "") &&
        district.properties.adm_nm.split(" ")[2] === selectedEupMeonDong
    );
    useEffect(() => {
      if (searchResults.length) {
        let spaced = "";
        let regexp = /^\D{1,}시\D{1,}구/g;

        if (regexp.test(searchResults[0].properties.adm_nm.split(" ")[1])) {
          spaced = `${
            searchResults[0].properties.adm_nm.split(" ")[1].split("시")[0]
          }시 ${
            searchResults[0].properties.adm_nm.split(" ")[1].split("시")[1]
          }`;
        } else {
          spaced = searchResults[0].properties.adm_nm.split(" ")[1];
        }

        setSiDoName(searchResults[0].properties.adm_nm.split(" ")[0]);
        setSiGunGuName(spaced);
        setEupMeonDongName(searchResults[0].properties.adm_nm.split(" ")[2]);
        setEmptyPercentage(
          (searchResults[0].properties.density * 100).toFixed(2)
        );
        setEmptyCnt(searchResults[0].properties.empty_count);
        setTotalCnt(searchResults[0].properties.total_count);
        setSearchPosition({
          lat: searchResults[0].properties.lat,
          lng: searchResults[0].properties.lon,
        });
      }
    }, [searchResults]);

    const handleSiDoInputChange = useCallback((e) => {
      setSelectedSiDo(e.label);
    }, []);

    const handleSiGunGuInputChange = useCallback((e) => {
      setSelectedSiGunGu(e.label);
    }, []);

    const handleEupMeonDongInputChange = useCallback((e) => {
      setSelectedEupMeonDong(e.label);
    }, []);

    return (
      <>
        <SearchBox>
          <Select
            options={SiDoOption}
            onChange={handleSiDoInputChange}
            noOptionsMessage={() => null}
            placeholder="시도 선택"
            menuPortalTarget={document.querySelector("body")}
            styles={customStyles}
            theme={(theme) => ({
              ...theme,
              borderRadius: 5,
              colors: {
                ...theme.colors,
                primary25: "#FF8A00",
                primary: "#FF8A00",
              },
            })}
          />

          <Select
            options={SiGunGuOption}
            onChange={handleSiGunGuInputChange}
            noOptionsMessage={() => `옵션이 없어요`}
            menuPortalTarget={document.querySelector("body")}
            placeholder="시군구 선택"
            styles={customStyles}
            theme={(theme) => ({
              ...theme,
              borderRadius: 5,
              colors: {
                ...theme.colors,
                primary25: "#FF8A00",
                primary: "#FF8A00",
              },
            })}
          />

          <Select
            options={EupMeonDongOption}
            onChange={handleEupMeonDongInputChange}
            menuPortalTarget={document.querySelector("body")}
            noOptionsMessage={() => `옵션이 없어요`}
            placeholder="읍면동 선택"
            styles={customStyles}
            theme={(theme) => ({
              ...theme,
              borderRadius: 5,
              colors: {
                ...theme.colors,
                primary25: "#FF8A00",
                primary: "#FF8A00",
              },
            })}
          />
        </SearchBox>
      </>
    );
  };

  // 소멸지도의 스타일 설정
  const mapStyle = {
    weight: 0.3,
    color: "#171717",
    fillOpacity: 1,
  };

  // 각 지역 또는 레이어에 대한 특성 설정
  const onEachDistrict = (district, layer) => {
    layer.options.fillColor = getColor(district.properties.density.toFixed(2)); // 빈집률(0과 1 사이의 값)에 따른 레이어 색 설정
    const eupmeondong = district.properties.adm_nm.split(" ")[2]; // 레이어의 읍면동 설정
    const sido = district.properties.adm_nm.split(" ")[0]; // 레이어의 시도 설정
    const emptyPercentage = (district.properties.density * 100).toFixed(2); // 레이어의 빈집률(0과 1 사이의 값) 설정
    let totalCount = district.properties.total_count; // 레이어의 총 가구수
    const emptyCount = district.properties.empty_count; // 레이어의 빈 가구수(빈집 수)
    const clickedLat = district.properties.lat; // 레이어의 lat 설정
    const clickedLng = district.properties.lon; // 레이어의 lng 설정

    let regexp = /^\D{1,}시\D{1,}구/g;

    let spaced = regexp.test(district.properties.adm_nm.split(" ")[1])
      ? `${district.properties.adm_nm.split(" ")[1].split("시")[0]}시 ${
          district.properties.adm_nm.split(" ")[1].split("시")[1]
        }`
      : district.properties.adm_nm.split(" ")[1];

    const sigungu = spaced; // 레이어의 시군구 설정

    layer.on({
      mouseover: highlightFeature,
      mouseout: resetHighlight,
      click: (e) => {
        L.DomEvent.stopPropagation(e); // 다른 이벤트와 충돌 방지
        setEupMeonDongName(eupmeondong);
        setSiGunGuName(sigungu);
        setSiDoName(sido);
        setEmptyPercentage(emptyPercentage);
        setTotalCnt(totalCount);
        setEmptyCnt(emptyCount);
        setSearchPosition({ lat: clickedLat, lng: clickedLng }); // 검색위치 설정
      },
    });
  };

  // 검색한 지역 위치로 지도 이동, 마커로 표시
  const SearchMarker = () => {
    const map = useMap();

    if (searchPosition !== null) {
      map.setView([searchPosition.lat, searchPosition.lng], 10);
    }
    // position이 null값이면 마커를 표시하지 않고, null값이 아니면 마커를 보여준다
    return searchPosition === null ? null : (
      <Marker position={searchPosition} icon={icon} />
    );
  };

  return (
    <>
      <Section background={subBg}>
        <InfoWrapper>
          <InfoRow>
            <Column1>
              <TitleSection>
                <Title>우리 동네 빈집 지도</Title>
                <Paragraph>
                  <Line>
                    전국에 광범위하게 늘어나고 있는 빈집. KBS취재진은 통계청
                    마이크로데이터를 바탕으로 ‘2019년 전국 읍면동 단위 빈집
                    지도’를 만들었습니다.
                  </Line>
                </Paragraph>
                <GuideWrapper>
                  <GuideLine>
                    아래 필터에 원하는 지역을 입력하면 결과를 확인할 수
                    있습니다.
                  </GuideLine>
                </GuideWrapper>
              </TitleSection>
              <SelectBox />
              {emptyPercentage ? (
                <>
                  <ResultWrapper>
                    <EmptyHouseResult>
                      <District>
                        {siDoName} {siGunGuName} {eupMeonDongName}
                      </District>
                      <EmptyIndex idx={Number(emptyPercentage)}>
                        빈집률&nbsp;
                        <AnimatedNumber
                          animateToNumber={`${emptyPercentage.split(".")[0]}`}
                          config={{ tension: 89, friction: 40 }}
                        />
                        .
                        <AnimatedNumber
                          animateToNumber={`${emptyPercentage.split(".")[1]}`}
                          config={{ tension: 89, friction: 40 }}
                        />
                        %
                      </EmptyIndex>
                      <Divider />
                      <Sentence>
                        <Unit>
                          <b>총 가구 수&nbsp;</b>
                          <AnimatedNumber
                            animateToNumber={totalCnt}
                            includeComma
                            config={{ tension: 89, friction: 40 }}
                          />{" "}
                          가구 &nbsp;
                        </Unit>
                        <Unit>
                          <b>빈집 수&nbsp;</b>
                          <AnimatedNumber
                            animateToNumber={emptyCnt}
                            includeComma
                            config={{ tension: 89, friction: 40 }}
                          />{" "}
                          가구
                        </Unit>
                      </Sentence>
                    </EmptyHouseResult>
                  </ResultWrapper>
                </>
              ) : null}
            </Column1>
            <MapWrapper>
              <MapContainer
                style={{ height: "100%", width: "100%" }}
                zoom={7}
                scrollWheelZoom={false}
                zoomControl={false}
                // attributionControl={false}
                // 충청남도 진산면
                center={[36.1443, 127.3702]}
              >
                <GeoJSON
                  style={mapStyle}
                  data={districts}
                  onEachFeature={onEachDistrict}
                />
                <SearchMarker />
                <ZoomControl position="bottomright" />
              </MapContainer>
              <Legend />
            </MapWrapper>
            <ReferenceWrapper>
              <span>2019년 전국 읍면동 빈집 지도</span>
              <span>(출처: 통계청)</span>
            </ReferenceWrapper>
          </InfoRow>
        </InfoWrapper>
      </Section>
    </>
  );
};

export default React.memo(EupMeonDong);
