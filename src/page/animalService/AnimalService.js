import { useLocation, useNavigate } from "react-router-dom";
import { CustomOverlayMap, Map, MapMarker, useMap } from "react-kakao-maps-sdk";
import HeaderBar from "../../components/header";
import { ManContainer, MapContainer } from "../home/styles";
import CardListBox from "../../components/card/CardListBox";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import CustomMarker from "../../components/kakao/CustomMarker";
import Carosel from "../../components/carousel/Carosel";

const { kakao } = window;

const AnimalService = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const [searchData, setSearchData] = useState([]);
  const [selectedMarkerIndex, setSelectedMarkerIndex] = useState(null); // 선택된 마커의 인덱스를 추적하는 상태값
  const { positionlat, positionlng } = useSelector((state) => state.util);
  const options = {
    x: positionlng,
    y: positionlat,
    radius: 2000,
  };

  const [curState, setCurState] = useState({
    // 지도의 초기 위치
    center: { lat: positionlat, lng: positionlng },
    // 지도 위치 변경시 panto를 이용할지에 대해서 정의
    isPanto: true,
  });
  useEffect(() => {
    if (!location?.state) return navigate(-1);
  }, [location?.state]);

  useEffect(() => {
    const ps = new kakao.maps.services.Places();

    const placesSearchCB = function async(data, status, pagination) {
      if (status === kakao.maps.services.Status.OK) {
        setSearchData(data);
      }
    };
    ps.keywordSearch(`${location?.state}`, placesSearchCB, options);
  }, [location?.state]);

  const handleClickManyMaker = async (x, y, index) => {
    setCurState({
      center: { lat: y, lng: x },
      isPanto: true,
    });

    // setSelectedMarkerIndex(index); // 선택된 마커의 인덱스 설정

    // map.setCenter(new kakao.maps.LatLng(y, x));
  };
  return (
    <div>
      <HeaderBar text={location?.state} />

      <MapContainer>
        <Map
          isPanto={curState.isPanto}
          center={curState.center} // 지도의 중심 좌표
          style={{
            width: "100%",
            height: "calc(100vh - 160px)",
          }} // 지도 크기
          level={5} // 지도 확대 레벨
        >
          <MapMarker
            position={{
              lng: positionlng,
              lat: positionlat,
            }}
          >
            <div style={{ padding: "5px", color: "#000" }}>현재위치에요!</div>
          </MapMarker>
          {searchData?.map((position, index) => (
            <CustomMarker
              selectedMarkerIndex={selectedMarkerIndex}
              setSelectedMarkerIndex={setSelectedMarkerIndex}
              position={position}
              index={index}
            />
          ))}
        </Map>
        <CardListBox
          handleClickManyMaker={handleClickManyMaker}
          searchData={searchData}
          setSearchData={setSearchData}
        />
      </MapContainer>
    </div>
  );
};

export default AnimalService;
