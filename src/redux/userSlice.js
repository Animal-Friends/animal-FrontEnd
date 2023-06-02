import { createSlice } from "@reduxjs/toolkit";
import api from "../api/api";
import { Logout } from "@mui/icons-material";

//기본 user에대한 상태값
let initialStates = {
  user: {},
};

const userSlice = createSlice({
  name: "auth",
  initialState: initialStates,

  reducers: {
    LOGIN: (state, action) => {
      //로그인 할시 모든 정보를 user객체에 담는 부분
      state.user = action.payload.user.data;
    },
    LOGOUT: (state, action) => {
      state.user = {};
      //로그아웃 할시 모든 정보를 제거
    },
    UPDATE: (state, action) => {
      state.user.email = action.payload.email;
      //내정보 업데이트
    },
  },
});
export const { LOGIN, LOGOUT, UPDATE } = userSlice.actions;

export const localLogin = (body, state1, state2) => async (dispatch) => {
  try {
    const data = await api.post("/login", body);
    alert(data?.data?.msg);
    state1(false); // 매개변수로 받은 state값을 변경
    state2(false); // 매개변수로 받은 state값을 변경
    dispatch(LOGIN({ user: data?.data })); //dispatch를 통해 redux store에있는 user객체에 담아줌
  } catch (e) {
    if (e?.response?.data?.msg) {
      alert(e?.response?.data?.msg);
    }
    console.log(e?.response);
  }
};
export const localUserUpdate = (body) => async (dispatch) => {
  //유저업데이트 구문
  try {
    const data = await api.put("/register", body); // 유저 업데이트 api호출
    if (data?.status === 200) {
      alert("유저 정보가 업데이트 되었습니다.");
      dispatch(UPDATE({ email: body?.change_email })); //email넣어주기위한구문
    }
  } catch (e) {
    if (e?.response?.data?.msg) {
      alert(e?.response?.data?.msg);
    }
    console.log(e?.response);
  }
};
export const logout = (dispatch) => {
  return dispatch(LOGOUT());
};

export const selectUser = (state) => state.user;

export default userSlice.reducer;
