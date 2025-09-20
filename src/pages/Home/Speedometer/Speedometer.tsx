import { useEffect, useState, useMemo } from "react";
import "./speedometer.scss";
import { setInputData } from "../../../utils/utils";

interface SpeedometerProps {
   data: {
      speed: number;
      setSpeed: (value: number) => void;
      displaySpeed: number;
   };
}

function Speedometer({ data }: SpeedometerProps) {
   const height = 70;
   const [input, setInput] = useState(setInputData(data.speed, height));
   const [index, setIndex] = useState(0);
   const [displaySpeedValue, setDisplaySpeedValue] = useState(500);

   const array = useMemo(() => [
      103.54, 103.75, 103.96, 104.17, 104.38, 104.59, 104.8, 105.01, 105.22, 105.43,
      105.64, 105.85, 106.06, 106.27, 106.48, 106.69, 106.9, 107.11, 107.32, 107.53,
      107.74, 107.95, 108.16, 108.37, 108.58, 108.79, 109.0, 109.21, 109.42, 109.63,
      109.84, 109.52, 109.2, 108.88, 108.56, 108.24, 107.92, 107.6, 107.28, 106.96,
      106.64, 106.32, 106.0, 105.68, 105.36, 105.04, 104.72, 104.4, 104.08, 103.76,
      103.44, 103.12, 102.8, 102.48, 102.16, 101.84, 101.52, 101.2, 100.88, 100.56,
      100.34, 100.42, 100.59, 100.76, 100.93, 101.10, 101.27, 101.44, 101.81, 102.0,
      102.17, 102.34, 102.51, 102.68, 102.85, 103.02, 103.19, 103.36
   ], []);

   if (index === -1) console.log(index);

   useEffect(() => {
      const updateInput = () => {
         setIndex((prevIndex) => {
            const nextIndex = (prevIndex + 1) % array.length;
            return nextIndex;
         });
      };

      const intervalId = setInterval(updateInput, displaySpeedValue);

      return () => {
         clearInterval(intervalId);
      };
   }, [displaySpeedValue, array]);

   useEffect(() => {
      const nextInput = setInputData(array[index], height);
      setInput(nextInput);
      data.setSpeed(array[index]);
   }, [index, data, height, array]);

   useEffect(() => {
      if (data.displaySpeed === 0) {
         setDisplaySpeedValue(1500);
      } else if (data.displaySpeed === 1) {
         setDisplaySpeedValue(400);
      } else {
         setDisplaySpeedValue(250);
      }
   }, [data.displaySpeed]);

   return (
      <div className="speedometer">
         <div className="speedometer__placeholder">{input.input1}</div>
         <div className="speedometer__placeholder">{input.input2}</div>
         <div className="speedometer__placeholder">
            <div className="speedometer__number-container" style={{ marginTop: `${input.position}px` }}>
               <div className="speedometer__number">{input.input3.next}</div>
               <div className="speedometer__number">{input.input3.current}</div>
               <div className="speedometer__number">{input.input3.prev}</div>
            </div>
         </div>
      </div>
   );
}

export default Speedometer;
