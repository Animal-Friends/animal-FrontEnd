import { LoginBox, RogoBox, RootNavContainer } from "./style";
import { useCallback, useState } from "react";
import LoginModal from "../modal/loginModal/LoginModal";
import { ANIMALSERVICE } from "../../constant";
import { useNavigate } from "react-router-dom";
import SignUpModal from "../modal/loginModal/SignUpModal";

const NavBar = () => {
  const navigate = useNavigate();
  const [isModalOpen, setIsOpenModal] = useState(false);
  const [isSignUpModalOpen, setIsSignUpModalOpen] = useState(false);
  const handleClickModal = (type) => {
    switch (type) {
      case "로그인":
        setIsOpenModal(true);
        break;
      case "회원가입":
        setIsSignUpModalOpen(true);
        break;
      default:
        break;
    }
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
        <LoginModal
          setIsSignUpModalOpen={setIsSignUpModalOpen}
          isModalOpen={isModalOpen}
          setIsOpenModal={setIsOpenModal}
        />
      )}

      {isSignUpModalOpen && (
        <SignUpModal
          setLoginModal={setIsOpenModal}
          isModalOpen={isSignUpModalOpen}
          setIsOpenModal={setIsSignUpModalOpen}
        />
      )}
    </RootNavContainer>
  );
};
export default NavBar;
