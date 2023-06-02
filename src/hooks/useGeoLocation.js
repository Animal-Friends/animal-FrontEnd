import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { geomylocation } from "../redux/utilReducer";

const useGeoLocation = (options = {}) => {
  // location 정보 저장
  const dispatch = useDispatch();
  //로딩 여부
  const [isLoading, setIsLoading] = useState(true);
  const [location, setLocation] = useState({
    // 지도의 초기 위치
    latitude: "",
    longitude: "",
  });
  // 에러 메세지 저장
  const [error, setError] = useState();

  // Geolocation의 `getCurrentPosition` 메소드에 대한 성공 callback 핸들러
  const handleSuccess = async (pos) => {
    const { latitude, longitude } = pos.coords;
    setLocation({
      latitude,
      longitude,
    });
    //isLoading변수 상태값 변경
    setIsLoading(false);
    //내위치를 받아서 store에 나의 정보를 location을 저장하기위한 함수
    dispatch(geomylocation(pos.coords));
  };

  // Geolocation의 `getCurrentPosition` 메소드에 대한 실패 callback 핸들러
  const handleError = (error) => {
    //에러메세지 함수
    setError(error.message);
  };

  useEffect(() => {
    const { geolocation } = navigator;

    if (!geolocation) {
      //setError에 데이터 저장
      setError("현재 위치가 지원되지 않습니다.");
      setIsLoading(false);
    }

    // Geolocation API 호출
    geolocation.getCurrentPosition(handleSuccess, handleError, options);
  }, []);

  // 각 state값을 빼주는 값
  return { location, error, isLoading };
};

export default useGeoLocation;
