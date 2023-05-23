import { useLocation } from "react-router-dom";
import { Map } from "react-kakao-maps-sdk";
import HeaderBar from "../../components/header";
import { ManContainer, MapContainer } from "../home/styles";
import { CardListBox } from "./styles";

const AnimalService = () => {
  const location = useLocation();
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
        />
        <CardListBox>11111</CardListBox>
      </MapContainer>
    </div>
  );
};

export default AnimalService;
