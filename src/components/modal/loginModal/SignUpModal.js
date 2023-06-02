import CommonModal from "../CommonModal";
import { InputStyle, TopBar } from "../style/style";
import {
  BasicButton,
  CustomBackBiArrow,
  CustomCancelMdCancel,
} from "../../button";
import CustomTextField from "../../input/CustomTextField";
import { useState } from "react";
import api from "../../../api/api";

const SignUpModal = ({ setLoginModal, isModalOpen, setIsOpenModal }) => {
  //유저에대한정보값
  const [userInfo, setUserInfo] = useState({
    id: "",
    name: "",
    password: "",
    birthday: "",
  });
  // 비밀번호 확인 상태값 정의

  const [pwdCheck, setPwdCheck] = useState("");

  // 입력 필드 값이 변경될 때 사용자 정보 상태값을 업데이트하는 handleChange 함수

  const handleChange = (type) => (e) => {
    setUserInfo({ ...userInfo, [type]: e.target.value });
  };

  const handleSignUp = async (e) => {
    e.preventDefault();
    if (
      // 각 표시된 id , password, name, birthday 필드중 하나라도 빈값이있으면 alert표시
      userInfo.id === "" ||
      userInfo.password === "" ||
      userInfo.name === "" ||
      userInfo.birthday === ""
    ) {
      alert("모든 항목을 기입해주세요");
      return;
    }
    // 필수 항목이 비어 있는 경우 경고창을 띄우고 함수 종료

    if (userInfo.password !== pwdCheck) {
      alert("비밀번호 재확인 해주세요");
      return;
    }
    // 비밀번호와 비밀번호 확인 값이 다른 경우 경고창을 띄우고 함수 종료

    let body = {
      id: userInfo.id,
      password: userInfo.password,
      name: userInfo.name,
      birthday: userInfo.birthday,
    };
    // 회원가입 요청에 필요한 정보를 객체로 생성

    try {
      const { data } = await api.post("/register", body);
      if (data?.msg === "회원 가입이 완료되었습니다.") {
        alert(data?.msg);
        //완료가되면 loginmodal은켜짐
        setLoginModal(true);
        //회원가입 모달꺼짐
        setIsOpenModal(false);
      }
    } catch (e) {
      //api 요청에 대해서 오류가 떳을시 보여질 내용
      alert(e?.response?.data?.msg);
      console.log(e?.response?.data?.msg);
    }
  };
  // 회원가입 버튼 클릭 시 실행되는 handleSignUp 함수

  return (
    <>
      {/* 로그인 모달 state가 true일 시 만 보여지는 조건 */}
      {isModalOpen && (
        <CommonModal isModalOpen={isModalOpen} setIsOpenModal={setIsOpenModal}>
          <div>
            <TopBar style={{ marginBottom: "30px" }}>
              {/*뒤로가는 컴포넌트 */}
              <CustomBackBiArrow
                onClick={() => {
                  //로그인모달 켜짐
                  setLoginModal(true);
                  setIsOpenModal(false);
                }}
              />
              <CustomCancelMdCancel
                onClick={() => {
                  // 모달 닫기
                  setIsOpenModal(false);
                }}
              >
                닫기아이콘
              </CustomCancelMdCancel>
            </TopBar>
            <div>
              <CustomTextField
                onChange={handleChange("id")} //id값을 알기위한 함수값
                style={InputStyle} // 정의한 style을 props로 넘겨줌
                type="text" //각 input에 대한 type
                label={"아이디"} // 각 input에 대한 label
                variant="outlined" //input에대한 어떠한 종류인지
              />
              {/*아래는 위와 작성된 내용과 같습니다 */}
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
                //비밀번호부분과 같으면 false 다르면 true로 표출
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
                onChange={handleChange("birthday")}
                style={InputStyle}
                variant="outlined"
                type={"date"}
              />
            </div>

            <div style={{ flex: 1 }}>
              <div style={{ marginTop: "10px" }}>
                <BasicButton
                  type="submit"
                  onClick={handleSignUp}
                  //버튼클릭이벤트
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
