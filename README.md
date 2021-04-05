# Somyeol-KBS: Interactive Web with Data Visulization

## Table of contents

- [General Info](#general-info)
- [Setup](#setup)
- [Main Features](#main-features)
  - [Interactive Maps](#interactive-maps)
    - [Interactive Choropleth Map: Vacancy Rate per EupMeonDong 2019](#vacancy-rate-per-eupmeondong-2019)
    - [Interactive Choropleth Map: Local Extinction Rate per EupMeonDong 2019](#local-extinction-rate-per-eupmeondong-2019)
    - [Cartogram](#cartogram)
    - [3D Map](#3d-map)
- [Technologies](#technologies)
- [Status](#status)

## General Info

- Interactive Web Documentary with Data Visualization
- Based on [소멸의 땅](http://vod.kbs.co.kr/index.html?source=episode&sname=vod&stype=vod&program_code=T2011-1097&program_id=PS-2021000586-01-000&broadcast_complete_yn=N&local_station_code=00&section_code=05&section_sub_code=06#more) aired on KBS, 4th April, 2021

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

- This interactive choropleth map visualize the vacancy rate per EupMeonDong.
- This map is made with `Leaflet`
- Data can be found in [popData_optimized.json](./src/components/Chp1/data/popData_optimized.json)

### Local Extinction Rate per EupMeonDong 2019

<img src="https://i.ibb.co/S61FDnr/extinction.gif" alt="카토그램" width="500" />

- This interactive choropleth map visualize the local extinction rate per EupMeonDong.
- This map is made with `Leaflet`
- Data can be found in [popData_optimized.json](./src/components/Chp1/data/popData_optimized.json)

### Cartogram

<img src="https://i.ibb.co/DtgBwVM/cartogram.gif" alt="카토그램" width="500" />

- This cartogram visualize the change of population over time.
- The geographic size is altered to be directly proportional to population.
- This map is made with `D3.js`
- Data can be found in [korea_map3_optimized.geojson](./public/korea_map3_optimized.geojson) and [new_offset.csv](./public/new_offset.csv)

### 3D MAP

<img src="https://i.ibb.co/PxQxnN0/kepler.gif" alt="3D 수도권 인구 이동 지도" width="500" />

- This 3D map visualize the out-migration of young population, from outside to inside Seoul capital area.
- A private MAPBOX access token is required to import 3D map.
- This map is made with `Kepler` and `react-redux`
- Data can be found in [young_move.json](./src/components/Chp2/data/young_move.json') and [map_config.json](./src/components/Chp2/data/map_config.json)

Download all the data or clone this repository by clicking the green "Clone or download" button above.

## Technologies

- This project is created with CRA(Create-React-App).
- Used dependencies and versions can be found in `package.json` in the project root.

## Status

The project was completed on April 4th, 2021.
