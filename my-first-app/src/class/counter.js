import React from "react";
class CounterC extends React.Component{
    
    constructor(props){
        super(props);
        //local variable -> define state variable
        this.state = {
            count:0
        }
    }
     handleIncrement = () => {
        console.log(this.state.count);
        this.state.count = this.state.count + 1; //
    }
     handleDecrement = () => {
      //  setCount(prevCount => prevCount - 1); //
      this.state.count = this.state.count - 1; //
    }
    render(){
        return(
              <div>
            <br/>
            <h1> Counter Class Component</h1>
            <h2>Count : {this.state.count}</h2>
            <button onClick={this.handleIncrement}>+</button> <br/>
            <button onClick={this.handleDecrement}>-</button>
            <hr/>
        </div>
        )
    }
}

export default CounterC;