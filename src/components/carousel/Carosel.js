import { CarouselItems } from "../../constant";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../../page/style/customdot.css";

const settings = {
  className: "center", // 슬라이더의 클래스 이름
  centerMode: true, // 현재 슬라이드를 중앙에 배치
  infinite: true, // 무한 슬라이드
  slidesToShow: 3, // 한 번에 보여줄 슬라이드 수
  speed: 500, // 슬라이드 전환 속도 (밀리초 단위)
  autoplay: true, // 자동 재생
  autoplaySpeed: 2000, // 자동 재생 속도 (밀리초 단위)
  dots: true, // 페이지네이션(도트) 표시
  appendDots: (dots) => (
    // 페이지네이션 커스텀 스타일 적용
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
  dotsClass: "dots_custom", // 페이지네이션 커스텀 클래스 이름
};

const Carosel = () => {
  return (
    <div>
      {/*  스크롤 감추기 */}
      {/* settings 내용을 slider 컴포넌트에 props로 다보냄 */}
      <Slider style={{ overflow: "hidden" }} {...settings}>
        {/* CarouselItems 배열을 매핑하여 각 아이템을 슬라이드로 표시 */}
        {CarouselItems?.map((item, i) => (
          <div>
            <img
              style={{
                //최소 500px너비이며 image를 div에 채우기 높이 250
                minWidth: "500px",
                objectFit: "fill",
                height: "250px",
              }}
              src={item?.img} // 순회된 img url을 표출
              alt={""} // src가 없을때 보여지는 설명문
            />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Carosel;
