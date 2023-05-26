import React from "react";
import HeaderBar from "../header";
import { Button, UploadSubContentStyle, UploadTopStyle } from "./styles";

const BoardService = () => {
  return (
    <div>
      <div style={{ paddigBottom: "20px" }}>
        <HeaderBar text={"게시글 등록"} />
      </div>
      <UploadTopStyle>
        <Button>{/*{type ? "게시글 수정" : "게시글 등록"}*/}게시글 등록</Button>
      </UploadTopStyle>
      <div style={{}}>
        <UploadSubContentStyle>
          <p>제목</p>
          <input
            // value={board?.title}
            // onChange={handleChange("title")}
            placeholder="제목을 입력해주세요"
          />
        </UploadSubContentStyle>
        <UploadSubContentStyle>
          <p>내용</p>
          <textarea
            // value={board?.content}
            // onChange={handleChange("content")}
            placeholder="내용을 입력해주세요"
          />
        </UploadSubContentStyle>
      </div>
    </div>
  );
};

export default BoardService;
