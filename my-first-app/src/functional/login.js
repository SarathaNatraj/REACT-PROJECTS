import { useState } from "react";

const Login = () => {
    const[userName,setUserName]=useState('');
    const[password,setPassword]=useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("inside submit : "+userName, password);
    }
    const handleChangeUser = (e) => {
        setUserName(e.target.value);
    }
    const handleChangePassword = (e) => {
         setPassword(e.target.value);
    }
    

    return(
        <div> 
            <br/>
            <br/>
            <h1> Login </h1>
            <form onSubmit={handleSubmit}>
            <label>
                UserName:
            </label>
            <input type="text" name="userName" onChange={handleChangeUser} /> <br/>
            <label>
                Password:
            </label>
            <input type="text" name="password" onChange={handleChangePassword}  /> <br/>
            <button>
                Login
            </button>
            <button >Cancel</button> 
            </form>
        </div>
    )

}
export default Login;