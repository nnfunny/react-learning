import * as d3 from "d3";
import "./App.css";
import AxisBottom from "./components/AxisBottom";
import AxisLeft from "./components/AxisLeft";
import Marks from "./components/Marks";
import useData from "./hooks/useData";

const URL =
  "https://gist.githubusercontent.com/curran/a08a1080b88344b0c8a7/raw/639388c2cbc2120a14dcf466e85730eb8be498bb/iris.csv";

const width = window.innerWidth;
const height = window.innerHeight;
const margin = { top: 20, right: 30, bottom: 65, left: 90 };
const circleRadius = 10;

function App() {
  const data = useData(URL);

  if (!data) {
    return <pre>Loadding...</pre>;
  }

  const innerHeight = height - margin.top - margin.bottom;
  const innerWidth = width - margin.right - margin.left;

  const xValue = (d) => d.petal_length;
  const xAxisLable = "Petal Length";
  const xAxisLableOffset = 55;
  const yValue = (d) => d.sepal_width;
  const yAxisLable = "Sepal Width";
  const yAxisLableOffset = 50;

  const siFormat = d3.format(".2s");
  const xAxisTickFormat = (tickValue) => siFormat(tickValue).replace("G", "B");

  const xScale = d3
    .scaleLinear()
    .domain(d3.extent(data, xValue))
    .range([0, innerWidth])
    .nice();

  const yScale = d3
    .scaleLinear()
    .domain(d3.extent(data, yValue))
    .range([0, innerHeight])
    .nice();

  return (
    <svg width={window.innerWidth} height={window.innerHeight}>
      <g transform={`translate(${margin.left}, ${margin.top})`}>
        <AxisBottom
          xScale={xScale}
          innerHeight={innerHeight}
          tickFormat={xAxisTickFormat}
          tickOffset={15}
        />
        <text
          className="axis-label"
          x={innerWidth / 2}
          y={innerHeight + xAxisLableOffset}
          textAnchor="middle"
        >
          {xAxisLable}
        </text>
        <AxisLeft yScale={yScale} innerWidth={innerWidth} tickOffset={12} />
        <text
          className="axis-label"
          textAnchor="middle"
          transform={`translate(${-yAxisLableOffset},${
            innerHeight / 2
          }) rotate(-90)`}
        >
          {yAxisLable}
        </text>
        <Marks
          data={data}
          xScale={xScale}
          yScale={yScale}
          xValue={xValue}
          yValue={yValue}
          toolTipFormat={xAxisTickFormat}
          circleRadius={circleRadius}
        />
      </g>
    </svg>
  );
}

export default App;
