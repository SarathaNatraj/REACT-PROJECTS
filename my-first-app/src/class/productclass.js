import React from "react";
class ProductC extends React.Component{
        
    constructor(props){
        super(props);
    }
    render(){
        return(
            <div>
                <h1> From Class Component</h1>
            <p>Name: {this.props.name}</p>
            <p>Count : {this.props.count}</p>
            <hr/>
        </div>
        )
    }


}
export default ProductC;