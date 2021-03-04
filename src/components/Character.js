import { Fragment } from "react";
import { ErrorBoundary } from "react-error-boundary";
import { ErrorFallback } from "./ErrorFallback";

const Character = ({ characterdata }) => {
  return (
    <Fragment>
      <ErrorBoundary FallbackComponent={ErrorFallback} onReset={() => {}}>
        <div>
        Hello
          {/* <h1>{characterdata.name}</h1>
          <h1>{characterdata.birth_year}</h1> */}
        </div>
        )
      </ErrorBoundary>
    </Fragment>
  );
};

export default Character;
