import CommonModal from "../CommonModal";
import { InputStyle, LoginBox, TopBar } from "../style/style";
import { BasicButton, CustomCancelMdCancel } from "../../button";
import CustomTextField from "../../input/CustomTextField";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { localLogin } from "../../../redux/userSlice";

const LoginModal = ({ setIsSignUpModalOpen, isModalOpen, setIsOpenModal }) => {
  const dispatch = useDispatch(); // useDispatch 훅을 사용하여 Redux store와 상호 작용하는 dispatch 함수를 가져옴
  const [userInfo, setUserInfo] = useState({
    id: "",
    password: "",
  }); // useState 훅을 사용하여 사용자 정보 상태값과 변경 함수를 정의

  const handleChange = (type) => (e) => {
    setUserInfo({ ...userInfo, [type]: e.target.value });
  };
  // 입력 필드 값이 변경될 때 사용자 정보 상태값을 업데이트하는 handleChange 함수

  const handleLogin = async (e) => {
    e.preventDefault();
    if (userInfo.id === "" || userInfo.password === "") {
      alert("아이디와 비밀번호를 입력해주세요.");
      return;
    }
    // 아이디와 비밀번호가 빈 값인 경우 경고창을 띄우고 함수 종료

    let body = {
      id: userInfo.id,
      password: userInfo.password,
    };
    // 로그인 요청에 필요한 정보를 객체로 생성

    try {
      dispatch(localLogin(body, setIsSignUpModalOpen, setIsOpenModal));
      // localLogin 액션 함수를 사용하여 로그인 요청을 디스패치하여 Redux store의 사용자 상태를 업데이트
    } catch (e) {
      alert(e?.response?.data?.msg);
      console.log(e?.response?.data?.msg);
    } finally {
    }
  };
  // 로그인 버튼 클릭 시 실행되는 handleLogin 함수

  return (
    <>
      {isModalOpen && (
        <CommonModal isModalOpen={isModalOpen} setIsOpenModal={setIsOpenModal}>
          {/* 모달 컴포넌트를 렌더링 */}
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
            {/* 상단바와 닫기 아이콘 */}
            <h2 style={{ textAlign: "center" }}>애니멀 프렌즈</h2>
            {/* 제목 */}
            <LoginBox
              onSubmit={(e) => {
                e.preventDefault();
              }}
            >
              {/* 로그인 폼 */}
              <div style={{ marginBottom: "20px" }}>
                {/* 아이디 입력 필드 */}
                <CustomTextField
                  style={InputStyle}
                  type="text" //input에 대한 type
                  label={"아이디"} //input에 표시될 placeholder와 유사한 props
                  onChange={handleChange("id")} // id state값을 알기위한 함수
                  variant="outlined"
                />
                {/* 비밀번호 입력 필드 */}
                <CustomTextField
                  style={InputStyle}
                  type="password" //각 input에대한 type
                  onChange={handleChange("password")} // password state값을 알기위한 함수
                  label={"비밀번호"}
                  variant="outlined"
                />
              </div>
              {/* 로그인 및 회원가입 버튼 */}
              <div style={{ flex: 1 }}>
                <BasicButton text={"로그인"} onClick={handleLogin} />
                <div style={{ marginTop: "10px" }}>
                  <BasicButton
                    onClick={() => {
                      //해당 모달에 대한 상태값을 바꿔주기위함
                      //로그인 모달 꺼짐
                      setIsOpenModal(false);
                      //회원가입 모달 켜짐
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
