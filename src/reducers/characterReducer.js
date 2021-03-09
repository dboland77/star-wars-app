import * as constants from "../constants/constants";
import { createSelector } from "reselect";

const initialState = {
  status: "idle",
  error: null,
  characters: {},
};

export default function characterReducer(state = initialState, action) {
  switch (action.type) {
    case constants.FETCHING_CHARACTER:
      return {
        ...initialState,
        status: constants.FETCHING_CHARACTER,
      };
    case constants.FETCHED_CHARACTER:
      const newCharacters = {};
      action.payload.forEach((character) => {
        newCharacters[character.name] = character;
      });
      return {
        ...initialState,
        status: constants.FETCHED_CHARACTER,
        characters: newCharacters,
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
}

export const characterLoading = () => ({ type: constants.FETCHING_CHARACTER });

export const characterLoaded = (characters) => ({
  type: constants.FETCHED_CHARACTER,
  payload: characters,
});

// Thunk function
export const fetchCharacters = (url,opts) => async (dispatch) => {
  dispatch(characterLoading());
  const response = await fetch(url,opts);
  const data = await response.json();
  dispatch(characterLoaded(data.results));
};

const selectCharacters = (state) => state.character.characters;

export const selectCharacterDetails = createSelector(
  selectCharacters,
  (characters) => Object.values(characters)
);
