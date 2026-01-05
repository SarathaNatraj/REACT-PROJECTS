import { useState } from "react";
import EProduct from "./eproduct";
function ProductDashboard () {

    const[products,setProducts] = useState([
        {id:1, name:"Laptops", count:10},
        {id:2, name:"Mobiles", count:50},
        {id:3, name:"Pencils", count:100},
        
        
    ]);

    return(
        <div>
            <h1> Product UserDashboard</h1>
            <h2> Welcome to Ecommerce App</h2>
            {products.map((product,index) => (
                <EProduct key={index} data = {product} />

            ))}
        </div>
    )
}

export default ProductDashboard;