// 소멸지수와 빈집률이 합쳐진 데이터 로드
export class LoadPopDataTask {
  load = (setState) => {
    const data = require("../../../data/Chp1/popData_optimized.json");
    setState(data.features);
  };
}
