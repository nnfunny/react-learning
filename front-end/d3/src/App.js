import { useCallback, useEffect, useState } from "react";
import "./App.css";

const URL =
  "https://gist.githubusercontent.com/nnfunny/3bc979d67e470dd62e7ead2968f90e3c/raw/24b338d4b43b733d2c1a6eb31ccaf936217e1d1f/data_color.csv";
const width = window.innerWidth;
const height = window.innerHeight;
const circleRadius = 30;
const intialMousePosition = { x: width / 2, y: height / 2 };

function App() {
  const [mousePosition, setMousePosition] = useState(intialMousePosition);
  useEffect(() => {
    const fetchedData = async () => {
      const response = await fetch(URL);
      const data = await response.text();
      console.log(data);
    };
    fetchedData();
  }, []);
  const handleMouseMove = useCallback((event) => {
    const { clientX, clientY } = event;
    setMousePosition({ x: clientX, y: clientY });
  },[setMousePosition]);

  return (
    <svg width={width} height={height} onMouseMove={handleMouseMove}>
      <circle cx={mousePosition.x} cy={mousePosition.y} r={circleRadius} />
    </svg>
  );
}

export default App;
