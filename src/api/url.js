// let url = 'http://127.0.0.1:8000/v1';
let url = "http://43.200.253.205:3100/";

if (process.env.NODE_ENV === "production") {
  url = "http://43.200.253.205:3100/";
}

export const BASE_URL = url;
