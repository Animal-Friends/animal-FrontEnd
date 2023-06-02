import React, { useState } from "react";
import HeaderBar from "../header";
import { Button, UploadSubContentStyle, UploadTopStyle } from "./styles";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import api from "../../api/api";
import { useSelector } from "react-redux";

const BoardService = () => {
  const auth = useSelector((state) => state?.auth); // 로그인 된 정보를 가져오기 위한 구문
  const params = useParams(); // 해당 url params를 가져오기위한 구문
  const location = useLocation(); // react-router에 내장된 내위치
  const navigate = useNavigate(); // react-router에 등록된 path로 이동시키기위한 함수
  const [boardInfo, setBoardInfo] = useState({
    // location으로 들어온 값이 있으면 그값을보여주고 그게아니면 "" 이 조건을 건이유는 수정과 등록을 한꺼번에하기위해서
    title: location?.state?.item?.title ? location?.state?.item?.title : "",
    content: location?.state?.item?.content
      ? location?.state?.item?.content
      : "",
  });
  const handleBoardChange = (type) => (e) => {
    //boardInfo에 대한 키 값을 매개변수 typ으로 받아서 맞는 타입에 value를 넣어주는구문
    setBoardInfo({ ...boardInfo, [type]: e.target.value });
  };

  const handlePostBoard = async (e) => {
    e.preventDefault();
    let body = {
      title: boardInfo.title, // 제목
      content: boardInfo.content, //내용
      member_id: auth?.user?.member_id, //멤버의 primary key
      id: auth?.user?.id, // 회원의 아이디
      // id:
    };
    let body2 = {
      title: boardInfo.title,
      content: boardInfo.content,
      image: null,
      // member_id: auth?.user?.member_id,
      id: params.id, // params로 들어오는 부분의 id를 보냄
    };

    try {
      const data = location?.state // 추가 수정을 한꺼번에하기위한 구문 location으로 들어온 state값이없으면 작성이고, 없으면 수정이다.
        ? await api.put("/post", body2)
        : await api.post("/post", body);
      if (data?.status === 200) {
        // alert띄워지기위한 함수
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
        {/*넘어온 state값 기준으로 수정인지 등록인지 조건을 나타냄 */}
        <HeaderBar text={location.state ? "게시글 수정" : "게시글 등록"} />
      </div>
      <UploadTopStyle>
        <Button onClick={handlePostBoard}>
          {/*넘어온 state값 기준으로 수정인지 등록인지 조건을 나타냄 */}

          {location.state ? "게시글 수정" : "게시글 등록"}
        </Button>
      </UploadTopStyle>
      <div>
        <UploadSubContentStyle>
          <p>제목</p>
          <input
            value={boardInfo?.title} //내가 쓴글을 알기위한 value
            onChange={handleBoardChange("title")} //내가 쓴글을 보기위한 홤수
            placeholder="제목을 입력해주세요"
          />
        </UploadSubContentStyle>
        <UploadSubContentStyle>
          <p>내용</p>
          <textarea
            value={boardInfo?.content} //내가 쓴글을 알기위한 value
            onChange={handleBoardChange("content")} //내가 쓴글을 보기위한 홤수
            placeholder="내용을 입력해주세요"
          />
        </UploadSubContentStyle>
      </div>
    </div>
  );
};
export default BoardService;
