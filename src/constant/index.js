import image1 from "../asset/images1.jpeg";
import image2 from "../asset/16b98d3e3d30e.jpg";

export const cityList = [
  {
    city: "서울특별시",
    서울특별시: [
      "강남구",
      "강동구",
      "강북구",
      "강서구",
      "관악구",
      "광진구",
      "구로구",
      "금천구",
      "노원구",
      "도봉구",
      "동대문구",
      "동작구",
      "마포구",
      "서대문구",
      "서초구",
      "성동구",
      "성북구",
      "송파구",
      "양천구",
      "영등포구",
      "용산구",
      "은평구",
      "종로구",
      "중구",
      "중랑구",
    ],
  },
  {
    city: "부산광역시",
    부산광역시: [
      "강서구",
      "금정구",
      "기장군",
      "남구",
      "동구",
      "동래구",
      "부산진구",
      "북구",
      "사상구",
      "사하구",
      "서구",
      "수영구",
      "연제구",
      "영도구",
      "중구",
      "해운대구",
    ],
  },
  {
    city: "대구광역시",
    대구광역시: [
      "남구",
      "달서구",
      "달성군",
      "동구",
      "북구",
      "서구",
      "수성구",
      "중구",
      "답원동",
      "도원동",
      "두류동",
      "만촌동",
      "범어동",
      "봉덕동",
      "복현동",
      "사월동",
      "상동",
      "성내동",
      "수창동",
      "신당동",
      "신매동",
      "신무동",
      "안심동",
      "용계동",
      "용산동",
      "이곡동",
      "이현동",
      "인동",
      "칠성동",
      "태전동",
      "팔달동",
      "평리동",
      "평촌동",
      "황금동",
      "화전동",
      "회현동",
    ],
  },
  {
    city: "인천광역시",
    인천광역시: [
      "강화군",
      "계양구",
      "남구",
      "남동구",
      "동구",
      "부평구",
      "서구",
      "연수구",
      "옹진군",
      "중구",
    ],
  },
  {
    city: "광주광역시",
    광주광역시: ["광산구", "남구", "동구", "북구", "서구"],
  },
  {
    city: "대전광역시",
    대전광역시: ["동구", "중구", "서구", "유성구", "대덕구"],
  },
  {
    city: "울산광역시",
    울산광역시: ["중구", "남구", "동구", "북구", "울주군"],
  },
];

console.log(cityList);

export const CarouselItems = [
  {
    name: "Random Name #1",
    img: "https://ojsfile.ohmynews.com/CRI_T_IMG/2021/0927/A0002776078_T.jpg",
  },
  {
    name: "Random Name #2",
    img: "https://img.animalplanet.co.kr/thumbnail/2020/10/28/2000/vh3kz1j12thj3v3ya0jd.jpg",
  },
  {
    name: "Random Name #1",
    img: "data:image/jpeg;base64,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",
  },
  {
    name: "Random Name #2",
    img: "data:image/jpeg;base64,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",
  },
];

export const ANIMALSERVICE = [
  {
    id: 1,
    name: "동물병원",
  },
  {
    id: 2,
    name: "강아지 미용",
  },
  {
    id: 3,
    name: "강아지 호텔",
  },
  {
    id: 4,
    name: "강아지 동반 카페",
  },
];
