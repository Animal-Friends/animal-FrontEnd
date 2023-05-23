import React from "react";
import { useNavigate } from "react-router-dom";
import { CustomMdOutlineArrowBackIosNew } from "../button";
import { HeaderBarContainer } from "../button/styles";

const HeaderBar = ({ text }) => {
  const navigate = useNavigate();
  return (
    <>
      <HeaderBarContainer>
        <CustomMdOutlineArrowBackIosNew
          style={{ marginLeft: "10px" }}
          onClick={() => {
            navigate(-1);
          }}
        />
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
