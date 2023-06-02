import React from "react";
import { useNavigate } from "react-router-dom";
import { CustomMdOutlineArrowBackIosNew } from "../button";
import { HeaderBarContainer } from "../button/styles";

const HeaderBar = ({ text }) => {
  const navigate = useNavigate(); // react-router에 내장된 path로 가기위한 함수
  return (
    <>
      {/*  컴포넌트화 */}
      <HeaderBarContainer>
        <CustomMdOutlineArrowBackIosNew
          style={{ marginLeft: "10px" }} //주변여백 10px
          onClick={() => {
            //클릭함수
            //클릭하게될시 전 페이지로 이동하는 함수
            navigate(-1);
          }}
        />
        {/*    flex: 1은 해당 <div> 요소가 남은 공간을 모두 차지하도록 설정합니다. 즉, 주변 요소들과 공간을 공평하게 분배하여 컨테이너의 너비에 맞게 확장됩니다.
         */}
        <div style={{ flex: 1 }}>
          <div>
            <h3>{text}</h3>
          </div>
        </div>
      </HeaderBarContainer>
    </>
  );
};

export default HeaderBar;
