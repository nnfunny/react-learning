import { useEffect, useState } from "react";
import * as d3 from "d3";
import "./App.css";

const URL =
  "https://gist.githubusercontent.com/nnfunny/3bc979d67e470dd62e7ead2968f90e3c/raw/24b338d4b43b733d2c1a6eb31ccaf936217e1d1f/data_color.csv";
// const width = window.innerWidth;
// const height = window.innerHeight;

function App() {
  const [data, setData] = useState(null);
  useEffect(() => {
    const fetchedData = async () => {
      const data = await d3.csv(URL);
      setData(data);
      console.log(d3.csvFormat(data).length / 1024 + " kB");
      console.log(data.length + " rows");
      console.log(data.columns.length + " columns");
    };
    fetchedData();
  }, []);
  const printMessage = (data) => {
    let message = "";
    message += d3.csvFormat(data).length / 1024 + " kB ";
    message += data.length + " rows ";
    message += data.columns.length + " columns";
    return message;
  };
  return (
    <>
      <pre>Data is: {data ? printMessage(data) : "Loading"}</pre>
    </>
  );
}

export default App;
