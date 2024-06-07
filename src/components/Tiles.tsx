
type tiles = {
    onClick: ()=> void,
    value:string
}
const Tiles = ({onClick,value}:tiles) => {
  return (
    <div>
    <div className='flex justify-center gridBox h-[93px] text-7xl md:h-[150px] md:text-9xl  rounded-lg text-teal-300'  onClick={onClick}>{value} </div>

    </div>
  )
}

export default Tiles
