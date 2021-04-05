import React  from 'react'
import styled, {css} from 'styled-components/macro'
import {FaFacebookF,  FaTwitter} from 'react-icons/fa'
import { FacebookShareButton, TwitterShareButton } from 'react-share'
// 컴포넌트
import {Button} from '../Button'
import KaKaoShareButton from '../KaKao2';
// outro 배경 이미지
import bgImg from '../../assets/images/Chp2/outBg.webp'


const ToNextChp = () => {

    return (
        <>
            <Section background={bgImg}>     
                <Container>
                    <Wrapper>
                        <MsgWrapper>
                            <Message>지방 소멸은 이미 심각하게 진행됐습니다. 더 늦기 전에 이 사실을 널리 알려주세요.</Message>                            
                        </MsgWrapper>
                        {/* SNS 섹션 */}
                        <SNSWrapper>
                            <KaKaoShareButton 
                            font={`95px`}
                            background={`rgba(0, 0, 0, 0.6)`}
                            radius={`50px`}
                            padding={`30px 10px`} />
                            <FacebookShareButton
                            url={"https://infallible-montalcini-e57de1.netlify.app"}
                            quote={"소멸의 땅, 지방은 어떻게 사라지나??"}
                            hashtag="#지방소멸, #위기의전조, #KBS, #특집다큐"
                            style={{outline: 'none'}}
                            image={bgImg}
                            >
                                <Facebook />
                            </FacebookShareButton>
                            <TwitterShareButton 
                            url={"https://infallible-montalcini-e57de1.netlify.app"}
                            quote={"소멸의 땅, 지방은 어떻게 사라지나"}
                            hashtag="#지방소멸 #위기의전조 #KBS #특집다큐"
                            style={{outline: 'none'}}
                            >
                                <Twitter />
                            </TwitterShareButton>
                        </SNSWrapper>
                        <BtnWrapper>
                            <Button to='/chp1' big="true" prev="true">
                                이전 내용 보기
                            </Button>
                            <Button to='/chp3' big="true">
                                다음 내용 보기
                            </Button>
                        </BtnWrapper>
                        <BroadcastingGuideWrapper>
                            <Light>보다 자세한 내용은&nbsp;</Light> 
                            <Bold>KBS 1TV {`<시사기획 창>`}, 소멸의 땅: 지방은 어떻게 사라지나</Bold> 
                            <Light>&nbsp;편 (4월 4일, 밤 9시 40분)에서 확인할 수 있습니다.</Light>
                        </BroadcastingGuideWrapper>
                        {/* 푸터 */}
                        <Footer>
                            <Divider />
                            <CreditContainer>
                                <CreditUnitWrapper>
                                    <Role>기획&nbsp;</Role><Name>KBS창원 심층기획팀</Name>
                                </CreditUnitWrapper>
                                <CreditUnitWrapper>
                                    <Role>취재&nbsp;</Role><Name>이형관</Name>
                                </CreditUnitWrapper>          
                                <CreditUnitWrapper>
                                    <Role>촬영&nbsp;</Role><Name>이하우</Name>
                                </CreditUnitWrapper>
                                <CreditUnitWrapper>
                                    <Role>개발&nbsp;</Role><Name>고다혜</Name>
                                </CreditUnitWrapper>
                                <CreditUnitWrapper>
                                    <Role>디자인&nbsp;</Role><Name>박수홍&nbsp;</Name><Name>이다빈</Name>
                                </CreditUnitWrapper>
                                <CreditUnitWrapper>
                                    <Role>데이터 시각화&nbsp;</Role><Name>최동혁</Name>
                                </CreditUnitWrapper>
                                <CreditUnitWrapper>
                                    <Role>리서처&nbsp;</Role><Name>채경진&nbsp;</Name><Name>추소현</Name> 
                                </CreditUnitWrapper>
                                <CreditUnitWrapper>
                                    <Role>제작&nbsp;</Role><Name>KBS창원·시사기획 창</Name> 
                                </CreditUnitWrapper>
                            </CreditContainer>        
                        </Footer> 
                    </Wrapper>
                </Container>
            </Section>
        </>
    )
}

export default ToNextChp


// 타이틀과 첫 섹션에 배경 고정
const Section = styled.section`
    background-image: ${props => `url(${props.background})`};
    background-repeat: no-repeat;
    background-position: 50% 50%;
    background-size: cover;
    width: 100%;
    height: 100%;
    overflow: hidden;
`

// 타이틀 섹션
const Container = styled.div`
    position: relative;
    height: auto;
    display: flex;
    justify-content: center;
    background: linear-gradient(#000000,#00000070 90%);
`

// 타이틀을 포함하고 있는 Wrapper
const Wrapper = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 81px 0 0;

    @media screen and (max-width: 768px) {
        padding: 91px 0 0;
    }

    @media screen and (max-width: 425px) {
        padding: 112px 0 0;
    }
`

// 메세지 섹션
const MsgWrapper = styled.div`
    display: flex;
    flex-direction: column;
    margin-bottom: 40px;
    width: 700px; 

    @media screen and (max-width: 768px) {
        margin-bottom: 40px;
        width: 88vw; 
    }

    @media screen and (max-width: 425px) {
        margin-bottom: 50px;
    }
`

// 메세지
const Message = styled.h1`
    font-size: 40px;
    font-weight: 800;
    line-height: 65px;
    text-align: center;
    color: #fff;

    @media screen and (max-width: 425px) {
        font-size: 35px;
        line-height: 60px;
    }

    @media screen and (max-width: 425px) {
        font-size: 30px;
        line-height: 50px;
    }
`

// SNS 섹션
const SNSWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 0 auto 160px;
    width: 445px;

    @media screen and (max-width: 768px) {
        margin: 0 auto 140px;
        width: 445px;
    }

    @media screen and (max-width: 425px) {
        margin: 0 auto 180px;
        width: 345px;
    }

    @media screen and (max-width: 355px) {
        margin: 0 auto 180px;
        width: 82vw;
    }
`

// SNS 아이콘
const Icons = css`
    font-size: 95px;
    color: #fff;
    background: rgba(0, 0, 0, 0.6);
    border: none;
    border-radius: 50%;
    padding: 30px 10px;
    cursor: pointer;

    @media screen and (max-width: 355px) {
        font-size: 70px;
        padding: 20px 10px;
    }
`

const Facebook = styled(FaFacebookF)`
    ${Icons}
`

const Twitter = styled(FaTwitter)`
    ${Icons}
`

// 페이지 이동 버튼 섹션
const BtnWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 102.85px;

    @media screen and (max-width: 768px) {
        flex-direction: column;
        margin-bottom: 115px;
    }

    @media screen and (max-width: 425px) {
        margin-bottom: 98.37px;
    }
`


// Footer
const Footer = styled.div`
    height: auto;
    padding: 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

// 구분선
const Divider = styled.div`
    position: relative;
    justify-content: center;
    align-items: center;
    border-bottom: 0.5px solid #C4C4C4;
    width: 90vw;
`

const CreditContainer = styled.div`
    position: relative;
    padding: 20px 0 22.15px;
    display: flex;  
    justify-content: center;
    align-items: center;  
    flex-wrap: wrap;
    width: 88vw;

    @media screen and (max-width: 768px) {
        padding: 20px 0 23px;
    }

    @media screen and (max-width: 425px) {
        padding: 15px 4%;   
        width: 90vw;     
    }
`

const CreditUnitWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0 15px;
    white-space: nowrap;
    @media screen and (max-width: 768px) {
        margin: 0 10px;
    }
    @media screen and (max-width: 425px) {
        margin: 0 7px;
    }
`

const Credit = css`
    font-size: 16px;
    line-height: 28px;
    text-align: center;
    color: #AAAAAA;
    white-space: nowrap;

    @media screen and (max-width: 768px) {
        font-size: 14px;
        line-height: 23px;        
    }

    @media screen and (max-width: 425px) {
        font-size: 11px;
        line-height: 19px;
    }
`

const Role = styled.p`
    ${Credit}    
    margin-right: 3px;
`

const Name = styled.p`
    ${Credit}
    font-weight: 800;
`

const BroadcastingGuideWrapper = styled.div`
    text-align: center;
    margin-bottom: 20px;
    width: 87vw;
` 

const BroadcastingGuide = css`
    font-family: 'Noto Serif KR', serif;
    font-size: 20px;
    line-height: 40px;
    text-align: center;
    color: #fff;

    @media screen and (max-width: 768px) {
        font-size: 18px;
        line-height: 32px;
    }

    @media screen and (max-width: 425px) {
        font-size: 13px;
        line-height: 26px;
    }
` 

const Light = styled.span`
    ${BroadcastingGuide}
`

const Bold = styled.span`
    ${BroadcastingGuide}
    font-weight: 800;
`