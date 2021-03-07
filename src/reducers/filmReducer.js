import * as constants from "../constants/constants";
import { createSelector } from "reselect";

const initialState = {
  film_status: "idle",
  film_error: null,
  films: {},
};

export default function filmReducer(state = initialState, action) {
  switch (action.type) {
    case constants.FETCHING_FILM:
      return {
        ...initialState,
        film_status: constants.FETCHING_FILM,
      };
    case constants.FETCHED_FILM:
      const newfilms = {};
      action.payload.forEach((film) => {
        newfilms[film.title] = film;
      });
      return {
        ...initialState,
        film_status: constants.FETCHED_FILM,
        films: newfilms,
      };
    case constants.FETCH_ERROR:
      return {
        ...initialState,
        film_status: constants.STATUS_FAILED,
        film_error: action.payload,
      };
    default:
      return state;
  }
}

export const filmLoading = () => ({ type: constants.FETCHING_FILM });

export const filmLoaded = (films) => ({
  type: constants.FETCHED_FILM,
  payload: films,
});

// Thunk function
export const fetchFilms = (url) => async (dispatch) => {
  dispatch(filmLoading());
  const response = await fetch(url);
  const data = await response.json();
  dispatch(filmLoaded(data.results));
};

const selectFilms = (state) => state.film.films;

export const selectFilmDetails = createSelector(selectFilms, (films) =>
  Object.values(films)
);
