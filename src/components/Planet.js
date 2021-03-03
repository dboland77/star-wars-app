import { Fragment } from "react";
import { useFetch } from "../hooks/useFetch";
import * as constants from "../constants/constants";

const Planet = ({ id }) => {
  const { status, planetdata, error } = useFetch(
    `${process.env.REACT_APP_BASE_URL}${constants.PLANETS_SLUG}${id}/`,
    constants.PLANET
  );

  return (
    <Fragment>
      {status === constants.STATUS_FETCHED && error === null && (
        <h1>{planetdata.name}</h1>
      )}
    </Fragment>
  );
};

export default Planet;
