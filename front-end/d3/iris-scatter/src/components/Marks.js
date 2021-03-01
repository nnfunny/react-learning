const Marks = ({ data, yScale, xScale, xValue, yValue, toolTipFormat, circleRadius }) => {
  return (
    <>
      {data.map((d, index) => (
        <circle
          className="mark"
          key={index}
          cx={xScale(xValue(d))}
          cy={yScale(yValue(d))}
          r={circleRadius}
        >
          <title>{toolTipFormat(xValue(d))}</title>
        </circle>
      ))}
    </>
  );
};

export default Marks;
