import CommonModal from "../CommonModal";

const LoginModal = ({ isModalOpen, setIsOpenModal }) => {
  return (
    <>
      {isModalOpen && (
        <CommonModal isModalOpen={isModalOpen} setIsOpenModal={setIsOpenModal}>
          <div>1</div>
        </CommonModal>
      )}
    </>
  );
};

export default LoginModal;
