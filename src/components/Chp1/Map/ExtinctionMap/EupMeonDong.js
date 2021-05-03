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
  ExtinctResult,
  ExtinctIndex,
  Divider2,
  ExtinctAlert,
  District,
  MapWrapper,
  LegendContainer,
  LegendWrapper,
  LegendTitle,
  LegendContent,
  LegendColor,
  LegendEl,
  ReferenceWrapper,
} from "../GridElements";
import AnimatedNumber from "react-animated-numbers";
import "leaflet-control-geocoder/dist/Control.Geocoder.js";
import markerC from "../../../../assets/images/markerCur.svg";
import "../Map.css";

class Legend extends React.Component {
  render() {
    return (
      <LegendContainer>
        <LegendWrapper>
          <LegendTitle>소멸위험지수</LegendTitle>
          <LegendEl>
            <LegendColor style={{ backgroundColor: "#e20707" }} />
            <LegendContent>0.2 미만 (소멸 고위험지역)</LegendContent>
          </LegendEl>
          <LegendEl>
            <LegendColor style={{ backgroundColor: "#ff8433" }} />
            <LegendContent>0.2 이상 0.5 미만 (소멸위험진입단계)</LegendContent>
          </LegendEl>
          <LegendEl>
            <LegendColor style={{ backgroundColor: "#ffff33" }} />
            <LegendContent>0.5 이상 1.0 미만 (소멸 주의단계)</LegendContent>
          </LegendEl>
          <LegendEl>
            <LegendColor style={{ backgroundColor: "#85bf4c" }} />
            <LegendContent>1.0 이상 1.5 미만 (소멸위험 보통)</LegendContent>
          </LegendEl>
          <LegendEl>
            <LegendColor style={{ backgroundColor: "#007200" }} />
            <LegendContent>1.5 이상 (소멸위험 매우 낮음)</LegendContent>
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
  return d >= 1.5
    ? "#007200" // 소멸지수 1.5 이상 (소멸위험 매우 낮음)
    : d >= 1.0
    ? "#85bf4c" // 소멸지수 1.0 이상 1.5 미만 (소멸위험 보통)
    : d >= 0.5
    ? "#ffff33" // 소멸지수 0.5 이상 1.0 미만 (주의단계)
    : d >= 0.2
    ? "#ff8433" // 소멸지수 0.2 이상 0.5 미만 (소멸위험진입단계)
    : null
    ? "#e8e8e8"
    : "#e20707"; // 소멸지수 0.2 미만 (소멸 고위험지역)
};

// 마우스를 올린(Hover) 레이어의 스타일 지정
const highlightFeature = (e) => {
  let layer = e.target; // 이벤트가 발생한 레이어 설정
  // 레이어 스타일 설정
  layer.setStyle({
    weight: 1.5,
    color: "#171717",
    fillOpacity: 1,
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
    fillOpacity: 0.9,
  });

  if (!L.Browser.ie && !L.Browser.opera && !L.Browser.edge) {
    layer.bringToFront();
  }
};

// 메인 컴포넌트
const EupMeonDong = ({ districts }) => {
  const [eupMeonDongName, setEupMeonDongName] = useState(""); // 읍면동 이름
  const [siDoName, setSiDoName] = useState(""); // 시도 이름
  const [siGunGuName, setSiGunGuName] = useState(""); // 시군구 이름
  const [extinctIndex, setExtinctIndex] = useState(null); // 소멸지수
  const [searchPosition, setSearchPosition] = useState(null); // 검색 위치
  const [alertDanger, setAlertDanger] = useState(null); // 소멸지수에 따른 위험단계 안내

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
    ];
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
        setExtinctIndex(searchResults[0].properties.index_2005);
        setSearchPosition({
          lat: searchResults[0].properties.lat,
          lng: searchResults[0].properties.lon,
        });
        setAlertDanger(
          searchResults[0].properties.index_2005 >= 1.5
            ? "소멸위험 매우 낮음"
            : searchResults[0].properties.index_2005 >= 1.0
            ? "소멸위험 보통"
            : searchResults[0].properties.index_2005 >= 0.5
            ? "소멸 주의단계"
            : searchResults[0].properties.index_2005 >= 0.2
            ? "소멸위험 진입단계"
            : searchResults[0].properties.index_2005 >= 0.0
            ? "소멸고위험 단계"
            : null
        );
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
            placeholder="시군구 선택"
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
            options={EupMeonDongOption}
            onChange={handleEupMeonDongInputChange}
            noOptionsMessage={() => `옵션이 없어요`}
            placeholder="읍면동 선택"
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
        </SearchBox>
      </>
    );
  };

  // 소멸지도의 스타일 설정
  const mapStyle = {
    weight: 0.3,
    color: "#171717",
    fillOpacity: 0.9,
  };

  // 각 지역 또는 레이어에 대한 특성 설정
  const onEachDistrict = (district, layer) => {
    layer.options.fillColor = getColor(district.properties.index_2005); // 소멸지수에 따른 레이어 색 설정
    const eupmeondong = district.properties.adm_nm.split(" ")[2]; // 레이어의 읍면동 설정
    const sido = district.properties.adm_nm.split(" ")[0]; // 레이어의 시도 설정
    const extinctIndex = district.properties.index_2005; // 레이어의 소멸지수 설정
    const clickedLat = district.properties.lat; // 레이어의 lat 설정
    const clickedLng = district.properties.lon; // 레이어의 lng 설정

    let regexp = /^\D{1,}시\D{1,}구/g;

    let spaced = regexp.test(district.properties.adm_nm.split(" ")[1])
      ? `${district.properties.adm_nm.split(" ")[1].split("시")[0]}시 ${
          district.properties.adm_nm.split(" ")[1].split("시")[1]
        }`
      : district.properties.adm_nm.split(" ")[1];

    const sigungu = spaced; // 레이어의 시군구 설정
    // 이벤트가 발생하는 레이어에 대한 상태 설정
    layer.on({
      mouseover: highlightFeature,
      mouseout: resetHighlight,
      click: (e) => {
        L.DomEvent.stopPropagation(e); // 다른 이벤트와 충돌 방지
        setEupMeonDongName(eupmeondong); // 읍면동 이름 설정
        setSiGunGuName(sigungu); // 시군구 이름 설정
        setSiDoName(sido); // 시도 이름 설정
        setExtinctIndex(extinctIndex); // 소멸지수 설정
        setSearchPosition({ lat: clickedLat, lng: clickedLng }); // 검색위치 설정
        setAlertDanger(
          extinctIndex >= 1.5
            ? "소멸위험 매우 낮음"
            : extinctIndex >= 1.0
            ? "소멸위험 보통"
            : extinctIndex >= 0.5
            ? "소멸 주의단계"
            : extinctIndex >= 0.2
            ? "소멸위험 진입단계"
            : extinctIndex >= 0.0
            ? "소멸고위험 단계"
            : null
        );
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
      <Section>
        <InfoWrapper>
          <InfoRow>
            <Column1>
              <TitleSection>
                <Title>우리 동네 소멸위험 지도</Title>
                <Paragraph>
                  <Line>
                    KBS취재진은 한국고용정보원의 조사결과를 바탕으로 ‘2020년
                    지방소멸 위험 지도’를 만들었습니다.
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
              {extinctIndex ? (
                <>
                  <ResultWrapper>
                    <ExtinctResult>
                      <District>
                        {siDoName} {siGunGuName} {eupMeonDongName}
                      </District>
                      <ExtinctIndex idx={extinctIndex}>
                        소멸위험지수&nbsp;
                        <AnimatedNumber
                          animateToNumber={`${
                            extinctIndex.toString().split(".")[0]
                          }`}
                          config={{ tension: 89, friction: 40 }}
                        />
                        .
                        <AnimatedNumber
                          animateToNumber={`${extinctIndex
                            .toString()
                            .split(".")[1]
                            .slice(0, 2)}`}
                          config={{ tension: 89, friction: 40 }}
                        />
                      </ExtinctIndex>
                      <Divider2 />
                      <ExtinctAlert idx={extinctIndex}>
                        {alertDanger}
                      </ExtinctAlert>
                    </ExtinctResult>
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
              <span>2019년 전국 읍면동 소멸위험지수 지도</span>
              <span>(출처: 통계청)</span>
            </ReferenceWrapper>
          </InfoRow>
        </InfoWrapper>
      </Section>
    </>
  );
};

export default React.memo(EupMeonDong);
