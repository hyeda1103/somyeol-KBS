import React, { useState, useEffect } from "react";
import EupMeonDong from "./EupMeonDong";
import { LoadPopDataTask } from "../../tasks/LoadTask";

const ExtinctionMap = () => {
  const [districts, setDistricts] = useState([]);

  const load = () => {
    const loadPopDataTask = new LoadPopDataTask();
    loadPopDataTask.load(setDistricts);
  };

  useEffect(load, []);

  return <EupMeonDong districts={districts} />;
};

export default ExtinctionMap;
