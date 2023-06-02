import { useState } from "react";
import Pagination from "react-js-pagination";
import "./page.css";

const PageNation = ({ data, page, setPage, perpage, rangepage }) => {
  const handlePageChange = (page) => {
    setPage(page);
  };
  return (
    // Pagination 컴포넌트를 렌더링합니다.
    <Pagination
      totalItemsCount={data?.length} // 전체 항목 수
      activePage={page} // 현재 활성화된 페이지
      pageRangeDisplayed={5} // 보여지는 페이지 수
      itemsCountPerPage={perpage} // 페이지당 항목 수
      prevPageText={"‹"} // 이전 페이지 아이콘
      nextPageText={"›"} // 다음 페이지 아이콘
      onChange={handlePageChange} // 페이지 변경 시 호출되는 함수
    />
  );
};

export default PageNation;
