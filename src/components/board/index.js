import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

import dayjs from "dayjs";
import { useState } from "react";
import PageNation from "../pagenation";

const Board = () => {
  const [page, setPage] = useState(1);
  const perpage = 5;

  return (
    <>
      {/*<div style={{ paddigBottom: "20px" }}></div>*/}
      <div>
        <TableContainer component={Paper}>
          <Table aria-label="simple table">
            <TableHead>
              <TableRow>
                {header?.map((item, index) => {
                  return <TableCell key={index}>{item}</TableCell>;
                })}
              </TableRow>
            </TableHead>
            {[]
              ?.slice((page - 1) * perpage, (page - 1) * perpage + perpage)
              ?.map((row, key) => (
                <TableBody key={key}>
                  <TableRow
                    sx={{ cursor: "pointer" }}
                    onClick={() => {}}
                    key={row?.id}
                  >
                    <TableCell component="th" scope="row">
                      {row?.title}
                    </TableCell>
                    <TableCell component="th" scope="row">
                      {row?.content} [{row?.Comments?.length}]
                    </TableCell>
                    <TableCell component="th" scope="row">
                      {dayjs(row?.createdAt).format("YYYY-MM-DD")}
                    </TableCell>
                    <TableCell component="th" scope="row">
                      {row?.User?.nickname}
                    </TableCell>
                  </TableRow>
                </TableBody>
              ))}
          </Table>
          {/*{resData?.length === 0 && (*/}
          {/*    <NullableStyle>*/}
          {/*        <p>현재 게시물이 존재하지 않습니다</p>*/}
          {/*    </NullableStyle>*/}
          {/*)}*/}
        </TableContainer>

        <PageNation perpage={perpage} page={page} setPage={setPage} data={[]} />
      </div>
    </>
  );
};

export default Board;
let header = ["제목", "내용", "작성 시간", "작성자(닉네임)"];