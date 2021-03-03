import { Fragment } from "react";
import { useFetch } from "../hooks/useFetch";
import * as constants from "../constants/constants";

const Character = ({ id }) => {
  const { status, characterdata, error } = useFetch(
    `${process.env.REACT_APP_BASE_URL}${constants.PEOPLE_SLUG}${id}/`,
    constants.CHARACTER
  );

  console.log(status, characterdata, error);

  return (
    <Fragment>
      <h1>{characterdata.name}</h1>
    </Fragment>
  );
};

export default Character;
