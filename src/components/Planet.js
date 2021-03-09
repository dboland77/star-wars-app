import { Fragment } from "react";
import { useSelector } from "react-redux";
import { selectPlanet } from "../reducers/planetReducer";
import "../styles/Cards.css";

const Planet = ({ index }) => {
  const planets = useSelector(selectPlanet);
  let planetname = "";

  if (planets.length > index) {
    console.log(planets.length);
    planetname = planets[index]["name"];
  }

  return (
    <Fragment>
      <li className="cards_item">{planetname}</li>
    </Fragment>
  );
};

export default Planet;
