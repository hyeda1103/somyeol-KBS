import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import KeplerGl from "kepler.gl";
import { addDataToMap } from "kepler.gl/actions";

const Map = ({ data, config }) => {
  const MAPBOX_TOKEN = process.env.REACT_APP_MAPBOX_ACCESS_TOKEN;
  const dispatch = useDispatch();
  useEffect(() => {
    let data2 = require("../../../../data/Chp2/label.json");
    dispatch(
      addDataToMap({
        datasets: [
          {
            info: {
              label: "local_to_seoul_young", // Layer 이름에 뜨는 거
              id: "local_to_seoul_young",
            },
            data: data,
          },
          {
            info: {
              label: "do_label", // Layer 이름에 뜨는 거
              id: "dolabel",
            },
            data: data2,
          },
        ],
        options: {
          centerMap: true,
          readOnly: true, // readOnly true로 설정하면 side panel 사라짐
        },
        config: config,
      })
    );
  }, [dispatch, data, config]);

  const [width, setWidth] = useState(910);
  const [height, setHeight] = useState(550);

  useEffect(() => {
    if (window.innerWidth > 910) {
      setWidth(910);
      setHeight(550);
    } else if (window.innerWidth > 720) {
      setWidth(720);
      setHeight(435);
    } else {
      setWidth(window.innerWidth * 0.9375);
      setHeight((550 / 910) * window.innerWidth * 0.9375);
    }
  }, []);
  return (
    <>
      <KeplerGl
        id="foo"
        mapboxApiAccessToken={MAPBOX_TOKEN}
        width={width}
        height={height}
      />
    </>
  );
};

export default Map;
