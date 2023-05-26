import { CustomOverlayMap, MapMarker, useMap } from "react-kakao-maps-sdk";
import { useState } from "react";

const CustomMarker = ({ setCurIndex, position, index }) => {
  const map = useMap();

  return (
    <MapMarker
      onClick={(data, i) => {
        map.panTo(data.getPosition());
      }}
      key={index}
      image={{
        src: "https://t1.daumcdn.net/localimg/localimages/07/mapapidoc/markerStar.png", // 마커이미지의 주소입니다
        size: {
          width: 25,
          height: 35,
        }, // 마커이미지의 크기입니다
      }}
      position={{
        lng: position.x,
        lat: position.y,
      }}
      // 마커에 마우스아웃 이벤트를 등록합니다
    >
      <div
        style={{
          padding: "5px",
          color: "#000",
        }}
      >
        {position.place_name}
      </div>
    </MapMarker>
  );
};

export default CustomMarker;
