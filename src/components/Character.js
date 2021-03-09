import { Fragment } from "react";
import { ErrorBoundary } from "react-error-boundary";
import { ErrorFallback } from "./ErrorFallback";
import "../styles/Cards.css";

const Character = ({ name, birth_year }) => {
  return (
    <Fragment>
      <ErrorBoundary FallbackComponent={ErrorFallback} onReset={() => {}}>
        <li className="cards_item">{name}</li>
        <li className="cards_item">{birth_year}</li>
      </ErrorBoundary>
    </Fragment>
  );
};

export default Character;
