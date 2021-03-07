import { configureStore } from "@reduxjs/toolkit";
import devToolsEnhancer from "remote-redux-devtools";
import characterReducer from "../reducers/characterReducer";
import thunk from "redux-thunk";
import logger from "redux-logger";
const store = configureStore({
  reducer: {
    character: characterReducer,
  },
  devTools: false,
  enhancers: [devToolsEnhancer({ realtime: true })],
  middleware: [thunk, logger],
});

export default store;
