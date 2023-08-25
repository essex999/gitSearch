import { configureStore } from "@reduxjs/toolkit";
import dataSlice from "../slicers/dataSlice";
import pageSlice from "../slicers/currentPageSlice";
import valueSlice from "../slicers/searchValueSlice";
import infoSlice from "../slicers/userInfoSlice";

const store = configureStore({
  reducer: {
    data: dataSlice,
    page: pageSlice,
    value: valueSlice,
    info: infoSlice,
  },
});

export default store;
