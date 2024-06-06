
type tiles = {
    onClick: ()=> void,
    value:string
    
}
const Tiles = ({onClick,value}:tiles) => {
  return (
    <div>
    <div className=' gridBox text-9xl text-center rounded-lg text-teal-300'  onClick={onClick}>{value} </div>

    </div>
  )
}

export default Tiles
