import CommonModal from "../CommonModal";
import { InputStyle, TopBar } from "../style/style";
import {
  BasicButton,
  CustomBackBiArrow,
  CustomCancelMdCancel,
} from "../../button";
import CustomTextField from "../../input/CustomTextField";
import { useState } from "react";

const SignUpModal = ({ setLoginModal, isModalOpen, setIsOpenModal }) => {
  const [userInfo, setUserInfo] = useState({
    id: "",
    name: "",
    password: "",
    birth: "",
  });
  const [isError, setIsError] = useState({
    isPassword: false,
    isPwdCheck: false,
    isId: false,
    isName: false,
    isBirth: false,
  });
  const [label, setLabel] = useState({
    passwordMsg: "",
    passwordCheck: "",
    labelId: "",
    labelName: "",
    labelBirth: "",
  });
  const [pwdCheck, setPwdCheck] = useState("");
  const handleChange = (type) => (e) => {
    setUserInfo({ ...userInfo, [type]: e.target.value });
  };
  return (
    <>
      {isModalOpen && (
        <CommonModal isModalOpen={isModalOpen} setIsOpenModal={setIsOpenModal}>
          <div>
            <TopBar style={{ marginBottom: "30px" }}>
              <CustomBackBiArrow
                onClick={() => {
                  setLoginModal(true);
                  setIsOpenModal(false);
                }}
              />
              <CustomCancelMdCancel
                onClick={() => {
                  setIsOpenModal(false);
                }}
              >
                닫기아이콘
              </CustomCancelMdCancel>
            </TopBar>
            <div>
              <CustomTextField
                onChange={handleChange("id")}
                style={InputStyle}
                type="text"
                label={"아이디"}
                variant="outlined"
              />
              <CustomTextField
                onChange={handleChange("password")}
                style={InputStyle}
                type="password"
                label={"비밀번호"}
                variant="outlined"
              />{" "}
              <CustomTextField
                type="password"
                name={"pwdCheck"}
                onChange={(e) => {
                  setPwdCheck(e.target.value);
                }}
                error={userInfo.password === pwdCheck ? false : true}
                style={InputStyle}
                label={"비밀번호 재확인"}
                variant="outlined"
              />
              <CustomTextField
                onChange={handleChange("name")}
                style={InputStyle}
                type="text"
                label={"이름"}
                variant="outlined"
              />
              <CustomTextField
                onChange={handleChange("birth")}
                style={InputStyle}
                variant="outlined"
                type={"date"}
              />
            </div>

            <div style={{ flex: 1 }}>
              <div style={{ marginTop: "10px" }}>
                <BasicButton
                  type="submit"
                  onClick={() => {}}
                  text={"회원가입 완료"}
                />
              </div>
            </div>
          </div>
        </CommonModal>
      )}
    </>
  );
};

export default SignUpModal;
