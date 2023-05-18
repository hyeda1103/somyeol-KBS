# 소멸의 땅

> KBS 시사 다큐 '소멸의 땅'(2021년 4월 4일 KBS 시사기획 창 방영)의 [인터렉티브 웹](https://somyeol.kbs.co.kr/)입니다.

## 목차

- [일반 정보](#일반-정보)
- [설정](#설정)
- [주요 특성](#주요-특성)
  - [2019 읍면동 단위의 빈집율 지도](#2019-읍면동-단위의-빈집율-지도)
  - [2019 읍면동 단위의 지방소멸지도](#2019-읍면동-단위의-지방소멸지도)
  - [시대별 인구변화를 면적으로 나타내는 카토그램](#시대별-인구변화를-면적으로-나타내는-카토그램)
  - [수도권으로의 청년인구이동을 나타내는 3D 지도](#수도권으로의-청년인구이동을-나타내는-3D-지도)
- [기술](#기술)
- [수상](#수상)
- [참고](#참고)
- [라이센스](#라이센스)
- [English ver.](#interactive-web-documentary-with-data-visulization)

## 일반 정보

- 본 프로젝트는 2021 4월 4일 KBS 시사기획 창에서 방영한 '소멸의 땅'의 내용을 데이터 중심으로 정리한 인터렉티브 웹입니다. 다음 주소에서 웹사이트를 방문할 수 있습니다: [https://news.kbs.co.kr/special/somyeol/index.html](https://somyeol.kbs.co.kr/)
- 제 1장 '위기의 전조'에는 2019년 기준 빈집율의 단계를 읍면동 단위로 구분하여 나타내는 2D 인터렉티브 지도가 있습니다
  - 사용자는 궁금한 지역을 입력 또는 선택하여 해당 지역의 빈집율을 얻을 수 있습니다
- 제 1장 '위기의 전조'에는 2019년 기준 지방소멸지수의 단계를 읍면동 단위로 구분하여 나타내는 2D 인터렉티브 지도가 있습니다
  - 사용자는 궁금한 지역을 입력 또는 선택하여 해당 지역의 지방소멸지수를 얻을 수 있습니다
- 제 2장 '쏠림과 빨림'에는 인구에 따라 지도 면적을 왜곡하여 나타내는 카토그램이 있습니다 
  - 사용자는 연도를 선택하여 시대에 따라 수도권과 비수도권의 인구밀집이 어떻게 변화하였는지 시각적으로 파악할 수 있습니다
- 제 2장 '쏠림과 빨림'에는 청년인구의 이동을 나타내는 3D 인터렉티브 지도가 있습니다
  - 사용자는 궁금한 지역을 선택하여 해당 지역에서 수도권으로 이동한 청년인구의 비율을 얻을 수 있습니다

## 설정

다음과 같이 `yarn`을 사용하여 프로젝트를 실행할 수 있습니다:

```
$ cd ../somyeol-KBS
$ yarn
$ yarn start
```

## 주요 특성

### 2019 읍면동 단위의 빈집율 지도

<img src="https://i.ibb.co/wzjPbvd/empty-house.gif" alt="카토그램" width="500" />

- 2019년 기준 우리나라의 빈집율을 읍면동 단위로 나타낸 2D 인터렉티브 지도로, `Leaflet`을 사용하여 만들었습니다.
- 지도에 사용된 데이터는 [popData_optimized.json](./src/components/Chp1/data/popData_optimized.json)입니다.

### 2019 읍면동 단위의 지방소멸지도

<img src="https://i.ibb.co/S61FDnr/extinction.gif" alt="카토그램" width="500" />

- 2019년 기준 우리나라의 소멸위험지수를 읍면동 단위로 나타낸 2D 인터렉티브 지도로, `Leaflet`을 사용하여 만들었습니다.
- 지도에 사용된 데이터는 [popData_optimized.json](./src/components/Chp1/data/popData_optimized.json)입니다.

### 시대별 인구변화를 나타내는 카토그램

<img src="https://i.ibb.co/DtgBwVM/cartogram.gif" alt="카토그램" width="500" />

- 우리나라의 시대별 인구변화를 면적의 왜곡으로 나타내는 지도로, `D3.js`를 사용하여 만들었습니다. 각 지역의 인구 수는 면적 크기와 비례합니다.
- 지도에 사용된 데이터는 [korea_map3_optimized.geojson](./public/korea_map3_optimized.geojson)과 [new_offset.csv](./public/new_offset.csv)입니다.

### 수도권으로의 청년인구이동을 나타내는 3D 지도

<img src="https://i.ibb.co/PxQxnN0/kepler.gif" alt="3D 수도권 인구 이동 지도" width="500" />

- 비수도권에서 수도권으로 이동한 청년인구를 나타내는 3D 지도로, `kepler.gl`와 `redux`를 사용하여 만들었습니다.
- 지도에 사용된 데이터는 [young_move.json](./src/components/Chp2/data/young_move.json')과 [map_config.json](./src/components/Chp2/data/map_config.json)입니다.
  <br /><br />

상단에 있는 연두색의 "Clone or download" 버튼을 클릭하여 본 프로젝트에 사용된 소스 코드 및 데이터를 모두 다운로드할 수 있습니다.

## 기술

- 본 프로젝트는 [CRA(Create-React-App)](https://reactjs.org/docs/create-a-new-react-app.html)를 사용하였습니다.
- `package.json`에서 프로젝트 개발에 사용된 모든 dependency를 확인할 수 있습니다.

## 수상
- 유네스크와 아시아태평양방송연합, ABU가 공동 주최하는 T4P 미디어상, 변혁적 교육 분야 [디지털 부문 대상](https://news.kbs.co.kr/news/view.do?ncd=7673655)
- Nominated for [The SIGMA AWARDS 2022 for data journalism](https://sigmaawards.org/land-of-the-extinct-how-does-the-local-city-collapse/)
- 제 4회 데이터 저널리즘 어워드 [올해의 데이터 시각화상 수상](http://datajournalismawards.kr/)


## 참고

- [Statistics Korea](http://kostat.go.kr/) 원본 데이터 제공처
- [Kepler.gl](https://kepler.gl/) 3D 인터렉티브 지도 개발용
- [Leaflet](https://leafletjs.com/) 2D 인터렉티브 단계구분도 개발용
- [D3](https://d3js.org/) 카토그램 개발용

## 라이센스

- 고다혜, 웹 개발 - dalgona92@gmail.com
- 최동혁, 데이터 시각화 - nerdinary@gmail.com
- [https://github.com/hyeda1103/somyeol-KBS/blob/main/LICENSE.md](https://github.com/hyeda1103/somyeol-KBS/blob/main/LICENSE.md)

---

# Interactive Web Documentary with Data Visulization

## Table of contents

- [General Info](#general-info)
- [Setup](#setup)
- [Main Features](#main-features)
  - [Interactive Choropleth Map: Vacancy Rate per EupMeonDong 2019](#vacancy-rate-per-eupmeondong-2019)
  - [Interactive Choropleth Map: Local Extinction Rate per EupMeonDong 2019](#local-extinction-rate-per-eupmeondong-2019)
  - [Cartogram](#cartogram)
  - [3D Map](#3d-map)
- [Technologies](#technologies)
- [Reference](#reference)
- [License](#license)

## General Info

- Interactive Web Documentary with Data Visualization
- Contents based on [소멸의 땅](http://vod.kbs.co.kr/index.html?source=episode&sname=vod&stype=vod&program_code=T2011-1097&program_id=PS-2021000586-01-000&broadcast_complete_yn=N&local_station_code=00&section_code=05&section_sub_code=06#more) aired on KBS, April 4th, 2021

- Visit website: [https://somyeol.kbs.co.kr/](https://somyeol.kbs.co.kr/)

## Setup

To run this project, install it locally using yarn:

```
$ cd ../somyeol-KBS
$ yarn
$ yarn start
```

## Main Features

### Vacancy Rate per EupMeonDong 2019

<img src="https://i.ibb.co/wzjPbvd/empty-house.gif" alt="카토그램" width="500" />

- This interactive choropleth map visualize the vacancy rate per EupMeonDong in South Korea.
- This map is made with `Leaflet`
- Data can be found in [popData_optimized.json](./src/components/Chp1/data/popData_optimized.json)

### Local Extinction Rate per EupMeonDong 2019

<img src="https://i.ibb.co/S61FDnr/extinction.gif" alt="카토그램" width="500" />

- This interactive choropleth map visualize the local extinction rate per EupMeonDong in South Korea.
- This map is made with `Leaflet`
- Data can be found in [popData_optimized.json](./src/components/Chp1/data/popData_optimized.json)

### Cartogram

<img src="https://i.ibb.co/DtgBwVM/cartogram.gif" alt="카토그램" width="500" />

- This cartogram visualize the change of population over time in South Korea.
- The geographic size is altered to be directly proportional to population.
- This map is made with `D3.js`
- Data can be found in [korea_map3_optimized.geojson](./public/korea_map3_optimized.geojson) and [new_offset.csv](./public/new_offset.csv)

### 3D MAP

<img src="https://i.ibb.co/PxQxnN0/kepler.gif" alt="3D 수도권 인구 이동 지도" width="500" />

- This 3D map visualize the out-migration of young population, from outside to inside Seoul capital area in South Korea.
- A private MAPBOX access token is required to import 3D map.
- This map is made with `kepler.gl` and `redux`
- Data can be found in [young_move.json](./src/components/Chp2/data/young_move.json') and [map_config.json](./src/components/Chp2/data/map_config.json)

Download all the data or clone this repository by clicking the green "Clone or download" button above.

## Technologies

- This project is built with [CRA(Create-React-App)](https://reactjs.org/docs/create-a-new-react-app.html).
- Used dependencies and versions can be found in `package.json` in the project root.

## Awards and Achievements
- Nominated for [The SIGMA AWARDS 2022 for data journalism](https://sigmaawards.org/land-of-the-extinct-how-does-the-local-city-collapse/)
- 제 4회 데이터 저널리즘 어워드 [올해의 데이터 시각화상 수상](http://datajournalismawards.kr/)

## Reference

- [Statistics Korea](http://kostat.go.kr/) for <strong>raw data</strong>
- [Kepler.gl](https://kepler.gl/) for <strong>3D interactive map</strong>
- [Leaflet](https://leafletjs.com/) for <strong>2D interactive choropleth map</strong>
- [D3](https://d3js.org/) for <strong>Cartogram</strong>
- [Lottie](https://airbnb.io/lottie/#/) for <strong>animated graphs</strong>
- [ReactPlayer](https://www.npmjs.com/package/react-player) for <strong>custom video player</strong>

## License

- Dahye Ko as Web Developer - dalgona92@gmail.com
- Donghyuk Choi as Data Scientist - nerdinary@gmail.com
- [https://github.com/hyeda1103/somyeol-KBS/blob/main/LICENSE.md](https://github.com/hyeda1103/somyeol-KBS/blob/main/LICENSE.md)
