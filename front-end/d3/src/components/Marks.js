const Marks = ({ data, yScale, xScale, xValue, yValue }) => {
  return (
    <>
      {data.map((d, index) => (
        <rect
          key={index}
          x={0}
          y={yScale(yValue(d))}
          width={xScale(xValue(d))}
          height={yScale.bandwidth()}
        />
      ))}
    </>
  );
};

export default Marks;
