import { useEffect, useState } from "react";
import "./speedometer.scss"
import { setInputData } from "../../../utils/utils";

interface SpeedometerProps {
   data: {
      speed: number;
      setSpeed: (value: number) => void;
   };
}

function Speedometer({ data }: SpeedometerProps) {
   const height = 70;
   const [input, setInput] = useState(setInputData(data.speed, height));
   const [index, setIndex] = useState(0);

   useEffect(() => {
      const array = [
         103.54, 103.75, 103.96, 104.17, 104.38, 104.59, 104.8, 105.01, 105.22, 105.43,
         105.64, 105.85, 106.06, 106.27, 106.48, 106.69, 106.9, 107.11, 107.32, 107.53,
         107.74, 107.95, 108.16, 108.37, 108.58, 108.79, 109.0, 109.21, 109.42, 109.63,
         109.84, 109.52, 109.2, 108.88, 108.56, 108.24, 107.92, 107.6, 107.28, 106.96,
         106.64, 106.32, 106.0, 105.68, 105.36, 105.04, 104.72, 104.4, 104.08, 103.76,
         103.44, 103.12, 102.8, 102.48, 102.16, 101.84, 101.52, 101.2, 100.88, 100.56,
         100.34
      ];

      const updateInput = () => {
         setIndex((prevIndex) => {
            const nextIndex = (prevIndex + 1) % array.length;
            setInput(setInputData(array[nextIndex], height));
            data.setSpeed(array[nextIndex]);
            console.log(index);
            return nextIndex;
         });
      };

      const intervalId = setInterval(updateInput, 2000);

      return () => {
         clearInterval(intervalId);
      };
   }, [height, index, data])



   return (
      <div className="speedometer">
         <div className="speedometer__placeholder">{input.input1}</div>
         <div className="speedometer__placeholder">{input.input2}</div>
         <div className="speedometer__placeholder">
            <div className="speedometer__number-container" style={{ marginTop: `${input.position}px` }}>
               <div className="speedometer__number">{input.input3.next_2}</div>
               <div className="speedometer__number">{input.input3.next}</div>
               <div className="speedometer__number">{input.input3.current}</div>
               <div className="speedometer__number">{input.input3.prev}</div>
               <div className="speedometer__number">{input.input3.prev_2}</div>
            </div>
         </div>

      </div>
   )
}

export default Speedometer