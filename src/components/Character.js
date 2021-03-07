import { Fragment } from "react";
import { ErrorBoundary } from "react-error-boundary";
import { ErrorFallback } from "./ErrorFallback";

const Character = ({ name, birth_year }) => {
  return (
    <Fragment>
      <ErrorBoundary FallbackComponent={ErrorFallback} onReset={() => {}}>
        <div>
          <h1>{name}</h1>
          <h1>{birth_year}</h1>
        </div>
      </ErrorBoundary>
    </Fragment>
  );
};

export default Character;
