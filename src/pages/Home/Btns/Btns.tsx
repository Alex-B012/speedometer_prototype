import "./btns.scss"

function Btns() {
   return (
      <div className="btns">
         <button className="btns__btn disabled" disabled >Start</button>
         <button className="btns__btn">Normal</button>
         <button className="btns__btn disabled" disabled >10 Minutes</button>
      </div>
   )
}

export default Btns