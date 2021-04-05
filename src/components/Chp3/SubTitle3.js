import React, {useState, useEffect} from 'react'
import styled from 'styled-components/macro'
import _debounce from 'lodash.debounce'

import {
    Container,
    Title,
    SubTitle,
    Paragraph,
    Line,
    Underline
} from '../CommonStyles'

import Interview from './../Interview';
import Graph03 from './Graphs/Graph03'
import Graph04 from './Graphs/Graph04'
import { INTDataSangho } from './../../globalData/INTData';


const Text = ({background}) => {
    const [width, setWidth] = useState(window.innerWidth)
    const [title, setTitle] = useState(null)
    const [graph3, setGraph3] = useState(null)

    useEffect(() => {
        const handleResize = _debounce(() => setWidth(window.innerWidth), 300)

        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        }
    }, [])

    useEffect(() => {
        width > 515 
        ? setTitle(<>수도권 인구 집중이 부른<br />‘초저출산 사태’</>) 
        : setTitle(`수도권 인구 집중이 부른 ‘초저출산 사태’`)
        
        width > 570
        ? setGraph3(`전국 기초자치단체 출산율과 인구밀도 상관관계`)
        : setGraph3(<>전국 기초자치단체 출산율과<br />인구밀도 상관관계</>)

    }, [width])
    return (
        <Fragment background={background}>
            <Section>  
                <Container>
                    <TextWrapper>
                        <Title>{title}</Title>
                        <Paragraph>
                            <Line>
                                손승민·박홍미 부부의 사례처럼, 인구 밀도는 출산율에 큰 영향을 미치고 있습니다. 서울대학교 조영태 교수 연구진은 ‘2019년 전국 기초자치단체의 출산율과 인구밀도의 상관관계’를 분석했습니다.                           
                            </Line>
                        </Paragraph>
                        <Paragraph style={{marginBottom: 0}}>
                            <Line>
                                그 결과, 인구 밀도가 높을수록 출산율은 낮고, 인구 밀도가 낮을수록 출산율은 높아졌습니다.&nbsp;                     
                            </Line>
                            <Underline>
                                사람이 많으면 한정된 자원을 두고 경쟁이 치열해지기 때문에, ‘생존 본능’이 출산이라는 ‘재생산 본능’을 앞서게 된 것입니다.
                            </Underline>
                        </Paragraph>
                        {/* 전국 기초자치단체 출산율과 인구밀도 상관관계 */}
                        <SubTitle>{graph3}</SubTitle>
                        <Graph03 />
                        <Paragraph style={{marginBottom: 0}}>
                            <Line>
                                지난해 우리나라 합계출산율은 아이 한 명도 낳지 않는 0.84명. 심지어 사망자 수가 출생아 수보다 더 많아 ‘인구 데드크로스’도 처음 발생했습니다.&nbsp;
                            </Line>
                            <Underline>
                                만약, 인구와 자원이 이대로 수도권에 집중되면, 30~40년 뒤 인구는 우리나라 사회를 지탱할 수 없을 지도 모릅니다. 
                            </Underline>
                        </Paragraph>
                        {/* 우리나라 인구 사상 첫 자연 감소 */}
                        <SubTitle>우리나라 인구 사상 첫 자연 감소</SubTitle>
                        <Graph04 />
                    </TextWrapper>
                </Container>
            </Section>
            {/* 이상호 인터뷰 */}
            <Interview {...INTDataSangho} />
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


// 타이틀과 첫 섹션에 배경 고정
const Section = styled.section`
    width: 100%;
    height: 100%;
    overflow: hidden;
`

const TextWrapper = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 280px 0 0;

    @media screen and (max-width: 425px) {
        padding: 200px 0 0;
    }
`
