import { useLocation } from "react-router-dom";
import { Map } from "react-kakao-maps-sdk";
import HeaderBar from "../../components/header";
import { ManContainer, MapContainer } from "../home/styles";
import CardListBox from "../../components/card/CardListBox";
import { useEffect, useState } from "react";

const { kakao } = window;

const AnimalService = () => {
  const location = useLocation();
  const [searchData, setSearchData] = useState([]);

  useEffect(() => {
    const ps = new kakao.maps.services.Places();
    console.log(ps);

    const placesSearchCB = function (data, status, pagination) {
      if (status === kakao.maps.services.Status.OK) {
        // 처리 로직
        // const newData = data[0];
        console.log(data);
        setSearchData(data);
      }
    };

    ps.keywordSearch(`${location?.state}`, placesSearchCB);
  }, [location?.state]);

  return (
    <div>
      <HeaderBar text={location?.state} />

      <MapContainer>
        <Map
          center={{ lat: 33.5563, lng: 126.79581 }} // 지도의 중심 좌표
          style={{
            width: "100%",
            height: "calc(100vh - 160px)",
          }} // 지도 크기
          level={3} // 지도 확대 레벨
        ></Map>
        <CardListBox searchData={searchData} setSearchData={setSearchData} />
      </MapContainer>
    </div>
  );
};
export default AnimalService;
