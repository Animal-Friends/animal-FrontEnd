import HeaderBar from "../header";
import React, { useEffect, useState } from "react";
import {
  Button,
  CommentBox,
  CommentContent,
  CommentRootStyle,
  Input,
  UploadSubContentStyle,
  UploadTopStyle,
} from "./styles";
import { useLocation, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import api from "../../api/api";
import { CustomBiTrash } from "../button";

const BoardDetail = () => {
  const auth = useSelector((state) => state?.auth); //저장한 user의 정보를 가져오는 부분
  const [comment, setComment] = useState(""); // 댓글 input value state
  const [getData, setGetData] = useState([]); // board detail값을 담는 state

  const [commentList, setCommentList] = useState([]); // commentList를 담는 list

  const navigate = useNavigate(); // react-router에 저장된 path로 이동하기위한함수
  const location = useLocation(); // 현재위치를알기위한 함수

  const deletePost = async () => {
    try {
      // api 요청
      const data = await api.delete(`/post?id=${location?.state?.post_id}`);
      if (data?.status === 200) {
        alert("게시물 삭제 완료");
        //게시글이 삭제완료가되면 그 전페이지로이동
        navigate(-1);
      }
    } catch (e) {
      // 해당 api요청에 대한 msg값을 표출하기위한 부분
      if (e?.response?.data?.msg) {
        alert(e?.response?.data?.msg);
      }
      console.log(e?.response);
    }
  };

  const getDetailPost = async () => {
    try {
      const data = await api.get(`/post?post_id=${location?.state?.post_id}`);
      //setState를 통한 데이터 유입
      setGetData(data?.data?.dat);
      //setState를 통한 데이터 유입
      setCommentList(data?.data?.dat?.Replies);
    } catch (e) {
      if (e?.response?.data?.msg) {
        alert(e?.response?.data?.msg);
      }
      console.log(e?.response);
    }
  };

  const createComment = async () => {
    //서버가 받고 있는 키값을 형태로 body객체 선언
    let body = {
      post_id: location?.state?.post_id,
      writer: auth?.user?.id,
      content: comment,
    };

    try {
      await api.post("/reply", body);
      alert("댓글이 등록되었습니다.");
      //댓글이 등록되면 새로고침
      window.location.reload();

      //댓글이 등록되면 댓글 input 빈칸 으로 표시
      setComment("");
    } catch (e) {
      if (e?.response?.data?.msg) {
        alert(e?.response?.data?.msg);
      }
      console.log(e?.response);
    }
  };

  const deleteComment = async (id, index) => {
    try {
      const data = await api.delete(`/reply?comment_id=${id}`);
      if (data?.status === 200) {
        //삭제가 완료되면 setCommentList에 매개변수로 들어온 id값을 제거해주는 필터
        setCommentList(commentList.filter((data) => data.comment_id !== id));
      }
    } catch (e) {
      if (e?.response?.data?.msg) {
        alert(e?.response?.data?.msg);
      }
      console.log(e?.response);
    }
  };

  useEffect(() => {
    //board-detail 들어오게될때 실행되는 함수
    getDetailPost();
  }, []);
  return (
    <div>
      <div style={{ paddigBottom: "20px" }}>
        <HeaderBar text={"게시글 상세"} />
      </div>

      <div>
        <UploadTopStyle>
          {/*{user?.id === getData?.UserId ? (*/}
          <div>
            {/*내가 쓴 글 만 보이게 하는 조건 */}
            {auth?.user?.id === getData?.id && (
              <Button onClick={deletePost} style={{ background: "#F5A9A9" }}>
                삭제
              </Button>
            )}
            {/*내가 쓴 글 만 보이게 하는 조건 */}

            {auth?.user?.member_id === getData?.member_id && (
              <Button
                onClick={() => {
                  //navigate함수를 통해 board-service로 들어오는 location?.state 값을 토대로 이동이 이루어짐
                  // 이동될때 state값도 같이 넘긴다.
                  navigate(`/board-service/${location?.state?.post_id}`, {
                    state: {
                      item: getData,
                    },
                  });
                }}
              >
                수정
                {/*{text}*/}
              </Button>
            )}
          </div>
          {/*) : null}*/}
        </UploadTopStyle>
        <div style={{}}>
          <UploadSubContentStyle>
            <div>
              <p>제목</p>
              {/*input 에 대한 value */}
              <input disabled value={getData?.title} />
            </div>
          </UploadSubContentStyle>
          <UploadSubContentStyle>
            <div>
              <p>내용</p>
              {/*textarea 에 대한 value */}

              <textarea disabled value={getData?.content}></textarea>
            </div>
          </UploadSubContentStyle>
          <div>
            <UploadSubContentStyle>
              <div>
                <p>댓글</p>
                <textarea
                  value={comment}
                  onChange={(e) => {
                    //댓글 input에 대한 내용을 알기위한 부분
                    setComment(e.target.value);
                  }}
                />
                <button
                  form="comment-btn"
                  type="submit"
                  onClick={createComment} //버튼 이벤트 클릭함수
                  style={{ minWidth: "300px", background: "#E6E6E6" }} // 최대 300px 배경색 #e6e6e6
                >
                  댓글 등록
                </button>
              </div>
            </UploadSubContentStyle>
            <UploadSubContentStyle>
              <CommentRootStyle style={{}}>
                {/*앞서서 commentList 데이터를 순회하면서 데이터를 보여주는 구문 */}
                {commentList?.map((item, key) => {
                  return (
                    <CommentBox key={key}>
                      <CommentContent>
                        <div
                          // 자식 요소들을 플렉스 박스 레이아웃으로 배치합니다.
                          // // 자식 요소들을 수직으로 배치합니다.
                          style={{ display: "flex", flexDirection: "column" }}
                        >
                          {/*순회하면서 도는 key값을 통해 보여지는 부분 아래와 같습니다 */}
                          <p>아이디:{item?.id || item?.writer}</p>

                          <div>
                            <p>댓글: </p>
                            {/* 내용을 명시 */}
                            <Input disabled={true} value={item?.content} />
                          </div>
                        </div>
                        {/*내가 쓴 글만 보이는 조건 */}
                        {(item?.id || item?.writer) === auth?.user?.id && (
                          <div style={{ flex: 1 }}>
                            <CustomBiTrash
                              onClick={() => {
                                //아래함수를 통해 댓글 삭제가이루어짐
                                deleteComment(item?.comment_id, key);
                              }}
                            />
                          </div>
                        )}
                      </CommentContent>
                    </CommentBox>
                  );
                })}
              </CommentRootStyle>
            </UploadSubContentStyle>
          </div>
        </div>
      </div>
    </div>
  );
};
export default BoardDetail;
