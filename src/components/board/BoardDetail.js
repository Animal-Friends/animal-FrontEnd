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
  const auth = useSelector((state) => state?.auth);
  const [comment, setComment] = useState("");
  const [getData, setGetData] = useState([]);

  const [commentList, setCommentList] = useState([]);

  const navigate = useNavigate();
  const location = useLocation();

  const deletePost = async () => {
    try {
      const data = await api.delete(`/post?id=${location?.state?.post_id}`);
      if (data?.status === 200) {
        alert("게시물 삭제 완료");
        navigate(-1);
      }
    } catch (e) {
      if (e?.response?.data?.msg) {
        alert(e?.response?.data?.msg);
      }
      console.log(e?.response);
    }
  };

  const getDetailPost = async () => {
    try {
      const data = await api.get(`/post?post_id=${location?.state?.post_id}`);
      console.log(data);
      setGetData(data?.data?.dat);
      setCommentList(data?.data?.dat?.Replies);
    } catch (e) {
      if (e?.response?.data?.msg) {
        alert(e?.response?.data?.msg);
      }
      console.log(e?.response);
    }
  };

  const createComment = async () => {
    // post_id, writer, content
    let body = {
      post_id: location?.state?.post_id,
      writer: auth?.user?.id,
      content: comment,
    };

    try {
      await api.post("/reply", body);
      alert("댓글이 등록되었습니다.");
      window.location.reload();

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
      console.log(data);
      if (data?.status === 200) {
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
            {auth?.user?.id === getData?.id && (
              <Button onClick={deletePost} style={{ background: "#F5A9A9" }}>
                삭제
              </Button>
            )}
            {auth?.user?.member_id === getData?.member_id && (
              <Button
                onClick={() => {
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
              <input disabled value={getData?.title} />
            </div>
          </UploadSubContentStyle>
          <UploadSubContentStyle>
            <div>
              <p>내용</p>
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
                    setComment(e.target.value);
                  }}
                  // onChange={handleChange("content")}
                  // value={commentData?.content}
                />
                <button
                  form="comment-btn"
                  type="submit"
                  onClick={createComment}
                  style={{ minWidth: "300px", background: "#E6E6E6" }}
                >
                  댓글 등록
                </button>
              </div>
            </UploadSubContentStyle>
            <UploadSubContentStyle>
              <CommentRootStyle style={{}}>
                {commentList?.map((item, key) => {
                  return (
                    <CommentBox key={key}>
                      {/*<div>1</div>*/}
                      <CommentContent>
                        <div
                          style={{ display: "flex", flexDirection: "column" }}
                        >
                          <p>아이디:{item?.id || item?.writer}</p>

                          <div>
                            <p>댓글: </p>
                            <Input disabled={true} value={item?.content} />
                          </div>
                        </div>
                        {(item?.id || item?.writer) === auth?.user?.id && (
                          <div style={{ flex: 1 }}>
                            <CustomBiTrash
                              onClick={() => {
                                console.log(item);
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
