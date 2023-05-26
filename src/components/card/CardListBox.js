import { CardListRootContainer } from "../../page/animalService/styles";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../../page/style/customdot.css";
import { Box, BoxDetail, CardBox, DataListBox } from "./styles";
import "../../page/style/customdot.css";
import { useEffect, useRef, useState } from "react";

const CardListBox = ({ handleClickManyMaker, searchData, setSearchData }) => {
  const sliderRef = useRef(null);

  const [currentSlide, setCurrentSlide] = useState(0);

  const settings = {
    className: "slider variable-width",
    arrows: true,
    centerMode: true,
    variableWidth: true,
  };
  const handleCardClick = (index) => {
    setCurrentSlide(index);
    sliderRef.current.slickGoTo(index);
  };

  return (
    <CardListRootContainer>
      <DataListBox>
        <Slider ref={sliderRef} initialSlide={currentSlide} {...settings}>
          {searchData.map((item, i) => (
            <Box
              key={i}
              onClick={() => {
                handleClickManyMaker(item?.x, item?.y, i);
                handleCardClick(i);
              }}
            >
              <CardBox>
                <div>
                  <img
                    style={{
                      objectFit: "fill",
                      borderRadius: "10px 0px 0px 10px",
                    }}
                    src={"https://picsum.photos/160/200"}
                  />
                </div>
                <BoxDetail>
                  <p>주소 :{item.address_name}</p>
                  <p>전화번호 :{item.phone}</p>
                  <p>상호명 :{item.place_name}</p>
                  <a target="_blank" href={item.place_url}>
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
