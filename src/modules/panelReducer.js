// 액션 타입
// 강원, 경남, 경북, 광주, 대구, 대전, 부산, 세종, 울산, 전남, 전북, 제주, 충남, 충북
const TOGGLE_GANGWON = "panel/TOGGLE_GANGWON";
const TOGGLE_GYEONGNAM = "panel/GYUNGNAM";
const TOGGLE_GYEONGBUK = "panel/GYUNGBUK";
const TOGGLE_GWANGJU = "panel/GWANGJU";
const TOGGLE_DAEGU = "panel/DAEGU";
const TOGGLE_DAEJEON = "panel/DAEJEON";
const TOGGLE_BUSAN = "panel/BUSAN";
const TOGGLE_SEJONG = "panel/SEJONG";
const TOGGLE_ULSAN = "panel/ULSAN";
const TOGGLE_JEONNAM = "panel/JEONNAM";
const TOGGLE_JEONBUK = "panel/JEONBUK";
const TOGGLE_JEJU = "panel/JEJU";
const TOGGLE_CHUNGNAM = "panel/CHUNGNAM";
const TOGGLE_CHUNGBUK = "panel/CHUNGBUK";
const TOGGLE_DEFAULT = "panel/DEFAULT";

// 액션 생성 함수
export const toggleGangwon = () => ({ type: TOGGLE_GANGWON });
export const toggleGyeongnam = () => ({ type: TOGGLE_GYEONGNAM });
export const toggleGyeongbuk = () => ({ type: TOGGLE_GYEONGBUK });
export const toggleGwangju = () => ({ type: TOGGLE_GWANGJU });
export const toggleDaegu = () => ({ type: TOGGLE_DAEGU });
export const toggleDaejeon = () => ({ type: TOGGLE_DAEJEON });
export const toggleBusan = () => ({ type: TOGGLE_BUSAN });
export const toggleSejong = () => ({ type: TOGGLE_SEJONG });
export const toggleUlsan = () => ({ type: TOGGLE_ULSAN });
export const toggleJeonnam = () => ({ type: TOGGLE_JEONNAM });
export const toggleJeonbuk = () => ({ type: TOGGLE_JEONBUK });
export const toggleJeju = () => ({ type: TOGGLE_JEJU });
export const toggleChungnam = () => ({ type: TOGGLE_CHUNGNAM });
export const toggleChungbuk = () => ({ type: TOGGLE_CHUNGBUK });
export const toggleDefault = () => ({ type: TOGGLE_DEFAULT });

const initialState = {
  data: require("../data/Chp2/young_move.json"), // 젊은 인구 이동 데이터
  config: require("../data/Chp2/map_config.json"), // 케플러 config
  allPop: 0,
  youngPop: 0,
  youngToMetro: 0,
  regionName: null,
};

export default function kepler(state = initialState, action) {
  const totalData = initialState.data;
  const mapConfig = initialState.config;

  switch (action.type) {
    case TOGGLE_GANGWON:
      mapConfig.config.visState.layers[1].config.visConfig.colorRange.colors = [
        "#56ebd3",
      ];
      return {
        ...state,
        data: {
          fields: totalData.fields,
          rows: totalData.rows.filter((el) => el[1] === "강원"),
        },
        allPop: 288395,
        youngPop: totalData.rows
          .filter((el) => el[1] === "강원")
          .map((el) => el[6])
          .reduce((acc, cur) => acc + cur, 0),
        youngToMetro: totalData.rows
          .filter(
            (el) =>
              (el[0] === "서울" || el[0] === "인천" || el[0] === "경기") &&
              el[1] === "강원"
          )
          .map((el) => el[6])
          .reduce((acc, cur) => acc + cur, 0),
        regionName: "강원",
      };
    case TOGGLE_GYEONGNAM:
      mapConfig.config.visState.layers[1].config.visConfig.colorRange.colors = [
        "#782d40",
      ];
      return {
        ...state,
        data: {
          fields: totalData.fields,
          rows: totalData.rows.filter((el) => el[1] === "경남"),
        },
        allPop: 571948,
        youngPop: totalData.rows
          .filter((el) => el[1] === "경남")
          .map((el) => el[6])
          .reduce((acc, cur) => acc + cur, 0),
        youngToMetro: totalData.rows
          .filter(
            (el) =>
              (el[0] === "서울" || el[0] === "인천" || el[0] === "경기") &&
              el[1] === "경남"
          )
          .map((el) => el[6])
          .reduce((acc, cur) => acc + cur, 0),
        regionName: "경남",
      };
    case TOGGLE_GYEONGBUK:
      mapConfig.config.visState.layers[1].config.visConfig.colorRange.colors = [
        "#9de866",
      ];
      return {
        ...state,
        data: {
          fields: totalData.fields,
          rows: totalData.rows.filter((el) => el[1] === "경북"),
        },
        allPop: 426438,
        youngPop: totalData.rows
          .filter((el) => el[1] === "경북")
          .map((el) => el[6])
          .reduce((acc, cur) => acc + cur, 0),
        youngToMetro: totalData.rows
          .filter(
            (el) =>
              (el[0] === "서울" || el[0] === "인천" || el[0] === "경기") &&
              el[1] === "경북"
          )
          .map((el) => el[6])
          .reduce((acc, cur) => acc + cur, 0),
        regionName: "경북",
      };
    case TOGGLE_GWANGJU:
      mapConfig.config.visState.layers[1].config.visConfig.colorRange.colors = [
        "#ce6552",
      ];
      return {
        ...state,
        data: {
          fields: totalData.fields,
          rows: totalData.rows.filter((el) => el[1] === "광주"),
        },
        allPop: 273513,
        youngPop: totalData.rows
          .filter((el) => el[1] === "광주")
          .map((el) => el[6])
          .reduce((acc, cur) => acc + cur, 0),
        youngToMetro: totalData.rows
          .filter(
            (el) =>
              (el[0] === "서울" || el[0] === "인천" || el[0] === "경기") &&
              el[1] === "광주"
          )
          .map((el) => el[6])
          .reduce((acc, cur) => acc + cur, 0),
        regionName: "광주",
      };
    case TOGGLE_DAEGU:
      mapConfig.config.visState.layers[1].config.visConfig.colorRange.colors = [
        "#2b6955",
      ];
      return {
        ...state,
        data: {
          fields: totalData.fields,
          rows: totalData.rows.filter((el) => el[1] === "대구"),
        },
        allPop: 417430,
        youngPop: totalData.rows
          .filter((el) => el[1] === "대구")
          .map((el) => el[6])
          .reduce((acc, cur) => acc + cur, 0),
        youngToMetro: totalData.rows
          .filter(
            (el) =>
              (el[0] === "서울" || el[0] === "인천" || el[0] === "경기") &&
              el[1] === "대구"
          )
          .map((el) => el[6])
          .reduce((acc, cur) => acc + cur, 0),
        regionName: "대구",
      };
    case TOGGLE_DAEJEON:
      mapConfig.config.visState.layers[1].config.visConfig.colorRange.colors = [
        "#b4ddd4",
      ];
      return {
        ...state,
        data: {
          fields: totalData.fields,
          rows: totalData.rows.filter((el) => el[1] === "대전"),
        },
        allPop: 298820,
        youngPop: totalData.rows
          .filter((el) => el[1] === "대전")
          .map((el) => el[6])
          .reduce((acc, cur) => acc + cur, 0),
        youngToMetro: totalData.rows
          .filter(
            (el) =>
              (el[0] === "서울" || el[0] === "인천" || el[0] === "경기") &&
              el[1] === "대전"
          )
          .map((el) => el[6])
          .reduce((acc, cur) => acc + cur, 0),
        regionName: "대전",
      };
    case TOGGLE_BUSAN:
      mapConfig.config.visState.layers[1].config.visConfig.colorRange.colors = [
        "#e02a61",
      ];
      return {
        ...state,
        data: {
          fields: totalData.fields,
          rows: totalData.rows.filter((el) => el[1] === "부산"),
        },
        allPop: 565590,
        youngPop: totalData.rows
          .filter((el) => el[1] === "부산")
          .map((el) => el[6])
          .reduce((acc, cur) => acc + cur, 0),
        youngToMetro: totalData.rows
          .filter(
            (el) =>
              (el[0] === "서울" || el[0] === "인천" || el[0] === "경기") &&
              el[1] === "부산"
          )
          .map((el) => el[6])
          .reduce((acc, cur) => acc + cur, 0),
        regionName: "부산",
      };
    case TOGGLE_SEJONG:
      mapConfig.config.visState.layers[1].config.visConfig.colorRange.colors = [
        "#46f33e",
      ];
      return {
        ...state,
        data: {
          fields: totalData.fields,
          rows: totalData.rows.filter((el) => el[1] === "세종"),
        },
        allPop: 78427,
        youngPop: totalData.rows
          .filter((el) => el[1] === "세종")
          .map((el) => el[6])
          .reduce((acc, cur) => acc + cur, 0),
        youngToMetro: totalData.rows
          .filter(
            (el) =>
              (el[0] === "서울" || el[0] === "인천" || el[0] === "경기") &&
              el[1] === "세종"
          )
          .map((el) => el[6])
          .reduce((acc, cur) => acc + cur, 0),
        regionName: "세종",
      };
    case TOGGLE_ULSAN:
      mapConfig.config.visState.layers[1].config.visConfig.colorRange.colors = [
        "#2f4285",
      ];
      return {
        ...state,
        data: {
          fields: totalData.fields,
          rows: totalData.rows.filter((el) => el[1] === "울산"),
        },
        allPop: 205405,
        youngPop: totalData.rows
          .filter((el) => el[1] === "울산")
          .map((el) => el[6])
          .reduce((acc, cur) => acc + cur, 0),
        youngToMetro: totalData.rows
          .filter(
            (el) =>
              (el[0] === "서울" || el[0] === "인천" || el[0] === "경기") &&
              el[1] === "울산"
          )
          .map((el) => el[6])
          .reduce((acc, cur) => acc + cur, 0),
        regionName: "울산",
      };
    case TOGGLE_JEONNAM:
      mapConfig.config.visState.layers[1].config.visConfig.colorRange.colors = [
        "#df72ef",
      ];
      return {
        ...state,
        data: {
          fields: totalData.fields,
          rows: totalData.rows.filter((el) => el[1] === "전남"),
        },
        allPop: 286751,
        youngPop: totalData.rows
          .filter((el) => el[1] === "전남")
          .map((el) => el[6])
          .reduce((acc, cur) => acc + cur, 0),
        youngToMetro: totalData.rows
          .filter(
            (el) =>
              (el[0] === "서울" || el[0] === "인천" || el[0] === "경기") &&
              el[1] === "전남"
          )
          .map((el) => el[6])
          .reduce((acc, cur) => acc + cur, 0),
        regionName: "전남",
      };
    case TOGGLE_JEONBUK:
      mapConfig.config.visState.layers[1].config.visConfig.colorRange.colors = [
        "#cdcc50",
      ];
      return {
        ...state,
        data: {
          fields: totalData.fields,
          rows: totalData.rows.filter((el) => el[1] === "전북"),
        },
        allPop: 303453,
        youngPop: totalData.rows
          .filter((el) => el[1] === "전북")
          .map((el) => el[6])
          .reduce((acc, cur) => acc + cur, 0),
        youngToMetro: totalData.rows
          .filter(
            (el) =>
              (el[0] === "서울" || el[0] === "인천" || el[0] === "경기") &&
              el[1] === "전북"
          )
          .map((el) => el[6])
          .reduce((acc, cur) => acc + cur, 0),
        regionName: "전북",
      };
    case TOGGLE_JEJU:
      mapConfig.config.visState.layers[1].config.visConfig.colorRange.colors = [
        "#9085e0",
      ];
      return {
        ...state,
        data: {
          fields: totalData.fields,
          rows: totalData.rows.filter((el) => el[1] === "제주"),
        },
        allPop: 128201,
        youngPop: totalData.rows
          .filter((el) => el[1] === "제주")
          .map((el) => el[6])
          .reduce((acc, cur) => acc + cur, 0),
        youngToMetro: totalData.rows
          .filter(
            (el) =>
              (el[0] === "서울" || el[0] === "인천" || el[0] === "경기") &&
              el[1] === "제주"
          )
          .map((el) => el[6])
          .reduce((acc, cur) => acc + cur, 0),
        regionName: "제주",
      };
    case TOGGLE_CHUNGNAM:
      mapConfig.config.visState.layers[1].config.visConfig.colorRange.colors = [
        "#728e24",
      ];
      return {
        ...state,
        data: {
          fields: totalData.fields,
          rows: totalData.rows.filter((el) => el[1] === "충남"),
        },
        allPop: 358248,
        youngPop: totalData.rows
          .filter((el) => el[1] === "충남")
          .map((el) => el[6])
          .reduce((acc, cur) => acc + cur, 0),
        youngToMetro: totalData.rows
          .filter(
            (el) =>
              (el[0] === "서울" || el[0] === "인천" || el[0] === "경기") &&
              el[1] === "충남"
          )
          .map((el) => el[6])
          .reduce((acc, cur) => acc + cur, 0),
        regionName: "충남",
      };
    case TOGGLE_CHUNGBUK:
      mapConfig.config.visState.layers[1].config.visConfig.colorRange.colors = [
        "#feb786",
      ];
      return {
        ...state,
        data: {
          fields: totalData.fields,
          rows: totalData.rows.filter((el) => el[1] === "충북"),
        },
        allPop: 277054,
        youngPop: totalData.rows
          .filter((el) => el[1] === "충북")
          .map((el) => el[6])
          .reduce((acc, cur) => acc + cur, 0),
        youngToMetro: totalData.rows
          .filter(
            (el) =>
              (el[0] === "서울" || el[0] === "인천" || el[0] === "경기") &&
              el[1] === "충북"
          )
          .map((el) => el[6])
          .reduce((acc, cur) => acc + cur, 0),
        regionName: "충북",
      };
    case TOGGLE_DEFAULT:
      mapConfig.config.visState.layers[1].config.visConfig.colorRange.colors = [
        "#56ebd3",
        "#782d40",
        "#9de866",
        "#ce6552",
        "#2b6955",
        "#b4ddd4",
        "#e02a61",
        "#46f33e",
        "#2f4285",
        "#df72ef",
        "#cdcc50",
        "#9085e0",
        "#728e24",
        "#feb786",
      ];
      return {
        ...state,
        data: { fields: totalData.fields, rows: totalData.rows },
        allPop: 9246146,
        youngPop: totalData.rows
          .map((el) => el[6])
          .reduce((acc, cur) => acc + cur, 0),
        youngToMetro: totalData.rows
          .filter(
            (el) => el[0] === "서울" || el[0] === "인천" || el[0] === "경기"
          )
          .map((el) => el[6])
          .reduce((acc, cur) => acc + cur, 0),
        regionName: "전국",
      };
    default:
      return state;
  }
}
