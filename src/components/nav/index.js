import { LoginBox, RogoBox, RootNavContainer } from "./style";
import { useCallback, useState } from "react";
import LoginModal from "../modal/loginModal/LoginModal";
import { ANIMALSERVICE } from "../../constant";
import { useNavigate } from "react-router-dom";

const NavBar = () => {
  const navigate = useNavigate();
  const [isModalOpen, setIsOpenModal] = useState(false);
  const handleClickModal = (type) => {
    setIsOpenModal(true);
  };
  return (
    <RootNavContainer>
      <RogoBox>
        <h3>애니멀 프렌즈</h3>
      </RogoBox>
      {ANIMALSERVICE.map((item) => (
        <div
          style={{ cursor: "pointer" }}
          onClick={() => {
            navigate("/animal-service", { state: item.name });
          }}
        >
          {item.name}
        </div>
      ))}
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
