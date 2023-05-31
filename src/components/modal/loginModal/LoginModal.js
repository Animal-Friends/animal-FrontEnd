import CommonModal from "../CommonModal";
import { InputStyle, LoginBox, TopBar } from "../style/style";
import { BasicButton, CustomCancelMdCancel } from "../../button";
import CustomTextField from "../../input/CustomTextField";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { localLogin } from "../../../redux/userSlice";

const LoginModal = ({ setIsSignUpModalOpen, isModalOpen, setIsOpenModal }) => {
  const dispatch = useDispatch();
  const [userInfo, setUserInfo] = useState({
    id: "",
    password: "",
  });

  const handleChange = (type) => (e) => {
    setUserInfo({ ...userInfo, [type]: e.target.value });
  };
  const handleLogin = async (e) => {
    e.preventDefault();
    if (userInfo.id === "" || userInfo.password === "") {
      alert("아이디와 비밀번호를 입력해주세요.");
      return;
    }

    let body = {
      id: userInfo.id,
      password: userInfo.password,
    };
    try {
      // const data = await api.get("login", body);
      dispatch(localLogin(body, setIsSignUpModalOpen, setIsOpenModal));
    } catch (e) {
      alert(e?.response?.data?.msg);
      console.log(e?.response?.data?.msg);
    } finally {
    }
  };
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
                  onChange={handleChange("id")}
                  variant="outlined"
                />
                <CustomTextField
                  style={InputStyle}
                  type="password"
                  onChange={handleChange("password")}
                  label={"비밀번호"}
                  variant="outlined"
                />
              </div>

              <div style={{ flex: 1 }}>
                <BasicButton text={"로그인"} onClick={handleLogin} />
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
