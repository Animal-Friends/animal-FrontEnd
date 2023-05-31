import { LoginBox, RogoBox, RootNavContainer } from "./style";
import { useCallback, useState } from "react";
import LoginModal from "../modal/loginModal/LoginModal";
import { ANIMALSERVICE } from "../../constant";
import { useNavigate } from "react-router-dom";
import SignUpModal from "../modal/loginModal/SignUpModal";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../redux/userSlice";
import ProfileModal from "../modal/ProfileModal";

const NavBar = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const auth = useSelector((state) => state?.auth);

  const [isModalOpen, setIsOpenModal] = useState(false);
  const [isSignUpModalOpen, setIsSignUpModalOpen] = useState(false);
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const handleClickModal = (type) => {
    if (type !== "로그인") {
      // eslint-disable-next-line no-restricted-globals
      if (confirm("로그아웃 하시겠습니까?")) {
        logout(dispatch);
      }
    } else {
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
          style={{ cursor: "pointer" }}
          onClick={() => {
            handleClickModal(auth?.user?.name ? auth?.user?.name : "로그인");
          }}
        >
          {auth?.user?.name ? auth?.user?.name + "님 안녕하세요!" : "로그인"}
        </div>

        {auth?.user?.name && (
          <div
            style={{ cursor: "pointer" }}
            onClick={() => {
              setIsProfileOpen(true);
            }}
          >
            내 정보 보기
          </div>
        )}
      </LoginBox>
      {isModalOpen && (
        <LoginModal
          setIsSignUpModalOpen={setIsSignUpModalOpen}
          isModalOpen={isModalOpen}
          setIsOpenModal={setIsOpenModal}
        />
      )}
      {isProfileOpen && (
        <ProfileModal
          isProfileOpen={isProfileOpen}
          setIsProfileOpen={setIsProfileOpen}
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
