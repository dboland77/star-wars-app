import * as constants from "../constants/constants";
import { createSelector } from "reselect";

const initialState = {
  planet_status: "idle",
  planet_error: null,
  planets: {},
};

export default function planetReducer(state = initialState, action) {
  switch (action.type) {
    case constants.FETCHING_PLANET:
      return {
        ...initialState,
        status: constants.FETCHING_PLANET,
      };
    case constants.FETCHED_PLANET:
      const newPlanets = {};
      action.payload.forEach((planets) => {
        newPlanets[planets.name] = planets;
      });
      return {
        ...initialState,
        planet_status: constants.FETCHED_PLANET,
        planets: newPlanets,
      };
    case constants.FETCH_ERROR:
      return {
        ...initialState,
        planet_status: constants.STATUS_FAILED,
        planet_error: action.payload,
      };
    default:
      return state;
  }
}

export const planetLoading = () => ({ type: constants.FETCHING_PLANET });

export const planetLoaded = (planets) => ({
  type: constants.FETCHED_PLANET,
  payload: planets,
});

// Thunk function
export const fetchPlanets = (url) => async (dispatch) => {
  dispatch(planetLoading());
  const response = await fetch(url);
  const data = await response.json();
  dispatch(planetLoaded(data.results));
};

const selectPlanet = (state) => state.planet.planets;

export const selectPlanetDetails = createSelector(selectPlanet, (planets) =>
  Object.values(planets)
);
