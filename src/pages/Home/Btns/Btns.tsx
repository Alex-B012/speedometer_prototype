import { useState } from "react";
import "./btns.scss"

interface BtnsProps {
   data: {
      displaySpeed: number;
      setDisplaySpeed: (value: number) => void;
   };
}

function Btns({ data }: BtnsProps) {
   const [speedName, setSpeedName] = useState("Normal");
   const handleSpeed = () => {
      if (data.displaySpeed === 0) {
         setSpeedName("Normal");
         data.setDisplaySpeed(1);
      } else if (data.displaySpeed === 1) {
         setSpeedName("Fast");
         data.setDisplaySpeed(2);
      } else {
         setSpeedName("Slow");
         data.setDisplaySpeed(0);
      }
   }

   return (
      <div className="btns">
         {/* <button className="btns__btn disabled" disabled >Start</button> */}
         <button className="btns__btn" onClick={handleSpeed}>{speedName}</button>
         {/* <button className="btns__btn disabled" disabled >10 Minutes</button> */}
      </div>
   )
}

export default Btns