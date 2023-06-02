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
import axios from "axios";
import SearchLocation from "../../components/searchLocation/SearchLocation";

const { kakao } = window;

const AnimalService = () => {
  const location = useLocation(); // 내 윛치정보 확인
  const navigate = useNavigate(); //react-router 에 저장된 path로 가기위한 함수

  const [searchData, setSearchData] = useState([]);

  const [subSelectOptions, setSubSelectOptions] = useState("");
  const [selectOptions, setSelectOptions] = useState("");
  const [selectedcomplete, setSelectedComplete] = useState("");
  const [isSelectedCompleted, setIsSelectedCompleted] = useState(false);
  const [selectedMarkerIndex, setSelectedMarkerIndex] = useState(null); // 선택된 마커의 인덱스를 추적하는 상태값

  const { positionlat, positionlng } = useSelector((state) => state.util);
  // Redux의 상태에서 현재 위치 정보를 가져옴

  const [curState, setCurState] = useState({
    // 지도의 초기 위치
    center: { lat: positionlat, lng: positionlng },
    searchCenter: { lat: "", lng: "" },
    // 지도 위치 변경시 panto를 이용할지에 대해서 정의
    isPanto: true,
  });
  useEffect(() => {
    if (!location?.state) return navigate(-1);

    // location.state가 존재하지 않으면 이전 페이지로 이동
    // location?.state가 있을때 한번만
  }, [location?.state]);

  const getSearch = async () => {
    if (selectedcomplete.length === 0) return;
    try {
      const response = await axios.get(
        "https://dapi.kakao.com/v2/local/search/address.json",
        {
          headers: {
            Authorization: "KakaoAK " + "8282a0c10603a7e03d75bae01a97ef07",
          },
          params: {
            query: selectedcomplete,
          },
        }
      );
      const ps = new kakao.maps.services.Places();
      //places라는 함수를 가져와서 ps에 저장

      const placesSearchCB = function async(data, status, pagination) {
        if (status === kakao.maps.services.Status.OK) {
          //OK가 떨어지면 데이터 searchData에 저장
          setSearchData(data);
        } else {
          alert(
            `현재 위치에 있는 ${selectedcomplete}는 검색 기록이 없습니다.!`
          );
          setSearchData([]);
        }
      };
      ps.keywordSearch(`${location?.state}`, placesSearchCB, {
        x: response.data?.documents[0].x,
        y: response.data?.documents[0].y,
        radius: 2000,
      });
      setCurState({
        center: {
          lat: response.data?.documents[0].y,
          lng: response.data?.documents[0].x,
        },
      });
      setIsSelectedCompleted(true);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    // getSearch();

    const ps = new kakao.maps.services.Places();
    //places라는 함수를 가져와서 ps에 저장

    const placesSearchCB = function async(data, status, pagination) {
      if (status === kakao.maps.services.Status.OK) {
        //OK가 떨어지면 데이터 searchData에 저장
        setSearchData(data);
      }
    };

    // location?.state로 들어오는 키워드 값을토대로 데이터를 불러오게됨 options를 통한 2km내 데이터를 다불러옴
    ps.keywordSearch(`${location?.state}`, placesSearchCB, {
      x: positionlng,
      y: positionlat,
      radius: 2000,
    });
  }, [location?.state]);

  useEffect(() => {
    getSearch();
  }, [isSelectedCompleted, selectedcomplete]);
  const handleClickManyMaker = async (x, y, index) => {
    // 카드리스트에대한 x,y값을 받아오기위한 함수
    setCurState({
      //center 객체에 저장
      center: { lat: y, lng: x },
      //isPanto 기본값변경
      isPanto: true,
    });
  };
  return (
    <div>
      {/*헤더 컴포넌트에 텍스트를 props로 넘기는 부분 */}
      <HeaderBar text={location?.state} />

      <SearchLocation
        setSelectedComplete={setSelectedComplete}
        subSelectOptions={subSelectOptions}
        setSubSelectOptions={setSubSelectOptions}
        selectOptions={selectOptions}
        setSelectOptions={setSelectOptions}
      />
      <MapContainer>
        <Map
          //부드럽게 제어하기위한 state구문
          isPanto={curState.isPanto}
          center={curState.center} // 지도의 중심 좌표
          style={{
            width: "100%", // 요소의 가로 너비를 100%로 설정합니다.
            height: "calc(100vh - 160px)", // 요소의 세로 높이를 브라우저 뷰포트 높이에서 160px를 뺀 값으로 설정합니다.
          }} // 지도 크기
          level={5} // 지도 확대 레벨
        >
          <MapMarker
            position={{
              //내위치정보
              lng: isSelectedCompleted ? curState.center.lng : positionlng,
              lat: isSelectedCompleted ? curState.center.lat : positionlat,
            }}
          >
            <div
              style={{
                padding: "5px",
                color: "#000",
              }}
            >
              {isSelectedCompleted ? selectedcomplete : "현재위치에요!"}
            </div>
          </MapMarker>
          {/*useEffect에서 받아온 값들을 컴포넌트화 한 곳에 데이터를 넘겨 뿌려주는 부분 */}
          {searchData?.map((position, index) => (
            <CustomMarker
              //props로 index넘기는 부분
              selectedMarkerIndex={selectedMarkerIndex}
              setSelectedMarkerIndex={setSelectedMarkerIndex}
              //각 데이터에대한 좌표
              position={position}
              index={index}
            />
          ))}
        </Map>
        {/* 지도 밑에 뿌려질 카드리스트 컴포너트화 */}
        <CardListBox
          //각 리스트에 대한 x,y값을 받기위한함수
          handleClickManyMaker={handleClickManyMaker}
          //검색된데이터를 넘겨주는 부분
          searchData={searchData}
          //검색된데이터를 상태처리하기위한구문
          setSearchData={setSearchData}
        />
      </MapContainer>
    </div>
  );
};

export default AnimalService;
