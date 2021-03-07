import * as constants from "../constants/constants";
// import store from "../store/store";
import { createSelector } from "reselect";

const initialState = {
  status: "idle",
  error: null,
  characters: {},
};

export default function characterReducer(state = initialState, action) {
  switch (action.type) {
    case constants.FETCHING:
      return {
        ...initialState,
        status: constants.FETCHING,
      };
    case constants.FETCHED:
      const newCharacters = {};
      action.payload.forEach((character) => {
        newCharacters[character.name] = character;
      });
      return {
        ...initialState,
        status: constants.STATUS_FETCHED,
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

export const characterLoading = () => ({ type: constants.FETCHING });

export const characterLoaded = (characters) => ({
  type: constants.FETCHED,
  payload: characters,
});

// Thunk function
export const fetchCharacters = (url) => async (dispatch) => {
  dispatch(characterLoading());
  const response = await fetch(url);
  const data = await response.json();
  dispatch(characterLoaded(data.results));
};

const selectCharacters = (state) => state.character.characters;

export const selectCharacterDetails = createSelector(
  selectCharacters,
  (characters) => Object.values(characters)
);
