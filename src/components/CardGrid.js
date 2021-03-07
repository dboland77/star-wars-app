import { useSelector } from "react-redux";
import { ErrorBoundary } from "react-error-boundary";
import { ErrorFallback } from "./ErrorFallback";
// import Card from "./Card";
import * as constants from "../constants/constants";
import Loader from "./loader/Loader";
import { selectCharacterDetails } from "../reducers/characterReducer";
import Character from "../components/Character"

const CardGrid = () => {
  const characters = useSelector(selectCharacterDetails);
  const loadingStatus = useSelector((state) => state.character.status)

  console.log(loadingStatus, constants.STATUS_FETCHED);

  if (loadingStatus !== constants.STATUS_FETCHED) {
    return (
          <Loader/>
    )
  }

  const renderedCharacters= characters.map((char,index) => {
    return <Character key={index} name={char.name} />
  })

  return (
    <ErrorBoundary FallbackComponent={ErrorFallback} onReset={() => {}}>
     <ul>{renderedCharacters}</ul>
    </ErrorBoundary>
  );
};

export default CardGrid;
