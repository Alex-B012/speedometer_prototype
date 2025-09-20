import './speed.scss'

interface SpeedProps {
   speed: number;
}

function Speed({ speed }: SpeedProps) {
   return (
      <div className='speed'> {speed} km/h</div>
   )
}

export default Speed