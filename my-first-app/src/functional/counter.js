import { useState } from "react";
const Counter = () => {
    //state variable
    const[count,setCount] = useState(0); 
    const handleIncrement = () => {
        console.log(count);
        
     setCount(prevCount => prevCount + 1); //
    }
    const handleDecrement = () => {
        setCount(prevCount => prevCount - 1); //
        
    }
    return(
        <div>
            <br/>
            <h1> functional Counter Component</h1>
            <h2>Count : {count}</h2>
            <button onClick={handleIncrement}>+</button> <br/>
            <button onClick={handleDecrement}>-</button>
            <hr/>
        </div>
    );


}

export default Counter;