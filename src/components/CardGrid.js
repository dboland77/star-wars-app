import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { ErrorBoundary } from "react-error-boundary";
import { ErrorFallback } from "./ErrorFallback";
import {
  selectCharacterDetails,
  fetchCharacters,
} from "../reducers/characterReducer";
import { fetchPlanet } from "../reducers/planetReducer";
import { fetchFilm } from "../reducers/filmReducer";
import Character from "../components/Character";
import Planet from "../components/Planet";
import Film from "../components/Film";
import Card from "../components/Card";
import * as constants from "../constants/constants";
import "../styles/Cards.css";

const fixurl = (url) => url.replace(constants.HTTP_RX, constants.HTTPS);
const peopleurl = `${process.env.REACT_APP_BASE_URL}${constants.PEOPLE_SLUG}`;
let planeturl;
let filmurl;

const CardGrid = () => {
  const dispatch = useDispatch();
  const abortCtrl = new AbortController();

  const characters = useSelector(selectCharacterDetails);

  const renderedCards = characters.map((char, index) => {
    planeturl = fixurl(char.homeworld);
    filmurl = fixurl(char.films[0]);

    dispatch(fetchPlanet(planeturl));
    dispatch(fetchFilm(filmurl));

    return (
      <Card>
        <Character key={index} name={char.name} birth_year={char.birth_year} />
        <Planet key={index + 100} index={index} />
        <Film key={index + 200} index={index} />
      </Card>
    );
  });

  useEffect(() => {
    const opts = { signal: abortCtrl.signal };

    dispatch(fetchCharacters(peopleurl, opts));

    return () => {};
  }, [dispatch]);

  return (
    <ErrorBoundary FallbackComponent={ErrorFallback} onReset={() => {}}>
      <div className="main">
        <ul className="cards">{renderedCards}</ul>
      </div>
    </ErrorBoundary>
  );
};

export default CardGrid;
