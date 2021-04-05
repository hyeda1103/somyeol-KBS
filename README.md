# Somyeol-KBS: Interactive Web with Data Visulization

## Table of contents

- [General info](#general-info)
- [Setup](#setup)
- [Features](#features)
  - [Interactive Maps](#interactive-maps)
    - [Interactive Choropleth Map: Vacancy Rate per EupMeonDong 2019](#vacancy-rate-per-eupmeondong-2019)
    - [Interactive Choropleth Map: Local Extinction Rate per EupMeonDong 2019](#local-extinction-rate-per-eupmeondong-2019)
- [Technologies](#technologies)
- [Status](#status)

## General Info

- Interactive Web with Data Visualization for [소멸의 땅](http://vod.kbs.co.kr/index.html?source=episode&sname=vod&stype=vod&program_code=T2011-1097&program_id=PS-2021000586-01-000&broadcast_complete_yn=N&local_station_code=00&section_code=05&section_sub_code=06#more) aired on KBS.

- Visit website: [https://somyeol.kbs.co.kr/](https://somyeol.kbs.co.kr/)

## Setup

- Install dependencies with the following command: `yarn`
- Open http://localhost:3000/ and see the app with the following command: `yarn start`

## Features

### Interactive Maps

#### Vacancy Rate per EupMeonDong 2019

<img src="https://i.ibb.co/wzjPbvd/empty-house.gif" alt="카토그램" width="500" />
- This interactive choropleth map visualize the vacancy rate per EupMeonDong.
- This map is made with `Leaflet`
- EupMyeonDong-level data can be found in [popData_optimized.json](./components/Chp1/data/popData_optimized.json)

#### Local Extinction Rate per EupMeonDong 2019

<img src="https://i.ibb.co/S61FDnr/extinction.gif" alt="카토그램" width="500" />
- This interactive choropleth map visualize the local extinction rate per EupMeonDong.
- This map is made with `Leaflet`
- EupMyeonDong-level data can be found in [popData_optimized.json](./components/Chp1/data/popData_optimized.json)

#### Cartogram

<img src="https://i.ibb.co/DtgBwVM/cartogram.gif" alt="카토그램" width="500" />

- This cartogram visualize the change of population over time.
- The geographic size is altered to be directly proportional to population.
- This map is made with `D3.js`
- EupMyeonDong-level data can be found in [popData_optimized.json](./components/Chp1/data/popData_optimized.json)

#### 3D map

`Kepler`, `redux`

Download all the data or clone this repository by clicking the green "Clone or download" button above.

### Interview

## Technologies

This project is created with CRA(Create-React-App).

## Status

The project was completed on April 4th.
