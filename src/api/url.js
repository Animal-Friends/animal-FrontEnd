// let url = 'http://127.0.0.1:8000/v1';
let url = "https://www.animalfriends-server.site/";

if (process.env.NODE_ENV === "production") {
  url = "https://www.animalfriends-server.site/";
}
// url 컴포넌트화 api호출

export const BASE_URL = url;
