import { CarouselItems } from "../../constant";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../../page/style/customdot.css";
import { useState } from "react";

const settings = {
  className: "center",
  centerMode: true,
  infinite: true,
  slidesToShow: 3,
  speed: 500,
  autoplay: true,
  autoplaySpeed: 2000,
  dots: true,
  appendDots: (dots) => (
    <div
      className="dots_custom"
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <ul> {dots} </ul>
    </div>
  ),
  dotsClass: "dots_custom",
};
const Carosel = () => {
  return (
    <div style={{}}>
      <Slider style={{ overflow: "hidden" }} {...settings}>
        {CarouselItems?.map((item, i) => (
          <div>
            <img
              style={{
                minWidth: "500px",
                objectFit: "fill",
                height: "250px",
              }}
              src={item?.img}
              alt={""}
            />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Carosel;
