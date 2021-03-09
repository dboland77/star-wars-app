import CardGrid from "./components/CardGrid";
import Pagination from "./components/Pagination";
const App = () => {
  return (
    <div>
      <Pagination />
      <CardGrid pagenumber={1} />
    </div>
  );
};

export default App;
