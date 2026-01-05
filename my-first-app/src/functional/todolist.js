import { useState } from "react";

function TodoList () {
    const[userInput,setUserInput] = useState('');
    const[todos,setTodos] = useState([]);

    const handleClick = () => {
        if(userInput.trim () === "" ) return;

        setTodos([...todos,userInput]);
        setUserInput("");

    }
    const handleRemoveTodo = (idd) => {
        console.log(todos,idd); //[test,test1, demo] , [0,1,2] => 1[removed]
        const updatedTodos = todos.filter((_,index) => index !== idd); // [test,demo]
        console.log(updatedTodos);
        setTodos(updatedTodos);
    }
    return(
        <div>
            <h1> Todo List App</h1>
            <input type="text" value={userInput} onChange={(e) => setUserInput(e.target.value)} />
            <button onClick={handleClick}> Add Todo</button>

            <h2>List of Todos</h2>
            <ul>
                {todos.map((todo,index)=>(
                    <li key={index}>{todo} - <button onClick={()=>handleRemoveTodo(index)}>x</button></li> 
                ))}
            </ul>

        </div>
    )
}
export default TodoList;