import { Fragment } from "react";
import { useSelector } from "react-redux";
import { selectFilm } from "../reducers/filmReducer";
import "../styles/Cards.css";

const Film = ({ index }) => {
  const films = useSelector(selectFilm);
  let filmtitle = "";

  if (films.length > index) {
    console.log(films.length);
    filmtitle = films[index]["title"];
  }

  return (
    <Fragment>
      <li className="cards_item">{filmtitle}</li>
    </Fragment>
  );
};

export default Film;
