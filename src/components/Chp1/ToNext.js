import React from "react";
// 컴포넌트
import { Button } from "../Common/Button";
import ToNextForm from "../Common/ToNextForm";
// outro 배경 이미지
import bgImg from "../../assets/images/Chp1/outBg.webp";

const ToNextChp = () => {
  return (
    <ToNextForm bgImg={bgImg}>
      <Button to="/chp2" big="true">
        다음 내용 보기
      </Button>
    </ToNextForm>
  );
};

export default ToNextChp;
