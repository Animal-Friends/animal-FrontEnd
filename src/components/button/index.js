import { CommonStyleButton } from "./styles";

export const CommonButton = ({ onClick, text, ...style }) => {
  return (
    <CommonStyleButton style={style} onClick={onClick}>
      {text}
    </CommonStyleButton>
  );
};
