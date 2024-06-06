
import Tiles from "./Tiles"
type Boards ={
    onClick:(index:number)=>void,
    value: string[]
}

const Board = ({onClick, value}:Boards) => {
  return (

<div className='max-w-[500px] max-h-[530px] mx-auto h-screen align-center p-5 rounded-lg bg-emerald-600'>
<div className="grid grid-cols-3 gap-5">
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
