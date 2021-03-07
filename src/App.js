// import { Fragment } from "react";
// import { useFetch } from "./hooks/useFetch";
// import * as constants from "./constants/constants";
import CardGrid from "./components/CardGrid";
//import Loader from "./components/loader/Loader";

//  import store from "./store/store";

const App = () => {
  // const { status, chardata, error } = useFetch(
  //   `${process.env.REACT_APP_BASE_URL}${constants.PEOPLE_SLUG}`,
  //   constants.CHARACTER
  // );

  // if (status === "FETCHED_OK" && error === null) {
  //   const characters = chardata.results;
  //   console.log(characters);
  // }

  // const { planetdata } = useFetch(
  //   `${process.env.REACT_APP_BASE_URL}${constants.PLANETS_SLUG}`,
  //   constants.PLANET
  // );

  // if (planetdata) {
  //   const planets = planetdata.results;
  //   console.log(planets);
  // }

  // const { filmdata } = useFetch(
  //   `${process.env.REACT_APP_BASE_URL}${constants.FILMS_SLUG}`,
  //   constants.FILM
  // );

  // if (filmdata) {
  //   const films = filmdata.results;
  //   console.log(films);
  // }

  // return <CardGrid />;

  // console.log(store.getState());

  return <CardGrid/>
  // return <Loader />;
};

export default App;
