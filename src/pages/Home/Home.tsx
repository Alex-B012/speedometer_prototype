import "./home.scss"
import Speedometer from "./Speedometer/Speedometer";
import Btns from "./Btns/Btns";
import Speed from "./Speed/Speed";
import { useState } from "react";

function Home() {
   const [speed, setSpeed] = useState(103.99);
   return (
      <div className="home">
         <h1 className="home__title">Speedometer</h1>
         <Speedometer data={{ speed: speed, setSpeed: setSpeed }} />
         <Speed speed={speed} />
         <Btns />
      </div>
   )
}

export default Home