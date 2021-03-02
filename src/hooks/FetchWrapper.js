import { useEffect } from "react";
import { useFetch } from "./useFetch";

function FetchWrapper(url, type, { setState }) {
  const state = useFetch(url, type);

  useEffect(() => {
    setState(state);
  }, [setState, state]);

  return null;
}

export default FetchWrapper;
