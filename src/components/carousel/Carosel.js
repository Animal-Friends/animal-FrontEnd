import { CarouselItems } from "../../constant";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const settings = {
  className: "center",
  centerMode: true,
  infinite: true,
  slidesToShow: 3,
  speed: 500,
  autoplay: true,
  autoplaySpeed: 2000,
};
const Carosel = () => {
  return (
    <div>
      <Slider {...settings}>
        {CarouselItems.map((item, i) => (
          <div style={{ width: "550px" }}>
            <img
              style={{
                width: "500px",
                height: "250px",
              }}
              src={item.img}
              alt={""}
            />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Carosel;
