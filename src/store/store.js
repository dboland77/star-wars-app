import { configureStore } from "@reduxjs/toolkit";
import devToolsEnhancer from "remote-redux-devtools";
import characterReducer from "../reducers/characterReducer";
import planetReducer from "../reducers/planetReducer";
import filmReducer from "../reducers/filmReducer";
import thunk from "redux-thunk";
import logger from "redux-logger";

const store = configureStore({
  reducer: {
    character: characterReducer,
    planet: planetReducer,
    film: filmReducer,
  },
  devTools: false,
  enhancers: [devToolsEnhancer({ realtime: true })],
  middleware: [thunk, logger],
});

export default store;
