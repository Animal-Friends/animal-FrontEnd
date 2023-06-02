import CommonModal from "./CommonModal";
import { InputStyle, TopBar } from "./style/style";
import {
  BasicButton,
  CustomBackBiArrow,
  CustomCancelMdCancel,
} from "../button";
import CustomTextField from "../input/CustomTextField";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import dayjs from "dayjs";
import { localUserUpdate } from "../../redux/userSlice";

const ProfileModal = ({ isProfileOpen, setIsProfileOpen }) => {
  const auth = useSelector((state) => state?.auth); //store에서 사용자정보가져오기
  const dispatch = useDispatch(); // useDispatch 훅을 사용하여 dispatch 함수를 가져옴

  //store에 있는 기본 유저 정보값
  const [userInfo, setUserInfo] = useState({
    name: auth?.user?.name ? auth?.user?.name : "",
    email: auth?.user?.email ? auth?.user?.email : "",
  });

  // 사용자 정보 상태값과 변경 함수 정의
  const handleChange = (type) => (e) => {
    setUserInfo({ ...userInfo, [type]: e.target.value });
    // 입력 필드 값이 변경될 때 사용자 정보 상태값을 업데이트하는 handleChange 함수
  };

  const handleUserUpdate = () => {
    let body = {
      change_email: userInfo.email,
      member_id: auth?.user?.member_id,
    };
    // 내 정보 업데이트 버튼 클릭 시 실행되는 handleUserUpdate 함수

    dispatch(localUserUpdate(body));
  };
  return (
    <>
      {isProfileOpen && (
        <CommonModal // 동일한 모달 컴포넌트를 만들어 해당 프로필 모달 상태 값을 props로 전달
          isModalOpen={isProfileOpen}
          setIsOpenModal={setIsProfileOpen}
        >
          <div>
            <TopBar style={{}}>
              <CustomCancelMdCancel
                onClick={() => {
                  //프로필 모달 닫기 함수
                  setIsProfileOpen(false);
                }}
              >
                닫기아이콘
              </CustomCancelMdCancel>
            </TopBar>
            <div style={{ textAlign: "center" }}>
              <h4>내 정보</h4>
            </div>
            <div>
              <CustomTextField
                onChange={handleChange("id")}
                style={InputStyle}
                type="text"
                label={"아이디"}
                variant="standard"
                disabled={true}
                value={auth?.user?.id} //기존에 store에 저장된 아이디값을 보여주기위한 id값
                // value={auth?.user?.id}
              />

              <CustomTextField
                onChange={handleChange("name")}
                style={InputStyle}
                type="text"
                label={"이름"}
                disabled={true}
                variant="standard"
                value={userInfo?.name} //기존에 store에 저장된 name을 보여주는부분
              />
              <CustomTextField
                onChange={handleChange("email")}
                style={InputStyle}
                type="text"
                label={"이메일"}
                variant="standard"
                value={userInfo?.email} //기존에 store에 저장된 email 보여주는부분
              />
            </div>

            <div style={{ flex: 1 }}>
              <div style={{ marginTop: "10px" }}>
                <BasicButton
                  onClick={handleUserUpdate} // 클릭을 통해 사용자정보가 업데이트되는 구문
                  type="submit"
                  text={"내 정보 업데이트"}
                />
              </div>
            </div>
          </div>
        </CommonModal>
      )}
    </>
  );
};

export default ProfileModal;
