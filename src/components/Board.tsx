import Tiles from "./Tiles"
type Boards ={
    onClick:(index:number)=>void,
    value: string[]
}

const Board = ({onClick, value}:Boards) => {
  return (


<div className='h-[350px] w-[350px] md:w-[500px] md:h-[530px] mx-auto '>
<div className="grid grid-cols-3 md:grid grid-cols-3 gap-5 bg-emerald-600 p-2 rounded-lg">
{/* <div className="flex flex-col w-[50px]"> */}
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
