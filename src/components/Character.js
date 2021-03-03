import { Fragment } from "react";
import { useFetch } from "../hooks/useFetch";
import * as constants from "../constants/constants";

const Character = ({ id }) => {
  const { status, characterdata, error } = useFetch(
    `${process.env.REACT_APP_BASE_URL}${constants.PEOPLE_SLUG}${id}/`,
    constants.CHARACTER
  );

  return (
    <Fragment>
    {status === constants.STATUS_FETCHED && error === null && (
        <Fragment>
        <h1>{characterdata.name}</h1>
        <h1>{characterdata.birth_year}</h1>
        </Fragment>
      )
      }
    </Fragment>
  );
};

export default Character;
