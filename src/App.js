// import { Fragment } from "react";
// import { useFetch } from "./hooks/useFetch";
// import * as constants from "./constants/constants";
import Card from "./components/Card";

const App = () => {
  // let planeturl, filmurl;

  //   const character = useFetch(
  //     `${process.env.REACT_APP_BASE_URL}${constants.PEOPLE_SLUG}1/`,
  //     constants.CHARACTER
  //     );

  //     // Need to switch http to https to avoid redirect and cors issues

  //     if (
  //       character.status === constants.STATUS_FETCHED &&
  //       character.error === null
  //       ) {
  //         planeturl = character.characterdata.homeworld;
  //         planeturl = planeturl.replace(constants.HTTP_RX, constants.HTTPS);
  //         filmurl = character.characterdata.films[0];
  //         filmurl = filmurl.replace(constants.HTTP_RX, constants.HTTPS);
  //         console.log(planeturl, filmurl);
  //       }

  //       // We cannot call useFetch conditionally (rules of hooks)
  //       // But we CAN add (!url return) to the useFetch and condional the url parameter!!!!
  //       // Thank you Kent C. Dodds :)

  //       const planet = useFetch(
  //         character.status === constants.STATUS_FETCHED && character.error === null
  //         ? planeturl
  //         : null,
  //         constants.PLANET
  //         );

  //         const film = useFetch(
  //           character.status === constants.STATUS_FETCHED && character.error === null
  //           ? filmurl
  //           : null,
  //           constants.FILM
  //           );

  // <Fragment>
  /* {character.status === constants.STATUS_FETCHED &&
    character.error === null && (
      <h1>
      Name: {character.characterdata.name} <br/>
      Birth Year: {character.characterdata.birth_year}
      </h1>
      )}
      {planet.status === constants.STATUS_FETCHED && planet.error === null && (
        <h1>Home Planet: {planet.planetdata.name}</h1>
        )}
        {film.status === constants.STATUS_FETCHED && film.error === null && (
          <h1>First film: {film.filmdata.title}</h1>
        )} */
  /* </Fragment> */
  let cards = [];
  for (let i=1;i<11;i++){
    cards.push(<Card charid={i} key={i}/>)
  }

  return (
    <div>{cards}</div>
  );
};

export default App;
