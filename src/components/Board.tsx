
import Tiles from "./Tiles"
interface Boards{
    onClick:(index:number)=>void,
    value: string[]
}

const Board = ({onClick, value}:Boards) => {
  return (
<div className='max-w-[500px] mx-auto h-screen content-center'>
<div className="grid grid-cols-3 gap-1">
    <Tiles onClick={()=> onClick(0)} value={value[0]}/>
    <Tiles onClick={()=> onClick(1)} value={value[1]}/>
    <Tiles onClick={()=> onClick(2)} value={value[2]}/>
    <Tiles onClick={()=> onClick(3)} value={value[3]}/>
    <Tiles onClick={()=> onClick(4)} value={value[4]}/>
    <Tiles onClick={()=> onClick(5)} value={value[5]}/>
    <Tiles onClick={()=> onClick(6)} value={value[6]}/>
    <Tiles onClick={()=> onClick(7)} value={value[7]}/>
    <Tiles onClick={()=> onClick(8)} value={value[8]}/>
</div>
</div>
  )
}

export default Board
