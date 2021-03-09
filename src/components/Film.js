import { Fragment } from "react";
import { useSelector } from "react-redux";
import { selectFilm } from "../reducers/filmReducer";

const Film = ({ index }) => {
  const films = useSelector(selectFilm);
  let filmtitle = "";

  if (films.length > index) {
    console.log(films.length);
    filmtitle = films[index]["title"];
  }

  return (
    <Fragment>
      <h1>{filmtitle}</h1>
    </Fragment>
  );
};

export default Film;
