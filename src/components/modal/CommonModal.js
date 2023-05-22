import { ModalBackdrop } from "./style/style";
import styled from "styled-components";

const CommonModal = ({ isModalOpen, setIsOpenModal, children, onClick }) => {
  const onClickCommonClose = () => {
    setIsOpenModal(false);
  };
  return (
    <>
      {isModalOpen && (
        <ModalBackdrop onClick={onClickCommonClose}>
          <BoxContainer
            onClick={(e) => {
              e.stopPropagation();
            }}
          >
            {children}
          </BoxContainer>
        </ModalBackdrop>
      )}
    </>
  );
};

const BoxContainer = styled.div`
  width: 500px;
  height: 667px;
  padding: 20px;
  background-color: white;
`;

export default CommonModal;
