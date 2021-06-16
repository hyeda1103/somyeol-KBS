import React, { useEffect } from "react";
import styled from "styled-components/macro";
import { RiKakaoTalkFill } from "react-icons/ri";

const KaKaoShare = ({ font, background, radius, padding }) => {
  useEffect(() => {
    createKaKaoButton();
  }, []);
  const createKaKaoButton = () => {
    if (window.Kakao) {
      // 중복 initialization 방지
      if (!window.Kakao.isInitialized()) {
        window.Kakao.init(process.env.REACT_APP_KAKAO_KEY);
      }
      window.Kakao.Link.createDefaultButton({
        container: '#kakao-link-btn',
        objectType: 'feed',
        content: {
          title: '소멸의 땅, 지방은 어떻게 사라지나',
          description: '#지방소멸 #균형발전 #지방 #소멸 #KBS #시사기획창 #수도권 #수도권공화국 #서울공화국 #블랙홀 #지역발전 #지방분권 #공멸 #저출산 #서울민국',
          imageUrl: 'https://i.ibb.co/wYkJc1W/og-image.jpg',
          link: {
            mobileWebUrl: 'https://news.kbs.co.kr/special/somyeol/index.html',
            webUrl: 'https://news.kbs.co.kr/special/somyeol/index.html',
          },
        },
        buttons: [
          {
            title: '웹으로 보기',
            link: {
              mobileWebUrl: 'https://news.kbs.co.kr/special/somyeol/index.html',
              webUrl: 'https://news.kbs.co.kr/special/somyeol/index.html',
            },
          },
        ],
      })
    }
  };

  const onClickKakao = () => {
    window.open("https://sharer.kakao.com/talk/friends/picker/link");
  };
  return (
    <KaKaoShareButton id="kakao-link-btn" onClick={onClickKakao}>
      <KaKao
        font={font}
        background={background}
        radius={radius}
        padding={padding}
      />
    </KaKaoShareButton>
  );
};

export default React.memo(KaKaoShare);

const KaKao = styled(RiKakaoTalkFill)`
  font-size: ${(props) => props.font};
  position: relative;
  color: #fff;
  outline: none;
  cursor: pointer;
  background: ${(props) => props.background};
  border-radius: ${(props) => props.radius};
  padding: ${(props) => props.padding};

  @media screen and (max-width: 355px) {
    font-size: 70px;
    padding: 20px 10px;
  }
`;

const KaKaoShareButton = styled.div`
  background: transparent;
  outline: none;
  cursor: pointer;
  position: relative;
  display: flex;
  align-items: center;
`;
