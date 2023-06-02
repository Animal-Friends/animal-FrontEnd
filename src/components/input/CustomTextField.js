import { TextField } from "@mui/material";
import React from "react";

const CustomTextField = (props) => {
  // mui 라이브러리 input 컴포넌트화
  // label은 CustomTextField가 렌더링되는 부분에 표시될 label text props
  return <TextField {...props} label={props.label} />;
};

export default CustomTextField;
