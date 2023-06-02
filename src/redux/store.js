import { combineReducers } from "redux";
import { configureStore } from "@reduxjs/toolkit";
import {
  FLUSH,
  PAUSE,
  PERSIST,
  persistReducer,
  persistStore,
  PURGE,
  REGISTER,
  REHYDRATE,
} from "redux-persist";
import storage from "redux-persist/lib/storage";
import utilReducer from "./utilReducer";
import userSlice from "./userSlice";

// Redux Persist 설정
const persistConfig = {
  key: "root", // 데이터를 저장하기 위한 키 값
  storage, // 사용할 스토리지 구현, 이 경우 localStorage 사용
  whitelist: ["auth", "util"], // 유지할 리듀서 목록
};

// userSlice와 utilReducer를 합쳐서 루트 리듀서 생성
const rootReducer = combineReducers({
  auth: userSlice,
  util: utilReducer,
});

// persistConfig를 적용한 유지(redux-persist) 리듀서 생성

const persistedReducer = persistReducer(persistConfig, rootReducer);

// 유지(redux-persist) 리듀서와 추가 구성을 사용하여 Redux 스토어 생성
const store = configureStore({
  devTools: process.env.NODE_ENV !== "production", // 개발 환경에서만 Redux DevTools 사용
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);
export default store;
