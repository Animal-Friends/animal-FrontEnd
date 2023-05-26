import CommonModal from "../CommonModal";
import { InputStyle, LoginBox, TopBar } from "../style/style";
import styled from "styled-components";
import { BasicButton, CustomCancelMdCancel } from "../../button";
import CustomTextField from "../../input/CustomTextField";
import BirthPicker from "../../date/BirthPicker";

const LoginModal = ({ setIsSignUpModalOpen, isModalOpen, setIsOpenModal }) => {
  return (
    <>
      {isModalOpen && (
        <CommonModal isModalOpen={isModalOpen} setIsOpenModal={setIsOpenModal}>
          <div>
            <TopBar>
              <div />
              <CustomCancelMdCancel
                onClick={() => {
                  setIsOpenModal(false);
                }}
              >
                닫기아이콘
              </CustomCancelMdCancel>
            </TopBar>
            <h2 style={{ textAlign: "center" }}>애니멀 프렌즈</h2>

            <LoginBox
              onSubmit={(e) => {
                e.preventDefault();
              }}
            >
              <div style={{ marginBottom: "20px" }}>
                <CustomTextField
                  style={InputStyle}
                  type="text"
                  label={"아이디"}
                  variant="outlined"
                />
                <CustomTextField
                  style={InputStyle}
                  type="password"
                  label={"비밀번호"}
                  variant="outlined"
                />
              </div>

              <div style={{ flex: 1 }}>
                <BasicButton text={"로그인"} onClick={() => {}} />
                <div style={{ marginTop: "10px" }}>
                  <BasicButton
                    onClick={() => {
                      setIsOpenModal(false);
                      setIsSignUpModalOpen(true);
                    }}
                    text={"회원가입"}
                  />
                </div>
              </div>
            </LoginBox>
          </div>
        </CommonModal>
      )}
    </>
  );
};

export default LoginModal;
