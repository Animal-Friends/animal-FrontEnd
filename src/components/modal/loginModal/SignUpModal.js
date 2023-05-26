import CommonModal from "../CommonModal";
import { InputStyle, TopBar } from "../style/style";
import {
  CustomBackBiArrow,
  CustomCancelMdCancel,
  CustomMdOutlineArrowBackIosNew,
} from "../../button";
import CustomTextField from "../../input/CustomTextField";
import BirthPicker from "../../date/BirthPicker";

const SignUpModal = ({ setLoginModal, isModalOpen, setIsOpenModal }) => {
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
              />{" "}
              <CustomTextField
                style={InputStyle}
                type="text"
                label={"비밀번호 재확인"}
                variant="outlined"
              />
              <CustomTextField
                style={InputStyle}
                type="name"
                label={"이름"}
                variant="outlined"
              />
              <BirthPicker />
            </div>
          </div>
        </CommonModal>
      )}
    </>
  );
};

export default SignUpModal;
