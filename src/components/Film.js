import { Fragment } from "react";
import { useFetch } from "../hooks/useFetch";
import * as constants from "../constants/constants";

const Film = ({ id }) => {
  const { status, filmdata, error } = useFetch(
    `${process.env.REACT_APP_BASE_URL}${constants.FILMS_SLUG}${id}/`,
    constants.FILM
  );

  return (
    <Fragment>
    {status === constants.STATUS_FETCHED && error === null && (
      <h1>{filmdata.title}</h1>)}
    </Fragment>
  );
};

export default Film;
