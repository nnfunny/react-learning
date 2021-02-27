const AxisBottom = ({ xScale, innerHeight }) => {
  return (
    <>
      {xScale.ticks().map((tick, index) => (
        <g key={index} transform={`translate(${xScale(tick)},0)`}>
          <line x1={0} y1={0} x2={0} y2={innerHeight} stroke="black" />
          <text
            y={innerHeight + 3}
            dy="0.71em"
            style={{ textAnchor: "middle" }}
          >
            {tick}
          </text>
        </g>
      ))}{" "}
    </>
  );
};

export default AxisBottom;
