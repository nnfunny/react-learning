const AxisLeft = ({ yScale }) => {
  return (
    <>
      {yScale.domain().map((tick, index) => (
        <text
          key={index}
          style={{ textAnchor: "end" }}
          dy="0.32em"
          x="-3"
          y={(0, yScale(tick) + yScale.bandwidth() / 2)}
        >
          {tick}
        </text>
      ))}
    </>
  );
};

export default AxisLeft;
