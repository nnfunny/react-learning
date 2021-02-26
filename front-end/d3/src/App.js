import { useEffect, useState } from "react";
import * as d3 from "d3";
import "./App.css";

const URL =
  "https://gist.githubusercontent.com/curran/0ac4077c7fc6390f5dd33bf5c06cb5ff/raw/605c54080c7a93a417a3cea93fd52e7550e76500/UN_Population_2019.csv";

function App() {
  const [data, setData] = useState(null);
  useEffect(() => {
    const fetchedData = async () => {
      const row = (d) => {
        d.Population = +d["2020"];
        return d;
      };

      const data = await d3.csv(URL, row);
      setData(data.slice(0, 10));
      console.log(d3.csvFormat(data).length / 1024 + " kB");
      console.log(data.length + " rows");
      console.log(data.columns.length + " columns");
    };
    fetchedData();
  }, []);

  if (!data) {
    return <pre>Loadding...</pre>;
  }

  const yScale = d3
    .scaleBand()
    .domain(data.map((d) => d.Country))
    .range([0, window.innerHeight]);

  const xScale = d3
    .scaleLinear()
    .domain([0, d3.max(data, (d) => d.Population)])
    .range([0, window.innerWidth]);

  return (
    <svg width={window.innerWidth} height={window.innerHeight}>
      {data.map((d, index) => (
        <rect
          key={index}
          x={0}
          y={yScale(d.Country)}
          width={xScale(d.Population)}
          height={yScale.bandwidth()}
        />
      ))}
    </svg>
  );
}

export default App;
