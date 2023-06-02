import { CardListRootContainer } from "../../page/animalService/styles";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../../page/style/customdot.css";
import { Box, BoxDetail, CardBox, DataListBox } from "./styles";
import "../../page/style/customdot.css";
import { useEffect, useRef, useState } from "react";

const CardListBox = ({ handleClickManyMaker, searchData, setSearchData }) => {
  const sliderRef = useRef(null); // Slider 컴포넌트에 대한 참조를 생성합니다.

  const [currentSlide, setCurrentSlide] = useState(0); // 현재 슬라이드의 인덱스를 상태로 관리합니다.

  const settings = {
    className: "slider variable-width", //라이브러리에대한 설정
    arrows: true,
    centerMode: true,
    variableWidth: true,
  };

  // 카드를 클릭했을 때의 이벤트 핸들러입니다.
  const handleCardClick = (index) => {
    setCurrentSlide(index); // 클릭한 카드의 인덱스를 현재 슬라이드로 설정합니다.
    sliderRef.current.slickGoTo(index); // Slider 컴포넌트의 슬라이드를 클릭한 인덱스로 이동합니다.
  };

  return (
    // CardListRootContainer 컴포넌트를 렌더링합니다.
    <CardListRootContainer>
      <DataListBox>
        <Slider ref={sliderRef} initialSlide={currentSlide} {...settings}>
          {/* searchData 배열을 매핑하여 각 항목을 Box 컴포넌트로 렌더링합니다. */}
          {searchData.map((item, i) => (
            <Box
              key={i}
              onClick={() => {
                handleClickManyMaker(item?.x, item?.y, i);
                handleCardClick(i); // 카드 클릭 시 현재 슬라이드와 Slider 컴포넌트를 업데이트합니다.
              }}
            >
              <CardBox>
                <div>
                  {/* 이미지 요소를 렌더링합니다. */}
                  <img
                    style={{
                      objectFit: "fill", //이미지 div에 다채우게
                      borderRadius: "10px 0px 0px 10px",
                      //테두리 위 아래만 10px
                    }}
                    //랜덤한 이미지 url width 160px height 200px인 값
                    src={"https://picsum.photos/160/200"}
                  />
                </div>
                <BoxDetail>
                  {/* 상세 정보를 렌더링합니다. */}
                  <p>주소 :{item.address_name}</p>
                  {/*상세 정보에대한 전화번호 */}
                  <p>전화번호 :{item.phone}</p>
                  {/*상세정보에대한 장소이름 */}
                  <p>상호명 :{item.place_name}</p>
                  {/* 링크를 렌더링합니다. */}
                  <a target="_blank" href={item.place_url}>
                    {/*상세정보에대한 url */}
                    {item.place_url}
                  </a>
                </BoxDetail>
              </CardBox>
            </Box>
          ))}
        </Slider>
      </DataListBox>
    </CardListRootContainer>
  );
};

export default CardListBox;
