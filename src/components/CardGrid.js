import { useSelector } from "react-redux";
import { ErrorBoundary } from "react-error-boundary";
import { ErrorFallback } from "./ErrorFallback";
// import Card from "./Card";
import * as constants from "../constants/constants";
import Loader from "./loader/Loader";
import { selectCharacterDetails } from "../reducers/characterReducer";
import { selectPlanetDetails } from "../reducers/planetReducer";
import { selectFilmDetails } from "../reducers/filmReducer";
import Character from "../components/Character";
import Planet from "../components/Planet";
import Film from "../components/Film";

const CardGrid = () => {
  const characters = useSelector(selectCharacterDetails);
  let loadingStatus = useSelector((state) => state.character.character_status);

  const renderedCharacters = characters.map((char, index) => {
    return (
      <Character key={index} name={char.name} birth_year={char.birth_year} />
    );
  });

  const planets = useSelector(selectPlanetDetails);
  loadingStatus = useSelector((state) => state.planet.planet_status);

  // if (loadingStatus !== constants.FETCHED_PLANET) {
  //   return <Loader />;
  // }

  const renderedPlanets = planets.map((planet, index) => {
    return <Planet key={index} name={planet.name} />;
  });

  const films = useSelector(selectFilmDetails);
  loadingStatus = useSelector((state) => state.film.film_status);

  if (loadingStatus !== constants.FETCHED_FILM) {
    return <Loader />;
  }

  const renderedFilms = films.map((film, index) => {
    return <Film key={index} title={film.title} />;
  });

  return (
    <ErrorBoundary FallbackComponent={ErrorFallback} onReset={() => {}}>
      {loadingStatus ===
      (constants.FETCHED_CHARACTER ||
        constants.FETCHED_PLANET ||
        constants.FETCHED_FILM) ? (
        <Loader />
      ) : (
        <ul>
          {renderedCharacters}
          {renderedPlanets}
          {renderedFilms}
        </ul>
      )}
    </ErrorBoundary>
  );
};

export default CardGrid;
