import styled from "styled-components/macro";

// 제 1부
import Hiroya from "../assets/videos/Chp1/Hiroya.mp4";
import Ayano from "../assets/videos/Chp1/Ayano.mp4";
import Sangho from "../assets/videos/Chp1/Sangho.mp4";
// 제 2장
import Gangrae from "../assets/videos/Chp2/Gangrae.mp4"; // 마강래 중앙대 도시부동산계획학과 교수 INT 영상
import Kyung from "../assets/videos/Chp2/Kyung.mp4"; // 성경륭 초대 국가균형발전위원장 INT 영상
import Sohyun from "../assets/videos/Chp2/Sohyun.mp4"; // 박소현 INT 영상
import Gangrae02 from "../assets/videos/Chp2/Gangrae02.mp4"; // 마강래 중앙대 도시부동산계획학과 교수 INT 영상
// 제 3장
import Dooyoung from "../assets/videos/Chp3/Dooyoung.mp4"; // 이두영 충북경제사회연구원장 INT 영상
import Sangho02 from "../assets/videos/Chp3/Sangho.mp4"; // 이상호 한국고용정보원 연구위원 INT 영상
import Sangjoon from "../assets/videos/Chp3/Sangjoon.mp4"; // 이상준 경남 진주 공공기관 근무 INT 영상
import Kyungsoo from "../assets/videos/Chp3/Kyungsoo.mp4"; // 김경수 경남도지사 INT 영상
import Mazda from "../assets/videos/Chp3/Mazda.mp4"; // 마스다 히토야 '마스다 보고서' 작성자·전 일본 총무 대신 INT 영상
import Ikeda from "../assets/videos/Chp3/Ikeda.mp4"; // 이케다 다카히토 히메지시청 지방소생 담당 INT 영상

const Line = styled.div`
  margin-bottom: 20px;

  &:last-child {
    margin-bottom: 0;
  }
`;

export const INTDataHiroya = {
  src: Hiroya,
  interviewee: "마쓰다 히로야",
  position: "전 도쿄대 교수",
  lines: (
    <>
      <Line>
        “지방 소멸은 상당히 충격적인 표현이었습니다. 많은 분들이 주목해주셔서 그
        표현이 계속 이어져 살아 움직이고 있습니다.”
      </Line>
      <Line>
        "(2014년 당시) 일본에 1,800여개의 자치단체가 있고, 그 가운데 절반에
        해당하는 896개 단체가 2040년에 소멸할 것이라고 수치를 내세웠습니다."
      </Line>
      <Line>
        "(그리고 최근) 소멸할 가능성이 있는 자치단체가 896곳이 아니고 927곳까지
        늘어나있다는 것을 알았습니다. 현재 일본은 소멸 가능성이 더욱 강해지고
        있는 것이 현재 상황입니다."
      </Line>
    </>
  ),
};

export const INTDataAyano = {
  src: Ayano,
  interviewee: "아야노 츠키미",
  position: "일본 도쿠시마현",
  lines: (
    <>
      <Line>
        “(20년 전) 오사카에서 나고로 마을로 돌아왔어요. 나고로 마을에 돌아오고
        1년 뒤부터 인형을 만들기 시작했습니다.”
      </Line>
      <Line>
        “이 마을 사람들을 인형으로 만든 적도 있고, 어머니가 살아계셨을 때
        어머니를 만들기도 했어요. 인형을 600개 이상 만들었고요. 지금 350개
        정도가 남았습니다.”
      </Line>
    </>
  ),
};

export const INTDataSangho = {
  src: Sangho,
  interviewee: "이상호",
  position: "한국고용정보원 연구위원",
  lines: (
    <>
      <Line>
        “면이나 군 지역들은 지방 소멸이 거의 완성 단계예요. 이 지역을 떠날 수
        있는 사람들은 대부분 다 떠나버려서 남아있는 고령 인구만 자연적인 인구
        변화, 즉 ‘사망’만 존재하는 거죠.”
      </Line>
      <Line>
        “지방소멸 위험이 더 이상 미래 문제가 아니구나. 더구나 이렇게 지역
        차원으로 쪼개보면, 다음 세대가 경험할 문제가 아니라 이미 우리나라 수많은
        지역이 오늘 현재 겪고 있는 문제입니다.”
      </Line>
    </>
  ),
};

export const INTDataGangrae = {
  src: Gangrae,
  interviewee: "마강래",
  position: "중앙대 도시부동산계획학과 교수",
  lines: (
    <>
      <Line>
        “이건 굉장히 상징적인 사건입니다. (국토의) 11.5% 정도 밖에 차지하지
        않는데, 면적 상으로는요. 인구가 반 정도가 몰려있어요.”
      </Line>
      <Line>
        “기본적으로 수도권 일극화, 수도권 독식 현상이 굉장히 강하게 나타나고
        있는 것, 전 국민을 정말 위험에 처하게 하고 있다는 생각을 가지고
        있습니다.”
      </Line>
    </>
  ),
};

export const INTDataKyung = {
  src: Kyung,
  interviewee: "성경륭",
  position: "초대 국가균형발전위원장",
  lines: (
    <>
      <Line>
        “전국에서 사람이 모여들고 자원이 모여들고 이렇게 점점 비대해져 가는 그런
        현상이 극단적으로 진행된 곳을 ‘파멸적 집중’이다 이렇게 이야기를 합니다."
      </Line>
      <Line>
        “이미 수도권의 인구가 50%를 넘어섰습니다. 대체로 이렇게 보고 있고요.
        이것이 이제 우리가 감내할 수 있는 수준을 넘어서지 않았나…”
      </Line>
    </>
  ),
};

export const INTDataSohyun = {
  src: Sohyun,
  interviewee: "박소현",
  position: "부산대학생",
  lines: (
    <>
      <Line>
        “서울에는 좋은 게 너무 많고 출판사들에서 하는 그런 소설 강의 너무 가고
        싶었는데, 매주 가는 비용도 너무 부담되고 내려놔야 되나?”
      </Line>
      <Line>
        "그때 막 고군분투해서 서울교육을 다니려고 했고 일도 다녔을 때,
        체력적으로 힘든 거예요. 근데 그것을 서울사람들은 몰라. 체감을
        못하잖아요.”
      </Line>
      <Line>
        "내가 서울에 있었으면 이렇게 어렵진 않았을까? 이런 생각도 했고, 그때가
        좀 서러웠던 것 같아요.”
      </Line>
    </>
  ),
};

export const INTDataGangrae02 = {
  src: Gangrae02,
  interviewee: "마강래",
  position: "중앙대 도시부동산계획학과 교수",
  lines: (
    <>
      <Line>
        “인구의 양이 줄어든다는 것도 사실 심각한 것인데, 젊은 인구가
        빠져나간다는 것은 양적 감소보다 더 큰 의미가 있어요. ‘그 지역이 정말
        지속 가능한가’에 대한 의문을 갖게 하는 것이죠.”
      </Line>
      <Line>
        “젊은이들도 없어지고, 또 건물도 노후 되고, 빈집도 많이 발생하고…. 이런
        현상이 한 번 시작되면 되돌리기가 상당히 힘이 듭니다. 엄청난 에너지를
        투입하더라도 이것을 반대의 흐름으로 되돌리기가 굉장히 힘든 것이죠.”
      </Line>
    </>
  ),
};

export const INTDataDooyoung = {
  src: Dooyoung,
  interviewee: "이두영",
  position: "충북경제사회연구원장",
  lines: (
    <>
      <Line>
        “수도권에 더 많은 수요와 압력이 생길 수밖에 없는 것이죠. 그러니까
        수도권의 집값이, 부동산 값이, 아파트 값이 폭등할 수밖에 없습니다.”
      </Line>
      <Line>
        “젊은이들도 없어지고, 또 건물도 노후 되고, 빈집도 많이 발생하고…. 이런
        현상이 한 번 시작되면 되돌리기가 상당히 힘이 듭니다. 엄청난 에너지를
        투입하더라도 이것을 반대의 흐름으로 되돌리기가 굉장히 힘든 것이죠”
      </Line>
    </>
  ),
};

export const INTDataSangho02 = {
  src: Sangho02,
  interviewee: "이상호",
  position: "한국고용정보원 연구위원",
  lines: (
    <>
      <Line>
        “통계적으로 보면, 농어촌 지역의 출산율이 가장 높고요. 인구밀도가 높은
        대도시 지역의 출산율이 가장 낮습니다. 한국에서 16개 시·도 가운데
        출산율이 가장 낮은 곳은 서울이고요.”
      </Line>
      <Line>
        “그 까닭은 상대적으로 해당 지역이 경쟁이 심하고 인구밀도가 높고,
        주거비도 비싸기 때문입니다. 청년들에게 상대적으로 출산과 부양에 대한
        압박이 클 수밖에 없고, 그런 것들이 작용하는 것이죠.”
      </Line>
    </>
  ),
};

export const INTDataSangjoon = {
  src: Sangjoon,
  interviewee: "이상준",
  position: "경남 진주 공공기관 근무",
  lines: (
    <>
      <Line>
        “집이 서울이기 때문에 지금 서울로 올라가려고 합니다. 가족이 다 서울에
        있고 맞벌이 부부 생활을 하고 있기 때문에, 진주에서 이주는 좀 어렵고
        서울에서 진주까지 통근을 하고 있습니다.”
      </Line>
    </>
  ),
};

export const INTDataKyungsoo = {
  src: Kyungsoo,
  interviewee: "김경수",
  position: "경남도지사",
  lines: (
    <>
      <Line>
        “경남 혁신도시가 진주에 있지 않습니까? 진주 혁신도시에 있는 분들을 가서
        보면, 여전히 아직 가족들과 함께 내려와 있는 분들의 비율이 (2020년 기준)
        60%를 넘지 못합니다.”
      </Line>
      <Line>
        “그나마 수도권 집중의 속도를 늦추는 역할은 분명히 있었던 것 같아요.
        그런데 이제 그것도 둑이 무너진 것 같아요. 한계에 봉착한 거죠.”
      </Line>
      <Line>
        “‘이래서는 혁신도시만 가지고 균형발전을 만들어나가는 것은 한계에 와있는
        것 아니냐’, 그런 걱정을 하게 됐죠.”
      </Line>
    </>
  ),
};

export const INTDataMazda = {
  src: Mazda,
  interviewee: "마스다 히로야",
  position: `'마스다 보고서' 작성자·전 일본 총무 대신`,
  lines: (
    <>
      <Line>
        “저력 있는 중심도시와 그 주변에 있는, 비록 규모는 작지만 자연환경이
        좋고, 전통과 문화 등이 가득한 곳을 연결해서, 하나의 자치 단체 같은
        공동체를 만들면 어떨까.”
      </Line>
      <Line>
        “거기서 매력을 꾸준히 보여줘 도쿄와 경쟁해 나가면 되지 않을까. 그러면
        지금보다 더욱 ‘지방에서 일하고자 하는 사람들이 늘어나지 않을까’하는
        발상으로 연계중추도시권이라는 것을 구상했습니다.”
      </Line>
    </>
  ),
};

export const INTDataIkeda = {
  src: Ikeda,
  interviewee: "이케다 다카히토",
  position: "히메지시청 지방소생 담당",
  lines: (
    <>
      <Line>
        "8개시 8개촌 중에도 55개의 사업을 하고 있는데 기획 부문을 서로
        연계하거나 산업은 산업끼리, 관광은 관광끼리 저마다의 (장점) 분야마다
        연계하고 있습니다."
      </Line>
    </>
  ),
};
