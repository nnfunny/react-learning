import "./App.css";
import Marks from "./components/Marks";
import useData from "./hooks/useData";

const URL = "https://unpkg.com/world-atlas@2.0.2/countries-50m.json";

const width = window.innerWidth;
const height = window.innerHeight;

function App() {
  const data = useData(URL);

  if (!data) {
    return <pre>Loadding...</pre>;
  }

  return (
    <svg width={width} height={height}>
      <Marks data={data} />
    </svg>
  );
}

export default App;
