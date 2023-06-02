import axios from "axios";
import { BASE_URL, NODE_BASE_URL } from "./url";

const api = axios.create({
  baseURL: BASE_URL, // API의 기본 URL 설정
  // withCredentials: true, // 요청 시 인증 정보를 포함할 경우 설정 (옵셔널)
  headers: { "Content-Type": "application/json; charset=utf-8" }, // 요청 헤더 설정
});

//api 컴포넌트화
export default api;
