import { useState, useEffect } from "react";
import { ErrorBoundary } from "react-error-boundary";
import { ErrorFallback } from "./ErrorFallback";
import Card from "./Card";
import { useFetch } from "../hooks/useFetch";
import * as constants from "../constants/constants";

const CardGrid = () => {


  return (
    <ErrorBoundary FallbackComponent={ErrorFallback} onReset={() => {}}>
        <Card charid={1} planetid={1} filmid={1} />
      )
    </ErrorBoundary>
  );
};

export default CardGrid;
