import "./home.scss"
import Speedometer from "./Speedometer/Speedometer";
import Btns from "./Btns/Btns";
import Speed from "./Speed/Speed";
import { useState } from "react";

function Home() {
   const [speed, setSpeed] = useState(103.99);
   const [displaySpeed, setDisplaySpeed] = useState(1);
   return (
      <div className="home">
         <h1 className="home__title">Speedometer</h1>
         <Speedometer data={{
            speed: speed,
            setSpeed: setSpeed,
            displaySpeed: displaySpeed,
         }} />
         <Speed speed={speed} />
         <Btns data={{
            displaySpeed: displaySpeed,
            setDisplaySpeed: setDisplaySpeed
         }} />
      </div>
   )
}

export default Home