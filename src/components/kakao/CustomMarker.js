import { CustomOverlayMap, MapMarker, useMap } from "react-kakao-maps-sdk";
import { useState } from "react";

//카카오맵에 대한 마커를 찍기위한 커스텀 마커 컴포넌트화
const CustomMarker = ({ setCurIndex, position, index }) => {
  const map = useMap();
  // ㅋ카오맵함수를 불러오는부분 ㅇ
  return (
    <MapMarker
      onClick={(data, i) => {
        //아래를 통해부드럽게 해당 좌표로 이동가능
        map.panTo(data.getPosition());
      }}
      key={index}
      //아래 이미지를 통해 표시되는 이미지 변경
      image={{
        src: "https://t1.daumcdn.net/localimg/localimages/07/mapapidoc/markerStar.png", // 마커이미지의 주소입니다
        size: {
          width: 25,
          height: 35,
        }, // 마커이미지의 크기입니다
      }}
      //마커에 표시될 좌표
      position={{
        lng: position.x,
        lat: position.y,
      }}
      // 마커에 마우스아웃 이벤트를 등록합니다
    >
      <div
        style={{
          padding: "5px", //여백
          color: "#000", //색상
        }}
      >
        {/* 마커에 표시될 장소 */}
        {position.place_name}
      </div>
    </MapMarker>
  );
};

export default CustomMarker;
