import { createSlice } from "@reduxjs/toolkit";

const userInfoSlice = createSlice({
  name: "info",
  initialState: {
    createdDate: "",
    followers: "",
    following: "",
    public_repos: "",
    profileUrl: "",
  },
  reducers: {
    setUserInfo: (state, action) => {
      const data = action.payload;
      return {
        ...state,
        infoData: {
          ...state.infoData,
          createdDate: data.created_at,
        },
      };
    },
  },
});

export const { setUserInfo } = userInfoSlice.actions;
export default userInfoSlice.reducer;
