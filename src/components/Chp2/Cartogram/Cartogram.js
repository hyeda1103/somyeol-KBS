import React, { useEffect, useRef } from "react";
import * as d3 from "d3";

import {
  Section,
  Container,
  TextWrapper,
  Title,
  Guide,
  CartogramSVG,
  ControlBarSVG,
  ReferenceWrapper,
} from "./GridElements.js";

const Cartogram = () => {

  // 카토그램
  const mapRef = useRef();
  const buttonRef = useRef();
  useEffect(() => {
    let width = 1100;
    let height = 700;
    let years = ["표준", 1966, 1980, 1990, 2000, 2010, 2020];
    let svg = d3.select(mapRef.current);
    let btn = d3.select(buttonRef.current);

    let projection = d3
      .geoMercator()
      .center([128, 36])
      .scale(4000)
      .translate([width / 2, height / 2]);

    d3.json("/data/korea_map3_optimized.geojson").then(function (polygon) {
      d3.csv('/data/new_offset.csv').then(function (shift1) {
        let districts = polygon.features.length

        function modifypoly(polyline, shift, delta) {
          let l1 = polyline
          let len = l1.length

          let xintermed1
          let xintermed2
          let yintermed1
          let yintermed2
          let xfinal
          let yfinal

          let xinterp = d3.scaleLinear()
          let yinterp = d3.scaleLinear()

          for (let j = 0; j < len; j++) {
            let a = 1
            let b = 0.05
            let c = -660
            let d = 120
            let e = -2500

            let x1y1 = (Math.floor((l1[j][1] * a) / b) + c) * d + Math.floor((l1[j][0] * a) / b) + e
            let x1y2 = (Math.floor((l1[j][1] * a) / b) + c + 1) * d + Math.floor((l1[j][0] * a) / b) + e
            let x2y1 = (Math.floor((l1[j][1] * a) / b) + c) * d + Math.floor((l1[j][0] * a) / b) + e + 1
            let x2y2 = (Math.floor((l1[j][1] * a) / b) + c + 1) * d + Math.floor((l1[j][0] * a) / b) + e + 1

            xinterp.domain([Math.floor((l1[j][0] * a) / b), Math.floor((l1[j][0] * a) / b) + 1]).range([shift[x1y1]['dx' + String(years[delta])], shift[x2y1]['dx' + String(years[delta])]])
            xintermed1 = xinterp((l1[j][0] * a) / b)

            xinterp.range([shift[x1y2]['dx' + String(years[delta])], shift[x2y2]['dx' + String(years[delta])]])
            xintermed2 = xinterp((l1[j][0] * a) / b)

            xinterp.range([shift[x1y1]['dy' + String(years[delta])], shift[x2y1]['dy' + String(years[delta])]])
            yintermed1 = xinterp((l1[j][0] * a) / b)

            xinterp.range([shift[x1y2]['dy' + String(years[delta])], shift[x2y2]['dy' + String(years[delta])]])
            yintermed2 = xinterp((l1[j][0] * a) / b)

            yinterp.domain([Math.floor((l1[j][1] * a) / b), Math.floor((l1[j][1] * a) / b) + 1]).range([xintermed1, xintermed2])
            xfinal = +yinterp((l1[j][1] * a) / b)

            yinterp.range([yintermed1, yintermed2])
            yfinal = +yinterp((l1[j][1] * a) / b)

            l1[j][0] = +l1[j][0] + xfinal
            l1[j][1] = +l1[j][1] + yfinal

            if (l1[j][0] > 180) {
              l1[j][0] = 179.99
            }
            if (l1[j][1] > 180) {
              l1[j][1] = 179.99
            }
            if (l1[j][0] > 180) {
              l1[j][0] = 179.99
            }
            if (l1[j][1] > 180) {
              l1[j][1] = 179.99
            }
          }
          return l1
        }

        let k = -1
        let temppolygon = JSON.parse(JSON.stringify(polygon)) // 표준
        let polygon2 = JSON.parse(JSON.stringify(polygon)) // 1966
        let polygon3 = JSON.parse(JSON.stringify(polygon)) // 1980
        let polygon4 = JSON.parse(JSON.stringify(polygon)) // 1990
        let polygon5 = JSON.parse(JSON.stringify(polygon)) // 2000
        let polygon6 = JSON.parse(JSON.stringify(polygon)) // 2010
        let polygon7 = JSON.parse(JSON.stringify(polygon)) // 2020

        while (k++ < districts - 1) {
          polygon2.features[k].geometry.coordinates[0] = modifypoly(temppolygon.features[k].geometry.coordinates[0], shift1, 1)
        }

        temppolygon = JSON.parse(JSON.stringify(polygon))
        districts = polygon.features.length
        k = -1

        while (k++ < districts - 1) {
          polygon3.features[k].geometry.coordinates[0] = modifypoly(temppolygon.features[k].geometry.coordinates[0], shift1, 2)
        }

        temppolygon = JSON.parse(JSON.stringify(polygon))
        districts = polygon.features.length
        k = -1

        while (k++ < districts - 1) {
          polygon4.features[k].geometry.coordinates[0] = modifypoly(temppolygon.features[k].geometry.coordinates[0], shift1, 3)
        }

        temppolygon = JSON.parse(JSON.stringify(polygon))
        districts = polygon.features.length
        k = -1

        while (k++ < districts - 1) {
          polygon5.features[k].geometry.coordinates[0] = modifypoly(temppolygon.features[k].geometry.coordinates[0], shift1, 4)
        }

        temppolygon = JSON.parse(JSON.stringify(polygon))
        districts = polygon.features.length
        k = -1

        while (k++ < districts - 1) {
          polygon6.features[k].geometry.coordinates[0] = modifypoly(temppolygon.features[k].geometry.coordinates[0], shift1, 5)
        }

        temppolygon = JSON.parse(JSON.stringify(polygon))
        districts = polygon.features.length
        k = -1

        while (k++ < districts - 1) {
          polygon7.features[k].geometry.coordinates[0] = modifypoly(temppolygon.features[k].geometry.coordinates[0], shift1, 6)
        }

        k = -1

        while (k++ < districts - 1) {
          polygon.features[k].geometry.coordinates[0] = polygon.features[k].geometry.coordinates[0].map(projection)
          polygon2.features[k].geometry.coordinates[0] = polygon2.features[k].geometry.coordinates[0].map(projection)
          polygon3.features[k].geometry.coordinates[0] = polygon3.features[k].geometry.coordinates[0].map(projection)
          polygon4.features[k].geometry.coordinates[0] = polygon4.features[k].geometry.coordinates[0].map(projection)
          polygon5.features[k].geometry.coordinates[0] = polygon5.features[k].geometry.coordinates[0].map(projection)
          polygon6.features[k].geometry.coordinates[0] = polygon6.features[k].geometry.coordinates[0].map(projection)
          polygon7.features[k].geometry.coordinates[0] = polygon7.features[k].geometry.coordinates[0].map(projection)
        }

        btn
          .selectAll('circle')
          .data([1, 2, 3, 4, 5, 6, 7])
          .enter()
          .append('circle')
          .attr('id', function (d) {
            return 'circle' + d
          })
          .attr('class', function (d) {
            return 'circle circle' + d
          })
          .attr('r', 15 / 2)
          .attr('fill', '#fff')
          .style('stroke-width', 3)
          .style('stroke', '#fff')
          .attr('cursor', 'pointer')
          .attr('cx', function (d) {
            return 70 * d
          })
          .attr('cy', 12)
          .on('click', function (d, i) {
            mapshift(i)
          })

        btn
          .selectAll('text')
          .data([1, 2, 3, 4, 5, 6, 7])
          .enter()
          .append('text')
          .attr('class', function (d) {
            return 'text text' + d
          })
          .style('font-size', '15px')
          .style('font-weight', '400')
          .style('fill', '#AAAAAA')
          .attr('x', function (d) {
            let xPos = d === 1 ? 70 * d - 13 : 70 * d - 19
            return xPos
          })
          .text(function (d) {
            return years[d - 1]
          })
          .attr('y', 50)

        d3.select('.circle1')
          .style('fill', '#FFB23F')
          .attr('r', 18 / 2)
          .style('stroke-width', 3)
          .style('stroke', '#FF9900')

        d3.select('.text1').style('fill', '#FFB23F').style('font-size', '15px').style('font-weight', '400')

        function mapshift(n) {
          //switch maps

          d3.selectAll('.circle')
            .transition()
            .duration(500)
            .style('fill', '#fff')
            .attr('r', 15 / 2)
            .style('stroke-width', 3)
            .style('stroke', '#fff')

          d3.select('.circle' + n)
            .transition()
            .duration(500)
            .style('fill', '#FFB23F')
            .attr('r', 18 / 2)
            .style('stroke-width', 3)
            .style('stroke', '#FF9900')

          d3.selectAll('.text').transition().duration(500).style('font-size', '15px').style('font-weight', '400').style('fill', '#AAAAAA')

          d3.select('.text' + n)
            .transition()
            .duration(500)
            .style('fill', '#FFB23F')
            .style('font-size', '15px')
            .style('font-weight', '400')

          if (n === 1) {
            map1()
          }
          if (n === 2) {
            map2()
          }
          if (n === 3) {
            map3()
          }
          if (n === 4) {
            map4()
          }
          if (n === 5) {
            map5()
          }
          if (n === 6) {
            map6()
          }
          if (n === 7) {
            map7()
          }
        }

        let pathn = d3.geoPath().projection(null)

        let worldmap = svg.selectAll('path').data(polygon.features).enter().append('path').attr('d', pathn).attr('fill', 'transparent').attr('shape-rendering', 'optimizeSpeed').style('stroke', 'white').style('stroke-width', 1)

        let dur = 1000
        map1()

        function map1() {
          worldmap.data(polygon.features).transition().duration(dur).attr('d', pathn)
        }

        function map2() {
          worldmap.data(polygon2.features).transition().duration(dur).attr('d', pathn)
        }

        function map3() {
          worldmap.data(polygon3.features).transition().duration(dur).attr('d', pathn)
        }

        function map4() {
          worldmap.data(polygon4.features).transition().duration(dur).attr('d', pathn)
        }

        function map5() {
          worldmap.data(polygon5.features).transition().duration(dur).attr('d', pathn)
        }

        function map6() {
          worldmap.data(polygon6.features).transition().duration(dur).attr('d', pathn)
        }

        function map7() {
          worldmap.data(polygon7.features).transition().duration(dur).attr('d', pathn)
        }
      })
    });
  }, []);

  return (
    <>
      <Section>
        <Container>
          <TextWrapper>
            <Title>카토그램으로 보는 '대한민국 지도'</Title>
            <Guide>
              아래 버튼을 눌러, 시대별 우리나라의 모습을 확인해보세요.
            </Guide>
          </TextWrapper>
          <ControlBarSVG
            ref={buttonRef}
            viewBox="0 0 560 60"
            preserveAspectRatio="xMidYMid meet"
          />
          <CartogramSVG
            ref={mapRef}
            viewBox="300 150 540 400"
            preserveAspectRatio="xMidYMid meet"
          />
        </Container>
        <ReferenceWrapper>
          <span>
            ※카토그램: 일반 지도를 통계치에 따라 바꾼 지도로, 인구가 많으면 많을
            수록 면적이 커진다.
          </span>
          <span>(출처: KBS×KAIST 문화기술대학원 박주용 교수 연구실)</span>
        </ReferenceWrapper>
      </Section>
    </>
  );
};

export default Cartogram;
