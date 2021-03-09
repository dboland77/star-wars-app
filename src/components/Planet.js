import { Fragment } from "react";
import {useSelector} from "react-redux";
import {selectPlanet} from "../reducers/planetReducer";


const Planet = ({ index}) => {
const planets = useSelector(selectPlanet);
let planetname=""

if(planets.length>index){
  console.log(planets.length)
  planetname= planets[index]["name"]
}

  return (
    <Fragment>
      <h1>{planetname}</h1>
    </Fragment>
  );
};

export default Planet;
