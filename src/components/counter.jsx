import { useState } from "react"
function Counter(){
   const [number,setNumber]=useState(0);
    function handleClick(){
    
    // setTimeout(()=>setNumber(number=>number+1),2000)
    setNumber(number=>number+1)
    // setNumber(number=>number+1)
    // setNumber(number=>number+1)
   console.log(number)
   
    } 
return(
    <>
   <h1 style={{color:"white"}}> {number} </h1>
    <button onClick={handleClick}>play</button>

    </>
)
}

export default Counter;