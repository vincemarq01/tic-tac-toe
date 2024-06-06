
type tiles = {
    onClick: ()=> void,
    value:string
    
}
const Tiles = ({onClick,value}:tiles) => {
  return (
    <div>
    <div className='gridBox text-9xl text-center'  onClick={onClick}>{value} </div>
    </div>
  )
}

export default Tiles
