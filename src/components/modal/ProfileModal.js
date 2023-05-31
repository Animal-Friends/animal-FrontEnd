import CommonModal from "./CommonModal";
import { InputStyle, TopBar } from "./style/style";
import {
  BasicButton,
  CustomBackBiArrow,
  CustomCancelMdCancel,
} from "../button";
import CustomTextField from "../input/CustomTextField";
import { useState } from "react";
import { useSelector } from "react-redux";
import dayjs from "dayjs";

const ProfileModal = ({ isProfileOpen, setIsProfileOpen }) => {
  const auth = useSelector((state) => state?.auth);
  console.log(auth?.user?.name);
  const [userInfo, setUserInfo] = useState({
    name: auth?.user?.name ? auth?.user?.name : "",
    email: auth?.user?.email ? auth?.user?.email : "",
  });
  const [pwdCheck, setPwdCheck] = useState("");

  const handleChange = (type) => (e) => {
    setUserInfo({ ...userInfo, [type]: e.target.value });
  };
  return (
    <>
      {isProfileOpen && (
        <CommonModal
          isModalOpen={isProfileOpen}
          setIsOpenModal={setIsProfileOpen}
        >
          <div>
            <TopBar style={{}}>
              <CustomCancelMdCancel
                onClick={() => {
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
                value={auth?.user?.id}
                // value={auth?.user?.id}
              />

              <CustomTextField
                onChange={handleChange("name")}
                style={InputStyle}
                type="text"
                label={"이름"}
                variant="standard"
                value={userInfo?.name}
              />
              <CustomTextField
                onChange={handleChange("email")}
                style={InputStyle}
                type="text"
                label={"이메일"}
                variant="standard"
                value={userInfo?.email}
              />
            </div>

            <div style={{ flex: 1 }}>
              <div style={{ marginTop: "10px" }}>
                <BasicButton type="submit" text={"내 정보 업데이트"} />
              </div>
            </div>
          </div>
        </CommonModal>
      )}
    </>
  );
};

export default ProfileModal;
