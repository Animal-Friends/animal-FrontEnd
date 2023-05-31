import React, { useState } from "react";
import HeaderBar from "../header";
import { Button, UploadSubContentStyle, UploadTopStyle } from "./styles";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import api from "../../api/api";
import { LOGIN } from "../../redux/userSlice";
import { useSelector } from "react-redux";

const BoardService = () => {
  const auth = useSelector((state) => state?.auth);
  const params = useParams();
  const location = useLocation();
  const navigate = useNavigate();
  const [boardInfo, setBoardInfo] = useState({
    title: location?.state?.item?.title ? location?.state?.item?.title : "",
    content: location?.state?.item?.content
      ? location?.state?.item?.content
      : "",
  });
  const handleBoardChange = (type) => (e) => {
    setBoardInfo({ ...boardInfo, [type]: e.target.value });
  };

  const handlePostBoard = async (e) => {
    e.preventDefault();
    let body = {
      title: boardInfo.title,
      content: boardInfo.content,
      member_id: auth?.user?.member_id,
      id: auth?.user?.id,
      // id:
    };
    let body2 = {
      title: boardInfo.title,
      content: boardInfo.content,
      image: null,
      // member_id: auth?.user?.member_id,
      id: params.id,
    };

    try {
      const data = location?.state
        ? await api.put("/post", body2)
        : await api.post("/post", body);
      if (data?.status === 200) {
        alert(
          location.state
            ? "게시글 수정이 완료되었습니다."
            : "게시글 작성이 완료되었습니다."
        );
        navigate(-1);
      }
    } catch (e) {
      if (e?.response?.data?.msg) {
        alert(e?.response?.data?.msg);
      }
      console.log(e?.response);
    }
  };

  return (
    <div>
      <div style={{ paddigBottom: "20px" }}>
        <HeaderBar text={location.state ? "게시글 수정" : "게시글 등록"} />
      </div>
      <UploadTopStyle>
        <Button onClick={handlePostBoard}>
          {location.state ? "게시글 수정" : "게시글 등록"}
        </Button>
      </UploadTopStyle>
      <div style={{}}>
        <UploadSubContentStyle>
          <p>제목</p>
          <input
            value={boardInfo?.title}
            onChange={handleBoardChange("title")}
            placeholder="제목을 입력해주세요"
          />
        </UploadSubContentStyle>
        <UploadSubContentStyle>
          <p>내용</p>
          <textarea
            value={boardInfo?.content}
            onChange={handleBoardChange("content")}
            placeholder="내용을 입력해주세요"
          />
        </UploadSubContentStyle>
      </div>
    </div>
  );
};
export default BoardService;
