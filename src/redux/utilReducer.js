import { createSlice } from "@reduxjs/toolkit";

let initialStates = {
  positionlat: "",
  positionlng: "",
};

const utilSlice = createSlice({
  name: "util",
  initialState: initialStates,

  reducers: {
    POSITION: (state, action) => {
      console.log(action);
      state.positionlat = action.payload.latitude;
      state.positionlng = action.payload.longitude;
    },
  },
});
export const { POSITION } = utilSlice.actions;

export const geomylocation = (body) => async (dispatch) => {
  dispatch(POSITION(body));
};

export const selectUtil = (state) => state.util;

export default utilSlice.reducer;
