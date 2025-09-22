import { useEffect, useRef, useState } from "react";
import "./speedometer.scss";
import { convertObjToNumber, createNumber, prepareObjToConvert, setInputData } from "../../../utils/utils";

const HEIGHT = 70;
const MIN = 100.00;
const MAX = 109.99;

interface SpeedometerProps {
   data: {
      speed: number;
      setSpeed: (value: number) => void;
      displaySpeed: number;
   };
}

function Speedometer({ data }: SpeedometerProps) {
   const actionRef = useRef(1);
   const [input, setInput] = useState(setInputData(data.speed, HEIGHT));
   const [displaySpeedValue, setDisplaySpeedValue] = useState(500);

   useEffect(() => {
      const updateInput = () => {
         const delta = 0.05;
         let newNumber = { newNumber: -1, newAction: actionRef.current };

         if (input.position === undefined) throw new Error("input.position is required");
         let number = convertObjToNumber(
            prepareObjToConvert(input.input1, input.input2, input.input3.current, input.position),
            HEIGHT
         )

         if (number === undefined) throw new Error("number variable is undefined");
         newNumber = createNumber(number, actionRef.current, delta, MIN, MAX);
         actionRef.current = newNumber.newAction;

         setInput(setInputData(newNumber.newNumber, HEIGHT));
      };

      const intervalId = setInterval(updateInput, displaySpeedValue);

      return () => {
         clearInterval(intervalId);
      };
   }, [displaySpeedValue, input]);

   useEffect(() => {
      if (input.position === undefined) throw new Error("input.position is required");

      data.setSpeed(convertObjToNumber(
         prepareObjToConvert(input.input1, input.input2, input.input3.current, input.position),
         HEIGHT
      ));
   }, [data, input]);

   useEffect(() => {
      if (data.displaySpeed === 0) {
         setDisplaySpeedValue(300);
      } else if (data.displaySpeed === 1) {
         setDisplaySpeedValue(35);
      } else {
         setDisplaySpeedValue(20);
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
