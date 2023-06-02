import { CommonStyleButton, Loginbutton } from "./styles";

import Button from "@mui/material/Button";
import React, { useMemo } from "react";
import { MdCancel } from "react-icons/md";
import { BiArrowBack } from "react-icons/bi";
import { MdOutlineArrowBackIosNew } from "react-icons/md";
import { BiTrash } from "react-icons/bi";

//각 버튼에대한 컴포넌트화 부분이며 아래와 모두 동일합니다.
//props로 각 text 또한 style을 받아 각 컴포넌트에 맞게 설정
export const CommonButton = ({ onClick, text, ...style }) => {
  return (
    // CommonButton 컴포넌트는 일반적인 스타일을 가진 버튼을 생성합니다.
    // onClick: 버튼 클릭 시 실행될 함수
    // text: 버튼에 표시될 텍스트
    // style: 추가적인 스타일을 적용하기 위한 객체
    <CommonStyleButton style={style} onClick={onClick}>
      {text}
    </CommonStyleButton>
  );
};

export const LoginButton = ({ onClick, text, ...style }) => {
  // LoginButton 컴포넌트는 로그인 버튼을 생성합니다.
  // onClick: 버튼 클릭 시 실행될 함수
  // text: 버튼에 표시될 텍스트
  // style: 추가적인 스타일을 적용하기 위한 객체
  return <Loginbutton onClick={onClick}>{text}</Loginbutton>;
};

export const BasicButton = (props) => {
  // BasicButton 컴포넌트는 기본적인 스타일을 가진 버튼을 생성합니다.
  // onClick: 버튼 클릭 시 실행될 함수
  // text: 버튼에 표시될 텍스트
  // 나머지 props는 Button 컴포넌트에 전달됩니다.
  //useMemo를 통하여 최적화

  const ButtonStyle = useMemo(
    () => ({
      width: "100%",
      height: "60px",
    }),
    []
  );
  return (
    <Button
      {...props}
      onClick={props.onClick}
      style={ButtonStyle}
      variant="outlined"
    >
      {props.text}
    </Button>
  );
};

export const CustomBiTrash = (props) => {
  // CustomBiTrash 컴포넌트는 사용자 정의 스타일을 가진 BiTrash 아이콘을 생성합니다.
  // onClick: 아이콘 클릭 시 실행될 함수
  // 나머지 props는 BiTrash 컴포넌트에 전달됩니다.
  //useMemo를 통하여 최적화

  const CUSTOMBACK = useMemo(
    () => ({
      width: "20px",
      height: "20px",
      cursor: "pointer",
    }),
    []
  );

  return <BiTrash onClick={props.onClick} style={CUSTOMBACK} />;
};

export const CustomMdOutlineArrowBackIosNew = (props) => {
  // CustomMdOutlineArrowBackIosNew 컴포넌트는 사용자 정의 스타일을 가진 MdOutlineArrowBackIosNew 아이콘을 생성합니다.
  // onClick: 아이콘 클릭 시 실행될 함수
  // 나머지 props는 MdOutlineArrowBackIosNew 컴포넌트에 전달됩니다.
  //useMemo를 통하여 최적화

  const CUSTOMBACK = useMemo(
    () => ({
      width: "20px",
      height: "20px",
      cursor: "pointer",
    }),
    []
  );

  return (
    <MdOutlineArrowBackIosNew onClick={props.onClick} style={CUSTOMBACK} />
  );
};

export const CustomCancelMdCancel = (props) => {
  // CustomCancelMdCancel 컴포넌트는 사용자 정의 스타일을 가진 MdCancel 아이콘을 생성합니다.
  // onClick: 아이콘 클릭 시 실행될 함수
  // 나머지 props는 MdCancel 컴포넌트에 전달됩니다.
  //useMemo를 통하여 최적화

  const CustomCancel = useMemo(
    () => ({
      width: "20px",
      height: "30px",
      cursor: "pointer",
    }),
    []
  );
  return <MdCancel onClick={props.onClick} style={CustomCancel} />;
};

export const CustomBackBiArrow = (props) => {
  // CustomBackBiArrow 컴포넌트는 사용자 정의 스타일을 가진 BiArrowBack 아이콘을 생성합니다.
  // onClick: 아이콘 클릭 시 실행될 함수
  // 나머지 props는 BiArrowBack 컴포넌트에 전달됩니다.
  // "뒤로가기" 텍스트가 포함된 BiArrowBack 아이콘을 렌더링합니다.
  //useMemo를 통하여 최적화
  const CustomBack = useMemo(
    () => ({
      width: "20px",
      height: "30px",
      cursor: "pointer",
    }),
    []
  );
  return (
    <BiArrowBack onClick={props.onClick} style={CustomBack}>
      뒤로가기
    </BiArrowBack>
  );
};
