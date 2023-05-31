import { createSlice } from "@reduxjs/toolkit";
import api from "../api/api";
import { Logout } from "@mui/icons-material";

let initialStates = {
  user: {},
};

const userSlice = createSlice({
  name: "auth",
  initialState: initialStates,

  reducers: {
    LOGIN: (state, action) => {
      console.log(action, "12341234");
      state.user = action.payload.user.data;
    },
    LOGOUT: (state, action) => {
      state.user = {};
    },
  },
});
export const { LOGIN, LOGOUT } = userSlice.actions;

export const localLogin = (body, state1, state2) => async (dispatch) => {
  try {
    const data = await api.post("/login", body);
    alert(data?.data?.msg);
    state1(false);
    state2(false);
    dispatch(LOGIN({ user: data?.data }));
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
