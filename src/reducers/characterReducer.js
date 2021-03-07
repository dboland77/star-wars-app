import * as constants from "../constants/constants";
import { createSelector } from "reselect";

const initialState = {
  character_status: "idle",
  character_error: null,
  characters: {},
};

export default function characterReducer(state = initialState, action) {
  switch (action.type) {
    case constants.FETCHING_CHARACTER:
      return {
        ...initialState,
        character_status: constants.FETCHING_CHARACTER,
      };
    case constants.FETCHED_CHARACTER:
      const newCharacters = {};
      action.payload.forEach((character) => {
        newCharacters[character.name] = character;
      });
      return {
        ...initialState,
        character_status: constants.FETCHED_CHARACTER,
        characters: newCharacters,
      };
    case constants.FETCH_ERROR:
      return {
        ...initialState,
        character_status: constants.STATUS_FAILED,
        character_error: action.payload,
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
