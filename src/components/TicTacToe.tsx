
import Board from './Board'
import { useState } from 'react'

const TicTacToe = () => {
    const [value, setValue] = useState("")
    const handleClick = (index:number)=>{
        console.log(index, "index")
        if (index === 0){
           setValue("X");
        }
    
    }
    console.log(setValue, "test1");
  return (
    <div>
      <Board onClick={handleClick} value={value}/>
    
    </div>
  
  )
}

export default TicTacToe
