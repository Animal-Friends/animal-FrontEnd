import { createSlice } from "@reduxjs/toolkit";

let initialStates = {
  // 내위치정보를 저장하기위한 초기상태값
  positionlat: "",
  positionlng: "",
};

const utilSlice = createSlice({
  name: "util",
  initialState: initialStates,

  reducers: {
    POSITION: (state, action) => {
      //맨처음 시작되는 hooks를 통해 해당 나의 x,y좌표를 저장해주는값
      state.positionlat = action.payload.latitude;
      state.positionlng = action.payload.longitude;
    },
  },
});
export const { POSITION } = utilSlice.actions;

export const geomylocation = (body) => async (dispatch) => {
  //이 함수를 통해 매개변수로 받아, reducers 실행되는부분
  dispatch(POSITION(body));
};

export const selectUtil = (state) => state.util;

export default utilSlice.reducer;
