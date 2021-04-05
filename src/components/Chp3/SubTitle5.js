import React, {useState, useEffect} from 'react'
import styled from 'styled-components/macro'
import _debounce from 'lodash.debounce'

import {
    Title,
    SubTitle,
    Paragraph,
    Line,
    Underline
} from '../CommonStyles'

import Interview from './../Interview';
import Graph07 from './Graphs/Graph07'
import Graph06 from './Graphs/Graph06'
import { INTDataMazda, INTDataIkeda } from './../../globalData/INTData';


const Text = ({background}) => {
    const [width, setWidth] = useState(window.innerWidth)
    const [title, setTitle] = useState(null)

    useEffect(() => {
        const handleResize = _debounce(() => setWidth(window.innerWidth), 300)

        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        }
    }, [])

    useEffect(() => {
        width > 425 
        ? setTitle(<>“뭉쳐야 산다!”…<br />일본의 ‘연계중추 도시 전략’</>) 
        : width > 305
        ? setTitle(<>“뭉쳐야 산다!”…<br />일본의<br />‘연계중추 도시 전략’</>)
        : setTitle(<>“뭉쳐야 산다!”… 일본의 ‘연계중추 도시 전략’</>) 

    }, [width])
    return (
        <Fragment background={background}>
            <Black>
            <Section>  
                <Container>
                    <TextWrapper>
                        <Title>{title}</Title>
                        <Paragraph>
                            <Line>
                                인구 불균형의 직격탄을 맞은 일본은 우리가 직면한 미래입니다. 급격한 경제성장과 함께 도쿄는 지방 인구를 빨아들였고, 도쿄 과밀화로 인한 문제로 일본 정부는 골머리를 앓고 있습니다.                         
                            </Line>
                        </Paragraph>
                        <Paragraph style={{marginBottom: 0}}>
                            <Line>
                                결국, 일본 정부는 특별 대책을 마련했습니다. 이른바 연계중추도시권 정책! 20만 이상의 권역 중심도시를 지정해&nbsp;                   
                            </Line>
                            <Underline>
                                도시 인프라·행정 기능을 '압축'하고 주변 지역을 '연결'한다는 복안
                            </Underline>
                            <Line>
                                이었습니다.
                            </Line>
                        </Paragraph> 
                        <SubTitle>거점 구축과 도시 연결 전략</SubTitle>
                        {/* 거점 구축과 도시 연결 전략 */}
                        <Graph06 /> 
                    </TextWrapper>
                </Container>
            </Section>
            {/* 마스다 인터뷰 */}
            <Interview {...INTDataMazda} />
            <Section>  
                <Container>
                    <TextWrapper>
                        <Paragraph>
                            <Line>
                                연계중추도시 정책을 가장 먼저 시행한 히메지시. 인구 50만 명 규모의 이 도시는 '일상 생활권'이 겹치는 주변 8개시(<Chinese>市</Chinese>)와 8개정(<Chinese>町</Chinese>)을 모아 광역도시권인 이른바 '하리마' 권역을 설정했습니다.                            
                            </Line>
                        </Paragraph>
                        <Paragraph>
                            <Line>
                                우리나라로 말하자면, 인구 규모가 어느 정도 있는 거점 도시를 중심으로 주변 시·군 단위 자치단체와 연결을 통해, 하나의 거대한 생활권을 형성한 것입니다.       
                            </Line>
                        </Paragraph>
                        <Paragraph>
                            <Line>
                                '하리마' 권역의 실행 전략은 크게 2가지!
                            </Line>
                        </Paragraph>
                        <Paragraph>
                            <Line>
                                상급 병원과 소방 시설 등 주요 인프라를 히메지시에 집중하고,&nbsp;
                            </Line>
                            <Underline>
                                교통망을 개편해 주변 지역과의 연결을 강화
                            </Underline>
                            <Line>
                                했습니다. 동시에&nbsp;
                            </Line>
                            <Underline>
                                일자리 확보를 위해 일본 최고 가죽 산지라는 권역 전체 브랜드를 제작해 기업 유치
                            </Underline>
                            <Line>
                                에 나섰습니다.
                            </Line>
                        </Paragraph>
                        <Paragraph style={{maginBottom: 0}}>
                            <Line>
                                도시 인프라와 일자리가 늘어나는 선순환이 이뤄지면서 히메지시의 전입 인구는 2017년을 기점으로 늘어나고 있습니다.              
                            </Line>
                        </Paragraph>
                        {/* 히메지시 전입 인구 현황 */}
                        <SubTitle>히메지시 전입 인구 현황</SubTitle>
                        <Graph07 /> 
                    </TextWrapper>
                </Container>
            </Section>
            {/* 이케다 인터뷰 */}
            <Interview {...INTDataIkeda} />
            <Section>  
                <Container>
                    <TextWrapper>
                        <Paragraph>
                            <Line>
                                현재 우리나라 수도권 인구 집중도는 절반을 넘어섰습니다. 역대 정부에서도 국가균형발전특별법(균특법) 제정과 혁신도시·기업도시 지정, 공공기관 지방 이전 등을 통해 지방 회생에 노력해왔습니다.                            
                            </Line>
                        </Paragraph>
                        <Paragraph>
                            <Line>
                                하지만 지방소멸 위기 가속화라는 결과가 말해주듯 기존의 느슨한 대책으로는 한계가 있습니다. 늦었지만 지금이라도 수도권 공화국을 해체하기 위한 대책이 절실합니다. 특단의 대책과 실행이 필요한 때입니다.      
                            </Line>
                        </Paragraph>
                    </TextWrapper>
                </Container>
            </Section>
            </Black>
        </Fragment>
    )
}

export default React.memo(Text)

const Fragment = styled.section`
    background-image: ${props => `url(${props.background})`};
    background-repeat: no-repeat;
    background-attachment: fixed;
    background-position: 50% 50%;
    width: 100%;
    height: 100%;
    background-size: cover;
    overflow: hidden;
`

const Black = styled.section`
    width: 100%;
    height: 100%;
    overflow: hidden;
    background: linear-gradient(transparent 70%, #000);
    padding-bottom: 150px;

    @media screen and (max-width: 425px) {
        padding: 100px 0;
    }
`

// 타이틀과 첫 섹션에 배경 고정
const Section = styled.section`
    width: 100%;
    height: 100%;
    overflow: hidden;
`

const Container = styled.div`
    position: relative;
    height: auto;
    display: flex;
    justify-content: center;

    @media screen and (max-width: 425px) {
        height: auto;
    }
`

const TextWrapper = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 150px 0;

    @media screen and (max-width: 425px) {
        padding: 100px 0;
    }
`

const Chinese = styled.span`
    text-decoration: none;
    color: #fff;
    font-size: 20px;
    line-height: 40px;
    font-family: 'Noto Serif KR', serif;

    @media screen and (max-width: 425px) {
        font-size: 16px;
        line-height: 30px;
    }
`