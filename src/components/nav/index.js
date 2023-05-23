import { LoginBox, RogoBox, RootNavContainer } from "./style";
import { useCallback, useState } from "react";
import LoginModal from "../modal/loginModal/LoginModal";

const NavBar = () => {
  const [isModalOpen, setIsOpenModal] = useState(false);
  const handleClickModal = (type) => {
    setIsOpenModal(true);
  };
  return (
    <RootNavContainer>
      <RogoBox>
        <h3>애니멀 프렌즈</h3>
      </RogoBox>
      <LoginModal />
      <LoginBox>
        <div
          onClick={() => {
            handleClickModal("로그인");
          }}
        >
          로그인
        </div>
      </LoginBox>
      {isModalOpen && (
        <LoginModal isModalOpen={isModalOpen} setIsOpenModal={setIsOpenModal} />
      )}
    </RootNavContainer>
  );
};
export default NavBar;
