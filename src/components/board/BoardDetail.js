import HeaderBar from "../header";
import React from "react";
import { CustomBiTrash } from "../button";
import {
  Button,
  CommentBox,
  CommentContent,
  CommentRootStyle,
  UploadSubContentStyle,
  UploadTopStyle,
} from "./styles";

const BoardDetail = () => {
  return (
    <div>
      <div style={{ paddigBottom: "20px" }}>
        <HeaderBar text={"게시글 상세"} />
      </div>

      <div>
        <UploadTopStyle>
          {/*{user?.id === getData?.UserId ? (*/}
          <div>
            <Button style={{ background: "#F5A9A9" }}>삭제</Button>
            <Button
              onClick={() => {
                // navigate(`/boardUpload/${params.id}`, {
                //   state: {
                //     getData,
                //     type: text,
                //   },
                // });
              }}
            >
              수정
              {/*{text}*/}
            </Button>
          </div>
          {/*) : null}*/}
        </UploadTopStyle>
        <div style={{}}>
          <UploadSubContentStyle>
            <div>
              <p>제목</p>
              <input value={""} />
            </div>
          </UploadSubContentStyle>
          <UploadSubContentStyle>
            <div>
              <p>내용</p>
              <textarea value={""}></textarea>
            </div>
          </UploadSubContentStyle>
          <div>
            <UploadSubContentStyle>
              <div>
                <p>댓글</p>
                <textarea
                // onChange={handleChange("content")}
                // value={commentData?.content}
                />
                <button
                  form="comment-btn"
                  type="submit"
                  onClick={() => {
                    // postComment();
                  }}
                  style={{ minWidth: "300px", background: "#E6E6E6" }}
                >
                  댓글 등록
                </button>
              </div>
            </UploadSubContentStyle>
            <UploadSubContentStyle>
              <CommentRootStyle style={{}}>
                {[]?.map((item, key) => {
                  return (
                    <CommentBox key={key}>
                      <CommentContent>
                        <div
                          style={{ display: "flex", flexDirection: "column" }}
                        >
                          <p>
                            닉네임:
                            {!item?.User?.nickname
                              ? item?.nickname
                              : item?.User?.nickname}
                          </p>
                          <p>댓글: {item?.content}</p>
                        </div>
                        {/*{user?.id !== item.UserId ? null : (*/}
                        {/*  <div style={{ flex: 1 }}>*/}
                        {/*    <CustomBiTrash*/}
                        {/*      onClick={() => {*/}
                        {/*        // if (user?.id !== item.UserId) {*/}
                        {/*        //   alert("자신이 쓴 댓글만 가능합니다.");*/}
                        {/*        //   return;*/}
                        {/*        // }*/}
                        {/*        // deleteComment(item?.id, item);*/}
                        {/*      }}*/}
                        {/*    />*/}
                        {/*  </div>*/}
                        {/*)}*/}
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
