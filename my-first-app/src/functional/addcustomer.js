import { useState } from "react";

const AddCustomer = () => {
    const[name,setName] = useState('');
    const[email,setEmail] = useState('');
    const[address,setAddress] = useState('');

const handleSubmit = (e) => {
        e.preventDefault();
        console.log("inside submit : "+name, email, address);
    }
    const handleChangeName = (e) => {
        setName(e.target.value);
    }
    const handleChangeEmail = (e) => {
         setEmail(e.target.value);
    }
const handleChangeAddress = (e) => {
         setAddress(e.target.value);
    }

    return(
          <div> 
            <br/>
            <br/>
            <h1> Add Customer </h1>
            <form onSubmit={handleSubmit}>
            <label>
                Name:
            </label>
            <input type="text" name="name" onChange={handleChangeName} /> <br/>
            <label>
                Email:
            </label>
            <input type="text" name="email" onChange={handleChangeEmail}  /> <br/>
             <label>
                Address:
            </label>
            <input type="text" name="address" onChange={handleChangeAddress}  /> <br/>
            <button>
                Add Customer
            </button>
            <button >Cancel</button> 
            </form>
        </div>
    )



}
export default AddCustomer;