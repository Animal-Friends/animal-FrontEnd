import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

import dayjs from "dayjs";
import { useEffect, useState } from "react";
import PageNation from "../pagenation";
import { NullableStyle } from "./styles";
import { useNavigate } from "react-router-dom";

const Board = ({ boardData }) => {
  const [page, setPage] = useState(1); //pagenataion을 위한 기본값
  const navigate = useNavigate(); //react-router에 등록된 path로 가기위한 navigate
  const perpage = 5; //pagenation 범위

  return (
    <>
      {/*<div style={{ paddigBottom: "20px" }}></div>*/}
      <div>
        <TableContainer component={Paper}>
          <Table aria-label="simple table">
            <TableHead>
              <TableRow>
                {/*헤더 데이터 순회하면서 데이터 표출 */}
                {header?.map((item, index) => {
                  return <TableCell key={index}>{item}</TableCell>;
                })}
              </TableRow>
            </TableHead>
            {/*/ boardData 배열에서 페이지 번호(page)와 페이지 당 항목 수(perpage)에 맞는 범위의 요소들을 추출하고,
                  추출된 요소들을 map 함수를 사용하여 각각의 요소에 대해 아래의 코드를 실행합니다.*/}
            {boardData
              ?.slice((page - 1) * perpage, (page - 1) * perpage + perpage)
              ?.map((row, key) => (
                //순회하면서 도는 key값을 통해 보여지는 부분
                <TableBody key={key}>
                  <TableRow
                    sx={{ cursor: "pointer" }}
                    onClick={() => {
                      navigate(`/board-detail/${row.post_id}`, { state: row });
                    }}
                    key={row?.id}
                  >
                    <TableCell component="th" scope="row">
                      {/*각 테이블에 데이터 title */}
                      {row?.title}
                    </TableCell>
                    <TableCell component="th" scope="row">
                      {/*각 테이블에 데이터 내용  */}

                      {row?.content}
                    </TableCell>
                    <TableCell component="th" scope="row">
                      {/*각 테이블에 데이터 날짜   */}

                      {dayjs(row?.createdAt).format("YYYY-MM-DD")}
                    </TableCell>
                    <TableCell component="th" scope="row">
                      {/*각 테이블에 데이터 아이디    */}

                      {row?.id}
                    </TableCell>
                  </TableRow>
                </TableBody>
              ))}
          </Table>
          {boardData?.length === 0 && (
            <NullableStyle>
              <p>현재 게시물이 존재하지 않습니다</p>
            </NullableStyle>
          )}
        </TableContainer>
        {/* 페이징네이션 */}
        {/*기본 초기값 과 페이징네이션을 하기위한 data를 props로 넘김 */}
        <PageNation
          perpage={perpage}
          page={page}
          setPage={setPage}
          data={boardData}
        />
      </div>
    </>
  );
};

export default Board;
let header = ["제목", "내용", "작성 시간", "작성자(닉네임)"]; //테이블 헤더에 보여질 내용
