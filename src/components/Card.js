
import {Fragment} from 'react';
import { ErrorBoundary } from "react-error-boundary";
import { ErrorFallback } from "./ErrorFallback";
import Character from "./Character";
import Planet from "./Planet";
import Film from "./Film";

const Card = ({ charid, planetid, filmid }) => {
  return (
    <Fragment>
      <ErrorBoundary FallbackComponent={ErrorFallback} onReset={() => {}}>
        <Character id={charid} />
        <Planet id={planetid} />
        <Film id={filmid} />
      </ErrorBoundary>
    </Fragment>
  );
};

export default Card;
