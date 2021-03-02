import { useEffect, useRef, useReducer } from "react";
import * as constants from "../constants/constants";

export const useFetch = (url, type) => {
  const cache = useRef({});

  const initialState = {
    status: "idle",
    error: null,
    characterdata: [],
    filmdata: [],
    planetdata: [],
  };

  const [state, dispatch] = useReducer((state, action) => {
    switch (action.type) {
      case constants.FETCHING:
        return { ...initialState, status: constants.FETCHING };
      case constants.FETCHED_CHARACTER:
        return {
          ...initialState,
          status: constants.STATUS_FETCHED,
          characterdata: action.payload,
        };
      case constants.FETCHED_PLANET:
        return {
          ...initialState,
          status: constants.STATUS_FETCHED,
          planetdata: action.payload,
        };
      case constants.FETCHED_FILM:
        return {
          ...initialState,
          status: constants.STATUS_FETCHED,
          filmdata: action.payload,
        };
      case constants.FETCH_ERROR:
        return {
          ...initialState,
          status: constants.STATUS_FAILED,
          error: action.payload,
        };
      default:
        return state;
    }
  }, initialState);

  useEffect(() => {
    let cancelRequest = false;
    if (!url) return;

    const fetchData = async () => {
      dispatch({ type: constants.FETCHING });
      if (cache.current[url]) {
        const data = cache.current[url];
        switch (type) {
          case constants.CHARACTER:
            dispatch({ type: constants.FETCHED_CHARACTER, payload: data });
            break;
          case constants.FILM:
            dispatch({ type: constants.FETCHED_FILM, payload: data });
            break;
          case constants.PLANET:
            dispatch({ type: constants.FETCHED_PLANET, payload: data });
            break;
          default:
            return;
        }
      } else {
        try {
          const response = await fetch(url);
          const data = await response.json();
          cache.current[url] = data;
          if (cancelRequest) return;
          switch (type) {
            case constants.CHARACTER:
              dispatch({ type: constants.FETCHED_CHARACTER, payload: data });
              break;
            case constants.FILM:
              dispatch({ type: constants.FETCHED_FILM, payload: data });
              break;
            case constants.PLANET:
              dispatch({ type: constants.FETCHED_PLANET, payload: data });
              break;
            default:
              return;
          }
        } catch (error) {
          if (cancelRequest) return;
          dispatch({ type: constants.FETCH_ERROR, payload: error.message });
        }
      }
    };
    fetchData();

    return function cleanup() {
      cancelRequest = true;
    };
  }, [url, type]);

  return state;
};
