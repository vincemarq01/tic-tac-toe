
import Board from './Board'
import { useEffect, useState } from 'react'

const TicTacToe = () => {
    const [value, setValue] = useState<string[]>([])
    const [player, setPlayer] = useState("X")
    const [winner, setWinner] = useState<string>('');
    
    const checkwinner=()=>{
        const winnercode = [
            [0,1,2],
            [3,4,5],
            [6,7,8],
            [0,3,6],
            [1,4,7],
            [2,5,8],
            [0,4,8],
            [2,4,6],
        ]

        for(let i=0; i<winnercode.length; i++){
            const [a,b,c] = winnercode[i];
            console.log(a,b,c);
            if(value[a] !== null && value[a] === value[b] && value[a] === value[c]){
            return value[a]
            }
     }
            return null;
    }
 

    const handleClick = (index:number)=>{
        const tilesnumber = [...value];
        tilesnumber[index] = player;
        setValue(tilesnumber);
        setPlayer(player === "X"?"O":"X")
        console.log( tilesnumber[index] , index);
    }

    useEffect(()=>{
        const newWinner = checkwinner();
        if(newWinner){
            setWinner(newWinner)
        }
    
    },[value])

  
  return (
    <div className='grid grid-rows align-center h-screen bg-emerald-800'>
    <div className='h-[150px]'>
    {winner ? <h1 className='text-9xl mb-[100px] text-bold text-center text-white'>Winner</h1> :<h1></h1>}
    </div>
    <div>
    <Board onClick={handleClick} value={value}/>
    </div>
    </div>
  
  )
}

export default TicTacToe
