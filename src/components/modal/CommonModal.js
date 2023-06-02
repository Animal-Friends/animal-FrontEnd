import { ModalBackdrop } from "./style/style";
import styled from "styled-components";

//위 컴포넌트를 통해서 동일한 style에 모달 컴포넌트화

const CommonModal = ({ isModalOpen, setIsOpenModal, children, ...style }) => {
  const onClickCommonClose = () => {
    //공통으로 사용되는 함수이며, 이함수가발동시 모달 닫기
    setIsOpenModal(false);
  };
  return (
    <>
      {/*모달에대한 상태값 true면 보여져라 */}
      {isModalOpen && (
        <ModalBackdrop onClick={onClickCommonClose}>
          <BoxContainer
            style={style} //컴포넌트에 대한 스타일을 props로 전달
            onClick={(e) => {
              e.stopPropagation();
            }}
          >
            {/* CommonModal안에 있는 모든값들을 보여져라 */}
            {children}
          </BoxContainer>
        </ModalBackdrop>
      )}
    </>
  );
};

const BoxContainer = styled.div`
  width: 500px;
  height: 550px;
  padding: 20px;
  background-color: white;
`;

export default CommonModal;
